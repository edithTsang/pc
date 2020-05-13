<template>
  <div style="margin-bottom: 30px">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item>
        {{ breadcrumb.text }}
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{ breadcrumb.text2 }}</el-breadcrumb-item>
      <el-breadcrumb-item><span style="color: #D5AF0C;">{{ breadcrumb.text3 }}</span></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    breadcrumb: {
      type: Object
    }
  }
}
</script>
