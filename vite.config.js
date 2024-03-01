import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],

  esbuild: {
    loader: "jsx",
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
    jsxInject: `import React from 'react'`,
  },
  root: "./src",
  base: "./",
  build: {
    outDir: "dist",
  },
};
