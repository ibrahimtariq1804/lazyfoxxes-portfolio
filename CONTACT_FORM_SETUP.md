# Contact Form Email Integration Setup Guide

## Overview
Your contact form is now integrated with Gmail SMTP to send emails to **lazyfoxxes@gmail.com**.

## Setup Instructions

### 1. Generate Gmail App Password

Since you're using Gmail SMTP, you need to create an "App Password" for secure authentication:

1. Go to your Google Account: https://myaccount.google.com/
2. Click on **"Security"** in the left sidebar
3. Under "How you sign in to Google", enable **2-Step Verification** (if not already enabled)
4. After 2FA is enabled, go back to Security
5. Under "How you sign in to Google", click on **"App passwords"** or visit: https://myaccount.google.com/apppasswords
6. Click **"Select app"** → Choose "Mail"
7. Click **"Select device"** → Choose "Other" and type "Portfolio Website"
8. Click **"Generate"**
9. **Copy the 16-character password** (it looks like: `abcd efgh ijkl mnop`)

### 2. Configure Environment Variables

Your `.env.local` file should already exist. Update it with your Gmail App Password:

```
GMAIL_USER=ibrahimtariq1804@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
```

Replace `your_16_character_app_password` with the password you just generated (remove spaces).

### 3. Restart Development Server

After updating the environment variables:
1. Stop your current dev server (Ctrl+C)
2. Start it again: `npm run dev`

### 4. Test the Form

1. Navigate to your contact section
2. Fill out and submit the form
3. Check the email at **lazyfoxxes@gmail.com**

## How It Works

1. **User fills the form** → Name, Email, Subject, Message
2. **Form submits** → Data is sent to `/api/contact` endpoint
3. **API processes** → Validates data and sends email via Gmail SMTP
4. **Email delivered** → Message is sent to **lazyfoxxes@gmail.com**
5. **Reply-to set** → The sender's email is set as reply-to for easy responses
6. **User feedback** → Success or error message is displayed

## Features Implemented

✅ Form validation (all fields required)
✅ Loading state while submitting
✅ Success message with green checkmark
✅ Error handling with red error message
✅ Form reset after successful submission
✅ Disabled submit button during submission
✅ Reply-to field set to sender's email
✅ Emails sent to **lazyfoxxes@gmail.com**

## Security Notes

- **Never commit** your `.env.local` file (it's already in .gitignore)
- **App Passwords** are safer than using your actual Gmail password
- If you suspect your App Password is compromised, revoke it and generate a new one

## Troubleshooting

### Email not sending?
- Check that your `.env.local` file has the correct Gmail credentials
- Make sure you used an **App Password** (not your regular Gmail password)
- Ensure 2-Step Verification is enabled on your Google account
- Restart your development server after changing environment variables
- Check the browser console and terminal for error messages

### "Invalid login" error?
- Make sure you're using an App Password, not your regular password
- Check that the App Password doesn't have spaces
- Verify the email address is correct

### Still not working?
- Try generating a new App Password
- Make sure the Gmail account (ibrahimtariq1804@gmail.com) has 2FA enabled
- Check your Google Account security settings

## Production Deployment

When deploying to Vercel/Netlify/other platforms:
1. Add `GMAIL_USER` and `GMAIL_APP_PASSWORD` to your environment variables in the platform settings
2. **Don't commit** your `.env.local` file
3. Test the form after deployment to ensure it works in production

## Why Gmail SMTP Instead of Resend?

Gmail SMTP allows you to:
- Send emails to ANY email address (including lazyfoxxes@gmail.com)
- No domain verification required
- Free and reliable
- Easy to set up with App Passwords

## Support

For Gmail App Password issues: https://support.google.com/accounts/answer/185833
For form issues, check the API route at: `src/app/api/contact/route.ts`