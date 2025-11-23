import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Save, Image as ImageIcon, Globe, RefreshCw, Upload, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { getSettings, updateSettings } from "../utils/api.tsx";
import { toast } from "sonner@2.0.3";
import { supabase } from "../utils/supabase/client";

interface SEOSettingsData {
  title: string;
  description: string;
  ogImage: string;
  twitterHandle: string;
}

interface SEOSettingsProps {
  onBack: () => void;
}

export function SEOSettings({ onBack }: SEOSettingsProps) {
  const [settings, setSettings] = useState<SEOSettingsData>({
    title: "Legacy Script | Enterprise AI & Software Solutions",
    description: "Architecting the Future of Enterprise AI. We build scalable AI and software solutions for visionary companies.",
    ogImage: "https://opengraph.b-cdn.net/production/images/2284c207-c54f-41a2-927f-fd45775345ea.png?token=I00gddegA3ZcBKKZwlExpKNPQL4ZAxmDchaTwUxR7D8&height=630&width=1200&expires=33299613555",
    twitterHandle: "@legacyscript",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    setIsLoading(true);
    try {
      const data = await getSettings();
      if (data) {
        setSettings(prev => ({ ...prev, ...data }));
      }
    } catch (error) {
      console.error("Failed to load settings:", error);
      // toast.error("Failed to load current settings");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await updateSettings(settings);
      toast.success("SEO settings updated successfully");
    } catch (error) {
      console.error("Failed to save settings:", error);
      toast.error("Failed to save settings");
    } finally {
      setIsSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Basic validation
    if (!file.type.startsWith('image/')) {
      toast.error("Please upload an image file");
      return;
    }
    
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      toast.error("File size too large (max 5MB)");
      return;
    }

    setIsUploading(true);
    setUploadError(null);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `og-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${fileName}`;

      // Upload to 'public' bucket
      const { error: uploadError } = await supabase.storage
        .from('public')
        .upload(filePath, file);

      if (uploadError) {
        console.error("Supabase Storage Error:", uploadError);
        
        if (uploadError.message.includes("Bucket not found")) {
           setUploadError("MISSING_BUCKET");
           throw new Error("Storage bucket missing");
        }
        
        if (uploadError.message.includes("row-level security")) {
             throw new Error("Permission denied. Please check Supabase storage policies.");
        }
        throw uploadError;
      }

      // Get Public URL
      const { data } = supabase.storage
        .from('public')
        .getPublicUrl(filePath);

      setSettings(prev => ({ ...prev, ogImage: data.publicUrl }));
      toast.success("Image uploaded successfully");
    } catch (error: any) {
      console.error("Upload error:", error);
      if (error.message !== "Storage bucket missing") {
         toast.error(error.message || "Failed to upload image");
      }
    } finally {
      setIsUploading(false);
      // Reset input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 max-w-4xl"
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">SEO & Social Sharing</h1>
          <p className="text-gray-400">Manage how your site appears on search engines and social media.</p>
        </div>
        <Button onClick={onBack} variant="outline" className="border-white/10 hover:bg-white/10">
          Back to Dashboard
        </Button>
      </div>

      {uploadError === "MISSING_BUCKET" && (
        <div className="mb-6 p-4 bg-red-900/20 border border-red-500/50 rounded-xl">
          <h3 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
             <RefreshCw className="w-4 h-4" />
             Setup Required: Storage Bucket Missing
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            To enable image uploads, you need to initialize the storage bucket in your Supabase project. 
            Run the following SQL in your Supabase SQL Editor:
          </p>
          <div className="bg-slate-950 p-3 rounded-lg border border-white/10 font-mono text-xs text-blue-300 overflow-x-auto relative group">
            <pre>
{`insert into storage.buckets (id, name, public) values ('public', 'public', true);
create policy "Public Access" on storage.objects for select using ( bucket_id = 'public' );
create policy "Public Upload" on storage.objects for insert with check ( bucket_id = 'public' );`}
            </pre>
            <Button 
              size="sm" 
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => {
                 const sql = `insert into storage.buckets (id, name, public) values ('public', 'public', true);
create policy "Public Access" on storage.objects for select using ( bucket_id = 'public' );
create policy "Public Upload" on storage.objects for insert with check ( bucket_id = 'public' );`;
                 navigator.clipboard.writeText(sql);
                 toast.success("SQL copied to clipboard!");
              }}
            >
              Copy SQL
            </Button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="space-y-6">
          <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-xl text-white mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-400" />
              Global Metadata
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Site Title</label>
                <Input
                  name="title"
                  value={settings.title}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-white/10 text-white"
                  placeholder="Legacy Script | ..."
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-1">Meta Description</label>
                <Textarea
                  name="description"
                  value={settings.description}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-white/10 text-white h-24"
                  placeholder="A brief description of your site..."
                />
                <p className="text-xs text-gray-500 mt-1 text-right">{settings.description.length} / 160 characters</p>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Twitter Handle</label>
                <Input
                  name="twitterHandle"
                  value={settings.twitterHandle}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-white/10 text-white"
                  placeholder="@username"
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-xl text-white mb-4 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-purple-400" />
              Open Graph Image
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Image URL or Upload</label>
                <div className="flex flex-col gap-3">
                   <div className="flex gap-2">
                    <Input
                        name="ogImage"
                        value={settings.ogImage}
                        onChange={handleChange}
                        className="bg-slate-800/50 border-white/10 text-white flex-1"
                        placeholder="https://..."
                    />
                    <Button size="icon" variant="outline" onClick={() => window.open(settings.ogImage, '_blank')}>
                        <ImageIcon className="w-4 h-4" />
                    </Button>
                   </div>
                   
                   <div className="relative">
                     <input
                       type="file"
                       ref={fileInputRef}
                       onChange={handleFileUpload}
                       className="hidden"
                       accept="image/*"
                     />
                     <Button 
                       type="button" 
                       variant="secondary" 
                       className="w-full bg-slate-800 hover:bg-slate-700 text-gray-300"
                       onClick={() => fileInputRef.current?.click()}
                       disabled={isUploading}
                     >
                       {isUploading ? (
                         <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                       ) : (
                         <Upload className="w-4 h-4 mr-2" />
                       )}
                       {isUploading ? "Uploading..." : "Upload Image to App"}
                     </Button>
                   </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Recommended dimensions: 1200x630 pixels. Max 5MB.
                </p>
              </div>
            </div>
          </div>

          <Button 
            onClick={handleSave} 
            disabled={isSaving}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 text-lg"
          >
            {isSaving ? <RefreshCw className="w-5 h-5 animate-spin mr-2" /> : <Save className="w-5 h-5 mr-2" />}
            Save Changes
          </Button>
        </div>

        {/* Preview Section */}
        <div className="space-y-6">
          <h2 className="text-xl text-white">Preview</h2>
          
          {/* Facebook / LinkedIn Preview */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-md mx-auto">
            <div className="relative aspect-[1.91/1] bg-gray-200 overflow-hidden">
              {settings.ogImage ? (
                <img src={settings.ogImage} alt="OG Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
              )}
            </div>
            <div className="p-4 bg-[#F0F2F5]">
              <p className="text-xs text-gray-500 uppercase font-semibold mb-1">legacyscript.com</p>
              <h3 className="text-gray-900 font-bold text-base leading-tight mb-1 truncate">{settings.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">{settings.description}</p>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm">Facebook / LinkedIn Preview</p>

          {/* Twitter Preview */}
          <div className="bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800 max-w-md mx-auto mt-8">
            <div className="p-3 flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-gray-800"></div>
               <div>
                 <div className="h-2 w-24 bg-gray-800 rounded mb-1"></div>
                 <div className="h-2 w-16 bg-gray-800 rounded"></div>
               </div>
            </div>
            <div className="relative aspect-[1.91/1] bg-gray-900 border-t border-b border-gray-800">
               {settings.ogImage ? (
                <img src={settings.ogImage} alt="Twitter Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-600">No Image</div>
              )}
              <div className="absolute bottom-2 left-2 bg-black/60 px-1 rounded text-white text-xs font-bold">LEGACYSCRIPT.COM</div>
            </div>
             <div className="p-3">
               <p className="text-white text-sm mb-1">{settings.title}</p>
               <p className="text-gray-500 text-sm truncate">{settings.description}</p>
             </div>
          </div>
          <p className="text-center text-gray-500 text-sm">X (Twitter) Preview</p>
        </div>
      </div>
    </motion.div>
  );
}