AI PRACTICE BLUEPRINT — PREMIUM FOUNDATION UPDATE

WHAT IS INCLUDED
- Existing site preserved, including advisor/wholesaler switch, free prompts, lessons, templates, and PDFs.
- Pricing comparison: Free $0 and proposed Premium $29/month.
- Honest planned-feature preview; no checkout, paywall, account, or free trial is active.
- Founding-member interest form with a real Formspree submission path.

ONE-TIME FORM SETUP (NEEDED BEFORE REAL SIGNUPS CAN WORK)
1. Create a form at https://formspree.io/ using an email address you control.
2. Verify your email if Formspree asks, and copy the endpoint (https://formspree.io/f/XXXXXXXX).
3. In Vercel: Project > Settings > Environment Variables.
4. Add name: VITE_WAITLIST_FORM_ENDPOINT
5. Add value: your exact https://formspree.io/f/XXXXXXXX endpoint.
6. Apply it to Production, save, then REDEPLOY the website under Deployments.
7. Test with your own email; check Formspree submissions AND your email notification.
8. Check Formspree limits, spam protection, data retention and terms before public launch.

IMPORTANT: Without the configured endpoint, the page displays an honest not-connected error. It NEVER pretends to collect signups. VITE_ variables are included in the client bundle: ONLY put the public Formspree form endpoint here, NEVER private keys.

INSTALL INTO YOUR EXISTING MAC SITE
1. Download the ZIP to Downloads.
2. Terminal: cd ~/advisor-ai-blueprint && unzip -o ~/Downloads/ai-practice-blueprint-premium-foundation.zip
3. Terminal: npm run build
4. GitHub Desktop > advisor-ai-blueprint > keep changes checked > Commit to main > Push origin.
5. Vercel automatically redeploys (or redeploy manually if needed).

COMPLIANCE/POLICY CHECKLIST
- Disclose commercial ownership/affiliations as required by your employer/firm.
- Review outside-business restrictions and marketing compliance before promotion.
- Publish an accurate privacy notice and working contact method before public signup promotion.
- Do not send marketing emails without proper consent, opt-out, and CAN-SPAM compliance.
- The form asks for contact information only; never request client account or portfolio data.
- Do not enable payments, promise availability or market unfinished capabilities.

TEST PLAN
- Advisor / Wholesaler switch works as before.
- Premium link jumps to pricing; Free button to prompts; Premium button to waitlist.
- Invalid/missing consent cannot submit; Formspree submissions show actual success or error.
- No paid tools or payments are activated.
