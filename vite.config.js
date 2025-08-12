import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
//
// export default {
//   base: '/accl-lab-website/', // <- Add this line
//   // plugins: [react()],
// }

export default defineConfig({
  base: '/accl-lab/',  // 👈 ADD THIS LINE
  plugins: [react()],
})

