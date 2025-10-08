import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

	// Send email using Resend (more reliable on Vercel)
	const { data, error } = await resend.emails.send({
		from: 'Portfolio Contact Form <onboarding@resend.dev>',
		to: ['lazyfoxxes@gmail.com'],
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

	if (error) {
		console.error('Resend error:', error);
		return NextResponse.json(
			{ error: 'Failed to send email' },
			{ status: 500 }
		);
	}

	return NextResponse.json(
		{ message: 'Email sent successfully', data },
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


