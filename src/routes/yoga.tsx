import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/yoga")({
  component: YogaPage,
});

function YogaPage() {
  return (
    <div className="yoga-page">
      {/* ================================
          YOGA PAGE HEADER
          ================================ */}
      <header className="yoga-page-header">
        <Link to="/" className="yoga-back-button">
          <ArrowLeft size={18} aria-hidden="true" />
          <span>Back to OPC 2030</span>
        </Link>

        <h1>Yoga for Kreativity</h1>
      </header>

      {/* ================================
          YOGA WEBSITE
          ================================ */}
      <main className="yoga-page-content">
        <iframe
          src="https://fidelity-canvas-dev.lovable.app/"
          title="Yoga for Kreativity"
          className="yoga-full-iframe"
          allow="fullscreen"
        />
      </main>
    </div>
  );
}