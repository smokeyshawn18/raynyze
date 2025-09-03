import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Raynyze" },
    { name: "description", content: "Smart Genuine Feedback for your Resume" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg)] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Keep Track of Your Resume's Performance with Raynyze</h1>
          <h2>Review your Submissions and Get Smart Feedback</h2>
        </div>
      </section>
    </main>
  );
}
