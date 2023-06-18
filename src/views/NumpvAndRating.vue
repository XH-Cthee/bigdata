<template>
  <div>
    <div id="main"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { onMounted } from "vue";
import axios from 'axios';

export default {
  name: "Myechart1View",
  setup() {
    const testecharts = async () => {
      try {
        const response = await axios.get('http://localhost:8088/FinalDataCount/list');
        const data = response.data;

        const mychart = echarts.init(document.getElementById("main"));

        const option = {
          title: {
            left: 'center',
            text: '播放量与点赞数关系图'
          },
          xAxis: {
            type: 'category',
            data: data.map(item => item.hots),
            name: '点赞数',
          },
          yAxis: {
            type: 'value',
            name: '播放量',
          },
          series: [
            {
              data: data.map(item => ({
                value: item.watchnumpv,
                label: {
                  show: true,//鼠标悬浮在数据上时显示数来
                  position: 'top',//在上方显示
                  formatter: '{c}', // 当前数据的值
                },
              })),
              type: 'line',//折线图
              symbol: 'circle',//显示数据的标记且为圆形
              symbolSize: 20,//标记的大小
              lineStyle: {
                color: '#5470C6',//折线的颜色
                width: 4,//宽度
                type: 'dashed',//虚线
              },
              itemStyle: {
                borderWidth: 2,//标记点的样式
                borderColor: '#EE6666',//
                color: 'pink',//填充色
              },
            },
          ],
        };

        mychart.setOption(option);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    onMounted(() => {
      testecharts();
    });

    return {
      testecharts,
    };
  },
};
</script>

<style scoped>
#main{
  width:800px;
  height:600px;
  margin:0 auto;
}
</style>