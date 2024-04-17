export class CalculatorData {
  costOfService: number;
  serviceQuality: number;
  roundUpTip: boolean;
  tip: number;
  totalBill: number;

  public constructor() {
    this.costOfService = 0;     // Initial cost of service
    this.serviceQuality = 0.15; // Default service quality percentage (15% for Okay)
    this.roundUpTip = false;    // Initially, do not round up the tip
    this.tip = 0;               // Calculated tip, initialized to 0
    this.totalBill = 0;         // Total bill, initialized to 0
  }
}
