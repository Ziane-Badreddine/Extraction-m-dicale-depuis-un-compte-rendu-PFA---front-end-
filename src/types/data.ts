/* eslint-disable @typescript-eslint/no-explicit-any */
export type ReportsListResponse = {
  success: boolean;
  total: number;
  reports: Report[];
};
export type Report = {
  _id: string;
  user_id: string;
  filename: string;
  content: string;
  extracted_data: any;
  created_at: any;
};
export type CreateReportResponse = {
  success: boolean;
  report_id: string;
  filename: string;
  message: string;
  data: {
    raw_content: string;
    structured_data: any;
    metadata?: any;
  };
};
export type SingleReportResponse = {
  success: boolean;
  report: Report;
};
