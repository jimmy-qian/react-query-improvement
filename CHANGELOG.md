# react-web

## 1.4.2

### Patch Changes

- [#92](https://github.com/LabelA/prime-monorepo/pull/92) [`bba633a8`](https://github.com/LabelA/prime-monorepo/commit/bba633a8b24fb49d1d0868093c55f76f049e55f4) Thanks [@sandervspl](https://github.com/sandervspl)! - Update dependencies and update to Next v13.0.2

- [`14df0656`](https://github.com/LabelA/prime-monorepo/commit/14df0656da5bcabb4fb02444768f55abb4ff8ae1) Thanks [@sandervspl](https://github.com/sandervspl)! - Updated Prettier sort plugin to 4.0.0

- [#100](https://github.com/LabelA/prime-monorepo/pull/100) [`5dd922d9`](https://github.com/LabelA/prime-monorepo/commit/5dd922d9971f0940ca077e9c48838a2fc8a9a495) Thanks [@sandervspl](https://github.com/sandervspl)! - Updated dependencies to their latest non-major version

## 1.4.1

### Patch Changes

- [#88](https://github.com/LabelA/prime-monorepo/pull/88) [`2bbc8d8e`](https://github.com/LabelA/prime-monorepo/commit/2bbc8d8e492016b9b18513992a399e7d1c345c75) Thanks [@sandervspl](https://github.com/sandervspl)! - Fix Prettier/Lint issues
  Add support for CI in the prime-monorepo repository

## 1.4.0

### Minor Changes

- [#85](https://github.com/LabelA/prime-monorepo/pull/85) [`ad8774c8`](https://github.com/LabelA/prime-monorepo/commit/ad8774c8f945df5c64808428c0f320161a9e8d74) Thanks [@rnnyrk](https://github.com/rnnyrk)! - Update React-Query to Tanstack, align patterns with Label A requirements

### Patch Changes

- [#86](https://github.com/LabelA/prime-monorepo/pull/86) [`0141787c`](https://github.com/LabelA/prime-monorepo/commit/0141787cc87ee86a2ab9de2e5468df10cd26dc9a) Thanks [@rnnyrk](https://github.com/rnnyrk)! - Update web-dashboard packages and standards

- [#87](https://github.com/LabelA/prime-monorepo/pull/87) [`40d8111f`](https://github.com/LabelA/prime-monorepo/commit/40d8111fbd4253e4b6c1d3d14485ae4b9251f8c4) Thanks [@sandervspl](https://github.com/sandervspl)! - Update to latest react-query version

## 1.3.7

### Patch Changes

- [#84](https://github.com/LabelA/prime-monorepo/pull/84) [`0f9f0381`](https://github.com/LabelA/prime-monorepo/commit/0f9f0381d7148c34850fc7decbde3224925b6c97) Thanks [@sandervspl](https://github.com/sandervspl)! - Remove defaultConfig when extending the Next config

## 1.3.6

### Patch Changes

- [#44](https://github.com/LabelA/prime-monorepo/pull/44) [`d25c1b38`](https://github.com/LabelA/prime-monorepo/commit/d25c1b38018565ce9a51c49ef85efdf06dd9b5a6) Thanks [@sandervspl](https://github.com/sandervspl)! - Bump next-sitemap to v3

## 1.3.5

### Patch Changes

- [#38](https://github.com/LabelA/prime-monorepo/pull/38) [`353ba4f7`](https://github.com/LabelA/prime-monorepo/commit/353ba4f74b57b34f72dc6b1d34311c8e1b86a5a7) Thanks [@sandervspl](https://github.com/sandervspl)! - Add support for different site URLs based on APP_ENV

## 1.3.4

### Patch Changes

- [#36](https://github.com/LabelA/prime-monorepo/pull/36) [`63647870`](https://github.com/LabelA/prime-monorepo/commit/63647870ddc6e3db9618d7cf60c8f46c1253c9ad) Thanks [@sandervspl](https://github.com/sandervspl)! - Use "next lint" to run Eslint

## 1.3.3

### Patch Changes

- Update to NextJS 12.2

## 1.3.2

### Patch Changes

- Add NextJS HMR/build indicator in browser during development

## 1.3.1

### Patch Changes

- Update dependencies

## 1.3.0

### Minor Changes

- 9d3f2c3: Move layouts folder to components from modules

### Patch Changes

- bde7825: Remove return types from server-side functions
  Add Infer types
- 82dd2e5: Remove generics from NextPageComponent in CSR example page
- ee6e6bd: Add explicit children type to Layout
- 7f2ce24: Disable React Strict Mode

## 1.2.0

### Minor Changes

- Revert back to the static functional layout pattern. For more info, see: https://nextjs.org/docs/basic-features/layouts
- Update augmented Next types

## 1.1.3

### Patch Changes

- Add layout pattern. See: https://nextjs.org/docs/basic-features/layouts#per-page-layouts

## 1.1.2

### Patch Changes

- Enable the newLinkBehavior flag. This allows Next/Link components to no longer require an anchor (<a>) child to function.

## 1.1.1

### Patch Changes

- Update dependencies

## 1.1.0

### Minor Changes

- Removed custom dist dir and use default Next dist dir (.next). This prevents issues caused by having a custom build directory.
