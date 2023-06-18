<template>
  <div>
    <div id="main"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import axios from 'axios';
import { onMounted } from 'vue';

export default {
  name: "Myechart1View.vue",
  setup() {
    const testecharts = () => {
      var mycharts = echarts.init(document.getElementById("main"));

      // Fetch data from the URL
      axios.get('http://localhost:8088/FinalDataCount/list')
          .then(response => {
            const data = response.data;

            // Get random set of uid data
            const randomData = getRandomData(data, 'uid', 10);

            const legendData = randomData.map(item => item.uid);
            const seriesData = randomData.map(item => ({
              value: [
                item.hots,
                item.watchnumpv,
                item.follower,
                item.length,
                item.looktime
              ],
              name: item.uid
            }));

            var option = {
              title: {
                text: '用户使用习惯分析',
                left: 'center',//将标题内容居中显示
              },
              tooltip: {//设置雷达提示框
                trigger: 'item'//提示框触发方式为item，当鼠标悬停在数据项上面时显示
              },
              legend: {//设置雷达的图例
                type: 'scroll',//当图例过多时可以滚动
                bottom: 10,//图例在底部显示
                data: legendData//图例名称的数据
              },
              visualMap: {//雷达图的视觉映射
                top: 'middle',//中间显示
                right: 10,//偏右侧
                color: ['red', 'yellow'],//颜色范围从红色到黄色
                calculable: true//可以拖动
              },
              radar: {//设置雷达图的雷达区域
                indicator: [
                  { text: 'hots', max: 600000, },
                  { text: 'watchnumpv', max: 1000000 },
                  { text: 'follower', max: 800000 },
                  { text: 'length', max: 800000 },
                  { text: 'looktime', max: 1800000 }
                ],
                name: {
                  textStyle: {
                    color: 'blue', // Set the text color
                    fontSize: 14 // Set the text font size
                  }
                }
              },
              series: [
                {
                  type: 'radar',
                  symbol: 'none',//数据点的标记为无
                  lineStyle: {
                    width: 1//雷达图的线条样式、宽度为1
                  },
                  emphasis: {//高亮数据的样式
                    areaStyle: {
                      color: 'rgba(0,250,0,0.3)'//数据高亮时数据为半透明的绿色
                    }
                  },
                  data: seriesData
                }
              ]
            };
            mycharts.setOption(option);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    };

    // Function to get random data from the provided array
    // 首先，data.sort(() => 0.5 - Math.random()) 这行代码将数组 data 进行随机排序。
    // sort() 方法接受一个比较函数作为参数，该比较函数根据两个元素之间的随机值来进行排序。
    // 这样，数组中的元素就会随机重新排列
    // Math.random()是JavaScript内置函数，获得-1到1之间的随机数
    // 这里就随机-0.5到0.5之间的数作为参数来随机排序
    // slice方法就是获得数组中前count个元素
    const getRandomData = (data, key, count) => {
      const shuffled = data.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    onMounted(() => {
      testecharts();
    });

    return {
      testecharts
    };
  }
}
</script>

<style scoped>
#main{
  width:800px;
  height:600px;
  margin:0 auto;
}
</style>