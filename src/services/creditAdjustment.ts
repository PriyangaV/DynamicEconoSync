export interface CreditAdjustment {
  jobId: number;
  baseCredits: number;
  currentCredits: number;
  lastAdjustment: Date;
  applications: number;
  maxCredits: number;
  minCredits: number;
}
export class CreditAdjustmentService {
  private static readonly ADJUSTMENT_INTERVAL = 3600000; // 1 hour in milliseconds
  private static readonly MAX_MULTIPLIER = 3;
  private static readonly MIN_MULTIPLIER = 0.5;
  private creditAdjustments: Map<number, CreditAdjustment> = new Map();
  initializeJob(jobId: number, baseCredits: number) {
    this.creditAdjustments.set(jobId, {
      jobId,
      baseCredits,
      currentCredits: baseCredits,
      lastAdjustment: new Date(),
      applications: 0,
      maxCredits: baseCredits * this.MAX_MULTIPLIER,
      minCredits: baseCredits * this.MIN_MULTIPLIER
    });
  }
  adjustCredits(jobId: number, applications: number): number {
    const adjustment = this.creditAdjustments.get(jobId);
    if (!adjustment) return 0;
    const now = new Date();
    const timeSinceLastAdjustment = now.getTime() - adjustment.lastAdjustment.getTime();
    // Only adjust if enough time has passed
    if (timeSinceLastAdjustment >= this.ADJUSTMENT_INTERVAL) {
      const demandFactor = this.calculateDemandFactor(applications);
      let newCredits = adjustment.currentCredits * demandFactor;
      // Ensure credits stay within bounds
      newCredits = Math.min(adjustment.maxCredits, Math.max(adjustment.minCredits, newCredits));
      this.creditAdjustments.set(jobId, {
        ...adjustment,
        currentCredits: newCredits,
        lastAdjustment: now,
        applications
      });
      return newCredits;
    }
    return adjustment.currentCredits;
  }
  private calculateDemandFactor(applications: number): number {
    if (applications === 0) return 1.2; // Increase by 20% if no applications
    if (applications < 2) return 1.1; // Increase by 10% if low applications
    if (applications > 10) return 0.9; // Decrease by 10% if many applications
    return 1.0; // Keep the same if moderate applications
  }
}
export const creditAdjustmentService = new CreditAdjustmentService();