<template>
  <div id="main"></div>
</template>

<script>
import * as echarts from 'echarts';
import { onMounted } from "vue";
import axios from "axios";

export default {
  name: "PieChart",
  setup() {
    const mypiechart = () => {
      var mycharts = echarts.init(document.getElementById("main"));
      axios.get("http://localhost:8088/FinalDataCount/list")
          .then((response) => {
            const data = response.data.map(item => {
              return {
                value: item.watchnumpv,
                name: item.rating
              }
            });

            const randomData = getRandomData(data, 10);

            var option1 = {
              title: {
                left: 'center',
                text: '视频播放量与评级关系图'
              },
              tooltip: {
                trigger: 'item'//悬停显示 触发方式为item
              },
              legend: {
                top: '5%',
                left: 'center'
              },
              series: [
                {
                  name: '视频播放量',
                  type: 'pie',//饼图
                  radius: ['40%', '70%'],//内半径为40% 外半径为70%
                  avoidLabelOverlap: false,//数据标签重叠  这里不允许
                  itemStyle: {//每个扇区的样式
                    borderRadius: 10,//圆角半径
                    borderColor: '#fff',//边框颜色
                    borderWidth: 2//宽度
                  },
                  label: {
                    show: false,//不显示数据标签
                    position: 'center'//数据标签在中间显示
                  },
                  emphasis: {//当鼠标悬停在扇区上的样式
                    label: {
                      show: true,//显示数据标签 也就是视频评级
                      fontSize: 40,//字体大小
                      fontWeight: 'bold'//加粗
                    }
                  },
                  labelLine: {
                    show: false
                  },
                  data: randomData//每个扇区的数据
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
      mypiechart();
    });

    return {
      mypiechart
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