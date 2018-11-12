<template lang="html">
  <div class="home">
    <Row :gutter="20">
      <i-col :xs="12" :md="8" :lg="4" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;padding-bottom: 10px;">
        <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
          <count-to :end="infor.count" count-class="count-style"/>
          <p>{{ infor.title }}</p>
        </infor-card>
      </i-col>
    </Row>
    <div class="flex-start flex-wrap">
      <Card class="overview-card width-100 margin-t-10">
        <p slot="title"><Icon type="md-stats" size="16"></Icon><span class="padding-rl-10">当日销售额(元)</span></p>
        <div id="c0">
        </div>
      </Card>
      <div class="width-50 padding-rl-5">
        <Card class="overview-card margin-t-10 border-box">
          <p slot="title"><Icon type="md-cash" size="16"></Icon><span class="padding-rl-10">销售额</span></p>
          <div id="c1">
          </div>
        </Card>
      </div>
      <div class="width-50 padding-rl-5">
        <Card class="overview-card margin-t-10 border-box">
          <p slot="title"><Icon type="md-medal" size="16"></Icon><span class="padding-rl-10">销量</span></p>
          <div id="c2">
          </div>
        </Card>
      </div>
      <div class="width-50 padding-rl-5">
        <Card class="overview-card margin-t-10">
          <p slot="title"><Icon size="16" type="ios-paw-outline"></Icon><span class="padding-rl-10">实时访客</span></p>
          <div id="c3">
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import InforCard from '../components/info-card';
import CountTo from '../components/count-to'
export default {
  components:{InforCard,CountTo},
  data:function(){
    return {
      inforCardData: [
        { title: '新增用户', icon: 'md-person-add', count: 803, color: '#2d8cf0' },
        { title: '累计点击', icon: 'md-locate', count: 232, color: '#19be6b' },
        { title: '新增问答', icon: 'md-help-circle', count: 142, color: '#ff9900' },
        { title: '分享统计', icon: 'md-share', count: 657, color: '#ed3f14' },
        { title: '新增互动', icon: 'md-chatbubbles', count: 12, color: '#E46CBB' },
        { title: '新增页面', icon: 'md-map', count: 14, color: '#9A66E4' }
      ],
      columns1: [{
          type: "index",
          width: 50,
      }, {
          title: '销售额',
          key: 'sales',
      },{
          title: '订单数',
          key: 'orders',
      },
      {
          title: '浏览量',
          key: 'view_count',
      },
      {
          title: '访客',
          key: 'UV',
      },
      {
          title: 'IP',
          key: 'IP_count',
      }],
      overviewReport: [{
          label: '今日',
          sales: "0.00",
          orders:0,
          name:'today',
          view_count: 260000,
          IP_count: 23746,
          UV: 24437,
      }, {
          label: '昨日',
          name:'yesterday',
          sales: "0.00",
          orders:0,
          view_count: 260000,
          IP_count: 23746,
          UV: 24437,
      },{
          label: '过去一周',
          name:'this_week',
          sales: "0.00",
          orders:0,
          view_count: 260000,
          IP_count: 23746,
          UV: 24437,
      },{
          label: '本月',
          name:'this_month',
          sales: "0.00",
          orders:0,
          view_count: 260000,
          IP_count: 23746,
          UV: 24437,
      }]
    }
  },
  mounted: function() {
        this.render_sales();
        this.render_brand_sales();
        this.render_sales_quantity();
        this.render_customer();
    },
    methods: {
        render_sales: function() {
            var data = [{
                    time: '0',
                    sold: 7.0
                },
                {
                    time: '2',
                    sold: 6.9
                },
                {
                    time: '4',
                    sold: 9.5
                },
                {
                    time: '6',
                    sold: 14.5
                },
                {
                    time: '8',
                    sold: 18.2
                },
                {
                    time: '10',
                    sold: 21.5
                },
                {
                    time: '12',
                    sold: 25.2
                },
                {
                    time: '14',
                    sold: 26.5
                },
                {
                    time: '16',
                    sold: 23.3
                },
                {
                    time: '18',
                    sold: 18.3
                },
                {
                    time: '20',
                    sold: 13.9
                },
                {
                    time: '22',
                    sold: 9.6
                },
                {
                    time: '24',
                    sold: 9.6
                }
            ];
            var chart = new G2.Chart({
                id: 'c0', // 指定图表容器 ID
                // width: 920, // 指定图表宽度
                height: 250, // 指定图表高度
                forceFit: true,
                plotCfg: {
                    margin: [10, 10, 30, 40] // 上，右，下，左
                }
            });

            chart.source(data, {
                time: {
                    alias: '时间',
                    range: [0, 1]
                },
                sold: {
                    alias: '销售'
                }
            });

            chart.legend(false);
            chart.area().position('time*sold');
            chart.line().position('time*sold').size(1);
            // Step 4: 渲染图表
            chart.render();

        },
        render_brand_sales: function() {
            var data = [{
                genre: '音儿',
                sold: 275
            }, {
                genre: '诗篇',
                sold: 115
            }, {
                genre: '恩裳',
                sold: 120
            }, {
                genre: '十二篮',
                sold: 350
            }, {
                genre: '歌中歌',
                sold: 150
            }, {
                genre: '奥丽嘉朵',
                sold: 50
            }]; // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
            // Step 1: 创建 Chart 对象
            var chart = new G2.Chart({
                id: 'c1', // 指定图表容器 ID
                // width: 414, // 指定图表宽度
                height: 300, // 指定图表高度
                forceFit: true,
                plotCfg: {
                    margin: [10, 10, 30, 40] // 上，右，下，左
                }
            });

            // Step 2: 载入数据源,定义列信息
            chart.source(data, {
                genre: {
                    alias: '品牌' // 列定义，定义该属性显示的别名
                },
                sold: {
                    alias: '销售'
                }
            });
            chart.axis('yDim', {
                title: "11111"
            });
            chart.legend(false);
            // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
            chart.interval().position('genre*sold').color('genre');
            // Step 4: 渲染图表
            chart.render();
        },
        render_sales_quantity: function() {
            var data = [{
                genre: '音儿',
                sold: 275
            }, {
                genre: '诗篇',
                sold: 115
            }, {
                genre: '恩裳',
                sold: 120
            }, {
                genre: '十二篮',
                sold: 350
            }, {
                genre: '歌中歌',
                sold: 150
            }, {
                genre: '奥丽嘉朵',
                sold: 250
            }]; // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
            // Step 1: 创建 Chart 对象
            var chart2 = new G2.Chart({
                id: 'c2', // 指定图表容器 ID
                // width: 414, // 指定图表宽度
                height: 300, // 指定图表高度
                forceFit: true,
                plotCfg: {
                    margin: [10, 10, 30, 40]
                }
            });
            chart2.legend(false);
            chart2.axis('xDim', {
                title: null
            })
            // Step 2: 载入数据源,定义列信息
            chart2.source(data, {
                genre: {
                    alias: '品牌' // 列定义，定义该属性显示的别名
                },
                sold: {
                    alias: '销售量'
                }
            });
            // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
            chart2.interval().position('genre*sold').color('genre')
            // Step 4: 渲染图表
            chart2.render();
        },
        render_customer: function() {
            var data = [{
                    time: '0',
                    qty: 7.0
                },
                {
                    time: '2',
                    qty: 6.9
                },
                {
                    time: '4',
                    qty: 9.5
                },
                {
                    time: '6',
                    qty: 14.5
                },
                {
                    time: '8',
                    qty: 18.2
                },
                {
                    time: '10',
                    qty: 21.5
                },
                {
                    time: '12',
                    qty: 25.2
                },
                {
                    time: '14',
                    qty: 26.5
                },
                {
                    time: '16',
                    qty: 23.3
                },
                {
                    time: '18',
                    qty: 18.3
                },
                {
                    time: '20',
                    qty: 13.9
                },
                {
                    time: '22',
                    qty: 9.6
                },
                {
                    time: '24',
                    qty: 9.6
                }
            ];
            var chart = new G2.Chart({
                id: 'c3', // 指定图表容器 ID
                // width: 414, // 指定图表宽度
                height: 300, // 指定图表高度
                forceFit: true,
                plotCfg: {
                    margin: [10, 10, 30, 40]
                }
            });
            chart.legend(false);
            chart.axis('xDim', {
                title: null
            })
            chart.source(data, {
                time: {
                    alias: '时间' // 列定义，定义该属性显示的别名
                },
                qty: {
                    alias: '访客数'
                }
            });
            chart.line().position('time*qty').shape("smooth").size(1);
            chart.render();
        },
        fetch_overview:function(){
          var vm=this;
          var today=new Date("2016-09-01");
          var day=today.getDay();
          var today_year=today.getFullYear();
          var today_month=today.getMonth()+1;
          var today_date=today.getDate();
          var today_time={
            year:today_year,
            month:today_month,
            date:today_date
          }
          /**
           * 计算今天与昨天时间范围
           */
          var today_s=new Date(today_year+'-'+today_month+'-'+today_date+' '+'00:00:00').getTime();
          var today_e=today_s+24*60*60*1000;
          var yesterday_s=today_s-24*60*60*1000;
          var yesterday_e=today_s;
          console.log(yesterday_s);
          /**
           * 计算本周与本月时间范围
           */
          var this_week_s=today_s-(day-1)*24*60*60*1000;
          var this_week_e=this_week_s+8*24*60*60*1000;
          console.log(this_week_e);
          var this_month_s=new Date(today_year+'-'+today_month+'-01 '+'00:00:00').getTime();
          var this_month_e=new Date(today_year+'-'+(today_month+1)+'-01 '+'00:00:00').getTime();
          console.log(this_month_s,this_month_e);
          api_get("/api/admin/overview",{
            today_s:today_s/1000,
            today_e:today_e/1000,
            yesterday_s:yesterday_s/1000,
            yesterday_e:yesterday_e/1000,
            this_week_s:this_week_s/1000,
            this_week_e:this_week_e/1000,
            this_month_s:this_month_s/1000,
            this_month_e:this_month_e/1000,
          },res=>{
            console.log(res);
            if(res.rsp){
              var body=res.body;
              vm.overviewReport[0].orders=body.today_count||0;
              vm.overviewReport[0].sales=body.today_sum||0;
              vm.overviewReport[1].orders=body.yesterday_count||0;
              vm.overviewReport[1].sales=body.yesterday_sum||0;
              vm.overviewReport[2].orders=body.this_week_count||0;
              vm.overviewReport[2].sales=body.this_week_sum||0;
              vm.overviewReport[3].orders=body.this_month_count||0;
              vm.overviewReport[3].sales=body.this_month_sum||0;
            }
          });
        }
    },
}
</script>

<style lang="css">
</style>
