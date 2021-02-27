const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    cssnano({
      preset: "default"
    }),
    purgecss({
      content: ["./index.html"],
      // whitelist all random color classes
      whitelist: [
        "navy", "bg-washed-green",
        "light-purple", "bg-light-yellow",
        "purple", "bg-light-red",
        "dark-blue", "bg-light-green",
        "dark-blue", "bg-washed-red",
        "light-pink", "bg-navy"
    ]
    })
  ]
};
