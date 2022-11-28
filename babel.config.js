module.exports = {
  "presets": [
    ["@babel/preset-env", {
      "corejs": 3.15,
      "useBuiltIns": "usage",
      "targets": {
        node: 'current'
      }
    }],
    ["@babel/preset-react", {
      "runtime": "automatic"
    }],
    "@babel/preset-typescript"
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ]
  ]
}