import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight, ShoppingBag, Users, TrendingUp } from 'lucide-react';

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

const TestimonialsPage = () => {
  const featuredTestimonials = [
    {
      id: 1,
      name: "Marcus Chen",
      location: "Los Angeles, CA",
      rating: 5,
      text: "Urban Threads isn't just clothing - it's a statement. The quality is unmatched and the designs are fresh. I've built my entire wardrobe around their pieces.",
      purchase: "Signature Hoodie Collection",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Zara Williams",
      location: "Brooklyn, NY",
      rating: 5,
      text: "Finally found a brand that gets it. Premium streetwear that doesn't break the bank. The fit is perfect and the materials feel expensive.",
      purchase: "Minimalist Jogger Set",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Jordan Blake",
      location: "Chicago, IL",
      rating: 5,
      text: "Customer for 2 years now. Every drop is fire. The attention to detail in the stitching and fabric selection shows they care about quality.",
      purchase: "Urban Essentials Bundle",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const testimonialGrid = [
    {
      name: "Alex Rivera",
      text: "Best streetwear brand I've discovered. Quality is insane.",
      rating: 5,
      verified: true
    },
    {
      name: "Sam Torres",
      text: "Shipping was lightning fast. Hoodie fits like a dream.",
      rating: 5,
      verified: true
    },
    {
      name: "Casey Park",
      text: "Finally, streetwear with actual substance behind it.",
      rating: 5,
      verified: true
    },
    {
      name: "Riley Johnson",
      text: "Customer service helped me find the perfect size. Amazing team.",
      rating: 5,
      verified: true
    },
    {
      name: "Morgan Kim",
      text: "These joggers are my new favorites. So comfortable.",
      rating: 5,
      verified: true
    },
    {
      name: "Avery Davis",
      text: "Premium quality at fair prices. Urban Threads gets it right.",
      rating: 5,
      verified: true
    },
    {
      name: "Quinn Lee",
      text: "Love the minimalist aesthetic. Clean designs, perfect execution.",
      rating: 5,
      verified: true
    },
    {
      name: "Sage Mitchell",
      text: "Been wearing their tees daily. They hold up incredibly well.",
      rating: 5,
      verified: true
    }
  ];

  const stats = [
    { number: "15K+", label: "Happy Customers", icon: Users },
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "98%", label: "Would Recommend", icon: TrendingUp }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        size={16} 
        style={{ 
          color: i < rating ? THEME.colors.accent : '#e5e7eb',
          fill: i < rating ? THEME.colors.accent : 'none'
        }} 
      />
    ));
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: THEME.colors.background }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
        color: '#ffffff',
        padding: `${THEME.spacing.sectionPadding}px 20px 60px`,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }} />
        
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '24px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            lineHeight: '1.1'
          }}>
            Real Stories from <br />
            <span style={{ color: THEME.colors.accent }}>Real Customers</span>
          </h1>
          
          <p style={{
            fontSize: '20px',
            marginBottom: '40px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            Discover why thousands choose Urban Threads for premium streetwear that delivers on quality, style, and value.
          </p>

          {/* Stats Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '60px',
            flexWrap: 'wrap',
            marginTop: '60px'
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <stat.icon size={32} style={{ color: THEME.colors.accent, marginBottom: '12px' }} />
                <div style={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                  fontFamily: THEME.fonts.heading,
                  marginBottom: '8px'
                }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '14px', opacity: 0.8 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section style={{
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        backgroundColor: '#ffffff'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: '36px',
              fontWeight: 'bold',
              color: THEME.colors.primary,
              marginBottom: '16px'
            }}>
              Featured Customer Stories
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              In-depth reviews from customers who've experienced the Urban Threads difference
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
            marginBottom: '80px'
          }}>
            {featuredTestimonials.map((testimonial) => (
              <div key={testimonial.id} style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                padding: '32px',
                position: 'relative',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}>
                <Quote size={32} style={{
                  color: THEME.colors.accent,
                  marginBottom: '24px',
                  opacity: 0.8
                }} />
                
                <div style={{
                  display: 'flex',
                  marginBottom: '16px'
                }}>
                  {renderStars(testimonial.rating)}
                </div>

                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: THEME.colors.text,
                  marginBottom: '24px',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.text}"
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      marginRight: '16px',
                      objectFit: 'cover'
                    }}
                  />
                  <div>
                    <div style={{
                      fontWeight: '600',
                      color: THEME.colors.primary,
                      marginBottom: '4px'
                    }}>
                      {testimonial.name}
                    </div>
                    <div style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                <div style={{
                  padding: '12px 16px',
                  backgroundColor: THEME.colors.surface,
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#6b7280',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <ShoppingBag size={16} style={{ marginRight: '8px' }} />
                  Purchased: {testimonial.purchase}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Wall */}
      <section style={{
        padding: `60px 20px ${THEME.spacing.sectionPadding}px`,
        backgroundColor: THEME.colors.surface
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: '36px',
              fontWeight: 'bold',
              color: THEME.colors.primary,
              marginBottom: '16px'
            }}>
              What Customers Say
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#6b7280'
            }}>
              Quick reviews from our community
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {testimonialGrid.map((testimonial, index) => (
              <div key={index} style={{
                backgroundColor: '#ffffff',
                padding: '24px',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                transition: 'transform 0.2s ease'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    display: 'flex'
                  }}>
                    {renderStars(testimonial.rating)}
                  </div>
                  {testimonial.verified && (
                    <span style={{
                      fontSize: '12px',
                      backgroundColor: '#10b981',
                      color: '#ffffff',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontWeight: '500'
                    }}>
                      Verified
                    </span>
                  )}
                </div>
                
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.5',
                  color: THEME.colors.text,
                  marginBottom: '16px'
                }}>
                  "{testimonial.text}"
                </p>
                
                <div style={{
                  fontWeight: '600',
                  color: THEME.colors.primary,
                  fontSize: '14px'
                }}>
                  {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
        padding: `60px 20px`,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: '16px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Join Thousands of Satisfied Customers
          </h2>
          
          <p style={{
            fontSize: '18px',
            color: '#ffffff',
            opacity: 0.9,
            marginBottom: '32px'
          }}>
            Experience premium streetwear that delivers on quality, style, and value
          </p>

          <Link to="/products" style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: THEME.colors.accent,
            color: '#ffffff',
            padding: '16px 32px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '16px',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}>
            Shop Collection
            <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;