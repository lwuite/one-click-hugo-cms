[![Netlify Status](https://api.netlify.com/api/v1/badges/3073810e-9f3f-442e-8190-c0359f71faa3/deploy-status)](https://app.netlify.com/sites/umiterra/deploys)

# Hugo template for Netlify CMS with Netlify Identity

This is a small business template built with [Hugo](https://gohugo.io) and [Netlify CMS](https://github.com/netlify/netlify-cms), designed and developed by [Darin Dimitroff](https://twitter.com/deezel), [spacefarm.digital](https://www.spacefarm.digital).

# Design

[Favicon](https://realfavicongenerator.net/)

- #c8747a | Buttons and macOs
- #6c8286 | logo letters
- 

## Local Development

Clone this repository, and run `npm` or `npm install` from the new folder to install all required dependencies.

Then start the development server with `npm start`.

https://docs.netlify.com/visual-editor/local-development/

## Layouts

The template is based on small, content-agnostic partials that can be mixed and matched. The pre-built pages showcase just a few of the possible combinations. Refer to the `site/layouts/partials` folder for all available partials.

Use Hugo’s `dict` functionality to feed content into partials and avoid repeating yourself and creating discrepancies.

## CSS

The template uses a custom fork of Tachyons and PostCSS with cssnext and cssnano. To customize the template for your brand, refer to `src/css/imports/_variables.css` where most of the important global variables like colors and spacing are stored.

## SVG

All SVG icons stored in `site/static/img/icons` are automatically optimized with SVGO (gulp-svgmin) and concatenated into a single SVG sprite stored as a a partial called `svg.html`. Make sure you use consistent icons in terms of viewport and art direction for optimal results. Refer to an SVG via the `<use>` tag like so:

```
<svg width="16px" height="16px" class="db">
  <use xlink:href="#SVG-ID"></use>
</svg>
```
