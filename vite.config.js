import { resolve } from 'path';
import { defineConfig } from 'vite'

export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
        outDir: resolve(__dirname, 'dist')
    },
    server: {
        port: 3000
    },
    resolve: {
        alias: {
            'utils': resolve(__dirname, 'src/utils'),
            'components': resolve(__dirname, 'src/components'),
            'pages': resolve(__dirname, 'src/pages'),
            'layout': resolve(__dirname, 'src/layout'),
            'modules': resolve(__dirname, 'src/modules'),
            'styles': resolve(__dirname, 'src/styles/_styles.scss')
        }
    },
})
