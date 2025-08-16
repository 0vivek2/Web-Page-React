export default function Footer() {
  return (
    <footer style={{ background: "#f5f5f5", padding: "10px", borderTop: "1px solid #ccc", textAlign: "center" }}>
      <p>© {new Date().getFullYear()} My Website | All rights reserved</p>
    </footer>
  );
}
