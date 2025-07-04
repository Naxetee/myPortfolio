export interface Tag {
    id: number;
    name: string;
    description?: string;
    url?: string;
    category_id: number; // Foreign key to TagCategory
    color?: string;
    created_at: string; // ISO 8601 format
}