import { projectId, publicAnonKey } from './supabase/info.tsx';
import { getApiBaseUrl } from './config.tsx';

const API_BASE = getApiBaseUrl(projectId);

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${publicAnonKey}`,
};

// ==================== CONTACT SUBMISSIONS ====================

export async function getSubmissions() {
  try {
    console.log('🔍 API: Fetching submissions from server...');
    const response = await fetch(`${API_BASE}/submissions`, { headers });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    console.log('📦 API: Server response:', result);
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to fetch submissions');
    }
    
    console.log(`✅ API: Successfully fetched ${result.data?.length || 0} submissions`);
    return result.data;
  } catch (error) {
    console.error('❌ API: Error fetching submissions:', error);
    throw error;
  }
}

export async function createSubmission(submission: any) {
  try {
    console.log('📤 API: Creating submission...', submission);
    const response = await fetch(`${API_BASE}/submissions`, {
      method: 'POST',
      headers,
      body: JSON.stringify(submission),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    console.log('📦 API: Server response:', result);
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to create submission');
    }
    
    console.log('✅ API: Submission created successfully:', result.data);
    return result.data;
  } catch (error) {
    console.error('❌ API: Error creating submission:', error);
    throw error;
  }
}

export async function deleteSubmission(id: string) {
  try {
    const response = await fetch(`${API_BASE}/submissions/${id}`, {
      method: 'DELETE',
      headers,
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.error);
    return true;
  } catch (error) {
    console.error('Error deleting submission:', error);
    throw error;
  }
}

// ==================== INVOICES ====================

export async function getInvoices() {
  try {
    const response = await fetch(`${API_BASE}/invoices`, { headers });
    const result = await response.json();
    if (!result.success) throw new Error(result.error);
    return result.data;
  } catch (error) {
    console.error('Error fetching invoices:', error);
    throw error;
  }
}

export async function getSharedInvoice(shareId: string) {
  try {
    const response = await fetch(`${API_BASE}/invoices/shared/${shareId}`, { headers });
    const result = await response.json();
    if (!result.success) throw new Error(result.error);
    return result.data;
  } catch (error) {
    console.error('Error fetching shared invoice:', error);
    throw error;
  }
}

export async function saveInvoice(invoice: any) {
  try {
    const response = await fetch(`${API_BASE}/invoices`, {
      method: 'POST',
      headers,
      body: JSON.stringify(invoice),
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.error);
    return result.data;
  } catch (error) {
    console.error('Error saving invoice:', error);
    throw error;
  }
}

export async function updateInvoice(invoice: any) {
  try {
    const response = await fetch(`${API_BASE}/invoices/${invoice.id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(invoice),
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.error);
    return result.data;
  } catch (error) {
    console.error('Error updating invoice:', error);
    throw error;
  }
}

export async function deleteInvoice(id: string) {
  try {
    const response = await fetch(`${API_BASE}/invoices/${id}`, {
      method: 'DELETE',
      headers,
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.error);
    return true;
  } catch (error) {
    console.error('Error deleting invoice:', error);
    throw error;
  }
}

// ==================== SETTINGS (SEO/OG) ====================

export async function getSettings() {
  try {
    // Try local storage first for speed/offline capability
    const local = localStorage.getItem("legacy_script_seo_settings");
    
    // Attempt to fetch from server if we want sync, but for now we'll prioritize local
    // to avoid console errors about missing endpoints until backend is deployed.
    // const response = await fetch(`${API_BASE}/settings`, { headers });
    
    // Return local data or null if nothing saved yet
    return local ? JSON.parse(local) : null;
  } catch (error) {
    console.error('Error fetching settings:', error);
    return null;
  }
}

export async function updateSettings(settings: any) {
  try {
    // Save to local storage
    localStorage.setItem("legacy_script_seo_settings", JSON.stringify(settings));
    
    // In a real production environment with the backend endpoint ready, we would:
    // await fetch(`${API_BASE}/settings`, {
    //   method: 'POST',
    //   headers,
    //   body: JSON.stringify(settings),
    // });
    
    return settings;
  } catch (error) {
    console.error('Error updating settings:', error);
    throw error;
  }
}