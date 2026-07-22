// Forwards the completion to the "Heat Seal Press Operation Submission (Vercel)" Power
// Automate flow, which writes/updates the Refresher Matrix entry and (via its own added
// action) notifies the Induction Tracker if this person has one. Kept separate from
// send-completion.js (the existing email notification) so neither failing affects the other.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, site, score, date, inviteToken } = req.body;
  if (!fullName) {
    return res.status(400).json({ error: 'Missing fullName' });
  }

  if (!process.env.TRAINING_COMPLETION_FLOW_URL) {
    console.error('TRAINING_COMPLETION_FLOW_URL not configured');
    return res.status(500).json({ error: 'Flow URL not configured' });
  }

  try {
    const flowRes = await fetch(process.env.TRAINING_COMPLETION_FLOW_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName, site, score, date, inviteToken }),
    });
    if (!flowRes.ok) {
      const text = await flowRes.text().catch(() => '');
      console.error('Training completion flow returned an error:', text);
      return res.status(502).json({ error: 'Flow returned an error', detail: text });
    }
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('record-training error:', err);
    return res.status(500).json({ error: 'Failed to reach flow', detail: err.message });
  }
}
