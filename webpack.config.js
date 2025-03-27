const path = require('path');

module.exports = {
  // ...existing code...
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src") // Configure l'alias @ pour pointer vers src
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Extensions reconnues
  },
};