import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  // NProgress.start()
/* 路由发生变化修改页面title */

if (to.meta.title) {

  document.title = to.meta.title

}
  next()
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
