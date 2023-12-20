import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

const root=resolve(__dirname,'src','mpa')
const outDir=resolve(__dirname,'docs')
const download=resolve(__dirname,'src','download')

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@root': root,
            '@download': download,
        },
    },
    plugins: [vue()],
    root,
    build: {
        rollupOptions: {
            input: {
                index: resolve(root,'index.html'),

            },
        },
        outDir,
        emptyOutDir: true,
    },
})
