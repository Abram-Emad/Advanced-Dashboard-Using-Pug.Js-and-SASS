# Advanced Dashboard Using Pug.js and SASS

A modern, responsive admin dashboard template built with **Pug.js** for templating and **SASS** for styling. Designed to streamline the development of admin panels and data-driven web applications.

## Features

- **Pug.js Templating**: Utilizes Pug's concise syntax for reusable HTML components and layouts.
- **SASS/SCSS Preprocessing**: Modular SASS architecture for maintainable and scalable CSS.
- **Responsive Design**: Adapts to all screen sizes (desktop, tablet, mobile) using CSS Grid and Flexbox.
- **Theming Support**: Easily customizable color schemes and styling via SASS variables.
- **Interactive UI Components**:
  - Data visualization charts (e.g., Chart.js integration)
  - Dynamic tables with sorting/filtering
  - Form validation
  - Modal windows
  - Navigation menus
- **Build Automation**: npm scripts for compiling Pug/SASS, live reloading, and production optimization.
- **Cross-Browser Compatibility**: Tested on modern browsers (Chrome, Firefox, Safari, Edge).

## Technologies Used

- **Frontend**:
  - [Pug.js](https://pugjs.org/) - HTML templating engine
  - [SASS](https://sass-lang.com/) - CSS preprocessor
  - JavaScript (ES6+)
  - [Chart.js](https://www.chartjs.org/) (example integration)
- **Backend**:
  - [Express.js](https://expressjs.com/) (minimal server setup)
- **Build Tools**:
  - npm scripts
  - [node-sass](https://github.com/sass/node-sass)
  - [Nodemon](https://nodemon.io/) (development server)

## Installation

1. **Prerequisites**:
   - Node.js v14+ and npm installed

2. **Clone the repository**:
   bash
   git clone https://github.com/Abram-Emad/Advanced-Dashboard-Using-Pug.Js-and-SASS.git
   cd Advanced-Dashboard-Using-Pug.Js-and-SASS
   

3. **Install dependencies**:
   bash
   npm install
   

4. **Start development server**:
   bash
   npm run dev
   
   This will:
   - Compile Pug/SASS files
   - Start a live-reload server at `http://localhost:3000`

5. **Production build**:
   bash
   npm run build
   

## Project Structure

- ├── src/
- │   ├── views/          # Pug templates
- │   │   ├── layouts/    # Base layouts
- │   │   ├── includes/   # Reusable components (headers, footers)
- │   │   └── *.pug       # Page templates
- │   ├── styles/         # SASS source files
- │   │   ├── base/       # Variables, mixins, reset
- │   │   ├── components/ # Button, card, form styles
- │   │   └── main.scss   # Main SASS entry point
- │   ├── scripts/        # JavaScript files
- │   └── assets/         # Images/fonts
- ├── public/             # Compiled CSS/JS and static assets
- ├── package.json
- └── server.js           # Express server configuration


## Customization

### Modify Theme Colors
1. Edit `src/styles/base/_variables.scss`:
   scss
   $primary-color: #4361ee;
   $secondary-color: #3f37c9;
   $background-light: #f8f9fa;
   

### Add New Page
1. Create `src/views/new-page.pug`:
   pug
   extends layouts/main.pug

   block content
     h1 New Page Title
     p Custom content here
   
2. Update server.js routing if needed.

### Extend Components
Create reusable Pug mixins in `src/views/includes/mixins/`:
pug
mixin card(title)
  .card
    h2.card-title= title
    block


## Scripts

- `npm start`: Start production server
- `npm run dev`: Start dev server with live reload
- `npm run build`: Compile assets for production
- `npm run compile:pug`: Compile Pug to HTML
- `npm run compile:sass`: Compile SASS to CSS

## Dependencies

- Production:
  json
  "dependencies": {
    "express": "^4.18.2",
    "pug": "^3.0.2",
    "sass": "^1.66.1"
  }
  
- Development:
  json
  "devDependencies": {
    "nodemon": "^3.0.2",
    "npm-run-all": "^4.1.5"
  }
  

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgments

- Pug.js team for the templating engine
- SASS maintainers for powerful CSS preprocessing
- Community contributors for UI inspiration
