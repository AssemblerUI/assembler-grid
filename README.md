# Assembler Grid

A grid component built for the [Assembler framework](https://github.com/AssemblerUI/assembler).

## Table of contents

- [Quick start](#quick-start)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Copyright](#copyright)

## Quick Start

Five quick start options are available:

- [Download the latest release](https://github.com/AssemblerUI/assembler-grid/archive/v0.2.2.zip).
- Clone the repo: `git clone https://github.com/AssemblerUI/assembler-grid.git`.
- Install with [Bower](http://bower.io): `bower install assembler-grid`.
- Install with [component(1)](https://github.com/componentjs/component): `component install assembler-grid`.
- Install with [npm](https://www.npmjs.org): `npm install assembler-grid`.

### What's included

Within the download you'll find the following directories and files, logically
grouping common assets and providing both compiled and minified variations.
You'll see something like this:

```
assembler-grid/
├── dist/
│   ├── assembler-grid.flexbox.css
│   ├── assembler-grid.flexbox.css.map
│   ├── assembler-grid.flexbox.min.css
│   ├── assembler-grid.flexbox.min.css.map
│   ├── assembler-grid.fluid.css
│   ├── assembler-grid.fluid.css.map
│   ├── assembler-grid.fluid.min.css
│   └── assembler-grid.fluid.min.css.map
└── src/
    ├── assembler-grid.flexbox.scss
    ├── assembler-grid.fluid.scss
    └── sass/
        ├── _grid.scss
        ├── configuration/
        │   └── _breakpoints.scss
        ├── mixins/
        │   └── _respond-to.scss
        └── properties/
            ├── _alignment.scss
            ├── _basics.scss
            ├── _direction.scss
            ├── _order.scss
            ├── _responsive.scss
            └── _spacing.scss
```

Provided is the compiled CSS (`dist/assembler-grid.*`), and the source files
written in SCSS (`src/assembler-grid.*.scss`). CSS [source maps](https://developers.google.com/chrome-developer-tools/docs/css-preprocessors)
(`assembler-grid.*.map`) are available for use with certain browsers' developer
tools.

### Picking a Version

If you want to:

- consume the library as-is, with no modifications, then include the CSS files
  in the `dist/` directory
- include the SCSS files as part of your build process, with no modifications,
  then include the SCSS files at the root of the `src/` directory choosing
  either the flexbox or fluid version.
- modify the breakpoints or configuration using your own variables, then include
  the `src/sass/_grid.scss` in your project as an `@import`, override whatever
  variables you desire, then call the mixin passing in the style of grid you'd
  like to use, either `flexbox` or `fluid`.  **Note**: leaving out the parameter
  to the mixin will default in a fluid grid.

## Bugs and feature requests

Have a bug or a feature request? Please first read the
[Contributing documentation](https://github.com/AssemblerUI/assembler-grid/blob/master/CONTRIBUTING.md)
and search for existing and closed issues. If your problem or idea is not
addressed yet, [please open a new issue](https://github.com/AssemblerUI/assembler-grid/issues/new).

## Documentation

assembler-grid's documentation is a [Jekyll](http://jekyllrb.com)-based site and
is publicly hosted on [GitHub Pages](https://assemblerui.github.io/assembler-grid).
You may also run the docs locally.

### Running documentation locally

[Github](https://github.com/) has a [great guide](https://help.github.com/articles/using-jekyll-with-pages/)
for setting up Jekyll for use with Github pages.  I've outlined the basics below.

1. [Install Ruby](https://www.ruby-lang.org/en/downloads/), if you don't already have it. Should be version `1.9.3` or better.
2. [Install Bundler](http://bundler.io/) via `gem install bundler`.
3. [Install Jekyll](http://jekyllrb.com/docs/installation) (requires v2.5.x).
4. Change into the `/assembler-grid` directory
5. Run `bundle install` from the root directory.
6. Run `grunt dev` in the command line.
7. It should open up the browser for you, but if it doesn't, open <http://localhost:3000> in your browser.

:exclamation: **Note Windows users:** Read [this unofficial guide](http://jekyll-windows.juthilo.com/) to get Jekyll up and running without problems.

## Contributing

Contribution is a perfect way to help advance the project.  Please read the
[contributing guidelines](https://github.com/AssemblerUI/assembler-grid/blob/master/CONTRIBUTING.md).
before getting started.

Editor preferences are available in the [editor config](https://github.com/AssemblerUI/assembler-grid/blob/master/.editorconfig)
for use in common text editors. Read more and download plugins at <http://editorconfig.org>.

### Getting Started

1. Clone the repo: `git clone https://github.com/AssemblerUI/assembler-grid.git`.
2. `cd assembler-grid`
3. Install documentation gems: `bundle install`
4. Install grunt build dependencies: `npm install`
5. Start the build process: `grunt dev`

## Copyright

:copyright: 2015. See the [LICENSE](https://github.com/AssemblerUI/assembler-grid/blob/master/LICENSE.md).
Maintained by [@chrisopedia](https://github.com/chrisopedia).
