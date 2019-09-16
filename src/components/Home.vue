<template>
  <div class="home">
    <header>快来掌柜</header>
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <p class="scan">扫一扫</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      onSearch() {}
    };
  }
};
</script>
<style lang="less" scope>
.home {
  header {
    font-size: 20px;
    background: #1989fac7;
    color: #fff;
    display: block;
    height: 35px;
    line-height: 35px;
    text-align: center;
  }
  .scan {
    width: 200px;
    height: 200px;
    line-height: 200px;
    background: #1989fac7;
    border-radius: 100%;
    margin: 150px auto;
    text-align: center;
    color: #fff;
    text-align: center;
    font-size: 20px;
    box-shadow: 5px 10px 100px rgba(8, 110, 206, 0.664),
      0 0 2px rgba(177, 217, 243, 0.836);
  }
}
</style>
