
export default function Blog() {
  return (
    <div className="blog">
      <header className="blog-header">
        <h1>Insights & Updates</h1>
        <p>
          Explore stories, strategies, and lessons from Norca’s journey across
          technology, innovation, and finance.
        </p>
      </header>

      <section className="blog-grid">
        <div className="blog-post">
          <h3>AI in Modern Trading</h3>
          <p>
            Artificial intelligence continues to shape how traders make decisions.
            Here’s how Norca integrates predictive models for smarter strategies.
          </p>
          <button>Read More</button>
        </div>

        <div className="blog-post">
          <h3>Building Trust in FinTech</h3>
          <p>
            Security and transparency remain the backbone of financial innovation.
            Learn how we design with trust as our first principle.
          </p>
          <button>Read More</button>
        </div>

        <div className="blog-post">
          <h3>The Future of Automation</h3>
          <p>
            From workflow bots to predictive analytics, automation is redefining
            efficiency — and we’re helping lead that change.
          </p>
          <button>Read More</button>
        </div>
      </section>
    </div>
  );
}
