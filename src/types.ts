export interface CSRGrant {
  id: number;
  source_platform: string;
  company_name: string;
  grant_title: string;
  grant_type: string;
  location: string;
  budget_raw: string;
  budget_val: number;
  deadline: string;
  contact_email: string;
  contact_phone: string;
  source_url: string;
  scraped_at: string;
}

export type SortBudgetOption = 'relevance' | 'high_to_low' | 'low_to_high';
