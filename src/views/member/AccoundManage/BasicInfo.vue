<template>
  <div>
    <Breadcrumb :breadcrumb="breadcrumb" />
    <div class="basic-info">
      <div class="user-info" align="left">
        <h3>基本资料</h3>
        <div class="profile">
          <div class="txt">头像:</div>
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-upload2 avatar-uploader-icon" stop />
          <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUpload" :src="imageUpload" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
          <div class="tip">（照片支持.jpg、.gif、.bmp、.png、.pdf格式，文件最大不要超过5M。）</div>
        </div>
        <div class="userinfo">
          <div>
            <div class="profile">
              <div class="txt">企业名称:</div>
              <div class="content">{{ userInfo.name }}</div>
            </div>
            <div class="profile">
              <div class="txt">认证:</div>
              <div class="content">{{ userInfo.authentication }}</div>
            </div>
            <div class="profile">
              <div class="txt">手机号码:</div>
              <div class="content">{{ userInfo.phone }}</div>
              <div class="edit">修改</div>
            </div>
            <div class="profile">
              <div class="txt">邮箱:</div>
              <div class="content">{{ userInfo.email }}</div>
              <div class="edit">修改</div>
            </div>
          </div>
          <div>
            <div class="profile">
              <div class="txt2">公司地址:</div>
              <div class="content2">
                <v-distpicker :province="userInfo.address.province" :city="userInfo.address.city" :area="userInfo.address.area" />
              </div>
            </div>
            <div class="profile">
              <div class="txt2">业务经营范围:</div>
              <div class="content2">
                <el-input v-model="textarea" type="textarea" :autosize="{ minRows: 6, maxRows: 9}" placeholder="请输入内容" maxlength="200" show-word-limit />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <el-button type="warning">保存修改</el-button>
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
        text2: '账号管理',
        text3: '基本资料'
      },
      imageUrl: 'https://wx.qlogo.cn/mmopen/vi_32/6ibnPS4P2sWUiaHYzeOugJCPicVa91SV9CiasBWI8iaqyXwiaMibiaEgQDhGiaZokN56zibict6xiciaGqdibGDvs74Sw6wcQ5gA/132',
      imageUpload: '',
      textarea: '',
      userInfo: {
        name: '广州中大联运科技有限公司',
        authentication: '已认证企业',
        phone: '13652658888',
        email: 'edith0827@163.com',
        address: {
          province: '广东省',
          city: '广州市',
          area: '白云区'
        },
        scopeOfBusiness: ''
      }
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
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
    }
    // handleRemove() {
    //   this.imageUrl = ''
    // }
  }
}
</script>

<style scoped lang="scss">
  .basic-info{
    background: #f3f3f3;
    border-radius: 5px;
    padding: 20px;
    .user-info{
      h3{
        color: #666;
        font-family: MicrosoftYaHei;
      }
      .profile{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 30px 0;
        .txt{
          width: 100px;
          margin-right: 50px;
          color: #666;
          text-align: right;
        }
        .txt2{
          width: 150px;
          text-align: right;
          color: #666;
          margin-right: 50px;
        }
        .tip{
          color: #666;
        }
        .content{
          color: #999;
          width: 222px;
        }
        .content2{
          width: 400px;
        }
        .edit{
          background: #232F3E;
          height: 25px;
          line-height: 25px;
          width: 70px;
          color: #fff;
          text-align: center;
          font-size: 12px;
          border-radius: 5px;
          cursor: pointer;
        }
      }
      .userinfo{
        display: flex;
        justify-content: flex-start;

      }
    }
  }

  /*ele*/
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 109px;
    height: 109px;
    line-height: 109px;
    text-align: center;
    background: #ccc;
    margin-right: 30px;
  }
  .avatar {
    width: 109px;
    height: 109px;
    display: block;
    margin-right: 30px;

  }
  .el-icon-plus:before{
    color: #fff;
  }
  .el-upload-action:hover {
    font-size: 20px;
    background-color: #000;
    background-color: rgba(0, 0, 0, .3)
  }
</style>

