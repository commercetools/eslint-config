# eslint-config-commercetools

This package provides Commercetools's .eslintrc as an extensible shared config

Add it as an npm dependency

```json
{
  "dependencies": {
    "eslint-config-commercetools": "*"
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
