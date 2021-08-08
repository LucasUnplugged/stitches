<a href="https://stitches.dev">
  <img alt="stitches" src="https://user-images.githubusercontent.com/372831/112011920-03e21400-8b29-11eb-9c9a-4e14d5a1f575.png" />
</a>

# Fork of Stitches [Temporary]

## Purpose

This fork addresses some issues that affect debugging, composition, and nesting of Stitches-styled components ([#650 - Friendly Class Names](https://github.com/modulz/stitches/issues/650), [#675 - Composition](https://github.com/modulz/stitches/issues/675), and [#690 - Specificity Conflicts](https://github.com/modulz/stitches/issues/690)).

## Installation

Until these fixes get merged into the original Stitches, you can install a particular version of this fork (e.g., `v0.2.3`) via:

```
npm install 'https://gitpkg.now.sh/LucasUnplugged/stitches/packages/react?v0.2.3'
```
Or...
```
yarn add 'https://gitpkg.now.sh/LucasUnplugged/stitches/packages/react?v0.2.3'
```
**NOTE**: Replace `react` with `core`, if not using React; and `v0.2.3` with the latest version of this fork.

## Version Correlation

The version numbers of this fork correspond to the same version from the original, but with the above fixes added (without a version bump). I decided against a version bump so it would be easy to track if this fork is behind the original.


---

_Original Stitches README.md..._


# Stitches

## Style your components with confidence

CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience.

#### Stitches Core

Framework-agnostic implementation.

```sh
npm install @stitches/core
```

[Read more](https://github.com/modulz/stitches/tree/main/packages/core)

#### Stitches React

React wrapper including the `styled` API.

```sh
npm install @stitches/react
```

[Read more](https://github.com/modulz/stitches/tree/main/packages/react)

---

## Documentation

For full documentation, visit [stitches.dev](https://stitches.dev).

## Contributing

Please follow our [contributing guidelines](./CONTRIBUTING.md).

## Authors

- Pedro Duarte ([@peduarte](https://twitter.com/peduarte)) - [Modulz](https://modulz.app)
- Jonathan Neal ([@jon_neal](https://twitter.com/jon_neal)) - [Modulz](https://modulz.app)
- Abdulhadi Alhallak ([@hadi_hlk](https://twitter.com/hadi_hlk)) - [Modulz](https://modulz.app)

## License

Licensed under the MIT License, Copyright © 2021-present Modulz.

See [LICENSE](./LICENSE.md) for more information.
