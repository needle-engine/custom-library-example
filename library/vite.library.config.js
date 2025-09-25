import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import typescript2 from 'rollup-plugin-typescript2';

export default defineConfig(async ({ command }) => {

    const { needlePlugins, useGzip, loadConfig } = await import("@needle-tools/engine/plugins/vite/index.js");
    const needleConfig = await loadConfig();

    return {
        base: "./",
        plugins: [
            basicSsl(),
            needlePlugins(command, needleConfig, {}),
        ],
        build: {
            emptyOutDir: true,
            lib: {
                entry: "./src/main.ts",
                formats: ["es"]
            },
            rollupOptions: {
                external: ["*.glb"]
            }
        }
    }
});