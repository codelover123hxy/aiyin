import { createRouter,createWebHashHistory } from 'vue-router'
    
import routesPC from './PC'
import routesMobile from './mobile'
// 是否为手机端
const ISMOBILE = function () {
    let flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
    console.log("flag",flag);
    return flag
  }
console.log(ISMOBILE)

const router = createRouter({
    history:createWebHashHistory(), 
    routes:ISMOBILE() ? routesMobile:routesPC})
export default router