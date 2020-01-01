# Introduction

The `ui-starter-kit` contains all the tooling, code organization and best practices to spawn up new front end projects. Use this as a guide to create new projects, however if you want to diverge significantly from the `ui-stater-kit`; talk with some front-end developers in the organization and see if the change makes sense. If there is a agreement, then update the `ui-stater-kit` first before making the significant change in your spawned (instance) project.

# Getting Started

## Install Dependencies

> `npm install`

Please use `npm` instead of `yarn`. The benefits to using `yarn` no longer exists as `npm` has all caught up. Moreover, `npm` is a community driven effort and will not spy on you as `yarn` sends back usage information to [**Facebook**](https://blog.risingstack.com/yarn-vs-npm-node-js-package-managers/).

## Run Locally

> `npm run dev`

## Production Build

> `npm run build`

Outputs build artifacts inside the **build** folder

## Testing

> `npm run test`

To test all files in the project once.

> `npm run test:watch`

To test all files in the project more than once. This keep the _jest_ test runner in watch mode.

> `npm run test:watch src/components/MyComponent.tsx`

To test a specific file in Watch mode. Great option to use TDD to test a specific file as you develop and make changes.

## Committing

> `npm run commit`

We are using [committizen](https://github.com/commitizen/cz-cli#using-the-command-line-tool) to format commit messages. This is following best practices when making commits as it inform other what the commit is about. Is it a `feat` (feature), a `fix` (bug), a `refactor` etc... Also you can use tool such as [semantic release](https://github.com/semantic-release/semantic-release) which can read these commit message and automatically version the project semantically.

## Linting

> `npm run lint`

Check for linting & type errors.

## Analyze Bundle & Code Splitting

> `npm run analyze`

This is a great way to watch how big the bundles get over time. Please code-split at `Route` and `Component` levels wherever possible.

_code splitting example_
```
import React, { Suspense, lazy } from 'react'
const ContactsPage = import(
  /* webpackPrefetch: true, webpackChunkName: "Contacts" */ '../pages/ContactsPage/ContactsPage'
)
const LazyContactsPage = lazy(() => ContactsPage)

<Suspense fallback={<div>{isLoading}</div>}>
  <LazyContactsPage path="/contacts" />
</Suspense>
```

Use [dynamic imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports) along with [webpack magic string](https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules) to name chunks and set pre-loading or pre-fetching options.

# Code Organization & Architecture

## Atomic Design Principles

We are organizing the UI portion of the code using [atomic design principles](http://atomicdesign.bradfrost.com/table-of-contents/)

- **atoms**  always in **pure-wealth-ui** project
- **molecules** either **pure-wealth-ui** or **components** folder
- **organisms** either **components** or **containers** folder
- **templates** always **layouts** folder
- **pages** always **pages** folder

## Fixture to stub use-cases

Use the _Fixture_ folder to create stub values that can be reused for _tests_ or as response from _api_ to simulate various scenarios.

## Translations

There should never be any hard-coded string in any view. This is because we need to support various languages. Place all hard-coded strings in `/translations` folder in corresponding `[lang].json` file. These message support [_ICU_](http://userguide.icu-project.org/formatparse/messages) formatted strings. Also we use `react-intl` to take care of translations in the front-end

## Models

Domain Models should first be discussed with business and product owners along with back-end team members to ensure everyone is aligned. Once there is an aligned, create models in **models** folder. Models can be used by any other part of the front-end project.

## Slices

In traditional react projects you will notice **actions**, **reducers** & **selectors** folders. We are going to combine these into **slices** folder. A slice contains a `reducer`, `actions` & `selectors` all in one. This speeds up development time and lowers cognitive load. Check docs for [createSlice](https://redux-toolkit.js.org/api/createSlice) to learn more.

## Testing

We are using [jest](https://jestjs.io/docs/en/getting-started) as assertion framework and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) to test dom and react components.

Always try and test **slices** folder as that contains critical state management logic. It's usually a good idea to test as much as possible as this helps boost confidence that the code is working as expected and new developers contributing in future wouldn't inadvertently break code.

You can check the **coverage** folder to see untested lines of code. We could also ensure a certain level of code coverage percentage (say 80%) to pass a build. This has not yet been implemented yet.

## Middleware

Use `redux` middleware to listen to actions that happen in the system and then perform certain side-effects. A good example would be `analytics-middleware` that could listen to certain action in the system and based on these actions trigger some analytics beacons. Here is a [good doc](https://redux.js.org/advanced/middleware/#seven-examples) on how to create and when to use them.

# Tooling Used

## React

If you are new to redux please go over the [main concepts](https://reactjs.org/docs/hello-world.html) here.

## Redux via Redux-Toolkit

This project builds on best practises recommended redux community. It uses [redux-toolkit](https://redux-toolkit.js.org/) which introduces the concept of [createSlice](https://redux-toolkit.js.org/api/createSlice) which combines `actions` + `reducers` + `selectors` in one file instead of 3 separate files. This speeds up development and reduce cognitive overload. This is the preferred way to do state management.

## Webpack using presets

We are using a _custom_ webpack setup which gives us full control over our build process. This was needed due to complex code splitting required due to `pure-facts-ui` library not tree shaking properly.

Webpack is setup with best practices as recommended by [Shawn Larkin](https://github.com/TheLarkInn) (a webpack core team member). He recommended using preset. These are located in **build-utils** folder. If you would like to learn more how to work on these, please check out [Implementing Preset](https://frontendmasters.com/courses/webpack-fundamentals/implementing-presets/). Currently there is a _preset_ for `typescript`, `analyze` & `compress`. You can add more preset to extend webpack.

## Babel + Typescript + Eslint

Please note we are using `babel` to transpile `typescript` using `@babel/preset-typescript`. This is not the conventional way to transpile typescript, which uses `ts-loader`. However `babel`, `eslint` & `typescript` teams are teaming up to reduce duplicating efforts. In the near future `ts-loader` and older tooling for typescript will be replaced using `tslint` & `ts-loader` in favour of `eslint` & `babel-loader`.

## Reach Router

It's created by the creators or `React Router` and it has similarly features. However `Reach Router` has accessibility baked in and will be better supported in the future. Please read [docs here](https://reach.tech/router).
