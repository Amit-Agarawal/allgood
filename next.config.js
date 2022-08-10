/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        MONGODB_URI: "mongodb+srv://ibad12:callofduty123456.@cluster0.3l9etec.mongodb.net/UniBond?retryWrites=true&w=majority",
        DB_NAME: "UniBond",
        apiUrl:
            process.env.NODE_ENV === "development"
                ? "http://localhost:3000" // development api
                : "https://uni-bond.vercel.app", // production api
    },
    serverRuntimeConfig: {
        secret: "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, IT CAN BE ANY STRING",
    },
    publicRuntimeConfig: {
        apiUrl:
            process.env.NODE_ENV === "development"
                ? "http://localhost:3000" // development api
                : "https://uni-bond.herokuapp.com", // production api
    },
};

module.exports = nextConfig;
