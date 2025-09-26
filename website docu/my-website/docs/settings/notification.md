---
id: notification-settings
title: Notification Settings
---

# Notification Settings

At BankStmtConverter, configuring notifications helps you stay informed about important events related to your bank statement conversions.

---

## ✅ How to Configure Email Notifications

1. Open **Dashboard → Settings → Notifications**.  
2. In **Email Notification Settings**, you’ll see:  
   - **Notify all Conversion** (toggle).  
   - **Notify when pages exceeded** (number field with + / – controls).  
3. Adjust the settings as needed (see behavior explained below).  
4. Click **Save Changes**.

---

## ✅ What Each Option Does

- **Notify all Conversion (toggle ON)**  
  - Sends an email for **every conversion**.  
  - When ON, the **pages exceeded** setting is ignored.

- **Notify when pages exceeded (number)**  
  - Works only when **Notify all Conversion is OFF**.  
  - Sends an email **only if** the uploaded file’s page count is **greater than** the number you set.  
  - Example: If you set the value to `4`, an email is sent when a file has **5 or more pages**.

---

## ✅ Step-by-Step Procedure

- **Get notified for every conversion**  
  - Turn **Notify all Conversion → ON**.  
  - Ignore the page number setting.  
  - **Result:** Every processed file triggers an email.

- **Get notified only for large files**  
  - Turn **Notify all Conversion → OFF**.  
  - Set **Notify when pages exceeded → 4**.  
  - Upload a 3-page file → **no email**.  
  - Upload a 5-page file → **email sent**.
---

## Reference

:::note
Follow the screenshot above for a visual guide.  
:::

1. 
![webhook](/img/notification.png)
