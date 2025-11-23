import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-044ccb36/health", (c) => {
  return c.json({ status: "ok" });
});

// Database health check endpoint - verify DB connection
app.get("/make-server-044ccb36/db-health", async (c) => {
  try {
    console.log("=== DATABASE HEALTH CHECK ===");
    
    // Try to read all submissions
    const submissions = await kv.getByPrefix("submission:");
    const invoices = await kv.getByPrefix("invoice:");
    
    console.log(`Database connected successfully`);
    console.log(`Total submissions in DB: ${submissions?.length || 0}`);
    console.log(`Total invoices in DB: ${invoices?.length || 0}`);
    
    return c.json({ 
      status: "ok",
      database: "connected",
      submissions_count: submissions?.length || 0,
      invoices_count: invoices?.length || 0,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error("Database health check failed:", error);
    return c.json({ 
      status: "error",
      database: "disconnected",
      error: String(error)
    }, 500);
  }
});

// ==================== CONTACT SUBMISSIONS ====================

// Get all contact submissions
app.get("/make-server-044ccb36/submissions", async (c) => {
  try {
    console.log("=== FETCHING SUBMISSIONS ===");
    const submissions = await kv.getByPrefix("submission:");
    console.log(`Submissions from DB (length: ${submissions?.length || 0}):`, JSON.stringify(submissions));
    
    // getByPrefix returns an array of values directly, not objects with key/value
    // Filter out any invalid entries
    const validSubmissions = Array.isArray(submissions)
      ? submissions.filter((s: any) => {
          const isValid = s && s.id && s.timestamp;
          if (!isValid) {
            console.log(`Invalid submission found:`, s);
          }
          return isValid;
        })
      : [];
    
    console.log(`Number of valid submissions after filtering: ${validSubmissions.length}`);
    
    // Sort by timestamp, newest first
    validSubmissions.sort((a: any, b: any) => {
      const dateA = a.timestamp ? new Date(a.timestamp).getTime() : 0;
      const dateB = b.timestamp ? new Date(b.timestamp).getTime() : 0;
      return dateB - dateA;
    });
    
    console.log(`Returning ${validSubmissions.length} submissions`);
    return c.json({ success: true, data: validSubmissions });
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Create new contact submission
app.post("/make-server-044ccb36/submissions", async (c) => {
  try {
    console.log("=== CREATING SUBMISSION ===");
    const body = await c.req.json();
    console.log(`Received submission data:`, body);
    
    const submission = {
      id: body.id || Date.now().toString(),
      name: body.name,
      email: body.email,
      phone: body.phone || "Not provided",
      message: body.message,
      timestamp: body.timestamp || new Date().toISOString(),
    };
    
    console.log(`Saving submission with key: submission:${submission.id}`);
    
    await kv.set(`submission:${submission.id}`, submission);
    
    console.log(`✅ Submission saved successfully: ${submission.id}`);
    
    // Verify it was saved by reading it back
    const saved = await kv.get(`submission:${submission.id}`);
    console.log(`Verification - Retrieved submission:`, saved);
    
    return c.json({ success: true, data: submission });
  } catch (error) {
    console.error("❌ Error creating submission:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Delete contact submission
app.delete("/make-server-044ccb36/submissions/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await kv.del(`submission:${id}`);
    return c.json({ success: true });
  } catch (error) {
    console.error("Error deleting submission:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// ==================== INVOICES ====================

// Get all invoices
app.get("/make-server-044ccb36/invoices", async (c) => {
  try {
    console.log("=== FETCHING INVOICES ===");
    const invoices = await kv.getByPrefix("invoice:");
    console.log(`Invoices from DB (length: ${invoices?.length || 0})`);
    
    // getByPrefix returns an array of values directly, not objects with key/value
    // Filter out any invalid entries
    const validInvoices = Array.isArray(invoices)
      ? invoices.filter((inv: any) => {
          const isValid = inv && inv.id && inv.createdAt;
          if (!isValid) {
            console.log(`Invalid invoice found:`, inv);
          }
          return isValid;
        })
      : [];
    
    console.log(`Number of valid invoices after filtering: ${validInvoices.length}`);
    
    // Sort by createdAt, newest first
    validInvoices.sort((a: any, b: any) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA;
    });
    
    console.log(`Returning ${validInvoices.length} invoices`);
    return c.json({ success: true, data: validInvoices });
  } catch (error) {
    console.error("Error fetching invoices:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Get invoice by share ID
app.get("/make-server-044ccb36/invoices/shared/:shareId", async (c) => {
  try {
    const shareId = c.req.param("shareId");
    console.log(`=== FETCHING SHARED INVOICE: ${shareId} ===`);
    const invoices = await kv.getByPrefix("invoice:");
    
    // getByPrefix returns values directly - find invoice by shareId
    const invoice = invoices.find((inv: any) => 
      inv && inv.shareId === shareId
    );
    
    if (!invoice) {
      console.log(`Invoice not found for shareId: ${shareId}`);
      return c.json({ success: false, error: "Invoice not found" }, 404);
    }
    
    console.log(`Found shared invoice: ${invoice.id}`);
    return c.json({ success: true, data: invoice });
  } catch (error) {
    console.error("Error fetching shared invoice:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Create or update invoice
app.post("/make-server-044ccb36/invoices", async (c) => {
  try {
    const invoice = await c.req.json();
    
    // Validate required fields
    if (!invoice.id) {
      return c.json({ success: false, error: "Invoice ID is required" }, 400);
    }
    
    // Ensure createdAt is set
    if (!invoice.createdAt) {
      invoice.createdAt = new Date().toISOString();
    }
    
    await kv.set(`invoice:${invoice.id}`, invoice);
    console.log(`Invoice created/updated: ${invoice.id}`);
    return c.json({ success: true, data: invoice });
  } catch (error) {
    console.error("Error saving invoice:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Update invoice (PUT endpoint)
app.put("/make-server-044ccb36/invoices/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const invoice = await c.req.json();
    
    // Ensure the ID in the body matches the URL parameter
    invoice.id = id;
    
    // Preserve createdAt or set it if missing
    if (!invoice.createdAt) {
      invoice.createdAt = new Date().toISOString();
    }
    
    await kv.set(`invoice:${id}`, invoice);
    console.log(`Invoice updated: ${id}`);
    return c.json({ success: true, data: invoice });
  } catch (error) {
    console.error("Error updating invoice:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Delete invoice
app.delete("/make-server-044ccb36/invoices/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await kv.del(`invoice:${id}`);
    console.log(`Invoice deleted: ${id}`);
    return c.json({ success: true });
  } catch (error) {
    console.error("Error deleting invoice:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

Deno.serve(app.fetch);