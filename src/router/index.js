import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Myechart1View from "@/views/Myechart1View";
import Myechart3View from "@/views/Myechart3View";
import MywordcloudView from "@/views/MywordcloudView";
import ChinaMap from "@/views/ChinaMap";
import PieChart from "@/views/PieChart";
import ScatterChart from "@/views/ScatterChart";
import AQmap from "@/views/AQmap";
import numpvAndRating from "@/views/NumpvAndRating";
import LooktimeAndFollower from "@/views/LooktimeAndFollower";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/myechart1',
    name: 'myechart1',
    component: Myechart1View
  },
  {
    path: '/myechart3',
    name: 'myechart3',
    component: Myechart3View
  },
  {
    path: '/mywordcloud',
    name: 'mywordcloud',
    component: MywordcloudView
  },
  {
    path: '/map',
    name: 'chinamap',
    component: ChinaMap
  },
  {
    path: '/piechart',
    name: 'Mypiechart',
    component: PieChart
  },
  {
    path: '/scatterchart',
    name: 'Myscatterchart',
    component: ScatterChart
  },
  {
    path: '/aqmap',
    name: 'Myaqmap',
    component: AQmap
  },
  {
    path: '/NumpvAndRating',
    name: 'WatchnumpvAndRating',
    component: numpvAndRating
  },
  {
    path: '/LooktimeAndFollower',
    name: 'LooktimeAndFollower',
    component: LooktimeAndFollower
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
