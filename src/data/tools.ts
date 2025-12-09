import { getCollection } from 'astro:content';

export interface Tool {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  homepage: string;
  github?: string;
  docs?: string;
  category: Category;
  tags: string[];
  license: 'open-source' | 'commercial' | 'hybrid';
  language?: string;
  cloudSupport: ('aws' | 'gcp' | 'azure' | 'on-prem' | 'any')[];
  stars?: number;
  lastUpdated?: string;
  featured?: boolean;
}

export type Category =
  | 'databases'
  | 'ci-cd'
  | 'monitoring'
  | 'ml-inference'
  | 'dev-platforms'
  | 'installers'
  | 'feature-flags'
  | 'debugging'
  | 'access-control'
  | 'networking'
  | 'secrets-mesh';

export const categories: Record<Category, { label: string; description: string; icon: string }> = {
  'databases': {
    label: 'Databases',
    description: 'Self-hosted and BYOC database solutions',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
  },
  'ci-cd': {
    label: 'CI/CD and Deployment',
    description: 'Build, test, and deploy in your own infrastructure',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"/><path d="M12 7.5V9"/><path d="M7.5 12H9"/><path d="M16.5 12H15"/><path d="M12 16.5V15"/></svg>`,
  },
  'monitoring': {
    label: 'Monitoring and Observability',
    description: 'Metrics, logs, and traces in your cloud',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
  },
  'ml-inference': {
    label: 'ML/Inference Infra',
    description: 'Deploy ML models in your own environment',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/><path d="M7.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/><path d="M17.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/><path d="M9 17h6"/></svg>`,
  },
  'dev-platforms': {
    label: 'Internal Dev Platforms',
    description: 'Platform engineering tools for your cloud',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>`,
  },
  'installers': {
    label: 'Installers / App Packagers',
    description: 'Package and deploy apps to customer environments',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
  },
  'feature-flags': {
    label: 'Feature Flags / Config',
    description: 'Feature management in your infrastructure',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>`,
  },
  'debugging': {
    label: 'Remote Debugging',
    description: 'Debug applications in production',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
  },
  'access-control': {
    label: 'Access Control / IAM',
    description: 'Identity and access management',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>`,
  },
  'networking': {
    label: 'Networking / VPN / Proxy',
    description: 'Network infrastructure and connectivity',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>`,
  },
  'secrets-mesh': {
    label: 'App State / Secrets / Service Mesh',
    description: 'Secrets management and service mesh',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/></svg>`,
  },
};

// Helper to load tools from content collection
export async function getTools(): Promise<Tool[]> {
  const toolsCollection = await getCollection('tools');
  return toolsCollection.map((entry) => ({
    id: entry.id,
    ...entry.data,
  })) as Tool[];
}

export async function getToolsByCategory(category: Category): Promise<Tool[]> {
  const tools = await getTools();
  return tools.filter((tool) => tool.category === category);
}

export async function getFeaturedTools(): Promise<Tool[]> {
  const tools = await getTools();
  return tools.filter((tool) => tool.featured);
}

export async function getToolById(id: string): Promise<Tool | undefined> {
  const tools = await getTools();
  return tools.find((tool) => tool.id === id);
}

export async function searchTools(query: string): Promise<Tool[]> {
  const tools = await getTools();
  const lowerQuery = query.toLowerCase();
  return tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(lowerQuery) ||
      tool.description.toLowerCase().includes(lowerQuery) ||
      tool.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

export async function filterTools(filters: {
  license?: 'open-source' | 'commercial' | 'hybrid';
  category?: Category;
  cloudSupport?: string;
  language?: string;
}): Promise<Tool[]> {
  const tools = await getTools();
  return tools.filter((tool) => {
    if (filters.license && tool.license !== filters.license) return false;
    if (filters.category && tool.category !== filters.category) return false;
    if (filters.cloudSupport && !tool.cloudSupport.includes(filters.cloudSupport as any)) return false;
    if (filters.language && tool.language?.toLowerCase() !== filters.language.toLowerCase()) return false;
    return true;
  });
}

// Synchronous version for backward compatibility (used in static pages)
// This requires tools to be passed in from the page's getStaticPaths or frontmatter
export function getToolsByCategorySync(tools: Tool[], category: Category): Tool[] {
  return tools.filter((tool) => tool.category === category);
}

export function getFeaturedToolsSync(tools: Tool[]): Tool[] {
  return tools.filter((tool) => tool.featured);
}
