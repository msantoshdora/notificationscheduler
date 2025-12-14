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


Notification Types:
1. ERROR ----> Slack, In-App, Email
2. WARNING ----> Slack, Email
3. INFO -----> Email
4. CUSTOM ----> Slack


Flow:

API call ---> NotificationService ---> Figure out the route for the notification type --> Either Send or Schedule.



Dependencies:
TypeScript, Express.
Install:
    npm install express
    npm install -D typescript ts-node nodemon @types/node @types/express

Command to run:
npm run dev