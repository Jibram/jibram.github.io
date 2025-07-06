import './ResumeButton.css';

const ResumeButton = () => {
  return (
    <div className="ResumeDownloadWrapper">
      <a
        href="/pdfs/Resume_Jibram.pdf"
        download="Resume_Jibram.pdf"
        className="modern-download-button"
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeButton;
