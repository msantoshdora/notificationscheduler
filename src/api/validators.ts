export function validateNotificationRequest(body: any) {
  if(body == null || typeof body !== 'object') {
    throw new Error("Invalid request body");
   }

  if (!body.type) {
    throw new Error("type is required");
  }

  if (!body.userId) {
    throw new Error("userId is required");
  }
  if (!body.payload || typeof body.payload !== "object") {
    throw new Error("payload must be an object");
  }
}
