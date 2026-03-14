"use client";

import { Play, Star, MapPin } from 'lucide-react';

export default function ServicePage() {
  return (
    <main className="pt-10 pb-20">
      <div className="container" style={{ textAlign: 'center', marginBottom: '64px', paddingTop: '40px' }}>
        <h4 className="section-subtitle">What We Offer</h4>
        <h1 className="section-title">Our Services</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
          We provide excellent catering, fast delivery, and comfortable indoor dining to ensure an unforgettable culinary experience for everyone.
        </p>
      </div>

      <section className="video-section">
        <div className="video-box">
          <img src="/images/beef-steaks.png" alt="Catering Service" />
          <div className="video-overlay">
            <h3 style={{ fontSize: '24px' }}>Expert Catering</h3>
          </div>
        </div>
        <div className="video-box">
          <img src="/images/hero-pasta.png" alt="Fast Delivery" />
          <div className="video-overlay">
            <h3 style={{ fontSize: '24px' }}>Fast Delivery</h3>
          </div>
        </div>
        <div className="video-box">
          <img src="/images/spicy-burger.png" alt="Fine Dining" />
          <div className="video-overlay">
            <h3 style={{ fontSize: '24px' }}>Fine Dining</h3>
          </div>
        </div>
        <div className="video-box">
           <img src="/images/chef-2.png" alt="Customer Support" />
           <div className="video-overlay">
            <h3 style={{ fontSize: '24px' }}>24/7 Support</h3>
          </div>
        </div>
      </section>

    </main>
  );
}
