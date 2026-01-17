import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Instagram, Twitter, Facebook } from 'lucide-react';

const THEME = {
  colors: { 
    primary: '#111827', 
    accent: '#f59e0b', 
    background: '#ffffff', 
    text: '#111827', 
    surface: '#f8fafc' 
  },
  fonts: { heading: "'DM Sans', sans-serif", body: "'Inter', system-ui, sans-serif" },
  spacing: { sectionPadding: '80px' }
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: THEME.colors.primary,
      color: '#ffffff',
      fontFamily: THEME.fonts.body
    }}>
      {/* Hero Section */}
      <div style={{
        paddingTop: THEME.spacing.sectionPadding,
        paddingBottom: '60px',
        paddingLeft: '16px',
        paddingRight: '16px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.1',
          zIndex: '0'
        }}></div>
        
        <div style={{
          position: 'relative',
          zIndex: '1',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            marginBottom: '24px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            lineHeight: '1.1'
          }}>
            GET IN TOUCH
          </h1>
          
          <div style={{
            width: '60px',
            height: '4px',
            backgroundColor: THEME.colors.accent,
            margin: '0 auto 32px',
            borderRadius: '2px'
          }}></div>
          
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            opacity: '0.9',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Questions about our streetwear? Need help with sizing? Want to collaborate? 
            We're here to connect with our community.
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <div style={{
        padding: '60px 16px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '60px'
        }}>
          {/* Contact Form */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '40px 24px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h2 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '600',
              marginBottom: '32px',
              color: '#ffffff'
            }}>
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '16px 20px',
                    fontSize: '16px',
                    color: '#ffffff',
                    fontFamily: THEME.fonts.body,
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    minHeight: '44px'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = THEME.colors.accent;
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  }}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '16px 20px',
                    fontSize: '16px',
                    color: '#ffffff',
                    fontFamily: THEME.fonts.body,
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    minHeight: '44px'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = THEME.colors.accent;
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  }}
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '16px 20px',
                  fontSize: '16px',
                  color: '#ffffff',
                  fontFamily: THEME.fonts.body,
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  minHeight: '44px'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = THEME.colors.accent;
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                }}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                required
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '16px 20px',
                  fontSize: '16px',
                  color: '#ffffff',
                  fontFamily: THEME.fonts.body,
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  resize: 'vertical',
                  minHeight: '120px'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = THEME.colors.accent;
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                }}
              />

              <button
                type="submit"
                style={{
                  backgroundColor: THEME.colors.accent,
                  color: THEME.colors.primary,
                  border: 'none',
                  borderRadius: '8px',
                  padding: '16px 32px',
                  fontSize: '16px',
                  fontWeight: '600',
                  fontFamily: THEME.fonts.heading,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  minHeight: '44px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#d97706';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = THEME.colors.accent;
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px'
          }}>
            <h2 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '600',
              color: '#ffffff',
              textAlign: 'center'
            }}>
              Connect With Us
            </h2>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              {/* Phone */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  backgroundColor: THEME.colors.accent,
                  borderRadius: '50%',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Phone size={20} color={THEME.colors.primary} />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: THEME.fonts.heading,
                    fontSize: '16px',
                    fontWeight: '600',
                    marginBottom: '4px',
                    color: THEME.colors.accent
                  }}>
                    PHONE
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: '#ffffff',
                    margin: '0'
                  }}>
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              {/* Email */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  backgroundColor: THEME.colors.accent,
                  borderRadius: '50%',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Mail size={20} color={THEME.colors.primary} />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: THEME.fonts.heading,
                    fontSize: '16px',
                    fontWeight: '600',
                    marginBottom: '4px',
                    color: THEME.colors.accent
                  }}>
                    EMAIL
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: '#ffffff',
                    margin: '0'
                  }}>
                    hello@urbanthreads.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  backgroundColor: THEME.colors.accent,
                  borderRadius: '50%',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MapPin size={20} color={THEME.colors.primary} />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: THEME.fonts.heading,
                    fontSize: '16px',
                    fontWeight: '600',
                    marginBottom: '4px',
                    color: THEME.colors.accent
                  }}>
                    LOCATION
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: '#ffffff',
                    margin: '0',
                    lineHeight: '1.5'
                  }}>
                    123 Street Culture Ave<br />
                    Los Angeles, CA 90210
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div style={{
              textAlign: 'center',
              marginTop: '40px'
            }}>
              <h3 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '24px',
                color: '#ffffff'
              }}>
                Follow the Movement
              </h3>
              
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px'
              }}>
                <a href="#" style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  minWidth: '44px',
                  minHeight: '44px'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = THEME.colors.accent;
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                }}>
                  <Instagram size={20} color="#ffffff" />
                </a>
                
                <a href="#" style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  minWidth: '44px',
                  minHeight: '44px'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = THEME.colors.accent;
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                }}>
                  <Twitter size={20} color="#ffffff" />
                </a>
                
                <a href="#" style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  minWidth: '44px',
                  minHeight: '44px'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = THEME.colors.accent;
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                }}>
                  <Facebook size={20} color="#ffffff" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;