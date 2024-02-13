import Image from "next/image";
import LearnLink from "../components/LearnLink";
import LearnUseRouter from "../components/LearnUseRouter";
import LearnServerComponent from "../components/LearnServerComponent";
import LearnClientComponent from "../components/LearnClientComponent";
import LearnGlobalCSS from "../components/LearnGlobalCSS";
import LearnCSSModule from "@/components/LearnCSSModule";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LearnLink />
      <LearnUseRouter />
      <LearnServerComponent />
      <LearnGlobalCSS />
      <LearnCSSModule />
    </main>
  );
}
