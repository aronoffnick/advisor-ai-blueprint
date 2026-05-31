function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f8fafc", color: "#0f172a", minHeight: "100vh" }}>
      <header style={{ background: "white", padding: "24px 40px", borderBottom: "1px solid #e2e8f0" }}>
        <h2 style={{ margin: 0 }}>Advisor AI Blueprint</h2>
        <p style={{ margin: "6px 0 0", color: "#64748b" }}>
          Simple AI workflows for financial advisors
        </p>
      </header>

      <section style={{ padding: "80px 40px", background: "white" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p style={{ fontWeight: "bold", color: "#475569" }}>
            Built for advisors who do not want to become tech experts
          </p>

          <h1 style={{ fontSize: "56px", lineHeight: "1.05", margin: "20px 0", maxWidth: "800px" }}>
            AI made simple for financial advisors.
          </h1>

          <p style={{ fontSize: "20px", lineHeight: "1.6", color: "#475569", maxWidth: "720px" }}>
            Practical workflows advisors can use to save time, prepare for meetings,
            improve client communication, and follow up faster — without the technical overwhelm.
          </p>

          <button style={{
            marginTop: "30px",
            background: "#0f172a",
            color: "white",
            border: "none",
            padding: "16px 24px",
            borderRadius: "12px",
            fontSize: "16px",
            cursor: "pointer"
          }}>
            Explore the Advisor Blueprint
          </button>
        </div>
      </section>

      <section style={{ padding: "70px 40px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>
            Most advisors are not short on expertise.
          </h2>

          <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#475569", maxWidth: "760px" }}>
            They are short on time. AI can help with the daily work that slows the practice down:
            meeting prep, follow-up, client education, prospecting, and administration.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
            marginTop: "40px"
          }}>
            {[
              "Client meeting agendas",
              "Follow-up emails",
              "CRM summaries",
              "Referral language",
              "Client education emails",
              "Portfolio review talking points",
              "Market commentary summaries",
              "Prospect outreach ideas"
            ].map((item) => (
              <div key={item} style={{
                background: "white",
                padding: "20px",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 12px rgba(15,23,42,0.04)"
              }}>
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "70px 40px", background: "white" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p style={{ fontWeight: "bold", color: "#64748b", textTransform: "uppercase", letterSpacing: "2px" }}>
            The Blueprint
          </p>

          <h2 style={{ fontSize: "36px", marginBottom: "30px" }}>
            Simple AI workflows advisors can actually use.
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px"
          }}>
            {[
              {
                title: "Prepare Faster",
                text: "Turn rough notes, prior conversations, and client concerns into a simple meeting agenda."
              },
              {
                title: "Follow Up Better",
                text: "Convert meeting notes into recap emails, CRM notes, and next-step task lists."
              },
              {
                title: "Communicate Clearly",
                text: "Translate market noise into plain-English client communication without overcomplicating it."
              },
              {
                title: "Segment Smarter",
                text: "Group clients and prospects by needs, life stage, opportunities, and timing."
              },
              {
                title: "Save Time Weekly",
                text: "Use simple repeatable workflows to reduce admin drag and create more client-facing time."
              },
              {
                title: "Stay Within Guardrails",
                text: "Use AI for drafting and organization while keeping human judgment and compliance review in place."
              }
            ].map((card) => (
              <div key={card.title} style={{
                padding: "26px",
                borderRadius: "18px",
                border: "1px solid #e2e8f0",
                background: "#f8fafc"
              }}>
                <h3 style={{ fontSize: "22px", marginTop: 0 }}>{card.title}</h3>
                <p style={{ color: "#475569", lineHeight: "1.6" }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "70px 40px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p style={{ fontWeight: "bold", color: "#64748b", textTransform: "uppercase", letterSpacing: "2px" }}>
            Prompt Pack
          </p>

          <h2 style={{ fontSize: "36px", marginBottom: "30px" }}>
            Copy, paste, and customize.
          </h2>

          {[
            {
              title: "Client Meeting Prep",
              prompt: "Create a client meeting prep sheet from these notes. Include key discussion points, likely concerns, questions to ask, and follow-up items."
            },
            {
              title: "Post-Meeting Follow-Up",
              prompt: "Turn these meeting notes into a professional client follow-up email, internal CRM note, and task list."
            },
            {
              title: "Market Commentary Simplifier",
              prompt: "Explain this market update in simple client-friendly language. Avoid jargon, avoid predictions, and focus on long-term planning."
            },
            {
              title: "Client Segmentation",
              prompt: "Segment this client list into groups based on likely needs, life stage, and outreach opportunity. Recommend one communication idea for each group."
            }
          ].map((item) => (
            <div key={item.title} style={{
              background: "white",
              padding: "24px",
              borderRadius: "18px",
              border: "1px solid #e2e8f0",
              marginBottom: "18px"
            }}>
              <h3 style={{ marginTop: 0 }}>{item.title}</h3>
              <p style={{
                background: "#f1f5f9",
                padding: "18px",
                borderRadius: "12px",
                lineHeight: "1.6",
                color: "#334155"
              }}>
                “{item.prompt}”
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "70px 40px", background: "#0f172a", color: "white" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px" }}>
            AI is a tool, not the final approver.
          </h2>

          <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#cbd5e1", maxWidth: "760px" }}>
            Advisors should use AI to draft, summarize, organize, and simplify. Final language,
            recommendations, client data usage, and external communications should follow firm policies
            and human review.
          </p>

          <ul style={{ lineHeight: "2", color: "#e2e8f0", fontSize: "17px" }}>
            <li>Do not use AI to guarantee outcomes or predict performance.</li>
            <li>Do not share sensitive client information unless approved by firm policy.</li>
            <li>Review and edit all AI-generated content before use.</li>
            <li>Use approved product and market language where required.</li>
            <li>Keep professional judgment at the center of every recommendation.</li>
          </ul>
        </div>
      </section>

      <footer style={{ padding: "30px 40px", color: "#64748b", fontSize: "14px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          © 2026 Advisor AI Blueprint. Educational resource for financial professionals.
          <br />
          AI outputs should be reviewed according to applicable firm and compliance policies.
        </div>
      </footer>
    </div>
  );
}

export default App;