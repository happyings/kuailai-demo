<template>
  <div>
    <header>快来掌柜</header>
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
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
</style>
