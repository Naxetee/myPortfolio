export type Experience = {
    id: number;
    company_name: string;
    position: string;
    description?: string;
    start_date: string;
    end_date?: string;
    location?: string;
    is_current?: boolean;
    created_at?: string; // ISO timestamp string
}