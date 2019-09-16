<template>
  <div>
    <div class="user">
      <!-- <span class="user-portrait">头像</span> -->
      <van-image
        round
        width="4rem"
        height="4rem"
        class="user-portrait"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <p class="user-name">立即登录</p>
    </div>
    <van-cell-group class="order">
      <van-cell value="我的账单" icon="balance-list" is-link @click="goOrder()" />
      <van-cell value="我的订单" icon="location-o" is-link />
      <van-cell value="我的订单" icon="location-o" is-link />
      <van-cell value="我的订单" icon="location-o" is-link />
      <van-cell value="我的订单" icon="location-o" is-link />
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goOrder() {
        this.$router.push("/order");
      }
    };
  }
};
</script>
<style lang="less" scope>
.user {
  height: 80px;
  width: 100%;
  background: #fff;
//   margin: 10px 0;
  .user-portrait {
    float: left;
    margin: 6px;
  }
  .user-name {
    float: left;
    font-size: 16px;
    line-height: 80px;
    height: 80px;
  }
}
</style>