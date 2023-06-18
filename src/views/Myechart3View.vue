<template>
  <div>图三</div>
  <div id="main"></div>
</template>

<script>
import * as echarts from 'echarts'
import {onMounted} from 'vue'
import axios from 'axios'

export default {
  name: "Myechart3View",
  setup() {
    const myechart3 = () => {
      axios.get('http://localhost:8088/FinalDataCount/list').then((resp) => {
        //console.log(resp)
        const respdata = resp.data
        var arrayx = []
        var arrayg = []
        var arrayw = []
        var arrayf = []
        var arrayl = []
        for (var item = 1; item <= 10000; item++) {
          arrayx.push(respdata[item].uid)
          arrayg.push(respdata[item].hots)
          arrayw.push(respdata[item].watchnumpv)
          arrayf.push(respdata[item].follower)
          arrayl.push(respdata[item].length)
        }
        console.log(arrayx)
        var ehart3 = echarts.init(document.getElementById('main'))
        /*var option1 = {
          xAxis: {
            type: 'category',
            //data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            data: arrayx
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              //data: [120, 200, 150, 80, 70, 110, 130],
              data: arrays,
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
              }
            }
          ]
        }*/
        /*var option1 = {
          title: {
            text: 'Datacount Stacked Area Chart'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data: ['gold', 'watchnumpv', 'follower', 'length'],
            top: "5%",
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: arrayx
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: 'gold',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: arrayg
            },
            {
              name: 'watchnumpv',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: arrayw
            },
            {
              name: 'follower',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: arrayf
            },
            {
              name: 'length',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data:arrayl
            },
          ]
        };*/
        var option1 = {
          tooltip: {
            trigger: 'axis',
            position: function (pt) {
              return [pt[0], '10%'];
            }
          },
          title: {
            left: 'center',
            text: 'Gold Area Chart'
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: arrayg
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
          },
          dataZoom: [
            {
              type: 'slider',
              start: 0,
              end: 10
            },
            {
              start: 0,
              end: 10
            }
          ],
          series: [
            {
              name: 'hots',
              type: 'line',
              symbol: 'none',
              sampling: 'lttb',
              itemStyle: {
                color: 'rgb(255, 70, 131)'
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                  }
                ])
              },
              data: arrayw
            }
          ]
        };


        ehart3.setOption(option1)
      }).catch((err) => {
        console.log(err)
      })

    }
    onMounted(() => {
      myechart3()
    })
    return {myechart3}
  }
}
</script>

<style scoped>
#main {
  width: 600px;
  height: 500px;
}
</style>