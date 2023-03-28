export interface Response {
  campaign_name: string;
  min_quota: number;
  max_quota: number;
  max_amount: number;
  min_amount: number;
  tea: number;
  payment_date: Date | string;
  currency: string;
  monthly_amount: number;
}

export interface Data {
  amount: number;
  quota: number;
}
