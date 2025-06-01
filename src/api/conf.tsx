const env = process.env.NODE_ENV;

export const host = env === "development" ? "https://wedding-be.azzban.my.id" : "http://localhost:1323";
