<template>
  <div class="mine-container">
    <!-- 弹框，安全验证 -->
    <div class="dialog-bg" :class="{block:needImg}" @click="cancel">
    </div>
    <div class="dialog" :class="{block:needImg}">
      <p>安全验证</p>
      <p>基于对您当前的操作环境的检测，请完成以下操作</p>
      <div class="code-container">
      <input type="text" class="border-input">
        <img :src="codeImg" alt="">
      </div>
      <div class="enter-mlxx" id="finish">完成</div>
    </div>

    <p class="back" @click="back">取消</p>
    <h1>注册</h1>
    <input class="border-input" type="text" placeholder="输入手机号" v-model="phoneNum"><br>
    <div id="error" class="question">
      {{errorMsg}}
    </div>
    <div class="code-container">
      <input class="border-input" type="text" placeholder="验证码">
      <div id="get-code" class="border-input" :class="{codeActive:isSend}" @click="sendCode">获取验证码</div>
    </div>
    <div class="enter-mlxx">下一步</div>
    <div class="question">
      遇到问题?
    </div>
  </div>
</template>
<script>
  var axios = require('axios');
  export default {
    data () {
      return {
        phoneNum: '',
        isSend:false,
        errorMsg:"",
        needImg:false,
        codeImg:"",

      }
    },
    watch:{
        phoneNum:function () {
          this.isSend = this.phoneNum.length == 11 ? true : false;
        }
    },
    methods: {
      sendCode(){
        let that = this;
        if(this.isSend){
          axios.post('bevol/app/vcode3?account='+this.phoneNum+'&type=0', {},
            {
              headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
            })
            .then(function(response) {
              that.errorMsg = response.data.msg;
              if(response.data.msg == '发送成功'){
//                需要图片验证
                that.needImg = true;
                that.getImgCode();
              }
            })
            .catch(function(error) {
              console.log(error)
            });
        }else{
           that.errorMsg = "请输入正确的手机号"
        }
      },
      getImgCode(){
        let that = this;
        axios.get('bevol//app/vcode2/refresh?account='+this.phoneNum+'&type=0',{},
          {
            headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
          })
          .then(function(response) {
//            that.codeImg = encodeURI(response.data);
            that.codeImg = JSON.stringify(response.data);
          })
          .catch(function(error) {
            console.log(error)
          });
      },
      cancel(){
          this.needImg = false;
      },
      back(){
        this.$router.go(-1);
      }
    }
  }
</script>
<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .mine-container{
    height: 100vh;
    padding: 12px;
    text-align: center;
    background-color: white;
  }
  h1{
    margin-top: 48px;
    margin-bottom: 36px;
    font-weight: 400;
    color: #323233;
    text-align: center;
  }
  .enter-mlxx{
    margin: 30px auto 0 auto;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 85%;
    background-color: #ad69ff;
    color: white;
    text-align: center;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
  }
  .question{
    margin: 6px auto;
    width: 85%;
    font-size: 10px;
    color: #4b494c;
    text-align: right;
    cursor: pointer;
  }
  .border-input{
    margin-top: 12px;
    width: 85%;
    padding: 8px;
    outline: none;
    border: 1px solid #999999;
    border-radius: 4px;
    font-size: 14px;
    color: #4b494c;
  }
  .code-container{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin: 0 auto;
    width: 85%;
  }
  .code-container > .border-input{
    flex-grow: 1;
  }
  #get-code{
    margin-left: 12px;
    font-size: 14px;
    cursor: pointer;
  }
  .back{
    font-size: 14px;
    color: #8657c7;
    text-align: left;
    cursor: pointer;
  }
  .codeActive{
    border: 1px solid #ac69fe;
    color: #ac69fe;
  }
  #error{
    color: #ff6c72;
  }
  /* 弹框 */
  .dialog-bg{
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 900;
    width: 100%;
    height: 700px;
    background-color: black;
    opacity: .5;
  }
  .dialog{
    display: none;
    position: absolute;
    z-index: 910;
    left: 15%;
    top: 50%;
    padding: 18px 6px 18px 6px;
    transform: translateY(-50%);
    width: 70%;
    background-color: white;
    border-radius: 8px;
  }
  .dialog > p:nth-child(1){
    font-size: 18px;
    color: #4b494c;
    text-align: center;
  }
  .dialog > p:nth-child(2){
    margin: 12px auto;
    width: 85%;
    font-size: 12px;
    color: #666666;
    text-align: left;
  }
  #finish{
    margin-top: 12px;
  }
  .block {
    display: block;
  }
</style>

