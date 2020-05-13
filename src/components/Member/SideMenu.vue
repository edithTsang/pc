<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :collapse="collapse"
      router
      collapse-transition
      unique-opened
      active-text-color="#FFCC01"
      :default-active="currentMenu"
    >
      <template
        v-for="item in items"
        v-cloak
      >
        <template v-if="item.subset.length!==0">
          <el-submenu
            :key="item.url"
            :index="item.index"
          >
            <template slot="title">
              <svg-icon
                :name="item.icon"
                class="svg-icon"
              />
              <span
                slot="title"
                class="nav-title"
              >{{ item.name }}</span>
            </template>
            <el-menu-item
              v-for="(subItem,i) in item.subset"
              :key="i"
              class="edsub-class"
              :index="subItem.url"
            >
              <span
                slot="title"
              >{{ subItem.name }}</span>
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item
            :key="item.url"
            :index="item.url"
          >
            <svg-icon :name="item.icon" />
            <span
              slot="title"
              class="nav-title"
            >{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // openeds: ['1'],
      currentMenu: 'user_center',
      collapse: false,
      items: [
        { name: '个人中心', index: '1', url: 'user_center', icon: 'my', subset: [] },
        {
          name: '订单管理',
          index: '2',
          icon: 'order',
          subset: [
            { name: '我的订单', url: 'my_odd', subset: [] },
            { name: '海运订单', url: 'ocean_odd', subset: [] },
            { name: '空运订单', url: 'air_transport', subset: [] },
            { name: '快递订单', url: 'express_odd', subset: [] }
          ]
        },
        { name: '产品信息库', url: 'produc', icon: 'product', subset: [] },
        { name: '财务管理',
          index: '3',
          icon: 'money',
          subset: [
            { name: '财务记录', url: 'financial_records', subset: [] },
            { name: '在线充值', url: 'online_recharge', subset: [] },
            { name: '充值订单', url: 'recharge_order', subset: [] },
            { name: '入账申请', url: 'entry_application', subset: [] },
            { name: '优惠卷', url: 'coupon', subset: [] },
            { name: '我的运呗', url: 'my_yun_bei', subset: [] },
            { name: '运呗申请记录', url: 'yun_bei_record', subset: [] }
          ]
        },
        { name: '账号管理',
          index: '4',
          icon: 'userInfo',
          subset: [
            { name: '基本资料', url: 'basic_info', subset: [] },
            { name: '发件人管理', url: 'sender', subset: [] },
            { name: '收件人管理', url: 'addressee', subset: [] },
            // { name: '手机修改', url: 'iphone_set', subset: [] },
            // { name: '邮件修改', url: 'email_set', subset: [] },
            { name: '实名认证', url: 'certification', subset: [] },
            { name: '子账号管理', url: 'sub_account', subset: [] },
            { name: '角色管理', url: 'role', subset: [] }
          ]
        }
      ]

    }
  },
  watch: {
    $route: {
      handler(newRouter) {
        this.currentMenu = newRouter.name
      },
      immediate: true
    }
  },
  created() {
  },
  mounted() {
    this.getUrl()
  },
  methods: {
    getUrl() {
      const currentUrl = window.location.href
      this.currentMenu = currentUrl.split('#')[1].split('/')[2]
    }
  }
}
</script>

<style scoped lang="scss">
  .sidebar{
    .sidebar-el-menu{
      background-color: #F4F4F4;
    }
  }

  /*element css*/
  .el-menu{
    background-color: #F4F4F4;
  }
  .el-menu-item{
    /*color: #666;*/
  }
  .el-menu-item.is-active{
    background-color: #fff;
  }
  .el-menu-item:hover,.el-submenu__title:hover { background-color: #fff !important;}
  .nav-title{
    font-size: 16px;
    /*color: #303133 !important*/
  }
  .edsub-class{
    color: #666;
  }
  .el-submenu .el-menu-item{
    height: 39px;
    line-height: 39px;
    padding: 0 45px;
    min-width: 200px;
  }
    .svg-icon{
        width: 18px;
        height: 18px;
        margin-right: 8px;
    }

</style>
