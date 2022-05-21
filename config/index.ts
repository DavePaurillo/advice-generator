const dev = process.env.NODE_ENV !== "production";

export const server = dev ? "http://localhost:3000" : "https://advice-generator-davepaurillo.vercel.app";
