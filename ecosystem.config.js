module.exports = {
  apps: [
    {
      name: "Sandbox-API",
      script: "./dist/main.js",
      watch: false,
      instances: 1,
    },
  ],
};
