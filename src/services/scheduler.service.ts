export class SchedulerService {
    static schedule(task: () => void, sendAt: Date): void {
        const delay = sendAt.getTime() - Date.now();
        console.log("Delay",delay);
        if (delay <= 0) {
          task();
          return;
        }

        setTimeout(() => {task();
            console.log("Scheduled task executed at", new Date().toISOString());
        }, delay);
    }
}