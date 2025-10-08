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

	// Create Gmail transporter
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.GMAIL_USER,
			pass: process.env.GMAIL_APP_PASSWORD,
		},
	});

	// Send email
	await transporter.sendMail({
		from: `"Portfolio Contact Form" <${process.env.GMAIL_USER}>`,
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


