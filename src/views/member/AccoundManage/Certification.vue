<template>
  <div>
    <Breadcrumb :breadcrumb="breadcrumb" />
    <div class="certification">
      <div class="tab">
        <el-tabs v-model="bigTab">
          <el-tab-pane name="all" class="tab-one">
            <span slot="label" class="title">
              <span slot="title" class="nav-title">个人认证</span>
            </span>
            <!--<el-row>-->
            <!--<el-col :span="10" align="left" class="user-id">-->
            <div align="left" class="user-id">
              <p>请拍摄并上传你的有效身份证</p>
              <div class="id-pic">
                <div style="margin-right: 20px">
                  <el-upload class="avatar-uploader"
                             action="https://jsonplaceholder.typicode.com/posts/"
                             :show-file-list="false"
                             :on-success="handleAvatarSuccess"
                             :before-upload="beforeAvatarUpload"
                  >
                    <img v-if="picFront" :src="picFront" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon" />
                  </el-upload>
                </div>
                <div>
                  <el-upload class="avatar-uploader"
                             action="https://jsonplaceholder.typicode.com/posts/"
                             :show-file-list="false"
                             :on-success="handleAvatarSuccess2"
                             :before-upload="beforeAvatarUpload"
                  >
                    <img v-if="picBack" :src="picBack" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon" />
                  </el-upload>
                </div>
              </div>
              <p class="tip">照片支持.jpg、.png格式，文件最大不要超过5M。）</p>
            </div>
            <!--</el-col>-->
            <!--</el-row>-->
            <!--<el-row>-->
            <div :span="10" align="left" class="rule-form">
              <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
                <el-form-item label="真实姓名" prop="name">
                  <el-input v-model="ruleForm.name" />
                </el-form-item>
                <el-form-item label="身份证号码" prop="id">
                  <el-input v-model="ruleForm.id" />
                </el-form-item>
                <el-form-item label="所在地址" prop="province">
                  <v-distpicker />
                </el-form-item>
                <el-form-item label="详细地址" prop="address">
                  <el-input v-model="ruleForm.address" />
                </el-form-item>
                <el-form-item label="联系邮箱" prop="email">
                  <el-input v-model="ruleForm.email" />
                </el-form-item>
                <el-form-item label="认证状态">
                  <el-button type="warning" size="small">未认证</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">提交认证</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
            <!--</el-row>-->
          </el-tab-pane>
          <el-tab-pane name="broad" class="tab-one">
            <span slot="label" class="title">
              <span slot="title" class="nav-title">企业认证</span>
            </span>
            2
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumb from '../../../components/Member/Breadcrumb'
import VDistpicker from 'v-distpicker'

export default {
  components: { Breadcrumb, VDistpicker },
  data() {
    return {
      breadcrumb: {
        text: '个人中心',
        text2: '财务管理',
        text3: '优惠卷'
      },
      bigTab: 'all',
      activeName: '0',
      activeName2: '3',
      activeName3: '6',
      activeName4: '9',
      picFront: require('../../../assets/image/id-positive.png'),
      picBack: require('../../../assets/image/id-back.png'),
      ruleForm: {
        name: '',
        id: '',
        province: '',
        country: '',
        email: ''
      },
      rules: {
        name: [{ required: true, message: '真实姓名不能为空', trigger: 'blur' }],
        id: [{ required: true, message: '身份证号码不能为空', trigger: 'blur' }],
        province: [{ type: 'array', required: true, trigger: 'change', message: '所在地址不能为空' }],
        address: [{ required: true, message: '详细地址不能为空', trigger: 'blur' }],
        country: [{ required: true, trigger: 'change', message: '请选择国家' }]
      }
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab)
    },
    handleAvatarSuccess(res, file) {
      console.log(res)
      this.picFront = URL.createObjectURL(file.raw)
      this.$message({
        message: '上传成功',
        type: 'success'
      })
    },
    handleAvatarSuccess2(res, file) {
      console.log(res)
      this.picBack = URL.createObjectURL(file.raw)
      this.$message({
        message: '上传成功',
        type: 'success'
      })
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt5M = file.size / 1024 / 1024 < 5

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG/PNG 格式!')
      }
      if (!isLt5M) {
        this.$message.error('上传头像图片大小不能超过 5MB!')
      }
      return isJPG && isLt5M
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '恭喜你发财',
            type: 'success'
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped lang="scss">
  .certification {
    border-radius: 10px;
    background: #f3f3f3;
    .tab {
      padding: 20px 50px;
      .title {
        display: flex;
        align-items: center;
        .nav-title {
          margin: 0 10px;
        }
      }
      .user-id {
        width: 512px;
        background: #fff;
        padding: 30px 30px;
        .id-pic {
          display: flex;
          padding: 20px 0;
        }
        p {
          color: #999;
        }
        .tip {
          text-align: center;
          font-size: 14px;
        }
      }
      .rule-form {
        width: 500px;
        margin-top: 30px;
      }
    }
  }

  .box-card {
    width: 400px;
    height: 160px;
  }

  .el-card__body {
    padding: 0;
  }
</style>

<style lang="scss">
  /*ele*/
  .el-tabs {
    background: #f3f3f3;
  }

  .el-tabs__item {
    font-size: 16px;
    font-weight: bold;
    font-family: MicrosoftYaHei;
    padding: 0 40px;
    color: #cccccc;
  }

  .el-tabs__item.is-active {
    color: #232f3e;
  }

  .el-tabs__item:hover {
    color: #232f3e;
  }

  .el-tabs__active-bar {
    background-color: #f1c205;
  }

  .el-tabs__active-bar {
    height: 4px;
  }

  .el-tabs__nav-wrap::after {
    background-color: #F3F3F3;
  }

  .tab-one {
    padding-top: 10px;
    /*height: 61px;*/
    /*line-height: 61px;*/
  }

  .el-tabs__header {
    padding-top: 10px;
    height: 50px;
    line-height: 50px;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 230px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    background: #ccc;
    margin-right: 30px;
  }

  .avatar {
    width: 230px;
    height: 200px;
    display: block;
    margin-right: 30px;

  }
</style>
