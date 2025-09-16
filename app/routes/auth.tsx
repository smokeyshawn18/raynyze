import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export const meta = () => [
  { title: "Login - Raynyze AI Resume Analyzer" },
  {
    name: "description",
    content:
      "Login to access your Raynyze account and manage your resume analysis history. Secure authentication for personalized resume feedback.",
  },
  {
    name: "keywords",
    content: "login, signin, account access, resume analyzer login",
  },
  { name: "robots", content: "noindex, nofollow" }, // Auth pages shouldn't be indexed
];

const Auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split("next=")[1];
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) navigate(next);
  }, [auth.isAuthenticated, next]);

  return (
    <main className="bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-[var(--bg-secondary)] rounded-2xl p-10 border border-[var(--border-color)]">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1>Welcome to RAYNYZE</h1>
            <h2>Log In to Continue Your Job Journey</h2>
          </div>
          <div>
            {isLoading ? (
              <button className="auth-button animate-pulse">
                <p>Signing you in...</p>
              </button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <button className="auth-button" onClick={auth.signOut}>
                    <p>Log Out</p>
                  </button>
                ) : (
                  <button className="auth-button" onClick={auth.signIn}>
                    <p>Log In</p>
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Auth;
