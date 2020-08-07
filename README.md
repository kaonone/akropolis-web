# Akropolis web [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Contributing
This repo contains the code shared between Akropolis web services.

### Installation
* run `yarn` to install deps.
* run `yarn build` to build packages .

### Components
Components are placed in the `components` package. To add a component you'll need:
* place it and its styles inside `components/src`
* export from `components/src/index.ts`

After adding the component you'll need run `yarn build` to re-build the package and make new components available for end-users.

If you want to test new components inside your project locally you'll need:

* run `yarn link-all` inside akropolis-web to add symlinks to them
* add symlinks to the packages in your project through `yarn link {package-name here}`, for example `yarn link @akropolis-web/components @akropolis-web/styles`.
* use `"preserveSymlinks": true` in `tsconfig.js` in your project
* build your project

After testing locally:
* remove symlinks from your project using `yarn unlink`
* run `yarn install --force`
