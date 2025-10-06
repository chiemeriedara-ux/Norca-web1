import React from "react";
import "./Pricing.css";
import { Card, CardContent, Typography, Button } from "@mui/material";

const pricingPlans = [
  {
    id: 1,
    title: "Beginner Plan",
    price: "$49 / month",
    description: "Learn Smart Money Concepts, entries, and trading mindset.",
    image: "/images/beginner.jpg", 
  },
  {
    id: 2,
    title: "Pro Plan",
    price: "$99 / month",
    description: "Advanced SMC strategies, backtesting setups, and mentorship.",
    image: "/images/pro.jpg",
  },
  {
    id: 3,
    title: "Elite Plan",
    price: "$199 / month",
    description: "Full access: gold scalping EA, live sessions, and recovery tools.",
    image: "/images/elite.jpg", 
  },
];

const Pricing = () => {
  return (
    <div className="pricing-container">
      <Typography variant="h3" className="pricing-title">
        Our Pricing Plans
      </Typography>

      <div className="pricing-cards">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.id}
            className="pricing-card"
            style={{ backgroundImage: `url(${plan.image})` }}
          >
            <div className="pricing-overlay">
              <CardContent>
                <Typography variant="h5" className="card-title">
                  {plan.title}
                </Typography>
                <Typography variant="h6" className="card-price">
                  {plan.price}
                </Typography>
                <Typography variant="body2" className="card-description">
                  {plan.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className="subscribe-btn"
                >
                  Subscribe
                </Button>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
