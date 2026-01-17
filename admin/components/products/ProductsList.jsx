/**
 * ProductList
 * 
 * Complete product catalog management.
 * - Search & advanced filters
 * - Sortable columns
 * - Bulk actions
 * - Quick edit inline
 * - Status management
 * - Category filtering
 * - Export functionality
 * 
 * Works with Inventory for stock data.
 */

import React, { useState, useEffect } from 'react';
import {
  Package,
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  Copy,
  Archive,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  Download,
  Upload,
  Image,
  Tag,
  DollarSign,
  Layers,
  Box,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ExternalLink,
  Grid,
  List,
  RefreshCw,
  Star,
  BarChart2
} from 'lucide-react';

export function ProductList() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'grid'
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filters, setFilters] = useState({
    status: 'all',
    category: 'all',
    stock: 'all',
    priceRange: 'all'
  });
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showBulkActions, setShowBulkActions] = useState(false);

  const itemsPerPage = 15;

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { id: 1, name: 'Premium Wireless Earbuds', sku: 'WE-001', category: 'Electronics', price: 129.99, comparePrice: 159.99, cost: 45.00, stock: 156, status: 'active', variants: 3, image: null, views: 2340, sales: 456, rating: 4.8 },
        { id: 2, name: 'Organic Cotton T-Shirt', sku: 'CT-102', category: 'Apparel', price: 34.99, comparePrice: null, cost: 12.00, stock: 12, status: 'active', variants: 8, image: null, views: 1890, sales: 389, rating: 4.5 },
        { id: 3, name: 'Smart Home Hub', sku: 'SH-050', category: 'Electronics', price: 199.99, comparePrice: 249.99, cost: 85.00, stock: 67, status: 'active', variants: 1, image: null, views: 3120, sales: 234, rating: 4.7 },
        { id: 4, name: 'Yoga Mat Pro', sku: 'YM-015', category: 'Fitness', price: 49.99, comparePrice: null, cost: 18.00, stock: 89, status: 'active', variants: 4, image: null, views: 1450, sales: 312, rating: 4.6 },
        { id: 5, name: 'Stainless Steel Water Bottle', sku: 'WB-088', category: 'Accessories', price: 24.99, comparePrice: 29.99, cost: 8.00, stock: 234, status: 'active', variants: 6, image: null, views: 2100, sales: 567, rating: 4.9 },
        { id: 6, name: 'Vintage Desk Lamp', sku: 'DL-045', category: 'Home', price: 89.99, comparePrice: null, cost: 35.00, stock: 23, status: 'active', variants: 2, image: null, views: 234, sales: 3, rating: 3.8 },
        { id: 7, name: 'Leather Journal Set', sku: 'LJ-012', category: 'Stationery', price: 45.99, comparePrice: 54.99, cost: 15.00, stock: 45, status: 'active', variants: 3, image: null, views: 189, sales: 5, rating: 4.2 },
        { id: 8, name: 'Ceramic Planter Large', sku: 'CP-067', category: 'Home', price: 39.99, comparePrice: null, cost: 14.00, stock: 0, status: 'active', variants: 4, image: null, views: 312, sales: 7, rating: 4.0 },
        { id: 9, name: 'Wool Blend Scarf', sku: 'WS-033', category: 'Apparel', price: 54.99, comparePrice: 64.99, cost: 22.00, stock: 67, status: 'draft', variants: 5, image: null, views: 156, sales: 4, rating: 4.3 },
        { id: 10, name: 'Smart Watch Series 5', sku: 'SW-005', category: 'Electronics', price: 299.99, comparePrice: 349.99, cost: 120.00, stock: 34, status: 'active', variants: 2, image: null, views: 4560, sales: 189, rating: 4.8 },
        { id: 11, name: 'Bamboo Cutting Board', sku: 'CB-021', category: 'Kitchen', price: 29.99, comparePrice: null, cost: 10.00, stock: 178, status: 'active', variants: 3, image: null, views: 890, sales: 234, rating: 4.7 },
        { id: 12, name: 'Resistance Bands Set', sku: 'RB-044', category: 'Fitness', price: 19.99, comparePrice: 24.99, cost: 6.00, stock: 312, status: 'active', variants: 1, image: null, views: 1230, sales: 445, rating: 4.4 },
        { id: 13, name: 'Aromatherapy Diffuser', sku: 'AD-078', category: 'Home', price: 44.99, comparePrice: null, cost: 16.00, stock: 56, status: 'active', variants: 3, image: null, views: 780, sales: 123, rating: 4.5 },
        { id: 14, name: 'Canvas Tote Bag', sku: 'TB-056', category: 'Accessories', price: 18.99, comparePrice: null, cost: 5.00, stock: 267, status: 'active', variants: 7, image: null, views: 1560, sales: 389, rating: 4.6 },
        { id: 15, name: 'Bluetooth Speaker Mini', sku: 'BS-032', category: 'Electronics', price: 59.99, comparePrice: 79.99, cost: 25.00, stock: 89, status: 'active', variants: 4, image: null, views: 2340, sales: 278, rating: 4.3 },
        { id: 16, name: 'Winter Jacket 2023', sku: 'WJ-099', category: 'Apparel', price: 149.99, comparePrice: 199.99, cost: 55.00, stock: 0, status: 'archived', variants: 6, image: null, views: 890, sales: 67, rating: 4.1 },
        { id: 17, name: 'Meditation Cushion', sku: 'MC-023', category: 'Fitness', price: 39.99, comparePrice: null, cost: 14.00, stock: 45, status: 'draft', variants: 3, image: null, views: 0, sales: 0, rating: null },
        { id: 18, name: 'Desk Organizer Set', sku: 'DO-067', category: 'Stationery', price: 34.99, comparePrice: 39.99, cost: 12.00, stock: 123, status: 'active', variants: 2, image: null, views: 670, sales: 156, rating: 4.4 }
      ]);
      setLoading(false);
    }, 500);
  }, []);

  // Filter & sort products
  const filteredProducts = products.filter(product => {
    // Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (!product.name.toLowerCase().includes(query) &&
          !product.sku.toLowerCase().includes(query)) {
        return false;
      }
    }

    // Status filter
    if (filters.status !== 'all' && product.status !== filters.status) {
      return false;
    }

    // Category filter
    if (filters.category !== 'all' && product.category !== filters.category) {
      return false;
    }

    // Stock filter
    if (filters.stock === 'in_stock' && product.stock === 0) return false;
    if (filters.stock === 'low_stock' && (product.stock === 0 || product.stock > 20)) return false;
    if (filters.stock === 'out_of_stock' && product.stock !== 0) return false;

    // Price range filter
    if (filters.priceRange === 'under_25' && product.price >= 25) return false;
    if (filters.priceRange === '25_50' && (product.price < 25 || product.price >= 50)) return false;
    if (filters.priceRange === '50_100' && (product.price < 50 || product.price >= 100)) return false;
    if (filters.priceRange === 'over_100' && product.price < 100) return false;

    return true;
  }).sort((a, b) => {
    let aVal = a[sortBy];
    let bVal = b[sortBy];

    if (typeof aVal === 'string') {
      aVal = aVal.toLowerCase();
      bVal = bVal.toLowerCase();
    }

    if (sortOrder === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Get unique categories
  const categories = [...new Set(products.map(p => p.category))];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const getStockStatus = (stock) => {
    if (stock === 0) return { label: 'Out of Stock', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.1)' };
    if (stock <= 20) return { label: 'Low Stock', color: '#f59e0b', bg: 'rgba(249, 115, 22, 0.1)' };
    return { label: 'In Stock', color: '#22c55e', bg: 'rgba(34, 197, 94, 0.1)' };
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active':
        return { label: 'Active', color: '#22c55e', bg: 'rgba(34, 197, 94, 0.1)' };
      case 'draft':
        return { label: 'Draft', color: '#6b7280', bg: 'rgba(107, 114, 128, 0.1)' };
      case 'archived':
        return { label: 'Archived', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.1)' };
      default:
        return { label: status, color: '#6b7280', bg: 'rgba(107, 114, 128, 0.1)' };
    }
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const handleSelectAll = () => {
    if (selectedProducts.length === paginatedProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(paginatedProducts.map(p => p.id));
    }
  };

  const handleSelectProduct = (id) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter(p => p !== id));
    } else {
      setSelectedProducts([...selectedProducts, id]);
    }
  };

  const clearFilters = () => {
    setFilters({
      status: 'all',
      category: 'all',
      stock: 'all',
      priceRange: 'all'
    });
    setSearchQuery('');
  };

  const hasActiveFilters = filters.status !== 'all' || 
                           filters.category !== 'all' || 
                           filters.stock !== 'all' || 
                           filters.priceRange !== 'all' ||
                           searchQuery !== '';

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <Package size={32} style={{ animation: 'pulse 1s ease-in-out infinite' }} />
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <h1 style={styles.title}>All Products</h1>
          <span style={styles.subtitle}>
            {formatNumber(filteredProducts.length)} products
            {hasActiveFilters && ` (filtered from ${formatNumber(products.length)})`}
          </span>
        </div>
        <div style={styles.headerActions}>
          <button style={styles.actionBtn}>
            <Download size={16} />
            Export
          </button>
          <button style={styles.actionBtn}>
            <Upload size={16} />
            Import
          </button>
          <button style={styles.primaryBtn}>
            <Plus size={16} />
            Add Product
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div style={styles.toolbar}>
        <div style={styles.searchBox}>
          <Search size={18} color="var(--color-text-muted)" />
          <input
            type="text"
            placeholder="Search products by name or SKU..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
          {searchQuery && (
            <button
              style={styles.clearSearchBtn}
              onClick={() => setSearchQuery('')}
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div style={styles.toolbarRight}>
          <button
            style={{
              ...styles.filterBtn,
              ...(showFilters ? styles.filterBtnActive : {})
            }}
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={16} />
            Filters
            {hasActiveFilters && <span style={styles.filterBadge} />}
          </button>

          <div style={styles.viewToggle}>
            <button
              style={{
                ...styles.viewToggleBtn,
                ...(viewMode === 'table' ? styles.viewToggleBtnActive : {})
              }}
              onClick={() => setViewMode('table')}
            >
              <List size={16} />
            </button>
            <button
              style={{
                ...styles.viewToggleBtn,
                ...(viewMode === 'grid' ? styles.viewToggleBtnActive : {})
              }}
              onClick={() => setViewMode('grid')}
            >
              <Grid size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div style={styles.filtersPanel}>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Status</label>
            <select
              value={filters.status}
              onChange={(e) => setFilters({ ...filters, status: e.target.value })}
              style={styles.filterSelect}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Category</label>
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              style={styles.filterSelect}
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Stock</label>
            <select
              value={filters.stock}
              onChange={(e) => setFilters({ ...filters, stock: e.target.value })}
              style={styles.filterSelect}
            >
              <option value="all">All Stock</option>
              <option value="in_stock">In Stock</option>
              <option value="low_stock">Low Stock</option>
              <option value="out_of_stock">Out of Stock</option>
            </select>
          </div>

          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Price Range</label>
            <select
              value={filters.priceRange}
              onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              style={styles.filterSelect}
            >
              <option value="all">All Prices</option>
              <option value="under_25">Under $25</option>
              <option value="25_50">$25 - $50</option>
              <option value="50_100">$50 - $100</option>
              <option value="over_100">Over $100</option>
            </select>
          </div>

          {hasActiveFilters && (
            <button style={styles.clearFiltersBtn} onClick={clearFilters}>
              <X size={14} />
              Clear All
            </button>
          )}
        </div>
      )}

      {/* Bulk Actions Bar */}
      {selectedProducts.length > 0 && (
        <div style={styles.bulkActionsBar}>
          <span style={styles.bulkCount}>
            {selectedProducts.length} selected
          </span>
          <div style={styles.bulkActions}>
            <button style={styles.bulkActionBtn}>
              <Edit size={14} />
              Edit
            </button>
            <button style={styles.bulkActionBtn}>
              <Tag size={14} />
              Update Price
            </button>
            <button style={styles.bulkActionBtn}>
              <Layers size={14} />
              Change Category
            </button>
            <button style={styles.bulkActionBtn}>
              <Archive size={14} />
              Archive
            </button>
            <button style={{...styles.bulkActionBtn, color: '#ef4444'}}>
              <Trash2 size={14} />
              Delete
            </button>
          </div>
          <button
            style={styles.bulkClearBtn}
            onClick={() => setSelectedProducts([])}
          >
            <X size={14} />
            Clear
          </button>
        </div>
      )}

      {/* Table View */}
      {viewMode === 'table' && (
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeaderRow}>
                <th style={styles.tableHeaderCell}>
                  <input
                    type="checkbox"
                    checked={selectedProducts.length === paginatedProducts.length && paginatedProducts.length > 0}
                    onChange={handleSelectAll}
                    style={styles.checkbox}
                  />
                </th>
                <th style={styles.tableHeaderCell}>Product</th>
                <th
                  style={{...styles.tableHeaderCell, ...styles.sortableHeader}}
                  onClick={() => handleSort('sku')}
                >
                  SKU
                  {sortBy === 'sku' && (
                    sortOrder === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                  )}
                </th>
                <th
                  style={{...styles.tableHeaderCell, ...styles.sortableHeader}}
                  onClick={() => handleSort('category')}
                >
                  Category
                  {sortBy === 'category' && (
                    sortOrder === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                  )}
                </th>
                <th
                  style={{...styles.tableHeaderCell, ...styles.sortableHeader}}
                  onClick={() => handleSort('price')}
                >
                  Price
                  {sortBy === 'price' && (
                    sortOrder === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                  )}
                </th>
                <th
                  style={{...styles.tableHeaderCell, ...styles.sortableHeader}}
                  onClick={() => handleSort('stock')}
                >
                  Stock
                  {sortBy === 'stock' && (
                    sortOrder === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                  )}
                </th>
                <th style={styles.tableHeaderCell}>Status</th>
                <th
                  style={{...styles.tableHeaderCell, ...styles.sortableHeader}}
                  onClick={() => handleSort('sales')}
                >
                  Sales
                  {sortBy === 'sales' && (
                    sortOrder === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                  )}
                </th>
                <th style={styles.tableHeaderCell}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedProducts.map((product) => {
                const stockStatus = getStockStatus(product.stock);
                const statusBadge = getStatusBadge(product.status);
                const isSelected = selectedProducts.includes(product.id);
                const margin = product.price - product.cost;
                const marginPercent = ((margin / product.price) * 100).toFixed(0);

                return (
                  <tr
                    key={product.id}
                    style={{
                      ...styles.tableRow,
                      ...(isSelected ? styles.tableRowSelected : {})
                    }}
                  >
                    <td style={styles.tableCell}>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleSelectProduct(product.id)}
                        style={styles.checkbox}
                      />
                    </td>
                    <td style={styles.tableCell}>
                      <div style={styles.productCell}>
                        <div style={styles.productImageThumb}>
                          {product.image ? (
                            <img src={product.image} alt="" style={styles.productImg} />
                          ) : (
                            <Package size={20} color="var(--color-text-muted)" />
                          )}
                        </div>
                        <div style={styles.productInfo}>
                          <span style={styles.productName}>{product.name}</span>
                          <span style={styles.productVariants}>
                            {product.variants} variant{product.variants !== 1 ? 's' : ''}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td style={styles.tableCell}>
                      <span style={styles.skuText}>{product.sku}</span>
                    </td>
                    <td style={styles.tableCell}>
                      <span style={styles.categoryBadge}>{product.category}</span>
                    </td>
                    <td style={styles.tableCell}>
                      <div style={styles.priceCell}>
                        <span style={styles.priceMain}>{formatCurrency(product.price)}</span>
                        {product.comparePrice && (
                          <span style={styles.comparePrice}>
                            {formatCurrency(product.comparePrice)}
                          </span>
                        )}
                        <span style={styles.marginText}>{marginPercent}% margin</span>
                      </div>
                    </td>
                    <td style={styles.tableCell}>
                      <div style={styles.stockCell}>
                        <span style={styles.stockNumber}>{product.stock}</span>
                        <span style={{
                          ...styles.stockBadge,
                          backgroundColor: stockStatus.bg,
                          color: stockStatus.color
                        }}>
                          {stockStatus.label}
                        </span>
                      </div>
                    </td>
                    <td style={styles.tableCell}>
                      <span style={{
                        ...styles.statusBadge,
                        backgroundColor: statusBadge.bg,
                        color: statusBadge.color
                      }}>
                        {statusBadge.label}
                      </span>
                    </td>
                    <td style={styles.tableCell}>
                      <div style={styles.salesCell}>
                        <span style={styles.salesNumber}>{formatNumber(product.sales)}</span>
                        {product.rating && (
                          <span style={styles.ratingBadge}>
                            <Star size={10} fill="#f59e0b" color="#f59e0b" />
                            {product.rating}
                          </span>
                        )}
                      </div>
                    </td>
                    <td style={styles.tableCell}>
                      <div style={styles.actionsCell}>
                        <button style={styles.actionIconBtn} title="Edit">
                          <Edit size={14} />
                        </button>
                        <button style={styles.actionIconBtn} title="View">
                          <Eye size={14} />
                        </button>
                        <button style={styles.actionIconBtn} title="Duplicate">
                          <Copy size={14} />
                        </button>
                        <button style={styles.actionIconBtn} title="More">
                          <MoreHorizontal size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div style={styles.gridContainer}>
          {paginatedProducts.map((product) => {
            const stockStatus = getStockStatus(product.stock);
            const statusBadge = getStatusBadge(product.status);
            const isSelected = selectedProducts.includes(product.id);

            return (
              <div
                key={product.id}
                style={{
                  ...styles.gridCard,
                  ...(isSelected ? styles.gridCardSelected : {})
                }}
              >
                <div style={styles.gridCardHeader}>
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => handleSelectProduct(product.id)}
                    style={styles.checkbox}
                  />
                  <span style={{
                    ...styles.statusBadge,
                    backgroundColor: statusBadge.bg,
                    color: statusBadge.color
                  }}>
                    {statusBadge.label}
                  </span>
                </div>
                <div style={styles.gridCardImage}>
                  <Package size={40} color="var(--color-text-muted)" />
                </div>
                <div style={styles.gridCardBody}>
                  <h4 style={styles.gridCardName}>{product.name}</h4>
                  <span style={styles.gridCardSku}>{product.sku}</span>
                  <div style={styles.gridCardPrice}>
                    <span style={styles.priceMain}>{formatCurrency(product.price)}</span>
                    {product.comparePrice && (
                      <span style={styles.comparePrice}>
                        {formatCurrency(product.comparePrice)}
                      </span>
                    )}
                  </div>
                  <div style={styles.gridCardMeta}>
                    <span style={{
                      ...styles.stockBadge,
                      backgroundColor: stockStatus.bg,
                      color: stockStatus.color
                    }}>
                      {product.stock} in stock
                    </span>
                    <span style={styles.gridCardSales}>
                      {formatNumber(product.sales)} sold
                    </span>
                  </div>
                </div>
                <div style={styles.gridCardActions}>
                  <button style={styles.gridActionBtn}>
                    <Edit size={14} />
                    Edit
                  </button>
                  <button style={styles.gridActionBtnIcon}>
                    <MoreHorizontal size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div style={styles.emptyState}>
          <Package size={48} color="var(--color-text-muted)" />
          <h3 style={styles.emptyTitle}>No products found</h3>
          <p style={styles.emptyMessage}>
            {hasActiveFilters
              ? 'Try adjusting your filters or search query'
              : 'Get started by adding your first product'}
          </p>
          {hasActiveFilters ? (
            <button style={styles.primaryBtn} onClick={clearFilters}>
              Clear Filters
            </button>
          ) : (
            <button style={styles.primaryBtn}>
              <Plus size={16} />
              Add Product
            </button>
          )}
        </div>
      )}

      {/* Pagination */}
      {filteredProducts.length > 0 && (
        <div style={styles.pagination}>
          <span style={styles.paginationInfo}>
            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredProducts.length)} of {filteredProducts.length} products
          </span>
          <div style={styles.paginationControls}>
            <button
              style={{
                ...styles.paginationBtn,
                ...(currentPage === 1 ? styles.paginationBtnDisabled : {})
              }}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={16} />
              Previous
            </button>

            <div style={styles.pageNumbers}>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  style={{
                    ...styles.pageNumber,
                    ...(currentPage === i + 1 ? styles.pageNumberActive : {})
                  }}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              style={{
                ...styles.paginationBtn,
                ...(currentPage === totalPages ? styles.paginationBtnDisabled : {})
              }}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '24px 32px',
    maxWidth: '100%'
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '400px',
    gap: '16px',
    color: 'var(--color-text-muted)'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '24px'
  },
  headerLeft: {},
  title: {
    fontSize: '28px',
    fontWeight: 700,
    margin: '0 0 4px 0'
  },
  subtitle: {
    fontSize: '14px',
    color: 'var(--color-text-muted)'
  },
  headerActions: {
    display: 'flex',
    gap: '12px'
  },
  actionBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 16px',
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: '10px',
    color: 'var(--color-text)',
    fontSize: '14px',
    cursor: 'pointer'
  },
  primaryBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    backgroundColor: 'var(--color-primary)',
    border: 'none',
    borderRadius: '10px',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: '12px',
    width: '400px'
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'transparent',
    border: 'none',
    color: 'var(--color-text)',
    fontSize: '14px',
    outline: 'none'
  },
  clearSearchBtn: {
    padding: '4px',
    backgroundColor: 'var(--color-surface-2)',
    border: 'none',
    borderRadius: '6px',
    color: 'var(--color-text-muted)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  toolbarRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  filterBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 16px',
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: '10px',
    color: 'var(--color-text)',
    fontSize: '14px',
    cursor: 'pointer',
    position: 'relative'
  },
  filterBtnActive: {
    backgroundColor: 'var(--color-primary)',
    color: '#ffffff',
    borderColor: 'var(--color-primary)'
  },
  filterBadge: {
    position: 'absolute',
    top: '-4px',
    right: '-4px',
    width: '10px',
    height: '10px',
    backgroundColor: '#ef4444',
    borderRadius: '50%'
  },
  viewToggle: {
    display: 'flex',
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: '10px',
    overflow: 'hidden'
  },
  viewToggleBtn: {
    padding: '10px 14px',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'var(--color-text-muted)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewToggleBtnActive: {
    backgroundColor: 'var(--color-primary)',
    color: '#ffffff'
  },
  filtersPanel: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px 20px',
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: '12px',
    marginBottom: '16px'
  },
  filterGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  filterLabel: {
    fontSize: '11px',
    fontWeight: 600,
    color: 'var(--color-text-muted)',
    textTransform: 'uppercase'
  },
  filterSelect: {
    padding: '8px 12px',
    backgroundColor: 'var(--color-surface-2)',
    border: '1px solid var(--color-border)',
    borderRadius: '8px',
    color: 'var(--color-text)',
    fontSize: '13px',
    cursor: 'pointer',
    outline: 'none',
    minWidth: '140px'
  },
  clearFiltersBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 14px',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#ef4444',
    fontSize: '13px',
    cursor: 'pointer',
    marginLeft: 'auto'
  },
  bulkActionsBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '12px 20px',
    backgroundColor: 'var(--color-primary)',
    borderRadius: '12px',
    marginBottom: '16px'
  },
  bulkCount: {
    color: '#ffffff',
    fontWeight: 600,
    fontSize: '14px'
  },
  bulkActions: {
    display: 'flex',
    gap: '8px',
    flex: 1
  },
  bulkActionBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 14px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    border: 'none',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '13px',
    cursor: 'pointer'
  },
  bulkClearBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 14px',
    backgroundColor: 'transparent',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '13px',
    cursor: 'pointer'
  },
  tableContainer: {
    backgroundColor: 'var(--color-surface)',
    borderRadius: '16px',
    border: '1px solid var(--color-border)',
    overflow: 'hidden'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  tableHeaderRow: {
    backgroundColor: 'var(--color-surface-2)'
  },
  tableHeaderCell: {
    padding: '14px 16px',
    textAlign: 'left',
    fontSize: '12px',
    fontWeight: 600,
    color: 'var(--color-text-muted)',
    textTransform: 'uppercase',
    borderBottom: '1px solid var(--color-border)'
  },
  sortableHeader: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  },
  tableRow: {
    borderBottom: '1px solid var(--color-border)',
    transition: 'background-color 0.15s'
  },
  tableRowSelected: {
    backgroundColor: 'rgba(59, 130, 246, 0.1)'
  },
  tableCell: {
    padding: '14px 16px',
    fontSize: '14px'
  },
  checkbox: {
    width: '18px',
    height: '18px',
    cursor: 'pointer'
  },
  productCell: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  productImageThumb: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    backgroundColor: 'var(--color-surface-2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  productImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  productInfo: {},
  productName: {
    display: 'block',
    fontWeight: 600
  },
  productVariants: {
    fontSize: '12px',
    color: 'var(--color-text-muted)'
  },
  skuText: {
    fontFamily: 'monospace',
    fontSize: '13px',
    color: 'var(--color-text-muted)'
  },
  categoryBadge: {
    padding: '4px 10px',
    backgroundColor: 'var(--color-surface-2)',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: 500
  },
  priceCell: {},
  priceMain: {
    display: 'block',
    fontWeight: 700
  },
  comparePrice: {
    fontSize: '12px',
    color: 'var(--color-text-muted)',
    textDecoration: 'line-through'
  },
  marginText: {
    display: 'block',
    fontSize: '11px',
    color: '#22c55e'
  },
  stockCell: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  stockNumber: {
    fontWeight: 600
  },
  stockBadge: {
    display: 'inline-block',
    padding: '2px 8px',
    borderRadius: '8px',
    fontSize: '11px',
    fontWeight: 500
  },
  statusBadge: {
    display: 'inline-block',
    padding: '4px 10px',
    borderRadius: '8px',
    fontSize: '11px',
    fontWeight: 600,
    textTransform: 'capitalize'
  },
  salesCell: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  salesNumber: {
    fontWeight: 600
  },
  ratingBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '11px',
    color: '#f59e0b'
  },
  actionsCell: {
    display: 'flex',
    gap: '4px'
  },
  actionIconBtn: {
    padding: '8px',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '8px',
    color: 'var(--color-text-muted)',
    cursor: 'pointer'
  },
  // Grid View
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px'
  },
  gridCard: {
    backgroundColor: 'var(--color-surface)',
    borderRadius: '16px',
    border: '1px solid var(--color-border)',
    overflow: 'hidden',
    transition: 'all 0.2s'
  },
  gridCardSelected: {
    borderColor: 'var(--color-primary)',
    boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.2)'
  },
  gridCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    borderBottom: '1px solid var(--color-border)'
  },
  gridCardImage: {
    height: '160px',
    backgroundColor: 'var(--color-surface-2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gridCardBody: {
    padding: '16px'
  },
  gridCardName: {
    fontSize: '15px',
    fontWeight: 600,
    margin: '0 0 4px 0',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  gridCardSku: {
    fontSize: '12px',
    color: 'var(--color-text-muted)',
    fontFamily: 'monospace'
  },
  gridCardPrice: {
    marginTop: '12px'
  },
  gridCardMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '12px'
  },
  gridCardSales: {
    fontSize: '12px',
    color: 'var(--color-text-muted)'
  },
  gridCardActions: {
    display: 'flex',
    gap: '8px',
    padding: '12px 16px',
    borderTop: '1px solid var(--color-border)'
  },
  gridActionBtn: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    padding: '10px',
    backgroundColor: 'var(--color-surface-2)',
    border: 'none',
    borderRadius: '8px',
    color: 'var(--color-text)',
    fontSize: '13px',
    cursor: 'pointer'
  },
  gridActionBtnIcon: {
    padding: '10px',
    backgroundColor: 'var(--color-surface-2)',
    border: 'none',
    borderRadius: '8px',
    color: 'var(--color-text-muted)',
    cursor: 'pointer'
  },
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 20px',
    backgroundColor: 'var(--color-surface)',
    borderRadius: '16px',
    border: '1px solid var(--color-border)',
    gap: '16px'
  },
  emptyTitle: {
    fontSize: '18px',
    fontWeight: 600,
    margin: 0
  },
  emptyMessage: {
    fontSize: '14px',
    color: 'var(--color-text-muted)',
    margin: 0
  },
  pagination: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '24px'
  },
  paginationInfo: {
    fontSize: '14px',
    color: 'var(--color-text-muted)'
  },
  paginationControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  paginationBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '10px 16px',
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: '10px',
    color: 'var(--color-text)',
    fontSize: '14px',
    cursor: 'pointer'
  },
  paginationBtnDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed'
  },
  pageNumbers: {
    display: 'flex',
    gap: '4px'
  },
  pageNumber: {
    width: '36px',
    height: '36px',
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: '8px',
    color: 'var(--color-text)',
    fontSize: '14px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pageNumberActive: {
    backgroundColor: 'var(--color-primary)',
    borderColor: 'var(--color-primary)',
    color: '#ffffff'
  }
};

export default ProductList;