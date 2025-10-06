
export default function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to Norca Industries</h1>
        <p>
          Innovating across technology, finance, and design — empowering global brands 
          and individuals to achieve more through smart solutions.
        </p>
        <button className="hero-btn">Explore Our Work</button>
      </header>

      <section className="about">
        <h2>Who We Are</h2>
        <p>
          Norca Industries is a multi-disciplinary company that merges innovation with
          practicality. From cutting-edge financial technologies to sustainable
          products, our mission is simple — to build smarter, better solutions for
          today’s world.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          We believe that success is built through precision, creativity, and
          consistency. We help individuals and enterprises scale efficiently while
          maintaining integrity and trust at the core of every product we deliver.
        </p>
      </section>

      <section className="values">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We do what’s right, even when no one is watching.</li>
          <li><strong>Innovation:</strong> We challenge limits to create next-gen solutions.</li>
          <li><strong>Excellence:</strong> Every detail matters — quality is non-negotiable.</li>
        </ul>
      </section>
    </div>
  );
}
