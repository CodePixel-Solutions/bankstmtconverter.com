---
id: webhooks
title: Webhooks
---

# Webhooks

Send parsed bank statement data in real-time to your desired endpoint.  
Automatically push extracted information to any application that supports webhooks.

# Step-by-step-procedure:

### Step 1: Access Integrations
1. [Login](https://bankstmtconverter.com/login) to your **Bank Statement Converter** account. 
2. Go to the **Dashboard**.  
3. Click on **Integrations** → **Webhook** 
4. Enter the **Name** & **Destination URL** provided by the third-party app where you want to send data.  
5. click **submit**
6. Ensure the webhook is **active**. You may see a status indicator like "Active" or "Enabled".

<!-- ### Step 2: Test Your Webhook
1. Upload a bank statement or perform an action that triggers parsed data.  
2. Check the receiving app (Google Sheets or custom app) to confirm the data has arrived.  
3. If data doesn’t appear, double-check your webhook URL and ensure your receiving app can accept incoming data. -->

### Step 2: Manage Webhooks
- You can **edit**, **delete**, or **log** existing webhooks anytime from the Webhooks page in Integrations.  
- Keep your webhook URLs secure to prevent unauthorized access.

---

✅ **Tips:**
- Use a test URL first to ensure your webhook works correctly.  
- Real-time updates mean the data is sent immediately when an event happens.  
- If your receiving app supports authentication, make sure to include the required headers or tokens.

## Reference

:::note
Follow the screenshot above for a visual guide.  
:::

1. Enter the **Name** & **Destination URL** provided by the third-party app where you want to send data. 
![webhook](/img/webhook.png)

2. Ensure the webhook is **active**. You may see a status indicator like "Active" or "Enabled".
![webhooksigningkey](/img/webhooksigningkey.png)

3. In the options menu, you can **Edit or Delete** your **Name and Destination URL**.
![Editwebhook](/img/editwebhook.png)
![Deletewebhook](/img/deletewebhook.png)


4. Click Logs in the options menu to view your **Webhook Logs**.
![logs](/img/logs.png)
