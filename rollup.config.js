import babel from "rollup-plugin-babel";

export default {
  input: "./src/index.js",
  output: {
    format: "umd",
    name: "Iuv",
    file: "dist/iuv.js",
    sourcemap: true,
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
  ],
};
