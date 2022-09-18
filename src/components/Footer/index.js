import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <span className="copyright">Copyright © {year}</span>
    </footer>
  );
}
