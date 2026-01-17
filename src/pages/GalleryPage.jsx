import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Filter, Search, Heart, ShoppingBag, Eye } from 'lucide-react';

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

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const galleryItems = [
    { id: 1, title: 'Urban Shadows Collection', category: 'lookbook', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop', description: 'Minimal streetwear meets urban architecture' },
    { id: 2, title: 'Midnight Drop', category: 'product', image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=600&fit=crop', description: 'Premium black hoodie collection' },
    { id: 3, title: 'City Lights Editorial', category: 'lifestyle', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop', description: 'Night photography with urban wear' },
    { id: 4, title: 'Gold Standard Tee', category: 'product', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop', description: 'Limited edition gold accent series' },
    { id: 5, title: 'Concrete Jungle', category: 'lookbook', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop', description: 'Industrial backdrop styling' },
    { id: 6, title: 'Essential Joggers', category: 'product', image: 'https://images.unsplash.com/photo-1506629905607-53e10dd47c09?w=600&h=600&fit=crop', description: 'Comfort meets street style' },
    { id: 7, title: 'Rooftop Sessions', category: 'lifestyle', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=800&fit=crop', description: 'High-rise urban photography' },
    { id: 8, title: 'Minimal Caps Collection', category: 'product', image: 'https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=600&h=600&fit=crop', description: 'Clean lines, bold statement' },
    { id: 9, title: 'Street Art Collab', category: 'lifestyle', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=800&fit=crop', description: 'Graffiti walls meet fashion' },
  ];

  const categories = ['all', 'product', 'lookbook', 'lifestyle'];

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: THEME.colors.primary, minHeight: '100vh', color: '#ffffff' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
        padding: '120px 20px 80px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontFamily: THEME.fonts.heading,
          fontSize: window.innerWidth <= 768 ? '2.5rem' : '3.5rem',
          fontWeight: '900',
          marginBottom: '20px',
          background: 'linear-gradient(135deg, #ffffff 0%, #f59e0b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: 'none'
        }}>
          GALLERY
        </h1>
        <p style={{
          fontFamily: THEME.fonts.body,
          fontSize: '1.2rem',
          opacity: 0.8,
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Explore our visual story - from product showcases to street-inspired lookbooks and urban lifestyle photography
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div style={{
        padding: '40px 20px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        position: 'sticky',
        top: '0',
        backgroundColor: 'rgba(17, 24, 39, 0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 10
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Search Bar */}
          <div style={{
            position: 'relative',
            marginBottom: '30px'
          }}>
            <Search style={{
              position: 'absolute',
              left: '15px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'rgba(255,255,255,0.6)',
              width: '20px',
              height: '20px'
            }} />
            <input
              type="text"
              placeholder="Search gallery..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '15px 50px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '12px',
                color: '#ffffff',
                fontFamily: THEME.fonts.body,
                fontSize: '16px',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
            />
          </div>

          {/* Category Filters */}
          <div style={{
            display: 'flex',
            gap: '15px',
            overflowX: 'auto',
            paddingBottom: '5px'
          }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: selectedCategory === category ? THEME.colors.accent : 'transparent',
                  color: selectedCategory === category ? THEME.colors.primary : '#ffffff',
                  border: selectedCategory === category ? 'none' : '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '25px',
                  fontFamily: THEME.fonts.body,
                  fontWeight: '600',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div style={{
        padding: '60px 20px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          alignItems: 'start'
        }}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.4s ease',
                transform: hoveredItem === item.id ? 'translateY(-5px)' : 'translateY(0)',
                cursor: 'pointer',
                height: index % 3 === 0 ? '400px' : index % 3 === 1 ? '350px' : '450px'
              }}
            >
              {/* Image */}
              <div style={{
                width: '100%',
                height: '70%',
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                {/* Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: hoveredItem === item.id 
                    ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.3) 0%, rgba(17, 24, 39, 0.7) 100%)'
                    : 'linear-gradient(180deg, transparent 0%, rgba(17, 24, 39, 0.8) 100%)',
                  transition: 'all 0.4s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: hoveredItem === item.id ? 1 : 0
                }}>
                  <div style={{
                    display: 'flex',
                    gap: '15px',
                    transform: hoveredItem === item.id ? 'scale(1)' : 'scale(0.8)',
                    transition: 'all 0.3s ease'
                  }}>
                    <button style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}>
                      <Eye size={20} color="#ffffff" />
                    </button>
                    <button style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}>
                      <Heart size={20} color="#ffffff" />
                    </button>
                  </div>
                </div>

                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  padding: '5px 12px',
                  backgroundColor: THEME.colors.accent,
                  color: THEME.colors.primary,
                  borderRadius: '15px',
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div style={{
                padding: '20px',
                height: '30%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <h3 style={{
                    fontFamily: THEME.fonts.heading,
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    marginBottom: '8px',
                    color: '#ffffff'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontFamily: THEME.fonts.body,
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: '1.5'
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '80px 20px',
            color: 'rgba(255,255,255,0.6)'
          }}>
            <Grid size={60} style={{ margin: '0 auto 20px', opacity: 0.3 }} />
            <h3 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: '1.5rem',
              marginBottom: '10px'
            }}>
              No items found
            </h3>
            <p style={{ fontFamily: THEME.fonts.body }}>
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <h2 style={{
          fontFamily: THEME.fonts.heading,
          fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem',
          fontWeight: '800',
          marginBottom: '20px',
          color: '#ffffff'
        }}>
          Ready to wear the story?
        </h2>
        <p style={{
          fontFamily: THEME.fonts.body,
          fontSize: '1.1rem',
          color: 'rgba(255,255,255,0.8)',
          marginBottom: '40px',
          maxWidth: '500px',
          margin: '0 auto 40px'
        }}>
          Browse our complete collection and find your perfect streetwear pieces
        </p>
        <Link to="/products" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '15px 30px',
          backgroundColor: THEME.colors.accent,
          color: THEME.colors.primary,
          textDecoration: 'none',
          borderRadius: '12px',
          fontFamily: THEME.fonts.body,
          fontWeight: '600',
          fontSize: '1.1rem',
          transition: 'all 0.3s ease',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          <ShoppingBag size={20} />
          Shop Collection
        </Link>
      </div>
    </div>
  );
};

export default GalleryPage;