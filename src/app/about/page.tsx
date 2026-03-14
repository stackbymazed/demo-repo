"use client";

import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="pt-10 pb-20">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px', paddingTop: '40px' }}>
          <h4 className="section-subtitle">FoodStation Story</h4>
          <h1 className="section-title">About Us</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
            We've been serving the best meals in town since 2010. Our passion for cooking and bringing people together around the dining table is what drives us every day.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <img src="/images/spicy-burger.png" alt="Our Kitchen" style={{ borderRadius: '24px', width: '100%', height: '400px', objectFit: 'cover' }} />
          <div>
            <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>We Create The Best Food Experiences</h2>
            <p style={{ marginBottom: '24px', color: 'var(--text-muted)' }}>
              Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,110,5,0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
                Fresh and Fast Food Delivery
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,110,5,0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
                24/7 Quality Services
              </li>
            </ul>
            <button className="btn btn-primary">Discover More <ArrowRight size={16} /></button>
          </div>
        </div>
      </div>
    </main>
  );
}
