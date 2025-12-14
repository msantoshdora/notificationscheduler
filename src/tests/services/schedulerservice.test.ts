import { SchedulerService } from "../../services/scheduler.service";

describe("SchedulerService", () => {
  jest.useFakeTimers();

  it("executes immediately if time passed", () => {
    const task = jest.fn();
    SchedulerService.schedule(task, new Date(Date.now() - 1000));
    expect(task).toHaveBeenCalled();
  });

  it("executes after delay", () => {
    const task = jest.fn();
    SchedulerService.schedule(task, new Date(Date.now() + 1000));

    jest.advanceTimersByTime(1000);
    expect(task).toHaveBeenCalled();
  });
});
