import { SENDGRID_API_KEY } from '$env/static/private';
import sgMail from '@sendgrid/mail';
import { json } from '@sveltejs/kit';

sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST({ request }) {
	const { contactName, contactMail, contactText } = await request.json();

	if (!contactName && !contactMail && !contactText) {
		json({ message: 'Could not send email. Missing data.' }, { status: 400 });
	}

	const message = {
		to: 'asetka1995@gmail.com',
		from: 'asetka1995@gmail.com',
		subject: 'Contact Form on your portfolio',
		html: `Somebody used the contact form on your website. <br/>
		Name: ${contactName}, <br/>
		Email: ${contactMail}, <br/>
		Information about the project: ${contactText}`
	};

	try {
		await sgMail.send(message);
		return json({ emailSentSuccessfully: true });
	} catch (err) {
		return json({ emailSentSuccessfully: false, error: err }, { status: 500 });
	}
}
