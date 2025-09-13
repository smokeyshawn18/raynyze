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
      className="group relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
    >
      {/* Header with Company and Score */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-semibold text-gray-900 truncate">
            {companyName || "Resume"}
          </h2>
          {jobTitle && (
            <p className="text-sm text-gray-600 truncate mt-0.5">{jobTitle}</p>
          )}
        </div>
        <div className="ml-3">
          <ScoreCircle score={feedback.overallScore} />
        </div>
      </div>

      {/* Resume Image Container */}
      <div className="flex-1 bg-gradient-to-b from-gray-50 to-white p-3 flex items-center justify-center">
        {loading ? (
          <div className="flex flex-col items-center justify-center p-6 h-64">
            <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-blue-500 animate-spin"></div>
            <p className="mt-4 text-sm text-gray-500">Loading preview...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center p-6 h-64 bg-gray-50 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400"
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
            <p className="mt-3 text-sm text-gray-500">Couldn't load preview</p>
          </div>
        ) : (
          <div className="relative w-full h-64 p-1">
            <div className="absolute inset-0 rounded-lg shadow-inner overflow-hidden">
              <img
                src={resumeUrl}
                alt={`Resume preview for ${companyName || "position"}`}
                className="w-full h-full object-contain bg-white"
              />
            </div>
            <div className="absolute inset-0 border border-gray-100 rounded-lg pointer-events-none"></div>
          </div>
        )}
      </div>

      {/* Footer with View Details */}
      <div className="mt-auto p-3 text-center border-t border-gray-100">
        <span className="text-sm font-medium text-blue-600 group-hover:text-blue-800 transition-colors">
          View Details <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
};

export default ResumeCard;
