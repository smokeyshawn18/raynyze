import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

export const meta = () => [
  { title: "RAYNYZE | Wipe Data" },
  { name: "description", content: "Wipe your application data" },
];

const WipeApp = () => {
  const { auth, isLoading, error, clearError, fs, ai, kv } = usePuterStore();
  const navigate = useNavigate();
  const [files, setFiles] = useState<FSItem[]>([]);

  const loadFiles = async () => {
    const files = (await fs.readDir("./")) as FSItem[];
    setFiles(files);
  };

  useEffect(() => {
    loadFiles();
  }, []);

  useEffect(() => {
    if (!isLoading && !auth.isAuthenticated) {
      navigate("/auth?next=/wipe");
    }
  }, [isLoading]);

  const handleDelete = async () => {
    files.forEach(async (file) => {
      await fs.delete(file.path);
    });
    await kv.flush();
    loadFiles();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error {error}</div>;
  }

  return (
    <main className="bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 py-12">
        <div className="bg-[var(--bg-secondary)] p-6 rounded-xl shadow-md border border-[var(--border-color)]">
          <h1 className="text-3xl font-bold mb-8 text-[var(--text-primary)]">
            Manage Your Data
          </h1>

          <div className="mb-6">
            <p className="text-lg mb-2 text-[var(--text-primary)]">
              Authenticated as:{" "}
              <span className="font-semibold">{auth.user?.username}</span>
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">
              Existing files:
            </h2>
            <div className="flex flex-col gap-4 bg-[var(--bg-primary)] p-4 rounded-lg max-h-[300px] overflow-y-auto border border-[var(--border-color)]">
              {files.length === 0 ? (
                <p className="text-[var(--text-secondary)]">No files found</p>
              ) : (
                files.map((file) => (
                  <div
                    key={file.id}
                    className="flex flex-row gap-4 items-center border-b border-gray-200 pb-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    <p className="text-gray-700">{file.name}</p>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="mt-6">
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full cursor-pointer transition-colors"
              onClick={() => handleDelete()}
            >
              Wipe App Data
            </button>
            <p className="text-gray-500 mt-2 text-sm">
              This will delete all your files and data from the application.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default WipeApp;
