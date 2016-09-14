![commercetools-icon](https://github.com/commercetools/press-kit/blob/master/PNG/72DPI/CT%20logo%20horizontal%20RGB%2072dpi.png?raw=true)

# eslint-config-commercetools

[![David Dependencies Status][david-icon]][david]
[![David devDependencies Status][david-dev-icon]][david-dev]

This package provides Commercetools's .eslintrc as an extensible shared config

## Usage
Add it as an npm dev-dependency

```bash
$ npm i eslint-config-commercetools --save-dev
```
or add this to your package.json

```json
{
  "devDependencies": {
    "eslint-config-commercetools": "latest"
  }
}
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
[travis]: https://travis-ci.org/commercetools/nodejs-boilerplate
[travis-icon]: https://img.shields.io/travis/commercetools/nodejs-boilerplate/master.svg?style=flat-square
[codecov]: https://codecov.io/gh/commercetools/nodejs-boilerplate
[codecov-icon]: https://img.shields.io/codecov/c/github/commercetools/nodejs-boilerplate.svg?style=flat-square
[david]: https://david-dm.org/commercetools/nodejs-boilerplate
[david-icon]: https://img.shields.io/david/commercetools/nodejs-boilerplate.svg?style=flat-square
[david-dev]: https://david-dm.org/commercetools/nodejs-boilerplate?type=dev
[david-dev-icon]: https://img.shields.io/david/dev/commercetools/nodejs-boilerplate.svg?style=flat-square
