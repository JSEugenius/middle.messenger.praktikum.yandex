import { resolve } from 'path';
import { defineConfig } from 'vite'

export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
        outDir: resolve(__dirname, 'dist'),
        emptyOutDir: true
    },
    server: {
        port: 3000
    },
    resolve: {
        alias: {
            'utils': resolve(__dirname, 'src/utils'),
            'components': resolve(__dirname, 'src/components'),
            'pages': resolve(__dirname, 'src/pages'),
            'layouts': resolve(__dirname, 'src/layouts'),
            'modules': resolve(__dirname, 'src/modules'),
            'media': resolve(__dirname, 'src/media'),
            'styles': resolve(__dirname, 'src/styles/_styles.scss')
        }
    },
})
