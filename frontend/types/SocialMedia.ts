export interface SocialMedia {
    id: number;
    name: string;
    profile_url: string;
    icon_url?: string;
    description?: string;
    created_at: string; // ISO 8601 format
}