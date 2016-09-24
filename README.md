![commercetools-icon](https://github.com/commercetools/press-kit/blob/master/PNG/72DPI/CT%20logo%20horizontal%20RGB%2072dpi.png?raw=true)

# eslint-config-commercetools

[![David Dependencies Status][david-icon]][david]
[![David devDependencies Status][david-dev-icon]][david-dev]
[![David peerDependencies Status][david-peer-icon]][david-peer]

This package provides Commercetools's .eslintrc as an extensible shared config

Table of Contents
=================

  * [eslint-config-commercetools](#eslint-config-commercetools)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [License](#license)

## Usage
Add it as an npm devDependency, as well as all the necessary [peerDependencies](https://nodejs.org/en/blog/npm/peer-dependencies/).

```bash
$ npm install --save-dev eslint-config-commercetools eslint@^#.#.# eslint-config-airbnb@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
```

You can alternatively run this script, which basically produces the same command above:

```bash
(
  export PKG=eslint-config-commercetools;
  npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
)
```

Create a `.eslintrc` file with

```yml
extends: commercetools
```

or if you also want the `react` rules

```yml
extends: commercetools/with-react
```

Alternatively, you can add `eslintConfig` to your package.json

```json
"eslintConfig": {
  "extends": "commercetools"
}
```

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for info on contributing to eslint-config

## License
Licensed under the [MIT LICENSE](LICENSE)

[commercetools]: https://commercetools.com/
[david]: https://david-dm.org/commercetools/eslint-config
[david-icon]: https://img.shields.io/david/commercetools/eslint-config.svg?style=flat-square
[david-dev]: https://david-dm.org/commercetools/eslint-config?type=dev
[david-peer]: https://david-dm.org/commercetools/eslint-config?type=peer
[david-dev-icon]: https://img.shields.io/david/dev/commercetools/eslint-config.svg?style=flat-square
[david-peer-icon]: https://img.shields.io/david/peer/commercetools/eslint-config.svg?style=flat-square
