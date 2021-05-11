<template>
  <div class="home">
    <div class="home-header">
      <div class="home-header-ce">
        <div class="home-header-ce-title">政 策</div>
        <div class="home-header-ce-input">
          <el-input placeholder="搜索政策"
                    v-model="input1">
            <i slot="suffix"
               class="el-input__icon el-icon-search"
               @click="go"></i>
          </el-input>
        </div>
        <div class="home-header-ce-hs">
          <div class="home-header-ce-hs-top">热门搜索：</div>
          <div class="home-header-ce-hs-rg"
               v-for="(item, index) in zhineng"
               :key="index">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
    <!-- 内容部分 -->
    <div class="home-cen">
      <div class="home-cen-left">
        <div class="home-cen-left-top">
          <div class="home-cen-left-top-bt">全部</div>
          <div class="home-cen-left-top-rl">
            <div class="home-cen-left-top-rl-box">
              <div class="home-cen-left-top-rl-box-left">日期</div>
              <div class="home-cen-left-top-rl-box-img el-icon-date"></div>
            </div>
          </div>
        </div>
        <div class="home-cen-left-bottom">
          <div class="home-cen-left-bottom-box"
               v-for="(item,index) in wenzhang"
               :key='index'
               @click="handleOpenPage(item.url)">
            <div class="home-cen-left-bottom-box-time">
              {{item.time}}
            </div>
            <div class="home-cen-left-bottom-box-title">
              {{item.title}}
            </div>
          </div>
          <div class="home-cen-left-bottom-jiazai">
            点击加载更多
          </div>
        </div>
      </div>
      <div class="home-cen-rg">
        <div class="home-cen-rg-title">
          政策焦点
        </div>
        <div class="home-cen-rg-bottom">
          <div class="home-cen-rg-bottom-box"
               v-for="(item, index) in jiaodian"
               :key='index'
               @click="handleOpenPage(item.url)">
            <div class="home-cen-rg-bottom-box-left"></div>
            <div class="home-cen-rg-bottom-box-right">
              {{item.title}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

//
<script>
//	import tableDate from "./companyByMock.js"
export default {
  data () {
    return {
      // 搜索框下
      zhineng: [
        {
          title: '压缩机'
        },
        {
          title: '环保设备'
        },
        {
          title: '电梯'
        },
        {
          title: '输配电设备'
        }
      ],
      //搜索框
      input1: '',
      // 日期
      value1: '',
      // 全部文章
      wenzhang: [
        {
          time: '04/27',
          url: 'https://mp.weixin.qq.com/s?__biz=Mzg3ODE5NDA4Mw==&mid=2247497698&idx=2&sn=a64c129aae65378878cd553fb6f49f99&chksm=cf15cb2ef8624238b9700d1d17e77f2ea53ab66d0208c2a1f0da17e6482e103d5c1f62711b7c&mpshare=1&scene=1&srcid=0428drjUFyjD0QX1pbffRQOL&sharer_sharetime=1619584009986&sharer_shareid=c40e49ef77bd799d0e83d15b177595c8&exportkey=AUIAsvo%2F3IocrAguNsRT3p4%3D&pass_ticket=JN9m0C6joVps0sTME0ziciCG%2BUyL5r42l7cm9YYQ95sQ2m%2BXKdIQGDvezG9%2BFyOX&wx_header=0#rd',
          title: '国家能源局启动源网荷储、多能互补一体化项目方案报送 5月30日前截止 '
        },
        {
          time: '04/26',
          url: 'https://mp.weixin.qq.com/s?__biz=Mzg3ODE5NDA4Mw==&mid=2247497510&idx=1&sn=2e22a9eb0a7134c0a1ee7cd144f1e871&chksm=cf15cbeaf86242fcd7d71aecbc751a680ae0e2b4aae83abd984f668e1a3087276df167170114&mpshare=1&scene=1&srcid=0428bsxQ6ylCxd0HK6uoyU7J&sharer_sharetime=1619584049543&sharer_shareid=c40e49ef77bd799d0e83d15b177595c8&exportkey=ARvdBrH39v9Cu3Itc46Of%2Fo%3D&pass_ticket=JN9m0C6joVps0sTME0ziciCG%2BUyL5r42l7cm9YYQ95sQ2m%2BXKdIQGDvezG9%2BFyOX&wx_header=0#rd',
          title: '国家能源局印发《2021年能源工作指导意见》 '
        },
        {
          time: '04/25',
          url: 'https://mp.weixin.qq.com/s?__biz=Mzg3ODE5NDA4Mw==&mid=2247497467&idx=2&sn=6d2114d4c5d20d1dc073a17ebe22147e&chksm=cf15ca37f8624321eec1e0635961529255a6ed5a44d574344a7e0688dd6205cb8c52e280f97d&mpshare=1&scene=1&srcid=04283DucGJZVZpOlXkYP3noF&sharer_sharetime=1619584062556&sharer_shareid=c40e49ef77bd799d0e83d15b177595c8&exportkey=Ace4r9w04NZIFViChVpj7zE%3D&pass_ticket=JN9m0C6joVps0sTME0ziciCG%2BUyL5r42l7cm9YYQ95sQ2m%2BXKdIQGDvezG9%2BFyOX&wx_header=0#rd',
          title: '关于对《国家发展改革委 国家能源局关于加快推动新型储能发展的指导意见（征求意见稿）》公开征求意见的公告 '
        },
        {
          time: '04/22',
          url: 'https://mp.weixin.qq.com/s?__biz=Mzg3ODE5NDA4Mw==&mid=2247497467&idx=1&sn=207b1feb1e627d7d3a8245a44c4047d6&chksm=cf15ca37f86243211482578dcd1d88c50dbc19df9c4e38b94a059bd78a69b8414674a716c228&mpshare=1&scene=1&srcid=04287zhfrPRbbwYeKfiGiUn5&sharer_sharetime=1619584076351&sharer_shareid=c40e49ef77bd799d0e83d15b177595c8&exportkey=ARORxfaqZNesHXwD5nJoNME%3D&pass_ticket=JN9m0C6joVps0sTME0ziciCG%2BUyL5r42l7cm9YYQ95sQ2m%2BXKdIQGDvezG9%2BFyOX&wx_header=0#rd',
          title: '国家能源局启动源网荷储、多能互补一体化项目方案报送 5月30日前截止 '
        },
        {
          time: '04/21',
          url: 'https://mp.weixin.qq.com/s?__biz=Mzg3ODE5NDA4Mw==&mid=2247497327&idx=2&sn=6345f03f7c2ccae1a97c4b82baacb133&chksm=cf15caa3f86243b5a7ee91864cc7835a9ac48b8b989ef504f15a579ae171efc2b89193bc947b&mpshare=1&scene=1&srcid=0428VbLLjdGCr3vqdu6rsslv&sharer_sharetime=1619584111262&sharer_shareid=c40e49ef77bd799d0e83d15b177595c8&exportkey=AZ9EwJ1mthCQI3sRpiGZfTQ%3D&pass_ticket=JN9m0C6joVps0sTME0ziciCG%2BUyL5r42l7cm9YYQ95sQ2m%2BXKdIQGDvezG9%2BFyOX&wx_header=0#rd',
          title: '生态环境部发布《关于加强高耗能高排放项目生态环境源头防控指导意见（征求意见稿）》  '
        },
        {
          time: '04/14',
          url: 'https://mp.weixin.qq.com/s?__biz=Mzg3ODE5NDA4Mw==&mid=2247497084&idx=1&sn=f44890791e92b262a8e7cbc44509432e&chksm=cf15c9b0f86240a6447bc4a70edee126915b2f4bfddba7cff9a7fd4383c3d01b90825f5b641b&mpshare=1&scene=1&srcid=0428ZFrXtpAzfAfcTHqneiKJ&sharer_sharetime=1619584134667&sharer_shareid=c40e49ef77bd799d0e83d15b177595c8&exportkey=AVSnUsnfGiyFHQDhQKJnXcc%3D&pass_ticket=JN9m0C6joVps0sTME0ziciCG%2BUyL5r42l7cm9YYQ95sQ2m%2BXKdIQGDvezG9%2BFyOX&wx_header=0#rd',
          title: '工信部公开征求对《“十四五”智能制造发展规划》（征求意见稿）的意见 '
        },
        {
          time: '04/08',
          url: 'https://mp.weixin.qq.com/s?__biz=Mzg3ODE5NDA4Mw==&mid=2247496917&idx=1&sn=3be7bfa00018533f7582654df41a0b17&chksm=cf15c819f862410f1351130bf553c9ab021f5e232c50e2e348b17356c8d44438748c64d0fcf9&mpshare=1&scene=1&srcid=0428ua7BlfCqPQeG4bgheyOu&sharer_sharetime=1619584157429&sharer_shareid=c40e49ef77bd799d0e83d15b177595c8&exportkey=AdG7ufIMhXjysEH65IhCoA0%3D&pass_ticket=JN9m0C6joVps0sTME0ziciCG%2BUyL5r42l7cm9YYQ95sQ2m%2BXKdIQGDvezG9%2BFyOX&wx_header=0#rd',
          title: '国家发改委发布2021年新能源上网电价政策有关事项通知（征求意见稿） '
        },
        {
          time: '04/01',
          url: 'https://mp.weixin.qq.com/s?__biz=Mzg3ODE5NDA4Mw==&mid=2247496572&idx=2&sn=2b9e27a68bb883e712e3d5d71b060fdb&chksm=cf15cfb0f86246a65e869f9c1d2d6096394e091ec6d607f21a54742962cd57ede61acffd2acc&mpshare=1&scene=1&srcid=0428uCCYg7N8tzB0aGPMHFEf&sharer_sharetime=1619584242700&sharer_shareid=c40e49ef77bd799d0e83d15b177595c8&exportkey=AW%2BjaoTK0ZlfdLdPs7Aambc%3D&pass_ticket=JN9m0C6joVps0sTME0ziciCG%2BUyL5r42l7cm9YYQ95sQ2m%2BXKdIQGDvezG9%2BFyOX&wx_header=0#rd',
          title: '2020年山东省燃煤机组关停整合情况公示，济宁这些电厂关停 '
        },
        {
          time: '04/01',
          url: 'https://mp.weixin.qq.com/s?__biz=Mzg3ODE5NDA4Mw==&mid=2247496777&idx=2&sn=c6d7e0a0caaa9327b38fe191f429f5fe&chksm=cf15c885f862419318cf246c96567c2daf93ebf08adf1fea5269b5bac9415ad4c7204d72608c&mpshare=1&scene=1&srcid=04286tMqI5NSBv1xiRLB2MQB&sharer_sharetime=1619584196630&sharer_shareid=c40e49ef77bd799d0e83d15b177595c8&exportkey=AVBWfDH2JnuXTW0UekHhuF0%3D&pass_ticket=JN9m0C6joVps0sTME0ziciCG%2BUyL5r42l7cm9YYQ95sQ2m%2BXKdIQGDvezG9%2BFyOX&wx_header=0#rd',
          title: '山西省发文要求完善风电、光伏三年滚动项目储备库！  '
        },
        {
          time: '03/31',
          url: 'https://mp.weixin.qq.com/s?__biz=Mzg3ODE5NDA4Mw==&mid=2247496777&idx=3&sn=c38445d1aebcb584d4ebc8560110bd22&chksm=cf15c885f8624193311834abada637ed752c1a431e28231636fb9b1b58c979af0bee7324184e&mpshare=1&scene=1&srcid=0428kVw0PzdxsjTv80thAn1Q&sharer_sharetime=1619584201736&sharer_shareid=c40e49ef77bd799d0e83d15b177595c8&exportkey=AeA6KSp1NzNGG366KByTVpY%3D&pass_ticket=JN9m0C6joVps0sTME0ziciCG%2BUyL5r42l7cm9YYQ95sQ2m%2BXKdIQGDvezG9%2BFyOX&wx_header=0#rd',
          title: '江西省人民政府办公厅关于支持首台（套）重大技术装备创新发展的若干意见 '
        },
        {
          time: '03/29',
          url: 'https://mp.weixin.qq.com/s?__biz=Mzg3ODE5NDA4Mw==&mid=2247496735&idx=2&sn=9d5765f3cf1c028c49d88758922f17aa&chksm=cf15c8d3f86241c54ad52dbcb15730b8a7578794d637e2ea94f76104be305d232b4d1106c445&mpshare=1&scene=1&srcid=0428Czs2AjSG8DcyQqFw5zZ7&sharer_sharetime=1619584211984&sharer_shareid=c40e49ef77bd799d0e83d15b177595c8&exportkey=AURDrUwObk6WON2lKSA3zpM%3D&pass_ticket=JN9m0C6joVps0sTME0ziciCG%2BUyL5r42l7cm9YYQ95sQ2m%2BXKdIQGDvezG9%2BFyOX&wx_header=0#rd',
          title: '浙江省2020年电力行业淘汰落后产能关停名单 '
        },
        {
          time: '03/29',
          url: 'https://mp.weixin.qq.com/s?__biz=Mzg3ODE5NDA4Mw==&mid=2247496655&idx=2&sn=b3dff45fd0e3faecbb0e4c84c98e2443&chksm=cf15cf03f8624615d3f56621d071a61813d02c28aad6b8cb7f6bc5e7aad95ee4321077fa4059&mpshare=1&scene=1&srcid=0428IKa2bcuARlzeDoMnYy3A&sharer_sharetime=1619584227772&sharer_shareid=c40e49ef77bd799d0e83d15b177595c8&exportkey=Aco%2FM6ZvwbsHVo8yPfq6zeQ%3D&pass_ticket=JN9m0C6joVps0sTME0ziciCG%2BUyL5r42l7cm9YYQ95sQ2m%2BXKdIQGDvezG9%2BFyOX&wx_header=0#rd',
          title: '甘肃发文推动1.23GW光伏、4.75GW风电建设进度 '
        },
        {
          time: '03/26',
          url: 'https://mp.weixin.qq.com/s?__biz=Mzg3ODE5NDA4Mw==&mid=2247496655&idx=1&sn=f759696753ffe31a81a61989d50ea289&chksm=cf15cf03f8624615cdaa959772710b30b1a91e4377638402d60942df05d0113e77026c181d87&mpshare=1&scene=1&srcid=0428cx9N6f8H8wes9kZh2sgd&sharer_sharetime=1619584233285&sharer_shareid=c40e49ef77bd799d0e83d15b177595c8&exportkey=Aaej9m5c3QYtYldwM8F1byI%3D&pass_ticket=JN9m0C6joVps0sTME0ziciCG%2BUyL5r42l7cm9YYQ95sQ2m%2BXKdIQGDvezG9%2BFyOX&wx_header=0#rd',
          title: '水利部农村水利水电司：狠抓小水电突出问题清理整治 开展小水电绿色改造和现代化提升 '
        }
      ],
      // 政策焦点
      jiaodian: [
        {
          url: 'https://mp.weixin.qq.com/s?__biz=Mzg3ODE5NDA4Mw==&mid=2247496655&idx=1&sn=f759696753ffe31a81a61989d50ea289&chksm=cf15cf03f8624615cdaa959772710b30b1a91e4377638402d60942df05d0113e77026c181d87&mpshare=1&scene=1&srcid=0428cx9N6f8H8wes9kZh2sgd&sharer_sharetime=1619584233285&sharer_shareid=c40e49ef77bd799d0e83d15b177595c8&exportkey=Aaej9m5c3QYtYldwM8F1byI%3D&pass_ticket=JN9m0C6joVps0sTME0ziciCG%2BUyL5r42l7cm9YYQ95sQ2m%2BXKdIQGDvezG9%2BFyOX&wx_header=0#rd',
          title: '水利部农村水利水电司：狠抓小水电突出问题清理整治 开展小水电绿色改造和现...'
        },
        {
          url: 'https://mp.weixin.qq.com/s?__biz=Mzg3ODE5NDA4Mw==&mid=2247496655&idx=2&sn=b3dff45fd0e3faecbb0e4c84c98e2443&chksm=cf15cf03f8624615d3f56621d071a61813d02c28aad6b8cb7f6bc5e7aad95ee4321077fa4059&mpshare=1&scene=1&srcid=0428IKa2bcuARlzeDoMnYy3A&sharer_sharetime=1619584227772&sharer_shareid=c40e49ef77bd799d0e83d15b177595c8&exportkey=Aco%2FM6ZvwbsHVo8yPfq6zeQ%3D&pass_ticket=JN9m0C6joVps0sTME0ziciCG%2BUyL5r42l7cm9YYQ95sQ2m%2BXKdIQGDvezG9%2BFyOX&wx_header=0#rd',
          title: '甘肃发文推动1.23GW光伏、4.75GW风电建设进度 '
        },
        {
          url: 'https://mp.weixin.qq.com/s?__biz=Mzg3ODE5NDA4Mw==&mid=2247496735&idx=2&sn=9d5765f3cf1c028c49d88758922f17aa&chksm=cf15c8d3f86241c54ad52dbcb15730b8a7578794d637e2ea94f76104be305d232b4d1106c445&mpshare=1&scene=1&srcid=0428Czs2AjSG8DcyQqFw5zZ7&sharer_sharetime=1619584211984&sharer_shareid=c40e49ef77bd799d0e83d15b177595c8&exportkey=AURDrUwObk6WON2lKSA3zpM%3D&pass_ticket=JN9m0C6joVps0sTME0ziciCG%2BUyL5r42l7cm9YYQ95sQ2m%2BXKdIQGDvezG9%2BFyOX&wx_header=0#rd',
          title: '浙江省2020年电力行业淘汰落后产能关停名单 '
        },
        {
          url: 'https://mp.weixin.qq.com/s?__biz=Mzg3ODE5NDA4Mw==&mid=2247496777&idx=3&sn=c38445d1aebcb584d4ebc8560110bd22&chksm=cf15c885f8624193311834abada637ed752c1a431e28231636fb9b1b58c979af0bee7324184e&mpshare=1&scene=1&srcid=0428kVw0PzdxsjTv80thAn1Q&sharer_sharetime=1619584201736&sharer_shareid=c40e49ef77bd799d0e83d15b177595c8&exportkey=AeA6KSp1NzNGG366KByTVpY%3D&pass_ticket=JN9m0C6joVps0sTME0ziciCG%2BUyL5r42l7cm9YYQ95sQ2m%2BXKdIQGDvezG9%2BFyOX&wx_header=0#rd',
          title: '江西省人民政府办公厅关于支持首台(套)重大技术装备创新发展的若干意见 '
        },
        {
          url: 'https://mp.weixin.qq.com/s?__biz=Mzg3ODE5NDA4Mw==&mid=2247496777&idx=2&sn=c6d7e0a0caaa9327b38fe191f429f5fe&chksm=cf15c885f862419318cf246c96567c2daf93ebf08adf1fea5269b5bac9415ad4c7204d72608c&mpshare=1&scene=1&srcid=04286tMqI5NSBv1xiRLB2MQB&sharer_sharetime=1619584196630&sharer_shareid=c40e49ef77bd799d0e83d15b177595c8&exportkey=AVBWfDH2JnuXTW0UekHhuF0%3D&pass_ticket=JN9m0C6joVps0sTME0ziciCG%2BUyL5r42l7cm9YYQ95sQ2m%2BXKdIQGDvezG9%2BFyOX&wx_header=0#rd',
          title: '山西省发文要求完善风电、光伏三年滚动项目储备库！ '
        }
      ]
    }
  },
  methods: {
    handleOpenPage (pageUrl) {
      window.open(pageUrl)
    },
  }
}
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &-header {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    background-image: url("../../assets/home/top img.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;

    &-ce {
      width: 1200px;
      height: 320px;
      padding-left: 340px;
      padding-top: 90px;

      &-title {
        width: 150px;
        height: 59px;
        font-size: 40px;
        margin-bottom: 20px;
        margin-left: 190px;
        font-family: Microsoft YaHei;
        font-weight: 600;
        cursor: pointer;
        color: #fff;
      }

      &-input {
        width: 500px;
        height: 44px;
        cursor: pointer;
      }

      &-hs {
        width: 500px;
        height: 30px;
        margin-top: 20px;
        margin-left: 3px;
        display: flex;

        &-top {
          width: 70px;
          height: 15px;
          line-height: 30px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #50597b;
        }

        &-rg {
          width: 90px;
          height: 26px;
          margin-top: 2px;
          margin-left: 5px;
          line-height: 26px;
          text-align: center;
          font-size: 14px;
          cursor: pointer;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #ffffff;
          background-color: #50597b;
          border-radius: 15px;
        }
      }
    }
  }

  &-cen {
    z-index: 999;
    width: 1200px;
    background-color: #fff;
    margin-top: -150px;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    padding: 20px 30px 25px 28px;
    box-shadow: 0px 0px 5px 0px rgba(51, 51, 51, 0.35);
    border-radius: 3px 3px 3px 3px;

    &-left {
      width: 800px;

      &-top {
        display: flex;
        margin-bottom: 50px;
        justify-content: space-between;

        &-bt {
          width: 60px;
          height: 29px;
          font-size: 30px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;
          line-height: 40px;
        }

        &-rl {
          padding-top: 5px;
          width: 100px;
          height: 30px;
          background: #ffffff;
          border: 1px solid #cecece;

          &-box {
            display: flex;
            justify-content: space-between;
            cursor: pointer;

            &-left {
              margin-left: 11px;
            }

            &-img {
              margin-right: 8px;
            }
          }
        }
      }

      &-bottom {
        &-box {
          display: flex;
          margin-top: 30px;
          border-bottom: 1px dashed #cccccc;

          &-time {
            width: 65px;
            height: 60px;
            margin-right: 20px;
            font-size: 24px;
            font-family: Arial;
            font-weight: 400;
            color: #e83829;
            text-align: center;
            line-height: 30px;
          }

          &-title {
            height: 60px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
            line-height: 30px;
          }
        }

        &-jiazai {
          margin: 0 auto;
          margin-top: 50px;
          margin-bottom: 50px;
          width: 478px;
          height: 31px;
          font-size: 12px;
          text-align: center;
          line-height: 31px;
          background: #eeeeee;
        }
      }
    }

    &-rg {
      width: 300px;
      margin-top: 64px;

      &-title {
        height: 63px;
        line-height: 63px;
        font-size: 18px;
        color: #333;
        font-weight: 600;
        border-bottom: 3px solid #e83829;
      }

      &-bottom {
        &-box {
          height: 50px;
          display: flex;
          margin-top: 20px;
          justify-content: space-between;

          &-left {
            width: 10px;
            height: 10px;
            margin-right: 10px;
            margin-top: 16px;
            background-color: #e83829;
          }

          &-right {
            width: 300px;
            line-height: 24px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
          }
        }
      }
    }
  }
}
</style>

<style scoped>
/deep/ .el-input__inner {
  width: 500px;
  height: 52px;
  border-radius: 25px;
}
</style>
