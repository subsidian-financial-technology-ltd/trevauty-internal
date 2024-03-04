export interface ITerminalData  {
    location: String;
    visitors: String;
    revenues: number;
    sales: number;
    conversion: number;
  }
  
  export interface ITerminalReport {
    location: String
    invoiceDate: String
    status: String
  }

  export interface ProviderDetails {
      providerName : String,
      oem : String
  }