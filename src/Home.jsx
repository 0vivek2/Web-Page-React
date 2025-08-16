export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <section style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <div style={{ flex: 1,  height: "200px" }}>
            <img src="./hello.png" alt="Hello" style={{height:"200px",width:"520px"}}/>
        </div>
        <div style={{ flex: 1 }}>
          <h2>I created this project to practice React fundamentals—components, state, and routing.
             It’s also a playground to experiment with CSS and responsive design.
            Think of it as my personal coding lab.</h2>
         
        </div>
      </section>
      <hr />

      <section style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <div style={{ flex: 1 }}>
          <h2>This project was created as part of my learning journey with CepiaLab Pvt. Ltd.<br />

            It’s a space for me to apply what I’ve learned and explore new ideas in web development.
          </h2>
          
        </div>
        <div style={{ flex: 1, height: "200px" }}>
            <img src="./cepialabs_logo.jpg" alt="Logo" style={{height:"200px",width:"520px"}}/>
        </div>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "30px" }}>
        
          <div style={{ width: "80px", height: "80px", borderRadius: "50%" }}>
            <img src="./software.jpg" alt="Logo_software" style={{height:"80px",width:"80px"}}/>
          </div>
       
      </section>

      <section>
        <h2>Register Yourself Here</h2>
        <form>
          <input type="text" placeholder="Name" style={{ marginRight: "10px" }} />
          <input type="email" placeholder="Email" style={{ marginRight: "10px" }} />
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}
