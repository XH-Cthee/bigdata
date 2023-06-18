<template>
  <div>
    <div id="main"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'MywordcloudView',
  setup() {
    const mywordcloud = () => {
      axios.get('http://localhost:8088/FinalDataCount/list')
          .then((resp) => {
            const data = resp.data;
            const randomData = getRandomData(data, 2000);
            const date = randomData.map((item) => item.follower);//将需要的属性取出来存放到新的数组中
            const values = randomData.map((item) => item.looktime);

            var wordcloud = echarts.init(document.getElementById("main"));

            var option = {
              tooltip: {
                trigger: 'axis',//鼠标悬停在数据上时显示提示框
                position: function (pt) {
                  return [pt[0], '10%'];//设置提示框的位置，X坐标和鼠标一样，Y坐标固定在距离图标顶部10%的位置
                }
              },
              title: {
                left: 'center',
                text: '粉丝数量与视频总观看时长关系图'
              },
              toolbox: {//图标工具箱
                feature: {//定义三个功能
                  dataZoom: {//拖动选择区域来缩放图表
                    yAxisIndex: 'none'
                  },
                  restore: {},//还原图表到初始状态
                  saveAsImage: {}//将图表另存为图片
                }
              },
              xAxis: {//图表的x轴数据
                type: 'category',//类型为类目型
                boundaryGap: false,//类目轴中不留白空间隔
                name:'粉丝数',
                data: date
              },
              yAxis: {
                type: 'value',//类型为数值型
                name:'播放量',
                boundaryGap: [0, '100%']//数指轴中轴线两边留白百分比分别时0%和100%
              },
              dataZoom: [
                {
                  type: 'inside',//可以通过鼠标滚轮缩放选中的区域
                  start: 0,//初始的缩放范围为0%到10%
                  end: 10
                },
                {
                  start: 0,
                  end: 10
                }
              ],
              series: [
                {
                  name: '总观看时长',
                  type: 'line',//折线图
                  symbol: 'none',//不显示图上的标记点
                  sampling: 'lttb',//对数据进行降采样、采用LTTB算法
                  itemStyle: {
                    color: 'rgb(255, 70, 131)'
                  },
                  areaStyle: {//折线图下面的区域为渐变色
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
                  data: values
                }
              ]
            };

            wordcloud.setOption(option);
          })
          .catch((error) => {
            console.error('获取数据失败', error);
          });
    };

    const getRandomData = (data, count) => {
      const randomData = [];
      const len = data.length;
      for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * len);
        randomData.push(data[randomIndex]);
      }
      return randomData;
    };

    onMounted(() => {//组件挂载后执行回调函数
      mywordcloud();
    });

    return {
      mywordcloud
    };
  }
};
</script>

<style scoped>
#main{
  width:800px;
  height:600px;
  margin:0 auto;
}
</style>