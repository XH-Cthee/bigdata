<template>
  <div id="main"></div>
</template>

<script>
import * as echarts from 'echarts';
import { onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'Myechart1View',
  setup() {
    const testecharts = () => {
      var mycharts = echarts.init(document.getElementById('main'));
      axios.get('http://localhost:8088/FinalDataCount/list')
          .then((response) => {
            const data = response.data.map(item => item.length);
            const randomData = getRandomData(data, 100);

            var option1 = {
              title: {
                left: 'center',
                text: '视频时长分布图'
              },
              xAxis: {
                type: 'category',
                name:'视频',
                data: Array.from({ length: 20 }, (_, index) => index)//生成个长度为20的数组
              },
              yAxis: {
                type: 'value',
                name:'视频时长'
              },
              toolbox: {//工具栏配置
                show:true,
                feature: {
                  saveAsImage: {show: true,},//另存为图片
                  dataView: {show: true, readOnly:false},//数据试图
                  restore: {show: true,},//恢复初始状态
                  dataZoom: {show: true,},//数据缩放
                  magicType: {show: true, type: ['bar', 'line'] },//切换为折线图
                }
              },
              series: [
                {
                  data: randomData,
                  type: 'bar',//柱状图
                  showBackground: true,//显示背景
                  backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'//背景颜色
                  },
                  markPoint: {
                    data: [
                      { type: 'max', name:'最大值' },//标记点的数据
                      { type: 'min' }
                    ]
                  },
                  markLine: {
                    data: [{ type: 'average' }]//标记线的数据--平均值
                  },
                  barWidth: '40%',//柱状图的宽度
                  label: { show: true, rotate: 0 },//显示方式，旋转角度为0
                  tooltip: {
                    trigger: 'item',//悬停在数据上时提示框的配置
                    triggerOn: 'click',
                    formatter: '{b}:{c}'//类别：数值
                  }
                }
              ]
            };

            mycharts.setOption(option1);
          })
          .catch((error) => {
            console.error('获取数据失败', error);
          });
    };

    const getRandomData = (data, count) => {
      if (count >= data.length) {
        return data;
      } else {
        const shuffled = data.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
      }
    };

    onMounted(() => {
      testecharts();
    });

    return {
      testecharts
    };
  }
};
</script>

<style scoped>
#main{
  width:1000px;
  height:700px;
  margin:0 auto;
}
</style>