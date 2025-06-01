const env = process.env.NODE_ENV;

export const host = env === "production" ? "https://wedding-be.azzban.my.id" : "http://localhost:1323";
