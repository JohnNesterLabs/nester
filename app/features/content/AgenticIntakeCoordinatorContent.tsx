export default function AgenticIntakeCoordinatorContent() {
  return (
    <>
      <h2>"Conversational Data Assistant"</h2>
      <p>
        This project involved designing and deploying a sophisticated, voice-based intake
        coordinator system for a major digital health platform. The system acts as a
        comprehensive virtual assistant, capable of handling appointment bookings, updates,
        cancellations, answering user questions, and providing information in a professional,
        empathetic manner.
      </p>

      <p>
        <strong>Key Achievement:</strong> The system reduced form abandonment by{" "}
        <strong>60–80%</strong> through a guided, conversational flow, offering 24/7
        availability and enhanced accessibility across multi‑channels (web audio and phone
        calls via Twilio).
      </p>

      <h3>Core Innovation: The Real-Time Voice Pipeline</h3>
      <p>
        The architecture is centered around maintaining sub‑second latency and absolute
        reliability, critical standards for a healthcare application.
      </p>
      <ul>
        <li>
          <strong>Real-time Voice Foundation:</strong> Direct integration with the{" "}
          <strong>OpenAI Realtime API</strong> provides low-latency Speech‑to‑Text and
          Text‑to‑Speech processing, enabling fluid voice interactions necessary for
          high‑quality user experience.
        </li>
        <li>
          <strong>Function Calling &amp; Tool Integration:</strong> The LLM uses native
          function calling to seamlessly interact with external utilities, allowing it to
          maintain conversation flow while performing complex tasks (e.g., checking
          appointment availability or validating collected data).
        </li>
      </ul>

      <h3>Layered Architecture for Security and Reliability</h3>
      <p>
        The system operates on a four‑layered, modular architecture built for scalability and
        strict separation of concerns, ensuring maintainability and easy auditing for
        compliance.
      </p>
      <img src="/banky/b4.png" alt="Agentic Intake Coordinator visuals frame 1" />

      <h3>Enterprise-Grade Technical Highlights</h3>
      <ul>
        <li>
          <strong>Professional Guardrails Framework:</strong> Implements strict,
          healthcare‑specific conversation boundaries enforced by the Conversation Manager.
          This includes real‑time crisis detection, professional tone enforcement, and a
          strict boundary against providing medical advice.
        </li>
        <li>
          <strong>Dynamic State Management:</strong> The Intake Request Manager uses
          sophisticated state machine logic for AI‑driven adaptive questioning. It
          intelligently tracks booking progress and handles information provided by the user
          in any non‑linear order.
        </li>
        <li>
          <strong>HIPAA‑Compliant Memory Architecture:</strong>
          <ul>
            <li>
              <strong>Redis Cluster</strong> provides sub‑50ms access for active session
              state.
            </li>
            <li>
              <strong>DynamoDB/RDS</strong> provides HIPAA‑compliant, persistent storage for
              audit trails and conversation history.
            </li>
            <li>
              <strong>Vector Database (Pinecone/Weaviate)</strong> is used for RAG‑powered
              intelligence, enabling context‑aware semantic search of policy documents and
              professional profiles.
            </li>
          </ul>
        </li>
        <li>
          <strong>Comprehensive Analytics &amp; Optimization:</strong> A dedicated{" "}
          <strong>Analytics API</strong> powers real‑time conversation monitoring, tracks
          booking completion funnels, and generates automated summaries within{" "}
          <strong>30 seconds</strong> of conversation completion for operational review.
        </li>
      </ul>
    </>
  );
}


