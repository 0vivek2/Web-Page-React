import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ background: "#f5f5f5", padding: "10px 20px", borderBottom: "1px solid #ccc" }}>
 
      <img src="./cepialabs_logo.jpg" alt="Logo" style={{ height: "50px", verticalAlign: "middle" }} />
      <h1 style={{ display: "inline-block", marginRight: "100px" }}>Welcome to the Web Page</h1>
      <nav style={{ display: "inline-block" }}>
        <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/about" style={{ margin: "0 10px" }}>About us</Link>
        <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>
      </nav>
    </header>
  );
}
