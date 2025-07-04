import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  title?: string;
  message: string;
}

export async function sendContactNotification(formData: ContactFormData): Promise<boolean> {
  try {
    const emailContent = `
New Contact Form Submission from The Talent Foundation Website

Contact Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Company: ${formData.company || 'Not provided'}
- Title: ${formData.title || 'Not provided'}

Message:
${formData.message}

---
This email was sent automatically from your website contact form.
`;

    await mailService.send({
      to: 'hello@talent.foundation',
      from: 'noreply@talent.foundation', // This should be a verified sender in SendGrid
      subject: `New Contact Form Submission - ${formData.firstName} ${formData.lastName}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e84e36;">New Contact Form Submission</h2>
          <p><strong>From:</strong> The Talent Foundation Website</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
            <p><strong>Title:</strong> ${formData.title || 'Not provided'}</p>
          </div>
          
          <div style="background-color: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${formData.message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">This email was sent automatically from your website contact form.</p>
        </div>
      `
    });

    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}