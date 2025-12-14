import {validateNotificationRequest} from "../../api/validators";

describe("validateNotificationRequest", () => {
  it("passes for valid request", () => {
    expect(() =>
      validateNotificationRequest({
        type: "INFO",
        userId: "user-1",
        payload: { a: 1 },
      })
    ).not.toThrow();
  });

  it("throws if body is invalid", () => {
    expect(() => validateNotificationRequest(null)).toThrow();
  });

  it("throws if type missing", () => {
    expect(() =>
      validateNotificationRequest({ userId: "u", payload: {} })
    ).toThrow("type is required");
  });

  it("throws if userId missing", () => {
    expect(() =>
      validateNotificationRequest({ type: "INFO", payload: {} })
    ).toThrow("userId is required");
  });

  it("throws if payload invalid", () => {
    expect(() =>
      validateNotificationRequest({ type: "INFO", userId: "u" })
    ).toThrow("payload must be an object");
  });
});