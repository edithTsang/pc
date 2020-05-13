<template>
  <div class="frame">
    <el-container>
      <el-aside
        width="220px"
        style="background-color:#F4F4F4;height: 900px;"
      >
        <!--侧导航-->
        <MemberBar />
      </el-aside>
      <el-main>
        <div
          class="content"
          :style="{height: (this.$store.state.bodyHeight-20) + 'px',overflow:'auto'}"
        >
          <div />
          <transition
            name="move"
            mode="out-in"
          >
            <!--展示内容-->
            <router-view />
          </transition>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
// 导航组件
import MemberBar from '../../components/Member/SideMenu'
export default {
  components: {
    MemberBar
  }
}
</script>
