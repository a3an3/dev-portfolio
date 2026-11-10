import { env } from '$env/dynamic/private';
import sgMail from '@sendgrid/mail';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const escapeHtml = (text: string) =>
	text.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);

export const POST: RequestHandler = async ({ request }) => {
	const { SENDGRID_API_KEY, CONTACT_EMAIL } = env;
	if (!SENDGRID_API_KEY || !CONTACT_EMAIL) {
		console.error('send-mail: SENDGRID_API_KEY or CONTACT_EMAIL is not set');
		return json({ emailSentSuccessfully: false }, { status: 500 });
	}

	const { contactName, contactMail, contactText } = await request.json();
	if (!contactName || !contactMail || !contactText) {
		return json({ emailSentSuccessfully: false, message: 'Missing data.' }, { status: 400 });
	}

	sgMail.setApiKey(SENDGRID_API_KEY);

	try {
		await sgMail.send({
			to: CONTACT_EMAIL,
			from: CONTACT_EMAIL,
			replyTo: contactMail,
			subject: 'Contact form on your portfolio',
			html: `Somebody used the contact form on your website.<br/>
				Name: ${escapeHtml(contactName)}<br/>
				Email: ${escapeHtml(contactMail)}<br/>
				Message: ${escapeHtml(contactText)}`
		});
		return json({ emailSentSuccessfully: true });
	} catch (err) {
		console.error('send-mail: SendGrid request failed', err);
		return json({ emailSentSuccessfully: false }, { status: 500 });
	}
};
