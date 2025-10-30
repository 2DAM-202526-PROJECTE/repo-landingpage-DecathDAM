import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
build: {
rollupOptions: {
input: {
main: resolve(__dirname, 'index.html'),
nutricio: resolve(__dirname, 'Nutricio.html'),
oferts: resolve(__dirname, 'Ofetes.html'),
deport: resolve(__dirname, 'Deport.html'),
equipament: resolve(__dirname, 'Equipament.html'),

},
},
},
})
