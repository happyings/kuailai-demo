<template>
  <div>
    <van-nav-bar title="我的收入" left-text="返回" left-arrow>
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 2,
      value2: "b",
      option1: [
        { text: "全部收入", value: 0 },
        { text: "当月收入", value: 1 },
        { text: "当天收入", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "销量排序", value: "b" }
      ]
    };
  }
};
</script>
<style lang="less" scope>
.user {
  height: 80px;
  width: 100%;
  background: #fff;
  margin-bottom: 10px;
  .user-portrait {
    float: left;
    margin: 6px;
  }
  p.user-name {
    float: left;
    font-size: 16px;
    line-height: 80px;
  }
}
</style>