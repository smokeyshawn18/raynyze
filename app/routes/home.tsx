import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Raynyze - AI Resume Analyzer | Get Instant Resume Feedback" },
    {
      name: "description",
      content:
        "Raynyze is an AI-powered resume analyzer that provides instant feedback and ATS optimization. Upload your resume and get personalized suggestions to land your dream job. Free resume analysis tool.",
    },
    {
      name: "keywords",
      content:
        "resume analyzer, AI resume checker, ATS optimization, resume feedback, job application, career tools, resume scanner, CV analyzer, resume tips, job search",
    },
    { name: "author", content: "Raynyze Team" },
    { name: "robots", content: "index, follow" },
    {
      property: "og:title",
      content: "Raynyze - AI Resume Analyzer | Get Instant Resume Feedback",
    },
    {
      property: "og:description",
      content:
        "Upload your resume and get AI-powered feedback instantly. Optimize for ATS systems and improve your chances of landing interviews.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://raynyze.com" },
    {
      property: "og:image",
      content: "https://raynyze.com/images/og-image.png",
    },
    { property: "og:site_name", content: "Raynyze" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Raynyze - AI Resume Analyzer" },
    {
      name: "twitter:description",
      content: "Get instant AI-powered resume feedback and ATS optimization",
    },
    {
      name: "twitter:image",
      content: "https://raynyze.com/images/twitter-card.png",
    },
    { name: "theme-color", content: "#6366f1" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "default" },
    { name: "apple-mobile-web-app-title", content: "Raynyze" },
    { rel: "canonical", href: "https://raynyze.com" },
  ];
}

export default function Home() {
  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated]);

  useEffect(() => {
    const loadResumes = async () => {
      setLoadingResumes(true);
      const resumes = (await kv.list("resume:*", true)) as KVItem[];
      const parsedResumes = resumes?.map(
        (resume) => JSON.parse(resume.value) as Resume
      );
      setResumes(parsedResumes || []);
      setLoadingResumes(false);
    };

    loadResumes();
  }, []);

  return (
    <main className="bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] min-h-screen">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track Your Applications & Resume Ratings</h1>
          {!loadingResumes && resumes?.length === 0 ? (
            <h2>No resumes found. Upload your first resume to get feedback.</h2>
          ) : (
            <h2>Review your submissions and check AI-powered feedback.</h2>
          )}
        </div>

        {loadingResumes && (
          <div className="flex flex-col items-center justify-center py-16">
            <img
              src="/images/resume-scan-2.gif"
              className="w-48"
              alt="Loading animation"
            />
            <p className="mt-6 text-lg text-[var(--text-secondary)]">
              Raynyze uses advanced AI to analyze your resume for ATS
              compatibility, keyword optimization, and formatting best
              practices. Get personalized feedback to improve your chances of
              landing interviews.
            </p>
          </div>
        )}

        {!loadingResumes && resumes.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
            <Link
              to="/upload"
              className="group relative bg-[var(--bg-primary)]/80 backdrop-blur-sm rounded-xl shadow-sm border border-dashed border-[var(--border-color)] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full justify-center items-center p-8"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center mb-4 group-hover:bg-[var(--border-color)] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[var(--color-primary)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                Add New Resume
              </h3>
              <p className="text-sm text-[var(--text-secondary)] text-center mt-2">
                Upload a new resume to get AI-powered feedback
              </p>
            </Link>
          </div>
        )}

        {!loadingResumes && resumes?.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-16 bg-[var(--bg-primary)]/80 backdrop-blur-sm rounded-2xl shadow-sm p-12 max-w-xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-[var(--color-primary)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
              Get Started with Your First Resume
            </h2>
            <p className="text-[var(--text-secondary)] text-center mb-8">
              Upload your resume to receive AI-powered analysis and suggestions
              to improve your chances of landing your dream job.
            </p>
            <Link
              to="/upload"
              className="primary-button px-8 py-4 text-lg font-semibold rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2"
            >
              <span>Upload Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
