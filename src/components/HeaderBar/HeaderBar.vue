<template>
  <div>
    <el-header>
      <el-row :gutter="0" class="ed-row">
        <el-col :xs="8" :sm="6" :md="8" :lg="6" :xl="5">
          <div class="logo">
            <div>
              <img src="../../assets/image/logo.png" alt="logo">
              <div class="title">{{ title }}</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="6" :sm="6" :md="12" :lg="9" :xl="6">
          <div>
            <el-menu :collapse="collapse"
                     collapse-transition
                     router
                     class="el-menu-demo nav"
                     mode="horizontal"
                     :active-text-color="active"
                     :default-active="currentMenu"
                     background-color="#232f3e"
            >
              <template v-for="item in menus" v-cloak>
                <template>
                  <el-menu-item :key="item.index" :index="item.path">{{ item.name }}</el-menu-item>
                </template>
              </template>
            </el-menu>
          </div>
        </el-col>
        <el-col class="ed-row-wechat" :xs="4" :sm="1" :md="6" :lg="5" :xl="3">
          <div>
            <span>{{ consult.wecart }}</span>
            <el-divider direction="vertical" />
            <span>{{ consult.applet }}</span>
          </div>
        </el-col>
        <el-col class="ed-row-call" :xs="4" :sm="1" :md="6" :lg="5" :xl="4">
          <div>
            <div style="display: flex">
              <div class="call">
                <div>{{ consult.help }}</div>
                <b>{{ consult.phone }}</b>
              </div>
            </div>
          </div>
        </el-col>
        <el-col v-if="!token" :xs="4" :sm="1" :md="5" :lg="4" :xl="6" class="ed-row-login">
          <div style="display: flex;font-size: 14px;">
            <div class="fast-login" @click="jumpLogin(1)">快速登录</div>
            <div class="ed-register" @click="jumpLogin(2)">注册</div>
          </div>
        </el-col>
        <el-col v-if="token" class="ed-row-user" :xs="4" :sm="1" :md="5" :lg="3" :xl="6">
          <div class="user">
            <el-avatar src="https://wx.qlogo.cn/mmopen/vi_32/6ibnPS4P2sWUiaHYzeOugJCPicVa91SV9CiasBWI8iaqyXwiaMibiaEgQDhGiaZokN56zibict6xiciaGqdibGDvs74Sw6wcQ5gA/132" />
            <el-dropdown trigger="click" style="margin-left: 10px" @command="handleCommand">
              <span class="el-dropdown-link">
                <span>13652658888</span>
                <i class="el-icon-arrow-down el-icon--right" />
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(item,index) in userDropdown"
                  :key="index"
                  :command="item.path"
                >
                  {{ item.name }}
                </el-dropdown-item>
                <el-dropdown-item divided @click.native="logout">
                  <span style="display:block;">退出</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </el-header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      title: '亚马逊全球物流服务平台',
      currentMenu: 'index',
      collapse: false,
      active: '#FFCC01',
      menus: [
        { name: '首页', index: '1', path: '/' },
        { name: '在线下单', index: '2', path: '/onlineOrder' },
        { name: '物流追踪', index: '3', path: '/logisticsTracking' },
        { name: '帮助中心', index: '4', path: '/help' },
        { name: '关于我们', index: '5', path: '/aboutUs' }
      ],
      userDropdown: [
        { name: '会员中心', path: '/member/user_center' },
        { name: '我的订单', path: '/member/my_odd' },
        { name: '财务记录', path: '/member/financial_records' }
      ],
      consult: {
        wecart: '微信公众号',
        applet: '小程序',
        help: '咨询热线',
        phone: '400-020-8899'
      }
    }
  },
  computed: {
    ...mapGetters({
      token: 'token'
    })
  },
  watch: {
    $route: {
      handler(newRouter) {
        this.currentMenu = newRouter.path
        this.active = '#FFCC01'
        console.log(this.currentMenu)
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
      this.currentMenu = currentUrl.split('#')[1]
    },
    // jumpUser() {
    //   this.$router.push({ path: '/member/user_center' })
    // },
    handleCommand(command) {
      this.active = '#fff'
      this.$router.push({ path: command })
    },
    async logout() {
      await this.$store.dispatch('user/logOut')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    jumpLogin(type) {
      if (type === 1) {
        this.$router.push({ path: '/login' })
      } else {
        this.$router.push({ path: '/register' })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .el-header, .el-footer {
    background-color: #232f3e;
    color: #fff;
    text-align: center;
    width: 100%;
    height: 90px !important;
    /*line-height: 98px;*/
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .ed-row {
    display: flex;
    align-items: center;
    height: 90px;
    justify-content: center;
    .logo {
      img {
        width: 171px;
      }
      .title {
        font-size: 14px;
        letter-spacing: 2px
      }
    }
    .ed-row-wechat {
      font-size: 12px;
      span {
        cursor: pointer;
      }
    }
    .ed-row-call {
      .call {
        border-left: 1px solid #666;
        border-right: 1px solid #666;
        font-size: 14px;
        padding: 0 20px;
      }
    }
    .ed-row-login {
      .fast-login {
        cursor: pointer;
        border: 1px solid #F7B000;
        width: 100px;
        height: 40px;
        line-height: 40px;
        color: #F7B000;
        margin-right: 10px
      }
      .ed-register {
        cursor: pointer;
        border: 1px solid #F7B000;
        width: 100px;
        height: 40px;
        line-height: 40px;
        color: #232F3E;
        background: #F7B000;
      }
    }
    .ed-row-user {
      .user {
        display: flex;
        align-items: center;
        justify-content: center
      }
    }
  }

  /*elememt css*/
  .el-menu-item.is-active {
    background-color: #232f3e;
    border-bottom: 0px;
  }

  .el-menu-item:hover {
    background-color: #232f3e !important;
    color: #fff;
  }

  .el-menu-item {
    padding: 0 8px;
  }

  .el-menu.el-menu--horizontal {
    border-bottom: 0px
  }

  .el-menu--horizontal > .el-menu-item {
    /*height: 98px;*/
    /*line-height: 98px;*/
    color: #fff;
  }

  .el-menu-demo .el-menu-item {
    border-bottom-color: #232f3e !important;
  }

  .el-menu-item {
    color: #fff;
  }

  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    color: #fff;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

</style>
