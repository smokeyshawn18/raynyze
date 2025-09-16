export function meta() {
  return [
    { title: "Raynyze - AI Resume Analyzer | Free ATS Resume Checker" },
    {
      name: "description",
      content:
        "Get instant AI-powered resume feedback with Raynyze. Free resume analyzer that checks ATS compatibility, provides scoring, and offers personalized improvement tips. Land your dream job faster!",
    },
    {
      name: "keywords",
      content:
        "raynyze, resume analyzer, AI resume checker, ATS optimization, free resume scanner, resume feedback, job application tools, career advancement, resume scoring, CV analyzer",
    },
    { name: "author", content: "Raynyze Team" },
    { name: "robots", content: "index, follow" },
    {
      property: "og:title",
      content: "Raynyze - AI Resume Analyzer | Free ATS Resume Checker",
    },
    {
      property: "og:description",
      content:
        "Upload your resume and get instant AI-powered feedback. Free ATS compatibility check and personalized improvement suggestions.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://raynyze.com" },
    {
      property: "og:image",
      content: "https://raynyze.com/images/og-image.png",
    },
    { property: "og:site_name", content: "Raynyze" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Raynyze - Free AI Resume Analyzer" },
    {
      name: "twitter:description",
      content: "Get instant resume feedback and ATS optimization tips",
    },
    {
      name: "twitter:image",
      content: "https://raynyze.com/images/twitter-card.png",
    },
    { rel: "canonical", href: "https://raynyze.com" },
  ];
}

export default function Index() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gradient mb-6">
          Welcome to Raynyze
        </h1>
        <h2 className="text-2xl text-[var(--text-primary)] mb-8">
          AI-Powered Resume Analyzer
        </h2>
        <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
          Upload your resume and get instant AI-powered feedback, ATS
          optimization tips, and personalized suggestions to improve your
          chances of landing your dream job.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[var(--text-primary)]">
            Why Choose Raynyze?
          </h3>
          <ul className="text-[var(--text-secondary)] space-y-2">
            <li>• Instant AI-powered resume analysis</li>
            <li>• ATS compatibility checking</li>
            <li>• Personalized improvement suggestions</li>
            <li>• Resume scoring and feedback</li>
            <li>• Free to use</li>
          </ul>
        </div>
        <div className="mt-8">
          <a
            href="/auth"
            className="primary-button px-8 py-4 text-lg font-semibold"
          >
            Get Started - Analyze Your Resume
          </a>
        </div>
      </div>
    </main>
  );
}
