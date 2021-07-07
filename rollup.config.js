import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      name: "tdw-sections",
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
    external({
      includeDependencies: true
  }),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: "**/__tests__/**",
      clean: true
    }),
    commonjs({
      include: ["node_modules/**"],
      namedExports: {
        "node_modules/react/react.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement",
          ['isValidElementType']
        ],
        "node_modules/react-dom/index.js": ["render"],
        'node_modules/react-is/index.js': [
          'ForwardRef',
          'Memo',
          'isFragment',
          "isValidElementType"
        ],
      }
    })
  ]
};