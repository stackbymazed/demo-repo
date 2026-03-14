"use client";

import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="pt-10 pb-20">
      <div className="container" style={{ textAlign: 'center', marginBottom: '64px', paddingTop: '40px' }}>
        <h4 className="section-subtitle">Get In Touch</h4>
        <h1 className="section-title">Contact Us</h1>
      </div>

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
          
          <div>
            <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>Contact Information</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
              Have questions? We'd love to hear from you. Reach out to our team below.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,110,5,0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '18px' }}>Our Location</h4>
                <p style={{ color: 'var(--text-muted)' }}>123 Street, New York, USA</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,110,5,0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Phone size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '18px' }}>Phone Number</h4>
                <p style={{ color: 'var(--text-muted)' }}>+1 234 567 890</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,110,5,0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '18px' }}>Email Address</h4>
                <p style={{ color: 'var(--text-muted)' }}>info@example.com</p>
              </div>
            </div>
          </div>

          <div style={{ background: 'white', padding: '40px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
             <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>Send Us A Message</h3>
             <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
               <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', outline: 'none' }} />
               <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', outline: 'none' }} />
               <input type="text" placeholder="Subject" style={{ width: '100%', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', outline: 'none' }} />
               <textarea placeholder="Your Message" rows={5} style={{ width: '100%', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', outline: 'none', resize: 'vertical' }}></textarea>
               <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
             </form>
          </div>

        </div>
      </div>
    </main>
  );
}
