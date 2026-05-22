# Hksparkle - Premium Fashion E-Commerce Website

A modern, elegant, and fully responsive fashion e-commerce website for the Hksparkle brand. Built with HTML5, CSS3, and vanilla JavaScript.

![Hksparkle](https://img.shields.io/badge/Version-1.0.0-gold)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🌟 Features

### Design & UI
- **Modern & Elegant Design** - Clean, sophisticated layout with premium feel
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Scroll animations, hover effects, and transitions
- **Custom Typography** - Playfair Display and Poppins font combination

### Functionality
- **Mobile Navigation** - Hamburger menu with smooth toggle
- **Product Quick View** - Modal popup with size and quantity selection
- **Wishlist System** - Add/remove products to wishlist
- **Shopping Cart** - Real-time cart counter
- **Newsletter Signup** - Email subscription form
- **Notification System** - Toast notifications for user actions
- **Smooth Scrolling** - Animated scroll to sections
- **Parallax Effects** - Hero section parallax on scroll
- **Lazy Loading** - Optimized image loading

### Sections
- Hero section with call-to-action
- Category showcase (Women, Men, Accessories, Shoes)
- New arrivals product grid
- Featured collections
- About section with brand features
- Newsletter subscription
- Footer with social links

## 📁 Project Structure

```
tushadgfhjk/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required - pure HTML/CSS/JS

### Installation

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd tushadgfhjk
   ```

2. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local development server (recommended)

### Using a Local Server

#### Option 1: Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Option 2: Node.js (http-server)
```bash
npx http-server -p 8000
```

#### Option 3: VS Code Live Server
- Install "Live Server" extension
- Right-click on `index.html`
- Select "Open with Live Server"

#### Option 4: PHP
```bash
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2c2c2c;      /* Main dark color */
    --secondary-color: #d4af37;     /* Gold accent */
    --accent-color: #8b7355;        /* Brown accent */
    --text-color: #333;             /* Body text */
    --light-text: #666;             /* Secondary text */
    --bg-color: #ffffff;            /* Background */
    --light-bg: #f9f9f9;            /* Light background */
}
```

### Typography
The website uses Google Fonts:
- **Playfair Display** - Headings (serif)
- **Poppins** - Body text (sans-serif)

To change fonts, update the Google Fonts link in `index.html` and the font-family in `styles.css`.

### Images
Replace the Unsplash placeholder images with your own:
1. Locate image URLs in `index.html`
2. Replace with your product/category images
3. Maintain similar aspect ratios for best results

### Content
- **Brand Name**: Search for "Hksparkle" in `index.html` and replace
- **Product Information**: Update product cards in the HTML
- **About Section**: Modify the about content and features
- **Social Links**: Update footer social media URLs

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Tips

1. **Optimize Images**
   - Compress images before uploading
   - Use WebP format for better compression
   - Recommended dimensions:
     - Hero: 1920x1080px
     - Category: 600x800px
     - Products: 500x700px

2. **Enable Caching**
   - Configure server-side caching
   - Use CDN for static assets

3. **Minify Assets**
   - Minify CSS and JavaScript for production
   - Use tools like UglifyJS or cssnano

## 🎯 Features Breakdown

### Interactive Elements

#### Mobile Menu
- Hamburger icon toggles navigation
- Smooth slide-in animation
- Auto-closes on link click or outside click

#### Product Cards
- Hover effects with image zoom
- Quick view button
- Wishlist toggle
- Rating display

#### Quick View Modal
- Full product preview
- Size selection (XS, S, M, L, XL)
- Quantity controls
- Add to cart functionality

#### Shopping Cart
- Real-time counter update
- Animated badge on add
- Cart icon in navigation

#### Notifications
- Toast-style notifications
- Auto-dismiss after 3 seconds
- Slide-in/out animation

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox & Grid
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **Google Fonts** - Typography
- **Unsplash** - Placeholder images

## 📝 Future Enhancements

- [ ] Backend integration (Node.js/Express)
- [ ] Database for products (MongoDB/PostgreSQL)
- [ ] User authentication
- [ ] Payment gateway integration
- [ ] Product search functionality
- [ ] Filtering and sorting
- [ ] Customer reviews
- [ ] Order tracking
- [ ] Admin dashboard
- [ ] Email notifications

## 🐛 Known Issues

None currently. Please report issues if you find any.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Created for **Hksparkle** brand

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please contact the development team.

## 🙏 Acknowledgments

- Design inspired by modern fashion e-commerce leaders
- Images from [Unsplash](https://unsplash.com)
- Icons created with SVG
- Fonts from [Google Fonts](https://fonts.google.com)

---

**Made with ❤️ for fashion lovers**

## 📚 Quick Reference

### Key Files
- `index.html` - Main HTML structure
- `styles.css` - All styling and responsive design
- `script.js` - Interactive functionality

### Key Classes
- `.hero` - Hero section
- `.category-card` - Category items
- `.product-card` - Product items
- `.collection-card` - Collection items
- `.btn` - Button styles
- `.modal` - Quick view modal

### Key Functions (JavaScript)
- `showQuickView()` - Display product modal
- `addToCart()` - Add item to cart
- `showNotification()` - Display toast notification
- `updateCartCount()` - Update cart badge

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Dark | `#2c2c2c` | Headings, text |
| Gold | `#d4af37` | Accent, buttons |
| Brown | `#8b7355` | Secondary accent |
| Text | `#333333` | Body text |
| Light Gray | `#f9f9f9` | Backgrounds |

## 📐 Layout Breakpoints

| Device | Width | Notes |
|--------|-------|-------|
| Mobile | < 480px | Single column |
| Tablet | 481px - 768px | 2 columns |
| Desktop | 769px - 1024px | 3-4 columns |
| Large Desktop | > 1024px | Full layout |

---

**Version:** 1.0.0  
**Last Updated:** May 2026
