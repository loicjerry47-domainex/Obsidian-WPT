# Obsidian WordPress Theme

![WordPress](https://img.shields.io/badge/WordPress-5.8%2B-blue.svg)
![PHP](https://img.shields.io/badge/PHP-7.4%2B-777BB4.svg)
![License](https://img.shields.io/badge/License-GPL_2.0_or_later-green.svg)
![Stars](https://img.shields.io/github/stars/loichazoume/obsidian-theme?style=social)

A premium dark-mode WordPress theme designed for creative professionals, agencies, and tech companies. Tailored for those who appreciate refined aesthetics, robust flexibility, and high-performance digital infrastructure.

---

## Screenshots

![Screenshot](screenshot.png)

*The sleek dark-mode aesthetic features deep navy/black backgrounds with elegant gold highlights.*

---

## ⚡ Quick Start

For developers who want to deploy the theme immediately:

1. Clone or download this repository.
2. Compress the root `obsidian/` directory into `obsidian.zip`.
3. Log into your WordPress Admin Dashboard.
4. Navigate to **Appearance > Themes > Add New > Upload Theme**.
5. Upload the ZIP file and click **Install Now**.
6. Once installed, select **Activate**.
7. Navigate to **Appearance > Customize** to immediately configure brand colors, hero properties, and layout flags.

---

## 🎨 Features

* **Premium Dark Aesthetics:**
  Built naturally on a sleek deep-navy foundation (`#0a0a0f`) with high-contrast gold accents (`#c9a44a`), engineered for maximum visual impact.
* **Full Customizer Integration:**
  Dynamically override global styling metrics. Modify colors, configure your homepage hero headers, footer specifics, and post layout configurations directly with a real-time preview.
* **Fluid Layouts & Sticky Nav:**
  100% mobile-responsive design utilizing a refined hamburger menu mechanism and a sticky top-navigation bar integrated continuously with a blurred backdrop-filter.
* **Custom Post Cards:**
  Visually stunning portfolio displays featuring slight scale transforms and gold-border glow interactions, fully optimized around custom image sizes (600x400).
* **Deep Accessibility Integration:**
  Pre-baked with standard compliant 'skip-to-content' links, native ARIA labels for landmark elements, distinctive focus-visible keyboard styling, and completely semantic heading hierarchies.
* **Performance Optimizations:**
  Prioritizes end-user speeds through deferred execution of Vanilla JavaScript, native lazy-loading methodologies for heavy media assets, and systematic preconnections directly to Google Fonts (Inter).

---

## Installation

For standard installation via the WordPress dashboard:

1. Download the latest release archive `.zip` from this repository.
2. Log into your WordPress administrative panel.
3. On the left-hand navigation menu, select **Appearance > Themes**.
4. Click the **Add New** button positioned at the top of the screen.
5. Click **Upload Theme** and select the `.zip` file you downloaded previously.
6. Click **Install Now**.
7. After the extraction completes successfully, hit **Activate**.

---

## Core Architecture

### Page Templates

Obsidian comes packed with standard templates and custom full-page variations:

1. **Portfolio Grid** (`template-portfolio.php`): 
   A masonry-style display grid specifically coded to automatically pull related projects or posts recursively.
2. **Contact Page** (`template-contact.php`): 
   An elegantly formatted layout dedicated to exposing contact methods, leveraging your customizer modifications directly (email, LinkedIn profiles).
3. **Full-Width Canvas** (`template-fullwidth.php`): 
   A maximum horizontal canvas configuration that entirely strips out the traditional widgetized sidebars.

### Customizer Options

Control the entire theme safely from the WordPress live Customizer without writing any code:

* **Hero Section Controls:** 
  Update the main headline, subtitle text blocks, Call-to-Action button text, CTA redirect links, and easily upload custom 1920x800 background imagery overlays.
* **Dynamic Color Adjustments:** 
  Seamlessly override the default primary (`#0a0a0f`) and internal card (`#1a1a26`) background variables. Re-brand fundamental highlights matching primary gold (`#c9a44a`) and lighter secondary variants.
* **Footer Configuration:** 
  Modify localized copyright notices, toggle explicit social icon visibility grids, and insert direct connectivity links via GitHub, LinkedIn, and distinct Email addresses.
* **Layout Adjustments:** 
  Switch index patterns effortlessly between "grid" and "list" configurations. Manually toggle sidebar active states specifically isolated between internal single-posts and static pages.

### Widget Areas

Designated structural zones configured to populate via **Appearance > Widgets**:

1. **Main Sidebar** (Standard posts & pages)
2. **Footer Column 1** (Left module)
3. **Footer Column 2** (Center module)
4. **Footer Column 3** (Right module)

### File Structure

```text
obsidian/
├── style.css
├── functions.php
├── index.php, header.php, footer.php, sidebar.php
├── single.php, page.php, archive.php, search.php, 404.php
├── front-page.php, comments.php
├── template-parts/ 
│   ├── content.php, hero.php, card.php, content-none.php
├── page-templates/ 
│   ├── template-portfolio.php, template-contact.php, template-fullwidth.php
├── inc/ 
│   ├── customizer.php, widgets.php, template-tags.php
├── assets/
│   ├── css/custom.css
│   └── js/navigation.js, customizer.js, animations.js
├── screenshot.png
└── readme.txt
```

---

## Requirements & Environment

* **WordPress Core:** Version 5.8 or higher.
* **PHP Base:** Version 7.4 or higher (Certified compatible up through modern PHP 8.x variations).

## Built With

* **PHP** — Core functional logic
* **WordPress Template Hierarchy** — Strict standardization routing 
* **WordPress Customizer API** — Live settings manipulation
* **HTML5 & CSS3** — Semantic elements & CSS variables
* **Vanilla JavaScript** — High-performance, dependency-free scripting

## Browser Support

Obsidian natively supports modern implementations of:
* Google Chrome (Latest)
* Mozilla Firefox (Latest)
* Apple Safari (Latest)
* Microsoft Edge (Latest)

---

## Contributing

Contributions make the open-source community an amazing place to learn, inspire, and consistently build superior tools safely. Any architectural tweaks or feature expansions you wish to make are greatly appreciated.

1. Fork the Project.
2. Create your experimental Feature Branch (`git checkout -b feature/AmazingThemeFeature`).
3. Commit your precise Changes (`git commit -m 'Add an AmazingThemeFeature'`).
4. Push updates to the native Branch (`git push origin feature/AmazingThemeFeature`).
5. Open a public Pull Request covering logic updates.

---

## License

Obsidian operates under the permissive **GPL-2.0-or-later** documentation suite. Read the structural `readme.txt` natively provided spanning theme specifications or view the core GNU organizational website for further information.

---

## Author

**Loic Hazoume**
* Website: [wxza.net](https://wxza.net)
* Email: jerryhazoume@gmail.com
* LinkedIn: [linkedin.com/in/jerryhazoume](https://www.linkedin.com/in/jerryhazoume)
* GitHub: [@loichazoume](https://github.com/loichazoume)

---
*Built meticulously for the modern, creative web.*
