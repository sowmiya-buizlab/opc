import { createFileRoute } from "@tanstack/react-router";
import { OrangePiePage } from "../components/orange-pie-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orange Pie Community | Discover your Kreativity" },
      { name: "description", content: "Connect with people to explore ideas, learn from each other, and use your Kreativity to make a difference." },
      { property: "og:title", content: "Orange Pie Community | Discover your Kreativity" },
      { property: "og:description", content: "Connect with people to explore ideas, learn from each other, and use your Kreativity to make a difference." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <OrangePiePage />;
}
