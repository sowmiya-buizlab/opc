import { createFileRoute } from "@tanstack/react-router";
import { OrangePiePage } from "../components/orange-pie-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OPC 2030 | Community for 3 Lakh Kreators" },
      { name: "description", content: "Join OPC 2030, a community bringing together 3 lakh Kreators to learn, connect, create, and uplift the Orange Economy." },
      { property: "og:title", content: "OPC 2030 | Community for 3 Lakh Kreators" },
      { property: "og:description", content: "Join OPC 2030, a community bringing together 3 lakh Kreators to learn, connect, create, and uplift the Orange Economy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <OrangePiePage />;
}
