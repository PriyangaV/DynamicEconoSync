export interface Notification {
  id: number;
  type: 'job_alert' | 'credit_expiry' | 'job_update' | 'credit_earned';
  title: string;
  message: string;
  timestamp: string;
  priority: 'high' | 'medium' | 'low';
  unread: boolean;
}
class NotificationService {
  private listeners: ((notification: Notification) => void)[] = [];
  addListener(callback: (notification: Notification) => void) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }
  notify(notification: Omit<Notification, 'id' | 'timestamp' | 'unread'>) {
    const newNotification: Notification = {
      ...notification,
      id: Date.now(),
      timestamp: 'Just now',
      unread: true
    };
    this.listeners.forEach(listener => listener(newNotification));
  }
  notifyJobAlert(jobTitle: string, credits: number, priority: 'high' | 'medium' | 'low' = 'medium') {
    this.notify({
      type: 'job_alert',
      title: 'New Job Available',
      message: `${jobTitle} (${credits} credits) is now available`,
      priority
    });
  }
  notifyCreditExpiry(amount: number, daysRemaining: number) {
    this.notify({
      type: 'credit_expiry',
      title: 'Credits Expiring Soon',
      message: `${amount} credits will expire in ${daysRemaining} days`,
      priority: daysRemaining <= 3 ? 'high' : 'medium'
    });
  }
  notifyJobUpdate(jobTitle: string, oldCredits: number, newCredits: number) {
    this.notify({
      type: 'job_update',
      title: 'Job Credit Update',
      message: `${jobTitle} credits increased from ${oldCredits} to ${newCredits}`,
      priority: 'medium'
    });
  }
  notifyCreditEarned(amount: number, jobTitle: string) {
    this.notify({
      type: 'credit_earned',
      title: 'Credits Earned',
      message: `You earned ${amount} credits for completing ${jobTitle}`,
      priority: 'low'
    });
  }
}
export const notificationService = new NotificationService();