<template>
  <div class="login-container">
    <div class="left-title">
      <div>用户登录</div>
      <img src="../../assets/image/logo.png" alt="logo">
      <div>亚马逊全球物流服务平台</div>
    </div>
    <div class="login-form" autocomplete="on" label-position="left">
      <div class="back-index" @click="jumpIndex">返回首页</div>
      <el-tabs v-model="activeName">
        <el-tab-pane label="手机登录" name="0">
          <el-form ref="phoneForm" :model="phoneForm" :rules="loginRules">
            <div class="phone-login">
              <div>
                <img style="width: 300px" src="../../assets/image/login-pic.png" alt="logo">
              </div>
              <div style="width: 490px">
                <el-form-item prop="phone">
                  <el-input ref="phone" v-model="phoneForm.phone" placeholder="输入手机号码" name="phone" type="text" autocomplete="on" />
                </el-form-item>
                <el-tooltip v-model="capsTooltip" placement="right" manual>
                  <el-form-item prop="code">
                    <div style="display: flex">
                      <el-input ref="code" v-model="phoneForm.code" placeholder="输入验证码" maxlength="4" name="code" autocomplete="on" @keyup.enter.native="handleLogin('phoneForm')" />
                      <el-button :loading="loadingCode" type="primary" style="margin-left: 10px;" @click.native.prevent="handMessage">
                        获取验证码
                      </el-button>
                    </div>
                  </el-form-item>
                </el-tooltip>
                <el-button :loading="loading" type="primary" class="submit" @click.native.prevent="handleLogin('phoneForm')">
                  登录
                </el-button>
                <div class="tip">温馨提示：如果手机号还没有注册用户,会自动注册海外运账号！</div>
              </div>
            </div>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="账号密码登录" name="1">
          <el-form ref="userForm" :model="userForm" :rules="loginRules">
            <div class="phone-login">
              <div>
                <img style="width: 300px" src="../../assets/image/login-pic.png" alt="logo">
              </div>
              <div style="width: 490px">
                <el-form-item prop="account">
                  <el-input ref="account" v-model="userForm.account" placeholder="输入用户名" name="account" type="text" autocomplete="on" />
                </el-form-item>

                <el-tooltip v-model="capsTooltip" content="大写锁定打开" placement="right" manual>
                  <el-form-item prop="password">
                    <el-input :key="passwordType"
                              ref="pwd"
                              v-model="userForm.password"
                              :type="passwordType"
                              placeholder="密码"
                              name="password"
                              autocomplete="on"
                              @keyup.native="checkCapslock"
                              @blur="capsTooltip = false"
                              @keyup.enter.native="handleLogin('userForm')"
                    />
                    <span class="show-pwd" @click="showPwd">
                      <svg-icon :name="passwordType === 'password' ? 'eye' : 'eye-open'" />
                    </span>
                  </el-form-item>
                </el-tooltip>
                <el-button :loading="loading" type="primary" class="submit" @click.native.prevent="handleLogin('userForm')">登录</el-button>
                <div class="tip">温馨提示：如果手机号还没有注册用户,会自动注册海外运账号！</div>
              </div>
            </div>
          </el-form>
        </el-tab-pane>
      </el-tabs>
      <el-divider>第三方登录</el-divider>
      <div><img style="width: 45px" src="@/assets/image/wechat.png" alt="wechat"></div>
    </div>

  </div>
</template>

<script>
import validate from '@/utils/validate'
import { sendCode } from '@/api/user'

export default {
  name: 'Login',
  data() {
    return {
      activeName: '0',
      phoneForm: {
        account: '',
        password: '',
        api: 'user/mobilelogin'
      },
      userForm: {
        account: '',
        password: '',
        api: 'user/login'
      },
      loginRules: {
        phone: [{ required: true, trigger: 'blur', validator: validate.Validate.Form().phone }],
        code: [{ required: true, trigger: 'blur', validator: validate.Validate.Form().code }],
        account: [{ required: true, trigger: 'blur', validator: validate.Validate.Form().userName }],
        password: [{ required: true, trigger: 'blur', validator: validate.Validate.Form().password }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      loadingCode: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {},
      temp: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.phoneForm.phone === '') {
      this.$refs.phone.focus()
    } else if (this.phoneForm.code === '') {
      this.$refs.code.focus()
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.pwd.focus()
      })
    },
    handMessage() {
      this.loadingCode = true
      sendCode({ mobile: this.phoneForm.phone })
        .then(() => {
          this.loadingCode = false
        })
        .catch(() => {
        })
    },
    handleLogin(type) {
      this.$refs[type].validate(valid => {
        if (valid) {
          this.loading = true
          const data = {}
          if (type !== 'phoneForm') {
            data.account = this.$getRsaCode(this[type].account) // ras 加密 用户名
            data.pwd = this.$getRsaCode(this[type].password) // ras 加密 密码
          } else {
            data.account = this[type].phone
            data.pwd = this[type].code
          }
          this.$store.dispatch(this[type].api, data)
            .then(() => {
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    },
    jumpIndex() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss">
  $bg: #f4f4f4;
  $light_gray: #666;
  $cursor: #fff;

  .login-container {
    display: flex;
    position: relative;
    height: 100%;
    .el-input {
      display: inline-block;
      height: 47px;
      /*width: 85%;*/
      background: $bg;
      border-radius: 10px;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;

        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }
    .el-input input{
      caret-color:#666
    }
    .el-input input:-webkit-autofill{
      -webkit-text-fill-color: #666 !important;
    }

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      /*background: #f4f4f4;*/
      border-radius: 10px;
      color: #666;
    }
    .el-tabs{
      background: #fff;
    }
    .el-tabs__nav{
      margin-left: 30px;
    }
    .el-tabs__item{
      font-size: 18px;
      color: #999;
      padding: 0 30px;
      line-height: 28px;
    }
    .el-tabs__item.is-active {
      color: #232f3e;
    }

    .el-tabs__item:hover {
      color: #232f3e;
    }

    .el-tabs__active-bar {
      background-color: #232f3e;
    }

    .el-tabs__active-bar {
      height: 3px;
    }
    .el-tabs__content{
      padding: 100px 30px;
    }
    .el-tabs__nav-wrap::after{
      height: 1px;
    }
  }
</style>
<style lang="scss" scoped>
  $bg: #f4f4f4;
  $dark_gray: #889aa4;
  $light_gray: #eee;

  .login-container {
    min-height: 89%;
    width: 100%;
    background-color: $bg !important;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background:url("../../assets/image/bg.png") no-repeat center center ;
    .left-title{
      color: #fff;
      line-height: 25px;
      position: absolute;
      left:118px;
      font-size: 18px;
      img{
        width: 180px;
      }
    }
    .login-form {
      position: absolute;
      width: 56%;
      height: 600px;
      max-width: 100%;
      padding: 20px 0px 0;
      margin: 0 auto;
      overflow: hidden;
      background: #fff;
      border-radius: 10px;
      .back-index{
        cursor: pointer;
        position: absolute;
        font-size: 12px;
        right: 50px;
        top: 27px;
        z-index:999
      }
      .phone-login{
        display: flex;
        justify-content:center;
        align-items: center;
      }
    }

    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;

      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }

    .title-container {
      position: relative;
      .title {
        font-size: 26px;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 12px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
  }
  .el-button--primary{
    background: #ffcc01;
    border-color: #ffcc01;
    color: #333;
    font-size: 14px;
    border-radius: 10px;
  }
  .submit{
    width:100%;
    margin-bottom:20px;
    background:#FFCC01;
  }
  .tip{
    font-size: 14px;
    color: #999;
  }

</style>
