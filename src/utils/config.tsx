// Configuration for custom domain support

export const config = {
  // You can change this to your custom domain
  // Example: 'https://api.legacyscript.com'
  // Default: Uses Supabase subdomain
  customApiDomain: null as string | null,
  
  // Your custom frontend domain (for CORS)
  // Example: 'https://legacyscript.com'
  customFrontendDomain: null as string | null,
};

// Get the API base URL
export function getApiBaseUrl(projectId: string): string {
  if (config.customApiDomain) {
    return config.customApiDomain;
  }
  return `https://${projectId}.supabase.co/functions/v1/make-server-044ccb36`;
}

// Get the frontend URL (for redirects, emails, etc.)
export function getFrontendUrl(): string {
  if (config.customFrontendDomain) {
    return config.customFrontendDomain;
  }
  
  // Auto-detect based on current location
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  
  return 'http://localhost:5173'; // Default for development
}

// Domain configuration instructions
export const DOMAIN_SETUP_INSTRUCTIONS = {
  frontend: {
    title: "Frontend Domain Setup",
    steps: [
      "1. Deploy to Vercel/Netlify/Your hosting",
      "2. In hosting dashboard, add your custom domain",
      "3. Configure DNS records (usually A or CNAME)",
      "4. Update config.customFrontendDomain above",
    ]
  },
  backend: {
    title: "Backend API Domain Setup",
    steps: [
      "1. Set up a reverse proxy (Cloudflare/nginx)",
      "2. Point proxy to your Supabase functions URL",
      "3. Configure SSL certificate",
      "4. Update config.customApiDomain above",
    ],
    note: "Most users can keep using the default Supabase domain"
  }
};
