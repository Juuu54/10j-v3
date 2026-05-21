export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body;
    const email = body?.contact?.email || body?.email;
    const firstName = body?.contact?.first_name || body?.first_name || '';

    if (!email) {
      return res.status(400).json({ error: 'No email found in payload' });
    }

    const htmlContent = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0; padding:0; background-color:#1C1C1C; font-family: Georgia, 'Times New Roman', serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#1C1C1C; padding: 48px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:600px;">
          <tr>
            <td align="center" style="padding-bottom: 32px;">
              <p style="margin:0; font-family: 'Courier New', Courier, monospace; font-size: 10px; letter-spacing: 5px; text-transform: uppercase; color: #666666;">— Method &amp; Co —</p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#F5F0E8; padding: 0; overflow:hidden;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:#C8A96E; padding: 14px 48px;">
                    <p style="margin:0; font-family: 'Courier New', Courier, monospace; font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: #1C1C1C; text-align:center;">
                      Commande confirmée · Accès immédiat
                    </p>
                  </td>
                </tr>
              </table>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 52px 52px 16px 52px; text-align:center;">
                    <p style="margin: 0 0 12px 0; font-family: 'Courier New', Courier, monospace; font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: #C8A96E;">Jour 0</p>
                    <h1 style="margin: 0; font-family: Georgia, serif; font-size: 32px; font-weight: normal; line-height: 1.25; color: #1C1C1C; letter-spacing: -0.5px;">
                      Votre manuel<br>est entre vos mains.
                    </h1>
                  </td>
                </tr>
              </table>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 24px 52px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="border-top: 1px solid #D9D0BE;"></td>
                        <td style="padding: 0 16px; white-space:nowrap;">
                          <p style="margin:0; font-size:16px; color:#C8A96E;">✦</p>
                        </td>
                        <td style="border-top: 1px solid #D9D0BE;"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 0 52px 32px 52px;">
                    <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.8; color: #3D3530;">
                      Bienvenue de l'autre côté.
                    </p>
                    <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.8; color: #5A5248;">
                      Votre exemplaire de <em>« 10 Jours pour Reprendre le Contrôle »</em> vous attend — manuel complet + workbook, dans un seul fichier, prêt à l'emploi.
                    </p>
                    <p style="margin: 0; font-size: 15px; line-height: 1.8; color: #5A5248;">
                      Ouvrez-le demain matin avec un café. Lisez le Jour 1. Appliquez avant midi.
                    </p>
                  </td>
                </tr>
              </table>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 0 auto 44px auto;">
                <tr>
                  <td align="center" style="padding: 0 52px;">
                    <a href="https://d1yei2z3i6k35z.cloudfront.net/17515166/6a08981be01f39.41114110_10-jours-reprendre-controleWB.zip"
                       style="display:inline-block; background-color:#1C1C1C; color:#F5F0E8; text-decoration:none; font-family: 'Courier New', Courier, monospace; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; padding: 20px 44px; border: 2px solid #1C1C1C;">
                      ↓ &nbsp; Accéder au manuel &nbsp; ↓
                    </a>
                  </td>
                </tr>
              </table>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 0 52px 44px 52px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#1C1C1C; padding: 28px 32px;">
                      <tr>
                        <td>
                          <p style="margin: 0 0 8px 0; font-family: 'Courier New', Courier, monospace; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; color: #C8A96E;">À venir</p>
                          <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #D9D0BE;">
                            Des surprises arrivent dans les prochains jours.<br>Gardez un œil sur votre boîte mail.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:#EDE8DE; padding: 20px 52px; border-top: 1px solid #D9D0BE;">
                    <p style="margin: 0; font-size: 12px; line-height: 1.7; color: #8A8278; text-align:center;">
                      ⚠️ Ajoutez <strong style="color:#5A5248;">support@methodandco.fr</strong> à vos contacts pour ne rien rater.<br>
                      On est joignables à cette adresse pour toute question.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-top: 32px;">
              <p style="margin: 0 0 6px 0; font-family: 'Courier New', Courier, monospace; font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: #444444;">Method &amp; Co — 2026</p>
              <p style="margin: 0; font-size: 11px; color: #444444;">
                <a href="mailto:support@methodandco.fr" style="color: #666666; text-decoration: none;">support@methodandco.fr</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'Method & Co',
          email: 'support@methodandco.fr',
        },
        to: [{ email: email, name: firstName }],
        subject: 'Votre manuel est là.',
        htmlContent: htmlContent,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Brevo error:', error);
      return res.status(500).json({ error: 'Failed to send email', details: error });
    }

    return res.status(200).json({ success: true, email_sent_to: email });

  } catch (err) {
    console.error('Webhook error:', err);
    return res.status(500).json({ error: err.message });
  }
}
