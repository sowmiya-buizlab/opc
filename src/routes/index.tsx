import { createFileRoute } from "@tanstack/react-router";
import { OrangePiePage } from "../components/orange-pie-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orange Pie Community | Learn, Create and Connect" },
      { name: "description", content: "Explore creative learning, community events, seven interest domains, and new possibilities with Orange Pie Community." },
      { property: "og:title", content: "Orange Pie Community | Learn, Create and Connect" },
      { property: "og:description", content: "Explore creative learning, community events, seven interest domains, and new possibilities with Orange Pie Community." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <OrangePiePage />;
}
