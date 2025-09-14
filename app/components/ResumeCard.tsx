import { Link } from "react-router";
import ScoreCircle from "./ScoreCircle";
import { useEffect, useState } from "react";
import { usePuterStore } from "../lib/puter";

interface Resume {
  id: string;
  companyName?: string;
  jobTitle?: string;
  feedback: {
    overallScore: number;
  };
  imagePath: string;
}

const ResumeCard = ({
  resume: { id, companyName, jobTitle, feedback, imagePath },
}: {
  resume: Resume;
}) => {
  const { fs } = usePuterStore();
  const [resumeUrl, setResumeUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Score-based text color for percentage
  const getScoreTextColor = (score: number) => {
    if (score >= 80) return "text-green-600 dark:text-green-400";
    if (score >= 60) return "text-yellow-600 dark:text-yellow-400";
    if (score >= 40) return "text-orange-600 dark:text-orange-400";
    return "text-red-600 dark:text-red-400";
  };

  useEffect(() => {
    const loadResume = async () => {
      setLoading(true);
      setError(false);
      try {
        const blob = await fs.read(imagePath);
        if (!blob) {
          setError(true);
          setLoading(false);
          return;
        }
        const url = URL.createObjectURL(blob);
        setResumeUrl(url);
        setLoading(false);
      } catch (err) {
        console.error("Error loading resume image:", err);
        setError(true);
        setLoading(false);
      }
    };

    loadResume();
  }, [imagePath, fs]);

  return (
    <Link
      to={`/resume/${id}`}
      className="group relative bg-[var(--bg-primary)] rounded-xl shadow-sm border border-[var(--border-color)] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
    >
      {/* Header with Company and Score */}
      <div className="flex items-center justify-between p-4 border-b border-[var(--border-color)]">
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-semibold text-[var(--text-primary)] truncate">
            {companyName || "Untitled Resume"}
          </h2>
          <p className="text-sm text-[var(--text-secondary)] truncate mt-1">
            {jobTitle || "No position specified"}
          </p>
        </div>
        <div className="ml-3 flex-shrink-0 flex flex-col items-center">
          <ScoreCircle score={feedback.overallScore} />
        </div>
      </div>

      {/* Resume Image Container */}
      <div className="flex-1 bg-[var(--bg-secondary)] p-4 flex items-center justify-center min-h-[200px]">
        {loading ? (
          <div className="flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-full border-3 border-[var(--border-color)] border-t-[var(--color-primary)] animate-spin"></div>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              Loading preview...
            </p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-[var(--text-secondary)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Preview unavailable
            </p>
          </div>
        ) : (
          <div className="relative w-full h-full max-h-[180px] rounded-lg overflow-hidden border border-[var(--border-color)]">
            <img
              src={resumeUrl}
              alt={`Resume preview for ${companyName || "position"}`}
              className="w-full h-full object-cover bg-[var(--bg-primary)]"
            />
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 text-center border-t border-[var(--border-color)]">
        <span className="text-sm font-medium text-[var(--color-primary)] group-hover:text-[var(--color-primary-dark)] transition-colors">
          View Details →
        </span>
      </div>
    </Link>
  );
};

export default ResumeCard;
