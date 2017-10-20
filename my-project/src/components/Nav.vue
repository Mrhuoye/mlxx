<style scoped>
  .container {
    position: relative;
    width: 100%;
    overflow-x: hidden;
  }

  .container ul {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 900;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    background-color: white;
    box-shadow: 0 -1px 4px #cccccc;
  }

  .container ul li {
    list-style-type: none;
  }

  .container ul li a p {
    margin-top: 8px;
    text-decoration: none;
    color: #7E7D7F;
    line-height: 0;
    font-size: 10px;
  }

  .font_active {
    color: #AE79FA;
  }
</style>
<template>
  <div class="container">
    <router-view></router-view>
    <ul>
      <li v-for="(value, index) in navData"
          @click="navChang(index)">

        <router-link v-if="nav_selected[index]"
                     v-bind:to="value.nav_link">
          <img v-bind:src="value.nav" alt="" width="20" height="18">
          <p>{{value.nav_name}}</p>
        </router-link>
        <router-link v-else
                     v-bind:to="value.nav_link" class="font_active">
          <img v-bind:src="value.active_nav" alt="" width="20" height="18">
          <p>{{value.nav_name}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapState} from  'vuex'
  export default{
    data(){
      return {
        navData: [
          {
            nav: "../static/img/home_normal.png",
            active_nav: "../static/img/home_selected.png",
            nav_name: "首页",
            nav_link: "/"
          },
          {
            nav: "../static/img/practice_normal.png",
            active_nav: "../static/img/practice_selected.png",
            nav_name: "修行社",
            nav_link: "practice"
          },
          {
            nav: "./static/img/skin_normal.png",
            active_nav: "../static/img/skin_selected.png",
            nav_name: "肤质",
            nav_link: "skin"
          },
          {
            nav: "./static/img/mine_normal.png",
            active_nav: "../static/img/mine_selected.png",
            nav_name: "我的",
            nav_link: "personal"
          },
        ],
        nav_selected: [false, true, true, true],  //控制导航条图片切换
      }
    },
    methods: {
      navChang: function (index) {
        this.nav_selected.forEach(function (v, i, arr) {
          arr[i] = true;
        });
        this.$set(this.nav_selected, index, false);//动态更新数组并且渲染virtual dom
      }
    }
  }
</script>
