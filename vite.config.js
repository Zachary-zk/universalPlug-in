import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    open:true,
    proxy:{
      '/bg/': {
        target: 'http://api.asilu.com', // 后端服务实际地址
        changeOrigin: true, //开启代理
      }
        // rewrite: (path) => path.replace(/^\/api/, '')
    },
    // cors:{
    //   origin: 'http://api.asilu.com/',
    //   optionsSuccessStatus: 200 
    // }
  },
  
})
