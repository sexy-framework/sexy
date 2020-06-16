# Sexy loader

You can use sexy-loader with webpack to load sexy single file components.

```javascript
{
  test: /\.sexy$/i,
  use: [{
    loader: 'sexy-loader',
    options: {
      path: '../components',
    }
  }]
},
```