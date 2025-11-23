import { useState } from "react";
import { motion } from "motion/react";
import { Database, CheckCircle, XCircle, RefreshCw } from "lucide-react";
import { Button } from "./ui/button";
import { projectId, publicAnonKey } from "../utils/supabase/info.tsx";

interface DBHealth {
  status: string;
  database: string;
  submissions_count: number;
  invoices_count: number;
  timestamp: string;
}

export function DatabaseStatus() {
  const [health, setHealth] = useState<DBHealth | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkHealth = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-044ccb36`;
      const response = await fetch(`${API_BASE}/db-health`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Database health check result:", data);
      setHealth(data);
    } catch (err) {
      console.error("Database health check failed:", err);
      setError(String(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative mb-6"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl blur-lg" />
      <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white">Database Connection</h3>
              <p className="text-sm text-gray-400">Verify Supabase connection</p>
            </div>
          </div>
          <Button
            onClick={checkHealth}
            disabled={isLoading}
            className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            {isLoading ? 'Checking...' : 'Check Status'}
          </Button>
        </div>

        {health && (
          <div className="space-y-3 mt-4">
            <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
              <span className="text-gray-400">Status</span>
              <div className="flex items-center gap-2">
                {health.database === "connected" ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">Connected</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-red-400" />
                    <span className="text-red-400">Disconnected</span>
                  </>
                )}
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
              <span className="text-gray-400">Submissions in DB</span>
              <span className="text-white">{health.submissions_count}</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
              <span className="text-gray-400">Invoices in DB</span>
              <span className="text-white">{health.invoices_count}</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
              <span className="text-gray-400">Last Check</span>
              <span className="text-white text-sm">
                {new Date(health.timestamp).toLocaleTimeString()}
              </span>
            </div>
          </div>
        )}

        {error && (
          <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-400" />
              <p className="text-red-400 text-sm">Error: {error}</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
