import emailJs from '@emailjs/browser'

export const sendEmail = async () => {
	await emailJs.sendForm(
		'service_aqcg77r',
		'template_9v5xeya',
		'#formId',
		'HmJktww9rFB4Doery',
	)
}
