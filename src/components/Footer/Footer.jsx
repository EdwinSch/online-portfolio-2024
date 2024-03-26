const Footer = () => {
  const getDate = new Date().getFullYear();

  return (
    <footer>
      &copy; {getDate} - Ed. <br />
      <a
        className="intxt-link"
        href="mailto:edwinschutjes@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="to mail"
      >
        Contact
      </a>
    </footer>
  );
};
export default Footer;
