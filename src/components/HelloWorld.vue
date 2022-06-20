<template>
  <div class="home">
    <transition
      name="animate__animated animate__bounce"
      enter-active-class="animate__slideInDown"
      appear
     >
      <div class="home-top"> 
        <div class="home-top-tabs">
          <div class="rtlink">
              <router-link to="/nico" active-class="active" class="rtlink-item hvr-grow hvr-bounce-to-bottom" tag="li" >Nico</router-link>
              <router-link to="/recommend" active-class="active" class="rtlink-item hvr-grow hvr-bounce-to-bottom" tag="li">推荐</router-link>
              <router-link to="/transport" active-class="active" class="rtlink-item hvr-grow hvr-bounce-to-bottom" tag="li">搬运</router-link>
              <router-link to="/about" active-class="active" class="rtlink-item hvr-grow hvr-bounce-to-bottom" tag="li">关于</router-link>
          </div>
        </div>
      </div>
    </transition>
      
      <transition
          name="animate__animated animate__bounce"
          enter-active-class="animate__slideInUp"
          appear
        >  
          <div class="context">
                  <router-view></router-view>   
          </div>
      </transition>
    
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
  
  },
};
</script>

<style lang="less" scoped>
.home {
  // background-image:url("../assets/background/bvg.jpg");
  -moz-background-size:100% 100%; 
  background-size:100% 100%;
  /*  z-index:1; */
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;
  margin: 0 auto;
    .home-top {
      z-index: 999;
      width: 100%;
      height: 180px;
      background-image: url("../assets/background/71.png");
      background-repeat: no-repeat;
      // position: fixed;
      // top: 0;
      position: sticky;
      top: -130px;
    }
    .home-top-tabs {
      height: 50px;
      width: 100%;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);//高斯模糊
      position: absolute;
      top: 125px;


    }
    .rtlink {
      width: 50%;
      height: 100%;
      margin: 0 auto;
      font-size: 28px;
      font-weight: 600;
      display: flex;
      padding: 1px 0;
      .rtlink-item{
        width: 125px;
        margin-right: 15px;
      }
    }
    .active{
      border-bottom: solid blue; 
      background: #f036b8;
    }
    li{
      list-style:none;
      padding-left: 20px;
    }
  
    .context{
      position:relative;
      border: 1px solid silver;
      width: 50%;
      height: 900px;
      margin: 0px auto; 
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);//高斯模糊
      overflow: hidden;
    }
}
</style>