const emailData = {
    to: "hmngoli@gmail.com",
    subject: "Project Inquiry: Services",
    body: 
`Hi there,

I hope this email finds you well. 

I am reaching out to inquire about your services for an upcoming project. Below are a few brief details regarding what we are looking for:

• Project Type: [e.g., Website Redesign, E-commerce, Branding]
• Estimated Timeline: [e.g., 4-6 weeks, Immediate]
• Approximate Budget: [e.g., $2,000 - $5,000]

Project Overview:
[Briefly describe what you are trying to build or achieve here.]

Please let me know your current availability for a brief discovery call this week to discuss this further.

Best regards,
[Your Name]`
};

const mailtoUrl = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
    
document.getElementById('emailLink').href = mailtoUrl;

document.getElementById('hire').href = mailtoUrl;