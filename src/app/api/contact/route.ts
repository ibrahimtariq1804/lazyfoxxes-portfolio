import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const { name, email, subject, message } = body;

		// Validate input
		if (!name || !email || !subject || !message) {
			return NextResponse.json(
				{ error: 'All fields are required' },
				{ status: 400 }
			);
		}

	// Create Gmail transporter for lazyfoxxes@gmail.com
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'lazyfoxxes@gmail.com',
			pass: process.env.GMAIL_APP_PASSWORD,
		},
	});

	// Send email directly to lazyfoxxes@gmail.com
	await transporter.sendMail({
		from: `"Portfolio Contact Form" <lazyfoxxes@gmail.com>`,
		to: 'lazyfoxxes@gmail.com',
		replyTo: email,
		subject: `Portfolio Contact: ${subject}`,
		html: `
			<h2>New Contact Form Submission</h2>
			<p><strong>Name:</strong> ${name}</p>
			<p><strong>Email:</strong> ${email}</p>
			<p><strong>Subject:</strong> ${subject}</p>
			<p><strong>Message:</strong></p>
			<p>${message.replace(/\n/g, '<br>')}</p>
		`,
	});

	return NextResponse.json(
		{ message: 'Email sent successfully' },
		{ status: 200 }
	);
	} catch (error) {
		console.error('Contact form error:', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}


