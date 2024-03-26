import { FaPaperPlane, FaGithub } from "react-icons/fa";

const ContactLinks = () => {
  return (
    <div className="contact-links-container">
      <a
        className="ext-link"
        href="mailto:edwinschutjes@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="to mail"
      >
        <FaPaperPlane className="icon" />
      </a>
      <a
        className="ext-link"
        href="https://github.com/EdwinSch"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="to github"
      >
        <FaGithub className="icon" />
      </a>
    </div>
  );
};
export default ContactLinks;
