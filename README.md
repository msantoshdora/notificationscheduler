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


Example, Notification Types:
1."ERROR" -->SLACK
2."INFO" ---> IN_APP, EMAIL
3. "WARN" ----> IN_APP, EMAIL
4."ALERT"  ---> SLACK
5. "PROMOTION" ---> EMAIL
6. "SYSTEM" --> SLACK
7. default --> IN_APP, EMAIL


Flow:

API call ---> NotificationService ---> Figure out the route for the notification type --> Either Send or Schedule.



Dependencies:
TypeScript, Express.
Install:
    npm install express
    npm install -D typescript ts-node nodemon @types/node @types/express

Command to run:
npm run dev