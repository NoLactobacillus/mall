<template>
  <div id="tab-bar-item" @click="itemClick">
    <div class="item-icon" v-show="!isActive"><slot name="icon"></slot></div>
    <div class="item-icon-active" v-show="isActive"><slot name="icon-active"></slot></div>
    <div class="item-text" :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    // 父组件传入的路由
    link: {
      type: String,
      required: true
    },
    //父组件传入的active状态的字体颜色
    activeColor: {
      type: String
    }
  },
  computed:{
    isActive(){
      //判断页面当前路由与当前组件传入的路由是否一致
      return this.$route.path == this.link
    },
    activeStyle(){
      // 动态设置tabbar-item字体颜色
      let fontColor = this.activeColor =='undefined' ? '' : this.activeColor
      return this.isActive ? {'color': fontColor} : {}
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.link).then(()=>{
        console.log('跳转成功')
      }).catch(()=>{
        console.log('重复点击')
      })
    },
  }
}
</script>

<style scoped>
  #tab-bar-item{
    flex: 1
  }

</style>

