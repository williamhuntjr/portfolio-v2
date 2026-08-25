import type { Metadata } from "next";
import MyProjectsView from "@/components/MyProjectsView";

export const metadata: Metadata = {
  title: "My Projects",
  description:
    "A look at projects William Hunt has built and shipped, filterable by technology.",
};

export default function MyProjectsPage() {
  return <MyProjectsView />;
}
