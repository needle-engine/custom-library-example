import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';


/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig(async ({ command }) => {

    const { needlePlugins, useGzip, loadConfig } = await import("@needle-tools/engine/plugins/vite/index.js");
    const needleConfig = await loadConfig();

    return {
        base: "./",
        plugins: [
            basicSsl(),
            needlePlugins(command, needleConfig, {
                // license: {
                //     team: "<team_id>", // <-- uncomment and set your team id. The id can be obtained from https://cloud.needle.tools/team, then click the Edit button next to your team name.
                // }
            }),
        ],
        build: {
            emptyOutDir: true,
            lib: {
                entry: "./src/main.ts",
                fileName: (format, entryName) => `${entryName}.${format}.js`,
                formats: ["es"]
            },
            rollupOptions: {
                external: ["*.glb"]
            }
        }
    }
});