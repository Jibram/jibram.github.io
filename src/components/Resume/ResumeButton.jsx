import './ResumeButton.css';

const ResumeButton = () => {
  return (
    <div className="ResumeDownloadWrapper">
      <a
        href="/pdfs/Resume_Jibram_2026.pdf"
        download="Resume_Jibram_2026.pdf"
        className="ResumeDownloadButton"
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeButton;
