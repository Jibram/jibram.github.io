import './ResumeButton.css';

const ResumeButton = () => {
  return (
    <div className="ResumeDownloadWrapper">
      <a
        href="/pdfs/Resume_JibramJimenezLoza.pdf"
        download="Resume_JibramJimenezLoza.pdf"
        className="ResumeDownloadButton"
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeButton;
