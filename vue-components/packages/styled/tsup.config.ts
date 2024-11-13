import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm'],
    outDir: 'dist',
    dts: true,
    external: [/^@khulnasoft\/(.*)$/],
    sourcemap: true,
    splitting: false
});
