export class SchedulerService {
    static schedule(task: () => void, sendAt: Date): void {
        const delay = sendAt.getTime() - Date.now();
        console.log("Delay",delay);
        if (delay <= 0) {
          task();
          return;
        }

        // NOTE: I am using in-memory scheduling for simplicity here. In a real-world application,
        // you would use a persistent job scheduler or message queue.
        setTimeout(() => {task();
            console.log("Scheduled task executed at", new Date().toISOString());
        }, delay);
    }
}