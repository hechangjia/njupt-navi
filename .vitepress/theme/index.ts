// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './myLayout.vue' 
import './style.css'

export default {
  Layout,
  extends: DefaultTheme,
  enhanceApp({ app }) {


  },
} satisfies Theme
