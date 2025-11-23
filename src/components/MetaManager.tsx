import { useEffect } from "react";
import { getSettings } from "../utils/api.tsx";

const DEFAULTS = {
  title: "Legacy Script – Web Development, SaaS & App Development Company",
  description: "Legacy Script offers custom websites, SaaS development, and mobile apps with clean UI/UX, fast performance, and full technical support for growing businesses.",
  image: "https://opengraph.b-cdn.net/production/images/2284c207-c54f-41a2-927f-fd45775345ea.png?token=I00gddegA3ZcBKKZwlExpKNPQL4ZAxmDchaTwUxR7D8&height=630&width=1200&expires=33299613555",
  url: "https://legacyscript.co",
  domain: "legacyscript.co"
};

export function MetaManager() {
  useEffect(() => {
    const updateMeta = async () => {
      try {
        // Apply defaults immediately
        applyMeta(DEFAULTS);

        // Then try to fetch overrides
        const settings = await getSettings();
        if (settings) {
          applyMeta({
            title: settings.title || DEFAULTS.title,
            description: settings.description || DEFAULTS.description,
            image: settings.ogImage || DEFAULTS.image,
            url: DEFAULTS.url,
            domain: DEFAULTS.domain,
            twitterHandle: settings.twitterHandle
          });
        }
      } catch (error) {
        console.error("Failed to update meta tags:", error);
      }
    };

    updateMeta();
  }, []);

  return null;
}

function applyMeta(data: any) {
  // Update Title
  if (data.title) document.title = data.title;

  // Helper to update or create meta tag
  const updateTag = (attrName: string, attrValue: string, content: string) => {
    if (!content) return;
    let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attrName, attrValue);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  // Standard
  updateTag('name', 'description', data.description);

  // Facebook / OG
  updateTag('property', 'og:url', data.url);
  updateTag('property', 'og:type', 'website');
  updateTag('property', 'og:title', data.title);
  updateTag('property', 'og:description', data.description);
  updateTag('property', 'og:image', data.image);

  // Twitter
  updateTag('name', 'twitter:card', 'summary_large_image');
  updateTag('property', 'twitter:domain', data.domain);
  updateTag('property', 'twitter:url', data.url);
  updateTag('name', 'twitter:title', data.title);
  updateTag('name', 'twitter:description', data.description);
  updateTag('name', 'twitter:image', data.image);

  // Handle Twitter Site/Creator if handle is provided
  if (data.twitterHandle) {
    updateTag('name', 'twitter:site', data.twitterHandle);
    updateTag('name', 'twitter:creator', data.twitterHandle);
  }
}
