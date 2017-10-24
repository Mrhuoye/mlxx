<style scoped>
  .container{
    width: 100%;
    background-color: white;
  }
  .top-nav{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 900;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    width: 100%;
    background-color: white;
  }
  .origin-head{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 44px;
    width: 100%;
    height: 220px;
    background-color: #e8e8e8;
    /*background-image: url(./../../img/empty_bottle_bg.png);*/
  }
  .origin-head > img{
    position: absolute;
    left: 0;
    top: 44px;
    z-index: 0;
    width: 100%;
  }
  .origin-head > p:nth-child(2){
    position: relative;
    z-index: 1;
    font-size: 24px;
    color: #FFFFFF;
  }
  .origin-head > p:nth-child(3){
    position: relative;
    z-index: 1;
    margin-top: 2px;
    font-size: 16px;
    color: #FFFFFF;
  }
  .title{
    padding: 12px;
    font-size: 14px;
    line-height: 21px;
    color: #323233;
    text-align: left;
  }
  .hot-new{
    display: flex;
    flex-flow: row nowrap;
    padding-left: 12px;
    padding-right: 12px;
  }
  .hot-new > p{
    flex-grow: 1;
    text-align: center;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 14px;
    color: #323233;
    border-bottom: 2px solid #e6e6e6;
    cursor: pointer;
  }
  .hot-new > .active{
    color:#AC69FE;
    border-bottom: 2px solid #AC69FE;
  }
  .layout-container{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 14px 12px 14px 12px;
    width: 100vw;
    background-color: #F5F5F5;
  }
  .find-container{
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    margin-bottom: 12px;
    width: calc(50vw - 18px);
    background-color: white;
    cursor: pointer;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .find-container  img{
    max-width: 100%;
    height: 125px;
    background-color: #e8e8e8;
  }
  .find-info{
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    margin-top: 8px;
    text-align: left;
  }
  .find-info > p{
    padding-left: 8px;
    padding-right: 8px;
    min-height: 32px;
    color: #4b494c;
    text-align: left;
    font-size: 12px;
    line-height: 16px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .user-info{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 8px;
    width: 100%;
    align-items: center;
    text-align: left;
  }
  .user-info img{
    width: 20px;
    height: 20px;
    background-color: #e8e8e8;
    border-radius: 50%;
  }
  .user-info  div{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
  .user-info  div > p:nth-child(2){
    margin-left: 8px;
    font-size: 12px;
    color: #4b494c;
    line-height: 12px;
  }
  .user-info  > p:nth-child(2){
    justify-items: flex-end;
    font-size: 12px;
    color: #7C7A7F;
    line-height: 12px;
  }
  hr{
    margin-left: 12px;
    margin-right: 12px;
    outline: none;
    border: none;
    border-top: 1px solid #999999;
  }
</style>
<template>
  <div class="container">
    <div class="top-nav">
      <img src="../../img/hole_back.png" alt="" width="40" height="40" @click="back">
      <p>空瓶记</p>
      <img src="../../img/more-icom.png" alt="" style="margin-right: 12px">
    </div>
    <div class="origin-head">
      <img :src="practiceData.xxsButton[1].image" alt="">
      <p>{{practiceData.xxsButton[1].title}}</p>
      <p>文章：{{originData.total}}</p>
    </div>
    <p class="title">
      {{practiceData.xxsButton[1].param.content}}
    </p>
    <div class="hot-new">
      <p v-bind:class="{active: isHot  }" @click="changItem(1)">最热</p>
      <p v-bind:class="{active: isNew }" @click="changItem(0)">最新</p>
    </div>
    <div class="layout-container">
      <!--<router-link :to="{name : 'articleDetail',params : {id : item.id }}">-->
        <div v-for="item in findData" class="find-container">
          <router-link :to="{name : 'findDetail',params : {id : item.id }}">
          <img :src="item.imgSrc" alt="" width="170" height="125">
          <div class="find-info">
            <p>{{item.title}}</p>
            <div class="user-info">
              <div>
                <img :src="item.userBaseInfo.headimgurl" alt="" width="20" height="20">
                <p>{{item.userBaseInfo.nickname}}</p>
              </div>
              <p>{{item.hitNum}}阅读</p>
            </div>
          </div>
          </router-link>
        </div>
      <!--</router-link>-->
    </div>
  </div>
</template>
<script>
  var axios = require('axios');
  export default{
    data(){
      return{
        isHot:true,
        isNew:false,
        practiceData:{},
        originData:{},
        findData:[],
        sort:1,
      }
    },
    created(){
      this.fetchData();
    },
    methods:{
      changItem(index){
        if(index == 1){
            this.isHot = true;
            this.isNew = false;
        }else{
          this.isHot = false;
          this.isNew = true;
        }
        this.sort = index;
        this.fetchData();
      },
      tagItem(index){
        this.type = index;
        this.fetchData();
      },
      fetchData(){
        let that = this;
        this.practiceData = this.$store.state.practiceData;
        axios.post('bevol/user_part/list/lists?p_entity_id=63&sort='+that.sort+'&pager=1&pageSize=10', {},
          {
            headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
          })
          .then(function(response) {
            that.originData = response.data;
            that.findData = response.data.result;
            console.log("空瓶记数据++++++++++++++++"+JSON.stringify(response.data.total));
          })
          .catch(function(error) {
            console.log(error)
          });
      },
      back(){
        this.$router.go(-1);
      }
    }
  }
</script>

