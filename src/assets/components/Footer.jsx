export function Footer({ current, setCurrent }) {
  return (
    <Footer className={"Footer"}>
      <div className="Footer-content">
        <p>© 2025 Bahashem. All rights reserved.</p>
        <ul className="social-links">
          <li>
            <a
              href="https://github.com/Bahashem"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="www.linkedin.com/in/diana-g-664483326">LinkedIn</a>
          </li>
        </ul>
      </div>

      <div className="Footer-bottom">
        <p>Copyright 2025. Made with ❤️ by Bahashem</p>
      </div>
    </Footer>
  );
}
export default Footer;