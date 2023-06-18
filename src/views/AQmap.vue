<template>
  <div class="content">
    <div
        ref="charts"
        style="width: 1200px; height: 1000px;margin:0 auto"
    ></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import china from '@/assets/china.json'
export default {
  data () {
    return {
   /*   points: [ // 散点图数据
        { name: '新疆', value: [87.628579, 43.793301], itemStyle: { color: '#00EEFF' } }, // 新疆
        { name: '四川', value: [104.076452, 30.651696], itemStyle: { color: '#00EEFF' } }, // 四川
        { name: '甘肃', value: [103.826777, 36.060634], itemStyle: { color: '#00EEFF' } }, // 甘肃
        { name: '云南', value: [102.709372, 25.046432], itemStyle: { color: '#00EEFF' } }, // 云南
        { name: '广西', value: [108.327537, 22.816659], itemStyle: { color: '#00EEFF' } }, // 广西
        { name: '湖南', value: [112.982951, 28.116007], itemStyle: { color: '#00EEFF' } }, // 湖南
        { name: '山东', value: [117.020725, 36.670201], itemStyle: { color: '#00EEFF' } }, // 山东
        { name: '河南', value: [113.753094, 34.767052], itemStyle: { color: '#00EEFF' } }, // 河南
        { name: '山西', value: [112.578781, 37.813948], itemStyle: { color: '#00EEFF' } }, // 山西
        { name: '福建', value: [119.296194, 26.101082], itemStyle: { color: '#00EEFF' } }, // 福建
        { name: '浙江', value: [120.152575, 30.266619], itemStyle: { color: '#00EEFF' } }, // 浙江
        { name: '江苏', value: [118.763563, 32.061377], itemStyle: { color: '#00EEFF' } }, // 江苏
        { name: '北京', value: [116.407387, 39.904179], itemStyle: { color: '#A6283F' } }, // 北京
        { name: '陕西', value: [108.953939, 34.266611], itemStyle: { color: '#00EEFF' } }, // 陕西
        { name: '广东', value: [113.266887, 23.133306], itemStyle: { color: '#00EEFF' } } // 广东
      ],
      linesData: [// 线条数据
        { coords: [[116.407387, 39.904179], [87.628579, 43.793301]] },// 北京->新疆
        { coords: [[116.407387, 39.904179], [104.076452, 30.651696]] },// 北京->四川
        { coords: [[116.407387, 39.904179], [103.826777, 36.060634]] },// 北京->甘肃
        { coords: [[116.407387, 39.904179], [102.709372, 25.046432]] },// 北京->云南
        { coords: [[116.407387, 39.904179], [108.327537, 22.816659]] },// 北京->广西
        { coords: [[116.407387, 39.904179], [112.982951, 28.116007]] },// 北京->湖南
        { coords: [[116.407387, 39.904179], [117.020725, 36.670201]] },// 北京->山东
        { coords: [[116.407387, 39.904179], [113.753094, 34.767052]] },// 北京->河南
        { coords: [[116.407387, 39.904179], [112.578781, 37.813948]] },// 北京->山西
        { coords: [[116.407387, 39.904179], [119.296194, 26.101082]] },// 北京->福建
        { coords: [[116.407387, 39.904179], [120.152575, 30.266619]] },// 北京->浙江
        { coords: [[116.407387, 39.904179], [118.763563, 32.061377]] },// 北京->安徽
        { coords: [[116.407387, 39.904179], [113.266887, 23.133306]] },// 北京->广东
        { coords: [[116.407387, 39.904179], [108.953939, 34.266611]] }// 北京->陕西
      ],
      planePath: // 飞机svg
          'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
    */}
  },
  mounted () {
    this.initCharts()
  },
  methods: {
    initCharts () {
      const charts = echarts.init(this.$refs['charts'])
      const option = {
        backgroundColor: '#0E2152',// 背景颜色
        geo: {// 地图配置
          map: 'china',
          label: { // 图形上的文本标签
            normal: {// 通常状态下的样式
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            emphasis: {// 鼠标放上去高亮的样式
              textStyle: {
                color: '#fff'
              }
            }
          },
          itemStyle: {// 地图区域的样式设置
            normal: { // 通常状态下的样式
              borderColor: '#5089EC',
              borderWidth: 1,
              areaColor: { //地图区域的颜色
                type: 'radial', // 径向渐变
                x: 0.5, // 圆心
                y: 0.5,// 圆心
                r: 0.8,// 半径
                colorStops: [
                  { // 0% 处的颜色
                    offset: 0,
                    color: 'rgba(0, 102, 154, 0)'
                  },
                  { // 100% 处的颜色
                    offset: 1,
                    color: 'rgba(0, 102, 154, .4)'
                  }
                ]
              }
            },
            // 鼠标放上去高亮的样式
            emphasis: {
              areaColor: '#2386AD',
              borderWidth: 0
            }
          }
        },
        series: [{
          data: [{ name: '北京', value: 39.92 },
            { name: '天津', value: 39.13 },
            { name: '上海', value: 31.22 },
            { name: '重庆', value: 66 },
            { name: '河北', value: 147 },
            { name: '河南', value: 113 },
            { name: '云南', value: 25.04 },
            { name: '辽宁', value: 50 },
            { name: '黑龙江', value: 114 },
            { name: '湖南', value: 175 },
            { name: '安徽', value: 117 },
            { name: '山 东', value: 92 },
            { name: '新疆', value: 84 },
            { name: '江苏', value: 67 },
            { name: '浙江', value: 84 },
            { name: '江西', value: 96 },
            { name: '湖北', value: 273 },
            { name: '广西', value: 59 },
            { name: '甘肃', value: 99 },
            { name: '山西', value: 39 },
            { name: '内蒙古', value: 58 },
            { name: '陕西', value: 61 },
            { name: '吉林', value: 51 },
            { name: '福建', value: 29 },
            { name: '贵州', value: 71 },
            { name: '广东', value: 38 },
            { name: '青海', value: 57 },
            { name: '西藏', value: 24 },
            { name: '四川', value: 58 },
            { name: '宁夏', value: 52 },
            { name: '海南', value: 54 },
            { name: '台湾', value: 88 },
            { name: '香港', value: 66 },
            { name: '澳门', value: 77 },
            { name: '南海诸岛', value: 55 }],
          name: 'pm2.5',
          geoIndex: 0,
          type: 'map',
        }],
        visualMap: {
          min: 0,
          max: 300,
          inRange: {color: ['white', 'red']}
        },
        tooltip: {trigger: 'item'}
      }
      // 地图注册，第一个参数的名字必须和option.geo.map一致
      echarts.registerMap('china', china)
      charts.setOption(option)
    }
  }
}
</script>
<style scoped>
.content {
  background-color: #0e2152;
  height: 100%;
}
</style>