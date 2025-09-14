export const Footer = () => {
  return (
    <footer className="bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-t border-[var(--border-color)]">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        {/* Top */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-gradient">RAYNYZE</h2>
            <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
              AI-powered resume analyzer that helps you improve your chances of
              landing your dream job.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase">
              Product
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="/"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase">
              Company
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="/about"
                  className="hover:text-indigo-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase">
              Stay Updated
            </h3>
            <form className="mt-3 flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-l-md bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm focus:outline-none focus:border-[var(--color-primary)]"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium bg-[var(--color-primary)] text-white rounded-r-md hover:bg-[var(--color-primary-dark)] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-[var(--border-color)] pt-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-[var(--text-secondary)]">
            © {new Date().getFullYear()} RAYNYZE. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="#"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M24 4.6c-...z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M19.999...z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M22 0H2C0.895...z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
