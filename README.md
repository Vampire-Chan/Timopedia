# Timopedia Base Theme Template

This is a base theme template for Timopedia, a Wikipedia-like encyclopedia focused on accurate and unaltered historical information.

## Files

- `index.html`: The main landing page with category cards and theme toggle
- `style.css`: CSS styles with dark/light theme support and responsive design
- `script.js`: JavaScript for theme toggle functionality with system preference detection

## Features

- **Dark/Light Theme Toggle**: Manual toggle button with automatic system theme detection
- **Responsive Design**: Works on desktop and mobile devices
- **Category Cards**: Landing page with cards linking to different historical categories
- **Clean, Wikipedia-inspired Styling**: Familiar layout with proper color schemes

## Categories

The following subfolders have been created for organizing content:

- politics/
- geography/
- physics/
- science/
- economics/
- culture/
- military/
- technology/

## Usage

1. Open `index.html` in your web browser to view the landing page
2. Click the theme toggle button (moon/sun icon) to switch between light and dark modes
3. Click on category cards to navigate to their respective sections
4. Add content pages within the category subfolders
5. Customize colors and styles in `style.css` as needed

## Customization

- Modify category cards in `index.html` to add/remove categories
- Adjust color variables in `style.css` for different themes
- Extend `script.js` for additional interactive features
- Create individual article pages using the same HTML structure

## Theme System

The theme system uses CSS custom properties and the `data-theme` attribute on the HTML element. It supports:

- Light theme (default)
- Dark theme
- Automatic system preference detection
- Manual override with localStorage persistence

## License

This template is provided as-is for educational and non-commercial use.