import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                nutricio: resolve(__dirname, 'Nutricio.html'),
                ofertes: resolve(__dirname, 'Ofertes.html'),
                deport: resolve(__dirname, 'Deport.html'),
                equipament: resolve(__dirname, 'Equipament.html'),

            },
        },
    },
})
