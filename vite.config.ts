import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    server: {
        host: "::",
        port: 8080,
        hmr: {
        overlay: false,
        },
        allowedHosts: [
            '.ngrok-free.app/', 
            '21c5-2405-3800-84f-df43-cdeb-473-f8d9-88a1.ngrok-free.app/',
            'fc36-2001-f40-98c-2889-b8a3-7315-e2ec-8a37.ngrok-free.app'
        ],
    },
    plugins: [react()].filter(Boolean),
    resolve: {
        alias: {
        "@": path.resolve(__dirname, "./src"),
        },
        dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
    },
}));
