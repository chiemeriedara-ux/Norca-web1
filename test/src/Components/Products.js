import React from "react";
import './Products.css';

const products = [
  {
    title: "Norca Analytics",
    description:
      "A powerful trading and analytics suite designed for modern investors — featuring smart money concepts, real-time market insights, and automated strategies.",
    image: "/images/analytics.jpg", // replace with your image
  },
  {
    title: "Norca Automate",
    description:
      "Our AI-driven task automation engine helps businesses scale faster by simplifying complex workflows and eliminating manual errors.",
    image: "/images/automate.jpg", // replace with your image
  },
  {
    title: "Norca Commerce",
    description:
      "A full-stack e-commerce framework that empowers entrepreneurs to launch, manage, and grow their online presence effortlessly.",
    image: "/images/commerce.jpg", // replace with your image
  },
];

export default function Products() {
  return (
    <div className="products">
      <header className="product-header">
        <h1>Our Product Line</h1>
        <p>
          High-performance, data-driven, and user-centric — explore the range of
          products that define Norca Industries.
        </p>
      </header>

      <section className="product-grid">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-card"
            style={{ backgroundImage: `url(${product.image})` }}
          >
            <div className="product-overlay">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="product-footer">
        <p>
          Each product is backed by years of research, feedback, and a commitment
          to excellence — because we don’t just build solutions; we build trust.
        </p>
      </section>
    </div>
  );
}
