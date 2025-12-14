NotificationService API, flow.

APIs 
  Create Notification 
        POST /api/v1/notifications
         - type
         - userId
         - payload
         - sendAt?
        
        Response:
        {
            "status": "ACCEPTED",
            "notificationId": "uuid"
        }

Example, create a notification event,
        Request: 
        {
            "type": "notificationtype",
            "userId": "sjflsfjo",
            "payload": {
                "message": "System failure"
            },
            "sendAt"?: "date-time"
        }

Request example:
curl -X POST http://localhost:3000/api/v1/notifications \
  -H "Content-Type: application/json" \
  -d '{
    "type": "PROMOTION",
    "userId": "user-456","templateId": "ALERT",
    "payload": { "name": "Rahusdfsl" },
    "sendAt": ""
  }'

Example, Notification Types:
CHANNEL_MAP = {
  ERROR: [SLACK],
  ALERT: [SLACK],
  SYSTEM: [SLACK],
  PROMOTION: [EMAIL],
  INFO: [IN_APP, EMAIL],
  WARN: [IN_APP, EMAIL],
};


Flow:

API call ---> NotificationService to handle notifications asyncronously---> Figure out the route for the notification type --> Either Send or Schedule.

Skipped (because of not having persistant state):
 - User-defined scheduling
 - template addition


Dependencies:
TypeScript, Express.


Install:
    npm install express
    npm install -D typescript ts-node nodemon @types/node @types/express

Command to run:
npm run dev