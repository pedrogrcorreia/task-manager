module.exports = {
  apps: [
      {
          name: "task-manager-env",
          script: "npm",
          args: "run dev",
          watch: true,
          ignore_watch: [
              ".git",
              ".md",
          ],
          time: true,
          env: {
              PORT: process.env.PORT,
              MONGODB_URL: process.env.MONGODB_URL,
              JWT_SECRET: process.env.JWT_SECRET,
              SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
          },
      },
  ],
};