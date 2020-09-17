# Sexy framework

![npm](https://img.shields.io/npm/v/sexy?color=%23&style=flat-square)
![size](https://img.badgesize.io/https://unpkg.com/sexy/dist/sexy.js?compression=gzip&label=gzip&style=flat-square)

Sexy framework – is a reactive compiler and javascript analyser for building user interfaces. Unlike other frameworks, Sexy is designed to be truly native.

Sexy doesnt work in runtime. Framework analyse your components and turn them into native javascript with little overhead: 3.8kb gzip.

Well, sexy was designed to work with sever rendering but you can also use it without to make responsible SPA's

## Performance

Sexy is fast because it compiles components to Native Javascript and it manages reactivity at compiler time!

- **Small.** `3.78kB` gzip.
- **Super Fast.** No reactivity libs, No runtime work
- **Partial hydration.** Hydrate only dynamic and statefull parts of application
- **Truly reactive.** automatically derived from the app state.
- **Tips & Tricks.** Slots, Loops, Statements and Props as we get used to

Sexy framework is faster then NuxtJS in x4.5 times to hydrate dynamic components. *First Input Delay* and TTI better in 3 times (google pagespeed).

## Benchmark (lighthouse)

Sexy is faster than VueJS in 200 times.

Sexy-js Benchmark
![benchmark-sexy](./assets/sexy-performance.png)

NuxtJS Benchmark
![benchmark-nuxt](./assets/nuxt-performance.png)

## Documentation

To check out live examples and docs, visit [sexy-js.ninja](http://sexy-js.ninja/).

## How-to

[sexy-package]: https://npmjs.com/package/sexy
[sexy-loader-package]: https://npmjs.com/package/sexy-loader
[sexy-server-package]: https://npmjs.com/package/sexy-server
[create-sexy-app-package]: https://npmjs.com/package/create-sexy-app

### 1. You can create app with SSR

```shell
npx create-sexy-app my-app
```

```shell
yarn create sexy-app my-app
```

And use it in development mode:

```shell
npm run dev
```

Or production:

```shell
npm run build && npm run start
```

### 2. You can use it manually

```shell
npm install sexy sexy-loader --save
```

And use it with webpack

```javascript
module: {
  rules: [
    {
      test: /.sexy$/i,
      use: [{
        loader: 'sexy-loader',
        options: {
          path: './components', // path to folder where components located
          styles: true,
        }
      }]
    },
  ]
}
```

Then your enty js file should contain:
```javascript
import { render } from 'sexy/render';
import HelloWorld from './components/hello-world.sexy';

const layout = document.getElementById('layout');

render(HelloWorld, layout);
```

## Known problems

Reactivity in loops with object props is not reactive.

## Contribution

We need contributors to make project production-ready.

### Contributors

Burkhanov Kirill (kir.burkhanov@gmail.com)

## License

Copyright (c) 2020 Burkhanov Kirill. This is free software, and may be redistributed under the terms specified in the LICENSE file.

