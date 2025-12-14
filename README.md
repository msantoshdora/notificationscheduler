NotificationService API, flow.

APIs 
  Create Notification:

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

Example, create a notification event:

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

```console
curl -X POST http://localhost:3000/api/v1/notifications \
  -H "Content-Type: application/json" \
  -d '{
    "type": "PROMOTION",
    "userId": "user-456","templateId": "ALERT",
    "payload": { "name": "Rahusdfsl" },
    "sendAt": ""
  }'
```

Example, Notification Types:

```javascript
CHANNEL_MAP = {
  ERROR: [SLACK],
  ALERT: [SLACK],
  SYSTEM: [SLACK],
  PROMOTION: [EMAIL],
  INFO: [IN_APP, EMAIL],
  WARN: [IN_APP, EMAIL],
};

```

Flow:

API call ---> NotificationService to handle notifications asyncronously---> Figure out the route for the notification type --> Either Send or Schedule.


Skipped/Design choice (because of not having persistant state):
 - User-defined scheduling
 - User defined template addition


Dependencies:
TypeScript, Express.


Install:
```console
    npm install express
    npm install -D typescript ts-node nodemon @types/node @types/express
```

Command to run:
```console
npm run dev
```


Tests:
Inside src/tests
command for running test: npm test