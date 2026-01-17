import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Heart, Zap, Shield, Sparkles } from 'lucide-react';

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

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: THEME.colors.background, minHeight: '100vh' }}>
      {/* Hero Section - Split Layout */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(135deg, #111827 0%, #374151 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }} />
        
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '60px'
          }}>
            <div style={{
              maxWidth: '600px'
            }}>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontFamily: THEME.fonts.heading,
                fontWeight: '700',
                color: '#ffffff',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                marginBottom: '24px',
                lineHeight: '1.1'
              }}>
                Streetwear with<br />
                <span style={{ color: THEME.colors.accent }}>Substance</span>
              </h1>
              
              <p style={{
                fontSize: '1.25rem',
                color: '#e5e7eb',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                lineHeight: '1.6',
                marginBottom: '32px'
              }}>
                We're not just another clothing brand. We're building a community where style meets purpose, where every piece tells a story.
              </p>
              
              <Link to="/shop" style={{
                display: 'inline-block',
                backgroundColor: THEME.colors.accent,
                color: '#111827',
                padding: '16px 32px',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)'
              }}>
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Pull Quote */}
      <section style={{
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        backgroundColor: THEME.colors.primary,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <blockquote style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontFamily: THEME.fonts.heading,
            fontWeight: '700',
            color: '#ffffff',
            lineHeight: '1.2',
            fontStyle: 'italic',
            position: 'relative'
          }}>
            "Style is a way to say who you are without having to speak."
            <div style={{
              width: '80px',
              height: '4px',
              backgroundColor: THEME.colors.accent,
              margin: '40px auto 0',
              borderRadius: '2px'
            }} />
          </blockquote>
        </div>
      </section>

      {/* Story Section - Offset Layout */}
      <section style={{
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        backgroundColor: THEME.colors.background
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '80px',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                fontFamily: THEME.fonts.heading,
                fontWeight: '700',
                color: THEME.colors.text,
                marginBottom: '24px'
              }}>
                Our Story
              </h2>
              
              <p style={{
                fontSize: '1.1rem',
                color: '#6b7280',
                lineHeight: '1.7',
                marginBottom: '24px'
              }}>
                Born from the streets of urban culture, Urban Threads emerged from a simple belief: quality streetwear shouldn't break the bank, and style shouldn't sacrifice substance.
              </p>
              
              <p style={{
                fontSize: '1.1rem',
                color: '#6b7280',
                lineHeight: '1.7',
                marginBottom: '32px'
              }}>
                We started in 2020 with a single hoodie design and a vision to create clothing that speaks to the authentic spirit of street culture while maintaining premium quality standards.
              </p>
              
              <div style={{
                display: 'flex',
                gap: '32px',
                marginTop: '32px'
              }}>
                <div>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: THEME.colors.accent,
                    fontFamily: THEME.fonts.heading
                  }}>50K+</div>
                  <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>Happy Customers</div>
                </div>
                <div>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: THEME.colors.accent,
                    fontFamily: THEME.fonts.heading
                  }}>100+</div>
                  <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>Unique Designs</div>
                </div>
              </div>
            </div>
            
            <div style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80"
                alt="Urban street scene"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                backgroundColor: 'rgba(0,0,0,0.8)',
                backdropFilter: 'blur(10px)',
                padding: '16px',
                borderRadius: '8px',
                color: '#ffffff'
              }}>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Founded in</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>Los Angeles, CA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Large Text Blocks */}
      <section style={{
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        backgroundColor: THEME.colors.surface
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 3vw, 2.5rem)',
            fontFamily: THEME.fonts.heading,
            fontWeight: '700',
            color: THEME.colors.text,
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            What We Stand For
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {[
              {
                icon: <Heart size={32} />,
                title: "Authentic Expression",
                description: "We believe fashion is personal storytelling. Every design reflects real street culture, not manufactured trends."
              },
              {
                icon: <Shield size={32} />,
                title: "Uncompromising Quality",
                description: "Premium materials, ethical manufacturing, and rigorous quality control ensure every piece lasts as long as your style."
              },
              {
                icon: <Users size={32} />,
                title: "Community First",
                description: "We're building more than a brand – we're creating a movement where every customer is part of the Urban Threads family."
              },
              {
                icon: <Zap size={32} />,
                title: "Accessible Luxury",
                description: "High-end streetwear shouldn't require a trust fund. We deliver premium quality at prices that respect your budget."
              }
            ].map((value, index) => (
              <div key={index} style={{
                display: 'flex',
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                alignItems: 'center',
                gap: '60px'
              }}>
                <div style={{
                  flex: '1',
                  minWidth: '300px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '24px'
                  }}>
                    <div style={{
                      color: THEME.colors.accent,
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      {value.icon}
                    </div>
                    <h3 style={{
                      fontSize: '1.8rem',
                      fontFamily: THEME.fonts.heading,
                      fontWeight: '700',
                      color: THEME.colors.text,
                      margin: 0
                    }}>
                      {value.title}
                    </h3>
                  </div>
                  <p style={{
                    fontSize: '1.2rem',
                    color: '#6b7280',
                    lineHeight: '1.6'
                  }}>
                    {value.description}
                  </p>
                </div>
                
                <div style={{
                  flex: '1',
                  minWidth: '300px',
                  height: '200px',
                  backgroundColor: index % 2 === 0 ? THEME.colors.accent : THEME.colors.primary,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    color: index % 2 === 0 ? THEME.colors.primary : '#ffffff',
                    fontSize: '4rem'
                  }}>
                    {value.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlight */}
      <section style={{
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        backgroundColor: THEME.colors.background
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 3vw, 2.5rem)',
            fontFamily: THEME.fonts.heading,
            fontWeight: '700',
            color: THEME.colors.text,
            marginBottom: '60px'
          }}>
            The Faces Behind the Brand
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px'
          }}>
            {[
              {
                name: "Marcus Chen",
                role: "Creative Director",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Sofia Rodriguez",
                role: "Head of Design",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "James Wilson",
                role: "Operations Lead",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80"
              }
            ].map((member, index) => (
              <div key={index} style={{
                textAlign: 'center'
              }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 20px',
                  border: `4px solid ${THEME.colors.accent}`
                }}>
                  <img 
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontFamily: THEME.fonts.heading,
                  fontWeight: '600',
                  color: THEME.colors.text,
                  margin: '0 0 8px 0'
                }}>
                  {member.name}
                </h3>
                <p style={{
                  color: '#6b7280',
                  fontSize: '1rem'
                }}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        backgroundColor: THEME.colors.primary,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '24px'
          }}>
            <Sparkles size={32} color={THEME.colors.accent} />
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.3rem)',
              fontFamily: THEME.fonts.heading,
              fontWeight: '700',
              color: '#ffffff',
              margin: 0
            }}>
              Ready to Join the Movement?
            </h2>
          </div>
          
          <p style={{
            fontSize: '1.2rem',
            color: '#e5e7eb',
            lineHeight: '1.6',
            marginBottom: '40px'
          }}>
            Discover our latest collection and become part of the Urban Threads community. Style with substance is just one click away.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/shop" style={{
              backgroundColor: THEME.colors.accent,
              color: THEME.colors.primary,
              padding: '16px 32px',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease'
            }}>
              Shop Now
            </Link>
            
            <Link to="/contact" style={{
              backgroundColor: 'transparent',
              color: '#ffffff',
              padding: '16px 32px',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '1.1rem',
              border: '2px solid #ffffff',
              transition: 'all 0.3s ease'
            }}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;