<template>
  <div class="login-container">
    <div class="left-title">
      <div>用户登录</div>
      <img src="../../assets/image/logo.png" alt="logo">
      <div>亚马逊全球物流服务平台</div>
    </div>
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-width="100px" class="login-form" autocomplete="on" label-position="right">
      <div class="back-index">返回首页</div>
      <el-tabs v-model="activeName">
        <el-tab-pane label="个人用户" name="0">
          <div class="phone-login">
            <div>
              <img style="width: 300px" src="../../assets/image/login-pic.png" alt="logo">
            </div>
            <div style="width: 490px">
              <el-form-item prop="name" label="姓名">
                <el-input ref="name" v-model="loginForm.name" placeholder="姓名" name="phone" type="text" autocomplete="on" />
              </el-form-item>
              <el-form-item prop="phone" label="手机号码">
                <el-input ref="phone" v-model="loginForm.phone" placeholder="输入手机号码" name="phone" type="text" autocomplete="on" />
              </el-form-item>
              <el-tooltip v-model="capsTooltip" placement="right" manual>
                <el-form-item prop="code" label="短信验证码">
                  <div style="display: flex">
                    <el-input :key="passwordType" ref="code" v-model="loginForm.code" :type="passwordType" placeholder="短信验证码" name="code" @keyup.native="checkCapslock" @blur="capsTooltip = false" @keyup.enter.native="handleLogin" />
                    <el-button :loading="loading" type="primary" style="margin-left: 10px;" @click.native.prevent="handleLogin">
                      获取验证码
                    </el-button>
                  </div>
                </el-form-item>
              </el-tooltip>
              <el-tooltip v-model="capsTooltip" content="大写锁定打开" placement="right" manual>
                <el-form-item prop="password" label="设置密码">
                  <el-input :key="passwordType" ref="password" v-model="loginForm.password" :type="passwordType" placeholder="密码" name="password" autocomplete="on" @keyup.native="checkCapslock" @blur="capsTooltip = false" @keyup.enter.native="handleLogin" />
                  <!--<span class="show-pwd" @click="showPwd">-->
                  <!--<svg-icon :name="passwordType === 'password' ? 'eye' : 'eye-open'" />-->
                  <!--</span>-->
                </el-form-item>
              </el-tooltip>
              <el-tooltip v-model="capsTooltip" content="大写锁定打开" placement="right" manual>
                <el-form-item prop="passwordCheck" label="确认密码">
                  <el-input :key="passwordType"
                            ref="password"
                            v-model="loginForm.passwordCheck"
                            :type="passwordType"
                            placeholder="确认密码"
                            name="password"
                            autocomplete="on"
                            @keyup.native="checkCapslock"
                            @blur="capsTooltip = false"
                            @keyup.enter.native="handleLogin"
                  />
                </el-form-item>
              </el-tooltip>
              <el-form-item label="业务邀请码">
                <el-input ref="businessCode" v-model="loginForm.businessCode" placeholder="业务邀请码" name="phone" type="text" tabindex="1" autocomplete="on" />
              </el-form-item>
              <el-form-item label="会员邀请码">
                <el-input ref="memberCode" v-model="loginForm.memberCode" placeholder="会员邀请码" name="phone" type="text" tabindex="1" autocomplete="on" />
              </el-form-item>
              <div>
                <el-checkbox v-model="checked" style="color:#FFCC01">我已阅读《海外运用户服务条款》</el-checkbox>
              </div>
              <el-form-item>
                <el-button :loading="loading" type="primary" class="submit" @click.native.prevent="handleLogin">登录</el-button>
              </el-form-item>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="企业用户" name="1">
          到时组件复用
        </el-tab-pane>
        <el-tab-pane label="海外用户" name="2">
          到时组件复用2
        </el-tab-pane>
      </el-tabs>
    </el-form>
  </div>
</template>

<script>
import validate from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('确认密码不能为空'))
      } else if (value !== this.loginForm.password) {
        callback(new Error('两次密码输入不一致'))
      } else {
        callback()
      }
    }
    return {
      activeName: '0',
      checked: '',
      loginForm: {
        name: '',
        password: '',
        passwordCheck: '',
        code: '',
        phone: '',
        businessCode: '',
        memberCode: ''
      },
      loginRules: {
        name: [{ required: true, trigger: 'blur', validator: validate.Validate.Form().name }],
        phone: [{ required: true, trigger: 'blur', validator: validate.Validate.Form().phone }],
        code: [{ required: true, trigger: 'blur', validator: validate.Validate.Form().code }],
        password: [{ required: true, trigger: 'blur', validator: validate.Validate.Form().password }],
        passwordCheck: [{ required: true, trigger: 'blur', validator: validatePassCheck }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        console.log(route)
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
    if (this.loginForm.name === '') {
      this.$refs.name.focus()
    } else if (this.loginForm.phone === '') {
      this.$refs.phone.focus()
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
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
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
      /*width: 80%;*/
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
      padding: 10px 30px;
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
        z-index: 999;
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
    margin:20px 0;
    background:#FFCC01;
  }
  .tip{
    font-size: 14px;
    color: #999;
  }
</style>
