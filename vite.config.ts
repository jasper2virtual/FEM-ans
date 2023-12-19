import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

const root=resolve(__dirname,'src','mpa')
const outDir=resolve(__dirname,'docs')
const assets=resolve(__dirname,'src','assets')

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@root': root,
            '@assets': assets
        },
    },
    plugins: [vue()],
    root,
    build: {
        rollupOptions: {
            input: {
                index: resolve(root,'index.html'),
                about: 'about.html',
            },
        },
        outDir,
        emptyOutDir: true,
    },
})
