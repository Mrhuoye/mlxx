<style scoped>
  .container{
    background-color: #F5F5F5;
    padding: 0;
    margin: 0;
    margin-bottom: 54px;
  }
 .practice-container{
   margin-top: 44px;
 }
.practice-origin{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  margin-top: -5px;
  padding:12px 30px 12px 30px;
  background-color: white;
}
 .practice-origin li{
   list-style: none;
   margin-left: 26px;
 }
 .practice-origin li:first-child{
   margin-left: 0;
 }
 .practice-origin li img{
   width: 40px;
   height: 40px;
   border-radius: 50%;
 }
 .practice-origin li p{
   margin-top: 6px;
   font-size: 12px;
   color: #646466;
 }
  .hot-topic{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    height: 44px;
    background-color: white;
  }
 .hot-topic p{
   color: #4C4B4C;
   font-size: 16px;
 }
 .hot-topic img{
   margin-left: 4px;
 }
  .protect-skin{
    border: 0 solid transparent;
    padding-bottom: 12px;
    padding-left: 12px;
    padding-right: 12px;
    text-align: left;
    background-color: white;
  }
  .protect-skin figure{
    margin: 0;
    display: inline-block;
    width: 64px;
    height: 64px;
    background-color: #e8e8e8;
    vertical-align: middle;
  }
  .protect-skin img{
    vertical-align: top;
    border-radius: 4px;
  }
  .protect-skin section{
    display: inline-block;
    vertical-align: top;
    margin-left: 8px;
  }
  .protect-skin section h3{
    color: #4C4B4C;
    font-size: 14px;
    font-weight: 400;
  }
  .protect-skin section p{
    margin-top: 6px;
    font-size: 12px;
    color: #656466;
    letter-spacing: 0;
    line-height: 12px;
  }
  .protect-skin > hr{
    margin-top: 12px;
    border: none;
    border-bottom: 1px solid #CCCCCC;
  }
  /*精选动态*/
  .selected-trends{
    margin-bottom: 8px;
    padding-top: 12px;
    text-align: left;
    background-color: white;
  }
  .selected-trends section{
    width: 100%;
    padding: 12px;
  }
  .selected-trends h3{
    font-size: 16px;
    color: #323233;
    letter-spacing: 0;
    line-height: 15px;
    font-weight: 400;
  }
  .selected-trends section > p{
    margin-top: 12px;
    max-height: 105px;
    font-size: 14px;
    color: #4C4B4C;
    letter-spacing: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  /*用户信息*/
  .user-info{
    padding: 0 12px 12px 12px;
    background-color: white;
  }
  .user-info img,article{
    display: inline-block;
    vertical-align: top;
  }
  .user-info img{
    margin-top: 2px;
    border-radius: 50%;
  }
  .user-info article{
    margin-left: 9px;
  }
  .user-info article p:nth-child(1){
    font-size: 14px;
    color: #4B494C;
  }
  .user-info article p:nth-child(2){
    margin-top: 2px;
    font-size: 10px;
    color: #646266;
  }
  .good-comment{
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    width: 100%;
    margin-top: 10px;
    padding: 0 12px 12px 12px;
    vertical-align: middle;
    background-color: white;
  }
  .good-comment > span{
    margin-left: 3px;
    font-size: 11px;
    color: #AFACB3;
    letter-spacing: 0;
    line-height: 22px;
  }
  /* 骨架 */
  .shell-banner{
    width: 100%;
    height: 155px;
    background-color: #e8e8e8;
  }
  .shell-img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #e8e8e8;
  }
  .shell-p{
    width: 100px;
    height: 16px;
    background-color: #e8e8e8;
  }
  .shell-img-64{
    display: inline-block;
    width: 64px;
    height: 64px;
    border-radius: 4px;
    background-color: #e8e8e8;
  }
  /* 评论骨架 */
  .comment-shell-container{
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .comment-shell-container > div{
    margin-left: 12px;
    margin-top: 12px;
    width: 40px;
    height: 40px;
    background-color: #e8e8e8;
    border-radius: 50%;
  }
  .comment-shell-container > section{
    margin-left: 8px;
  }
  .comment-shell-container > section > p:nth-child(1){
    margin-top: 15px;
    width: 108px;
    height: 20px;
    background-color: #e8e8e8;
  }
  .comment-shell-container > section > p:nth-child(2){
    margin-top: 5px;
    width: 128px;
    height: 16px;
    background-color: #e8e8e8;
  }
  .comment-shell-container > p{
    position: absolute;
    top: 15px;
    right: 12px;
    width: 50px;
    height: 17px;
    background-color: #e8e8e8;
  }
  #shell-star{
    margin-left: 67px;
    margin-top: 8px;
    width: 80px;
    height: 14px;
    background-color: #e8e8e8;
  }
  #shell-content{
    margin-top: 10px;
    margin-left: 60px;
    width: 70%;
    height: 63px;
    background-color: #e8e8e8;
  }
</style>
<template>
  <div class="container">
      <topbar>
        <p slot="title">修行社</p>
        <img slot="right" src="./../img/search.png" alt="" width="17" height="17" onerror="onerror=null;src='http://iph.href.lu/17x17'">
      </topbar>
      <div v-show="topBannerData.length != 0" class="practice-container">
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in topBannerData" :key="item.id">
            <img v-bind:src="item.image" alt="banner" width="100%" height="155" onerror="onerror=null;src='http://iph.href.lu/414x155'">
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>

        <ul class="practice-origin">
          <li v-for="(item,index) in topImgData">
            <img :src="item.button_image" alt="" onerror="onerror=null;src='http://iph.href.lu/120x120'" @click="buttonNav(index)">
            <p>{{item.title}}</p>
          </li>
        </ul>
      </div>
    <!-- banner骨架 -->
    <div v-show="topBannerData.length == 0" class="practice-container">
       <div class="shell-banner"></div>
      <ul class="practice-origin">
        <li v-for="item in 3">
          <div class="shell-img"></div>
          <p class="shell-p"></p>
        </li>
      </ul>
    </div>
    <!--热门话题-->
    <router-link to="/hotTopic" class="origin">
    <div class="hot-topic">
      <p>热门话题</p>
      <img src="../img/home_into.png" alt="" width="18" height="18">
    </div>
    </router-link>

    <div v-show="protectSkinData.length != 0" class="protect-skin" v-for="(item,index) in protectSkinData">
      <router-link :to="{name:'hotTopicList',params:{id:item.id,descp:item.descp,imageSrc:item.imageSrc,topic:item.title}}">
        <figure>
          <img :src="item.mini_imageSrc" alt="" width="64" height="64">
        </figure>
      <section>
        <h3>{{item.title}}</h3>
        <p>{{item.hit_num}}人参与</p>
      </section>
      </router-link>
    </div>
    <!-- 骨架 -->
    <div v-show="protectSkinData.length == 0" class="protect-skin" v-for="item in 3">
        <div class="shell-img-64"></div>
        <section style="margin-top: 0">
          <p class="shell-p"></p>
          <p class="shell-p"></p>
        </section>
    </div>
    <!--精选动态-->
    <div class="hot-topic">
      <p>精选动态</p>
    </div>
    <div v-show="userPartData.length != 0" class="selected-trends" v-for="(item,index) in userPartData">
      <router-link :to="{name : 'findDetail',params : {id : item.id }}" class="origin">
        <div class="user-info">
          <img :src="item.userBaseInfo.headimgurl" alt="" width="32" height="32" onerror="onerror=null;src='http://iph.href.lu/32x32'">
          <article>
            <p>{{item.userBaseInfo.nickname}}</p>
            <p>{{skin(index)}}</p>
          </article>
        </div>
      <section>
      <h3>{{item.title}}</h3>
      <p>{{item.userPartDetails[0].content}}</p>
      </section>
        <img :src="item.imgSrc" alt="" width="100%" height="220" onerror="onerror=null;src='http://iph.href.lu/414x220'">
      <div class="good-comment">
        <span>{{item.hitNum}}阅读 | </span>
        <span> {{item.commentNum}}评论</span>
      </div>
      </router-link>
    </div>
    <!-- 评论骨架屏 -->
    <div v-show="userPartData.length == 0"  style="background-color: white;padding-bottom: 44px">
      <div class="comment-shell-container">
        <div></div>
        <section>
          <p></p>
          <p></p>
        </section>
        <p></p>
      </div>
      <div id="shell-star"></div>
      <div id="shell-content"></div>
    </div>
    <!-- end -->
  </div>
</template>
<script>
  import topbar from '../components/topBar'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  var axios = require('axios');
  var jsonp = require('jsonp');
  require('promise/polyfill-done');

  export  default {
      name:'top',
      data () {
          return {
            protectSkinData:[],
            selectedTrendsData:[],
            topImgData:[],
            topBannerData:[],
            userPartData:[],
            swiperOption: {
              //http://www.swiper.com.cn/api/
              // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
              notNextTick: true,
              autoplay: 3000,
              direction : 'horizontal',
              grabCursor : true,
              setWrapperSize :true,
              autoHeight: true,
              pagination : '.swiper-pagination',
              paginationClickable :true,
              observeParents:true,
            },
          }
      },
    components:{
          topbar
    },
    created(){
      this.fetchData();
    },
    methods: {
      buttonNav(index){
          if(index == 0){
              this.$router.push('/mxOrigin');
          }else if(index == 1){
            this.$router.push('/emptyBottle');
          }else if( index == 2 ){
            this.$router.push('/makeUp');
          }
      },
      fetchData:function () {
          let initData = this.$store.state.initData;
          let that = this;
          if(initData.length != 0 ){
            this.topImgData = initData.xxsButton;
            this.topBannerData = initData.xxsBanners;
          } else {
            let url = encodeURI('http://api.bevol.cn/init7');
            jsonp(url, null, function (err, data) {
              if (err) {
                console.error(err.message);
              } else {
                that.topImgData = data.result.xxsButton;
                that.topBannerData = data.result.xxsBanners;
                console.log(data);
              }
            });
          }
//      精选动态
//        axios.get('../static/virtualData/featuredDynamic.json')
//          .then(function (response) {
//            that.userPartData = response.data.result.userParts;
//            that.protectSkinData = response.data.result.hostLists;
////            console.log("精选动态：" + JSON.stringify(that.userPartData));
//          })
//          .catch(function (error) {
//            console.log(error);
//          });
        axios.post('/bevol/sns/index2', {},
          {
              headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
              "postman-token":"3fadffa6-062b-9500-2937-dce06872e37b"
              }
          })
          .then(function(response) {
            that.userPartData = response.data.result.userParts;
            that.protectSkinData = response.data.result.hostLists;
            that.$store.dispatch('practiceData', response.data.result);
            console.log("修行社数据+++++++++++++++++++++++++++++"+JSON.stringify(response));
          })
          .catch(function(error) {
            console.log(error)
          });
      },
      skin: function (index) {
//            将取出的肤质标签子母分割拼成真正的肤质标签
        let tag = this.userPartData[index].userBaseInfo.skinResults;
        if (tag != null) {
          let tagArr = tag.split('_');
          let realTag = "";
          tagArr.forEach(function (value) {
            switch (value) {
              case "DQ":
                realTag += "轻干 |";
                break;
              case "DZ":
                realTag += "重干 |";
                break;
              case "OQ":
                realTag += "轻油 |";
                break;
              case "OZ":
                realTag += "重油 |";
                break;
              case "RQ":
                realTag += " 轻耐 |";
                break;
              case "RZ":
                realTag += " 重耐 |";
                break;
              case "SQ":
                realTag += " 轻敏 |";
                break;
              case "SZ":
                realTag += " 重敏 |";
                break;
              case "N":
                realTag += " 非色素 |";
                break;
              case "P":
                realTag += " 色素 |";
                break;
              case "T":
                realTag += " 紧致";
                break;
              case "W":
                realTag += " 皱纹";
                break;
              default:
                realTag += value;
                break;
            }
          });
          return realTag;
        }else{
            return "";
        }
      },
    }
  }
</script>
