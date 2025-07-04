export interface Project {
    id: number;
    title: string;
    description: string;
    image_urls?: string[];
    project_url?: string;
    created_at?: string; // ISO string for timestamp
}