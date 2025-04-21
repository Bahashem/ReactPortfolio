export function Footer({
  current,
  setCurrent,
}: {
  current: string,
  setCurrent: (value: string) => void,
}) {
  return (
    <footer className={"footer"}>
      <div className="footer-content">
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

      <div className="footer-bottom">
        <p>Made with ❤️ by Bahashem</p>
      </div>
    </footer>
  );
}
