# GYMBROS Website - HTML/CSS/JavaScript Version

This is a standalone HTML/CSS/JavaScript version of the GYMBROS gym website that can run without React or any build tools.

## Files Included

1. **standalone.html** - Main HTML file with complete website structure
2. **standalone-styles.css** - Complete CSS styling with dark theme and orange/red color scheme
3. **standalone-script.js** - JavaScript for interactivity (cart, enrollment, animations)
4. **README.md** - This file

## Features

### Sections
- **Navigation Bar** - Fixed header with smooth scrolling
- **Hero Section** - Impressive hero with muscular athlete image
- **Programs Section** - 4 body-type specific training programs
- **Courses Section** - 3 featured online courses
- **Nutrition Section** - 6 essential nutrition tips
- **Products Section** - 6 premium supplement products with prices and discounts
- **Footer** - Complete footer with social links and newsletter

### Interactive Features
- ✅ Program enrollment (saves to localStorage)
- ✅ Course enrollment (saves to localStorage)
- ✅ Shopping cart functionality (saves to localStorage)
- ✅ Smooth scrolling navigation
- ✅ Scroll animations
- ✅ Newsletter subscription
- ✅ Responsive design for mobile and desktop

## How to Use

### Option 1: Open Directly in Browser
1. Download all three files to the same folder
2. Double-click `standalone.html` to open in your default browser
3. That's it! The website is fully functional

### Option 2: Using a Local Server
If you want to test with a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000/standalone.html`

## Customization

### Changing Colors
Edit `standalone-styles.css` and modify the CSS variables in the `:root` section:

```css
:root {
    --color-primary: hsl(16, 100%, 50%);  /* Orange */
    --color-secondary: hsl(0, 84%, 60%);  /* Red */
    --color-accent: hsl(25, 95%, 53%);    /* Bright Orange */
    /* ... more colors ... */
}
```

### Changing Images
In `standalone.html`, find and replace the image URLs:
- Hero image: Line ~70
- Product images: Lines in the products section

### Adding More Products
Copy a product card in the HTML and modify the details:

```html
<div class="product-card">
    <div class="product-image">
        <img src="YOUR_IMAGE_URL" alt="Product Name">
        <div class="discount-badge">-XX%</div> <!-- Optional -->
    </div>
    <div class="product-info">
        <span class="product-category">Category</span>
        <h3>Product Name</h3>
        <p class="product-description">Description here...</p>
        <div class="product-rating">⭐⭐⭐⭐⭐ 4.X</div>
        <div class="product-footer">
            <div class="product-price">$XX.XX</div>
            <button class="btn-add-cart" onclick="addToCart('Product Name', XX.XX)">🛒 Add</button>
        </div>
    </div>
</div>
```

## Browser Compatibility

Works on all modern browsers:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with:
  - CSS Grid and Flexbox for layouts
  - CSS Custom Properties (variables) for theming
  - Gradients and transitions for visual effects
  - Media queries for responsive design
- **JavaScript (Vanilla)** - No frameworks or libraries:
  - localStorage for data persistence
  - Intersection Observer for scroll animations
  - Event listeners for interactivity

## Data Persistence

The website uses browser localStorage to save:
- Enrolled programs
- Enrolled courses
- Shopping cart items

This data persists between page reloads on the same browser.

## License

Free to use and modify for personal or commercial projects.

---

**Built with ❤️ for GYMBROS**
