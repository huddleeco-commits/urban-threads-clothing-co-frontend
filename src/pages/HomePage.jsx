import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Truck, Shield, Star, ArrowRight, Users, TrendingUp, Award } from 'lucide-react';

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

const HomePage = () => {
  return (
    <div style={{ fontFamily: THEME.fonts.body }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
        color: '#ffffff',
        padding: '100px 16px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop&crop=center)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
          zIndex: 0
        }} />
        
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            display: 'inline-block',
            background: THEME.colors.accent,
            color: THEME.colors.primary,
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: 600,
            marginBottom: '24px',
            textShadow: 'none'
          }}>
            NEW COLLECTION DROPPED
          </div>
          
          <h1 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            fontWeight: 800,
            marginBottom: '24px',
            lineHeight: '1.1',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            STREETWEAR WITH<br />
            <span style={{ color: THEME.colors.accent }}>SUBSTANCE</span>
          </h1>
          
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '40px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 40px auto',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}>
            Premium hoodies, tees, and joggers for the urban generation. Quality that speaks, style that moves.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/shop" style={{
              background: THEME.colors.accent,
              color: THEME.colors.primary,
              padding: '16px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              minHeight: '44px'
            }}>
              SHOP NOW <ArrowRight size={20} />
            </Link>
            
            <Link to="/lookbook" style={{
              border: '2px solid rgba(255,255,255,0.3)',
              color: '#ffffff',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              minHeight: '44px'
            }}>
              VIEW LOOKBOOK
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section style={{
        background: THEME.colors.primary,
        color: '#ffffff',
        padding: '40px 16px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '32px',
          textAlign: 'center'
        }}>
          <div>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: THEME.colors.accent,
              marginBottom: '8px'
            }}>50K+</div>
            <div style={{ opacity: 0.8 }}>Happy Customers</div>
          </div>
          <div>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: THEME.colors.accent,
              marginBottom: '8px'
            }}>4.9★</div>
            <div style={{ opacity: 0.8 }}>Average Rating</div>
          </div>
          <div>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: THEME.colors.accent,
              marginBottom: '8px'
            }}>24H</div>
            <div style={{ opacity: 0.8 }}>Fast Shipping</div>
          </div>
          <div>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: THEME.colors.accent,
              marginBottom: '8px'
            }}>100%</div>
            <div style={{ opacity: 0.8 }}>Authentic</div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section style={{
        padding: `${THEME.spacing.sectionPadding}px 16px`,
        background: THEME.colors.background
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              marginBottom: '16px',
              color: THEME.colors.text
            }}>
              SIGNATURE COLLECTIONS
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Curated pieces that define modern streetwear culture
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {[
              {
                title: 'HOODIES',
                subtitle: 'Premium comfort',
                image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop&crop=center',
                link: '/shop/hoodies'
              },
              {
                title: 'TEES',
                subtitle: 'Statement pieces',
                image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop&crop=center',
                link: '/shop/tees'
              },
              {
                title: 'JOGGERS',
                subtitle: 'Urban mobility',
                image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop&crop=center',
                link: '/shop/joggers'
              }
            ].map((category, index) => (
              <Link key={index} to={category.link} style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'block'
              }}>
                <div style={{
                  position: 'relative',
                  height: '400px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${category.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(17,24,39,0.7) 0%, rgba(17,24,39,0.3) 100%)'
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '32px',
                    left: '32px',
                    color: '#ffffff'
                  }}>
                    <h3 style={{
                      fontFamily: THEME.fonts.heading,
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      marginBottom: '4px'
                    }}>
                      {category.title}
                    </h3>
                    <p style={{
                      opacity: 0.9,
                      fontSize: '1rem'
                    }}>
                      {category.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{
        padding: `${THEME.spacing.sectionPadding}px 16px`,
        background: THEME.colors.surface
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              marginBottom: '16px',
              color: THEME.colors.text
            }}>
              THE URBAN THREADS DIFFERENCE
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {[
              {
                icon: <Shield size={32} />,
                title: 'Premium Quality',
                description: 'Every piece is crafted with premium materials and attention to detail that lasts.'
              },
              {
                icon: <Truck size={32} />,
                title: 'Fast & Free Shipping',
                description: 'Get your order in 24-48 hours with free shipping on orders over $75.'
              },
              {
                icon: <Award size={32} />,
                title: 'Authentic Design',
                description: 'Original designs that capture the essence of street culture and urban lifestyle.'
              },
              {
                icon: <Users size={32} />,
                title: 'Community Driven',
                description: 'Join a community of style innovators and trendsetters who define street fashion.'
              }
            ].map((feature, index) => (
              <div key={index} style={{
                background: '#ffffff',
                padding: '32px',
                borderRadius: '12px',
                textAlign: 'center',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{
                  color: THEME.colors.accent,
                  marginBottom: '16px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontFamily: THEME.fonts.heading,
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  marginBottom: '12px',
                  color: THEME.colors.text
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section style={{
        padding: `${THEME.spacing.sectionPadding}px 16px`,
        background: THEME.colors.primary,
        color: '#ffffff'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              marginBottom: '16px'
            }}>
              WHAT THE STREETS SAY
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {[
              {
                text: "Best streetwear I've ever owned. The quality is insane and the fit is perfect.",
                author: "Marcus J.",
                rating: 5
              },
              {
                text: "Finally found a brand that gets street culture. These pieces are fire 🔥",
                author: "Zoe K.",
                rating: 5
              },
              {
                text: "The hoodies are so comfortable and the designs are unique. Love this brand!",
                author: "Tyler M.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{
                  display: 'flex',
                  marginBottom: '16px'
                }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} style={{ color: THEME.colors.accent, fill: THEME.colors.accent }} />
                  ))}
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                  opacity: 0.9
                }}>
                  "{testimonial.text}"
                </p>
                <div style={{
                  fontWeight: 600,
                  color: THEME.colors.accent
                }}>
                  {testimonial.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        padding: `${THEME.spacing.sectionPadding}px 16px`,
        background: THEME.colors.accent,
        color: THEME.colors.primary,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            marginBottom: '24px'
          }}>
            READY TO ELEVATE YOUR STYLE?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '40px',
            opacity: 0.9
          }}>
            Join thousands who trust Urban Threads for authentic streetwear that makes a statement.
          </p>
          <Link to="/shop" style={{
            background: THEME.colors.primary,
            color: '#ffffff',
            padding: '18px 36px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1.1rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            minHeight: '44px'
          }}>
            <ShoppingBag size={24} />
            START SHOPPING
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;