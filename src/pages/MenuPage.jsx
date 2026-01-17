import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Circle, List, Filter, Search, Heart, ShoppingBag } from 'lucide-react';

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

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState(new Set());

  const categories = [
    { id: 'All', name: 'All Items', count: 124 },
    { id: 'hoodies', name: 'Hoodies', count: 32 },
    { id: 'tshirts', name: 'T-Shirts', count: 45 },
    { id: 'joggers', name: 'Joggers', count: 28 },
    { id: 'accessories', name: 'Accessories', count: 19 }
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Urban Hoodie',
      price: 89,
      originalPrice: 120,
      category: 'hoodies',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400',
      badge: 'Bestseller',
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: 'Essential Street Tee',
      price: 35,
      category: 'tshirts',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      badge: 'New',
      rating: 4.6,
      reviews: 89
    },
    {
      id: 3,
      name: 'Comfort Fit Joggers',
      price: 65,
      originalPrice: 85,
      category: 'joggers',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400',
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: 'Urban Cap Collection',
      price: 28,
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400',
      badge: 'Limited',
      rating: 4.5,
      reviews: 67
    },
    {
      id: 5,
      name: 'Minimalist Crew Neck',
      price: 55,
      category: 'tshirts',
      image: 'https://images.unsplash.com/photo-1583743814966-8936f37f518b?w=400',
      rating: 4.9,
      reviews: 203
    },
    {
      id: 6,
      name: 'Premium Zip Hoodie',
      price: 95,
      category: 'hoodies',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
      badge: 'Premium',
      rating: 4.7,
      reviews: 98
    }
  ];

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ 
      backgroundColor: THEME.colors.primary,
      minHeight: '100vh',
      paddingTop: '20px',
      fontFamily: THEME.fonts.body
    }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(17,24,39,0.95) 100%)',
        backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        padding: '60px 16px 40px 16px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: '800',
          color: '#ffffff',
          marginBottom: '12px',
          fontFamily: THEME.fonts.heading,
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          lineHeight: '1.2'
        }}>
          Streetwear Collection
        </h1>
        <p style={{
          fontSize: '16px',
          color: 'rgba(255,255,255,0.9)',
          marginBottom: '32px',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          Premium urban fashion with substance
        </p>

        {/* Search Bar */}
        <div style={{
          position: 'relative',
          maxWidth: '400px',
          margin: '0 auto'
        }}>
          <Search style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#666',
            width: '20px',
            height: '20px'
          }} />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '16px 16px 16px 48px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '16px',
              backgroundColor: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(10px)',
              outline: 'none'
            }}
          />
        </div>
      </div>

      {/* Categories & Controls */}
      <div style={{
        padding: '24px 16px',
        borderBottom: '1px solid rgba(245,158,11,0.2)'
      }}>
        {/* Category Scroll */}
        <div style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '12px',
          marginBottom: '20px',
          paddingBottom: '8px'
        }}>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              style={{
                padding: '12px 20px',
                borderRadius: '24px',
                border: 'none',
                fontSize: '14px',
                fontWeight: '600',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backgroundColor: selectedCategory === category.id ? THEME.colors.accent : 'rgba(255,255,255,0.1)',
                color: selectedCategory === category.id ? '#000' : '#fff'
              }}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* View Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            gap: '8px'
          }}>
            <button
              onClick={() => setViewMode('grid')}
              style={{
                padding: '12px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: viewMode === 'grid' ? THEME.colors.accent : 'rgba(255,255,255,0.1)',
                color: viewMode === 'grid' ? '#000' : '#fff',
                cursor: 'pointer'
              }}
            >
              <Circle size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              style={{
                padding: '12px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: viewMode === 'list' ? THEME.colors.accent : 'rgba(255,255,255,0.1)',
                color: viewMode === 'list' ? '#000' : '#fff',
                cursor: 'pointer'
              }}
            >
              <List size={20} />
            </button>
          </div>

          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid rgba(245,158,11,0.3)',
            backgroundColor: 'transparent',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '14px'
          }}>
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div style={{
        padding: '24px 16px',
        paddingBottom: THEME.spacing.sectionPadding
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fit, minmax(160px, 1fr))' : '1fr',
          gap: viewMode === 'grid' ? '20px' : '16px'
        }}>
          {filteredProducts.map(product => (
            <div
              key={product.id}
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '16px',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: viewMode === 'list' ? 'flex' : 'block'
              }}
            >
              <div style={{
                position: 'relative',
                width: viewMode === 'list' ? '120px' : '100%',
                height: viewMode === 'list' ? '120px' : '200px',
                flexShrink: 0
              }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                
                {product.badge && (
                  <span style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '10px',
                    fontWeight: '600',
                    backgroundColor: product.badge === 'New' ? '#10b981' : 
                                   product.badge === 'Limited' ? '#ef4444' : 
                                   product.badge === 'Premium' ? '#8b5cf6' : THEME.colors.accent,
                    color: '#fff'
                  }}>
                    {product.badge}
                  </span>
                )}

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(product.id);
                  }}
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    padding: '8px',
                    borderRadius: '50%',
                    border: 'none',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Heart
                    size={16}
                    style={{
                      color: favorites.has(product.id) ? '#ef4444' : '#666',
                      fill: favorites.has(product.id) ? '#ef4444' : 'none'
                    }}
                  />
                </button>
              </div>

              <div style={{
                padding: '16px',
                flex: 1
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#fff',
                  marginBottom: '8px',
                  lineHeight: '1.3'
                }}>
                  {product.name}
                </h3>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px'
                }}>
                  <Star size={14} style={{ color: THEME.colors.accent, fill: THEME.colors.accent }} />
                  <span style={{ fontSize: '14px', color: '#ccc' }}>
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: THEME.colors.accent
                    }}>
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span style={{
                        fontSize: '14px',
                        color: '#666',
                        textDecoration: 'line-through'
                      }}>
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  <button style={{
                    padding: '8px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: THEME.colors.accent,
                    color: '#000',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <ShoppingBag size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#666'
          }}>
            <p style={{ fontSize: '18px', marginBottom: '8px' }}>No products found</p>
            <p style={{ fontSize: '14px' }}>Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Floating Cart Button */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000
      }}>
        <Link to="/cart">
          <button style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: THEME.colors.accent,
            color: '#000',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(245,158,11,0.3)',
            transition: 'all 0.3s ease'
          }}>
            <ShoppingBag size={24} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuPage;