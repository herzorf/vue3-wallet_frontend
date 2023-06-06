import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  vueJsx({
    transformOn: true,
    mergeProps: true
  }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  },
  //设置 0.0.0.0预览
  server: {
    host: '0.0.0.0',
  }
})
