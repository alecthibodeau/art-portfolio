# Art Portfolio Website: alecthibodeau.com

## Purpose

The purpose of this repository is to recreate and replace my former HTML-based art portfolio website at [alecthibodeau.com](https://alecthibodeau.com). Specifically I'm rebuilding the site from the ground up as a single-page application (SPA). I'm using [React with TypeScript](https://create-react-app.dev/docs/adding-typescript) and [React Router v6](https://reactrouter.com/) as the foundation for the new codebase.

## Goals

Beyond simply recreating the former site I'm improving upon it by building in responsiveness with a mobile-first approach. This is partly acheived by importing [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction) for breakpoints and classes &mdash; helpful for basic box-model properties like margin and padding.

Furthermore, accessibility is of the utmost importance. Semantic HTML tags, alt text for images, proper color contrasts and tabbable elements are all incorporated into the site for the best universal user experience.

## Styling

I'm using [Sass](https://sass-lang.com) as a CSS preprocessor. Some features of Sass I'm leveraging are @use, @mixin and @media.

## Data

The data to build the content of the various React components are stored as strings in a [JSON](https://www.json.org/json-en.html) configuration file. This greatly reduces the number of strings stored directly in the TypeScript component files.

## Run locally

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
