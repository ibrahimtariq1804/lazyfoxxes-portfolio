# Contact Form Email Integration Setup Guide

## Overview
Your contact form is now integrated with your email (lazyfoxxes@gmail.com) using Resend email service.

## Setup Instructions

### 1. Get Your Resend API Key

1. Go to [Resend](https://resend.com) and create a free account
2. Navigate to [API Keys](https://resend.com/api-keys) in your dashboard
3. Click "Create API Key"
4. Give it a name (e.g., "Portfolio Contact Form")
5. Copy the API key (it starts with `re_`)

### 2. Configure Environment Variables

1. Create a `.env.local` file in the root of your project
2. Add the following line:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```
3. Replace `re_your_actual_api_key_here` with your actual Resend API key

### 3. Verify Domain (Optional but Recommended)

For production use, you should verify your domain with Resend:

1. In your Resend dashboard, go to [Domains](https://resend.com/domains)
2. Click "Add Domain"
3. Follow the instructions to add DNS records
4. Once verified, update the API route (`src/app/api/contact/route.ts`) to use your domain:
   ```typescript
   from: 'Portfolio Contact Form <contact@yourdomain.com>',
   ```

### 4. Test the Form

1. Start your development server: `npm run dev`
2. Navigate to your contact section
3. Fill out and submit the form
4. Check your email at lazyfoxxes@gmail.com

## How It Works

1. **User fills the form** → Name, Email, Subject, Message
2. **Form submits** → Data is sent to `/api/contact` endpoint
3. **API processes** → Validates data and sends email via Resend
4. **Email delivered** → You receive the message at lazyfoxxes@gmail.com
5. **User feedback** → Success or error message is displayed

## Features Implemented

✅ Form validation (all fields required)
✅ Loading state while submitting
✅ Success message with green checkmark
✅ Error handling with red error message
✅ Form reset after successful submission
✅ Disabled submit button during submission
✅ Reply-to field set to sender's email

## Free Tier Limits

Resend's free tier includes:
- 3,000 emails per month
- 100 emails per day
- Perfect for portfolio contact forms!

## Troubleshooting

### Email not sending?
- Check that your `.env.local` file exists with the correct API key
- Restart your development server after adding environment variables
- Check the browser console and terminal for error messages

### Using Gmail instead?
If you prefer to use Gmail SMTP instead of Resend, you can switch to Nodemailer. Let me know if you need help with that!

## Production Deployment

When deploying to Vercel/Netlify/other platforms:
1. Add `RESEND_API_KEY` to your environment variables in the platform settings
2. Don't commit your `.env.local` file (it's already in .gitignore)
3. Consider verifying your domain for better email deliverability

## Support

For issues with Resend, visit: https://resend.com/docs
For form issues, check the API route at: `src/app/api/contact/route.ts`


