import "../404.css";

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent transition-all duration-500 text-3xl">
          404
        </h1>
        <h2>Page Not Found</h2>
        <a href="/" className="back-home-btn">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
