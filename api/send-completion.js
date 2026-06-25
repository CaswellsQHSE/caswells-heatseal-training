import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, completedAt, score, moduleTitle } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: { ciphers: 'SSLv3' },
  });

  const html = `
    <div style="font-family: Calibri, Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #08488D; padding: 20px 24px;">
        <img src="https://www.caswellsgroup.com/Content/Images/CG-full-colour-logo-RGB.svg" alt="Caswells Group" style="height:40px;" />
      </div>
      <div style="padding: 24px; background: #f9f9f9; border: 1px solid #ddd;">
        <h2 style="color: #08488D; margin-top:0;">Training Module Completion</h2>
        <table style="width:100%; border-collapse:collapse;">
          <tr><td style="padding:8px 0; color:#555; width:160px;"><strong>Module</strong></td><td style="padding:8px 0;">${moduleTitle}</td></tr>
          <tr><td style="padding:8px 0; color:#555;"><strong>Trainee name</strong></td><td style="padding:8px 0;">${name}</td></tr>
          <tr><td style="padding:8px 0; color:#555;"><strong>Completed at</strong></td><td style="padding:8px 0;">${completedAt}</td></tr>
          ${score !== undefined ? `<tr><td style="padding:8px 0; color:#555;"><strong>Quiz score</strong></td><td style="padding:8px 0;">${score}</td></tr>` : ''}
        </table>
        <p style="margin-top:20px; color:#555; font-size:13px;">This is an automated notification from the Caswells Group QHSE Training Portal. Please retain for your training records.</p>
      </div>
      <div style="background:#08488D; padding:12px 24px; text-align:center;">
        <span style="color:#fff; font-size:12px;">Caswells Group · QHSE Training Portal · qhse@caswellsgroup.com</span>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Caswells QHSE Training" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `Training Completed: ${moduleTitle} — ${name}`,
      html,
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('SMTP error:', err);
    return res.status(500).json({ error: 'Failed to send email', detail: err.message });
  }
}
