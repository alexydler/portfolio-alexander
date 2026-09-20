const deploymentHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const siteUrl = deploymentHost
  ? `https://${deploymentHost}`
  : "http://localhost:3000";
