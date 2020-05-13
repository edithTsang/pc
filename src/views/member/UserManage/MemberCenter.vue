<template>
  <div class="member-center">
    <div class="user-info">
      <el-col :span="2">
        <div class="head">
          <img :src="userInfo.pic">
        </div>
      </el-col>
      <el-col :span="5">
        <div>
          <div class="user1">
            <div class="user1-1">
              <span>ID：</span><b>{{ userInfo.id }}</b>
            </div>
            <div><span>姓名：</span><b>{{ userInfo.userName }}</b></div>
          </div>
          <div><span>公司：</span><span>{{ userInfo.company }}</span></div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="user2" align="center">
          <img :src="userInfo.certiPic" alt="certiPic">
          <div style="color: #999;">{{ userInfo.certification }}</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div align="center">
          <div>{{ userInfo.loginTime }}</div>
          <div>{{ userInfo.loginIp }}</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="wechat-code">
          <el-dropdown>
            <div class="wechat-img">
              <span>专属客服:</span>
              <img src="../../../assets/image/wechat-tip.png" alt="wechat-tip">
            </div>
            <el-dropdown-menu slot="dropdown">
              <img style="width: 150px" src="../../../assets/image/wechat-qrcode.png" alt="wechatqrcode">
              <p style="font-size: 12px;">微信扫一扫 服务非常好</p>
            </el-dropdown-menu>
          </el-dropdown>

        </div>
      </el-col>
    </div>
    <div class="user-balance">
      <el-col v-for="(item,index) in userInfoBalance" :key="index" :span="4">
        <el-button v-if="item.name !== ''" size="small" type="warning">{{ item.name }}</el-button>
        <div class="money">
          <b>{{ item.money }}</b>
        </div>
        <div class="user-money">
          {{ item.userMoney }}
        </div>
      </el-col>
    </div>
    <div class="table-head">
      <div v-for="(item,index) in navList" :key="index" style="width: 100px;">
        <img v-if="item.name != ''" style="width: 40px" :src="item.icon" alt="">
        <div>{{ item.name }}</div>
      </div>
    </div>
    <div class="table-list">
      <div v-for="(item,index) in dataList" :key="index" class="ed">
        <div>{{ item.name }}</div>
        <div>{{ item.pay }}</div>
        <div>{{ item.Pie }}</div>
        <div>{{ item.signFor }}</div>
        <div>{{ item.Returned }}</div>
        <div>{{ item.number }}</div>
      </div>
    </div>
    <div class="footer" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {
        pic: require('../../../assets/image/head.png'),
        id: 'A10000',
        userName: '麻花腾',
        company: '阿里巴巴网络技术有限公司',
        certiPic: require('../../../assets/image/qiye.png'),
        certification: '已实名认证',
        loginTime: '上次登录：2020-04-06 09:49:26',
        loginIp: '登录IP:113.103.88.211广东省广州市电信'
      },
      userInfoBalance: [
        { name: '立刻充值', money: '￥ 0：00', userMoney: '账户余额' },
        { name: '', money: '￥ 0：00', userMoney: '赠送余额' },
        { name: '', money: '￥ 0：00', userMoney: '补偿余额' },
        { name: '查看详情', money: '0', userMoney: '优惠卡卷' },
        { name: '查看详情', money: '￥ 0：00', userMoney: '运呗额度' },
        { name: '', money: '￥ 0：00', userMoney: '已使用运呗' }
      ],
      navList: [
        { name: '', icon: '' },
        { name: '待支付定金', icon: require('../../../assets/image/daizhifu.png') },
        { name: '待支付尾款', icon: require('../../../assets/image/daizhifu.png') },
        { name: '派件中', icon: require('../../../assets/image/pie.png') },
        { name: '已签收', icon: require('../../../assets/image/signed-in.png') },
        { name: '已退件', icon: require('../../../assets/image/return.png') }
      ],
      dataList: [
        { name: 'FBA', pay: '0', Pie: '2', signFor: '1', Returned: '1', number: '3' },
        { name: '海运', pay: '0', Pie: '3', signFor: '1', Returned: '1', number: '3' },
        { name: '空运', pay: '0', Pie: '6', signFor: '1', Returned: '1', number: '3' },
        { name: '快递', pay: '0', Pie: '7', signFor: '1', Returned: '1', number: '3' },
        { name: '小包', pay: '0', Pie: '2', signFor: '1', Returned: '1', number: '3' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .member-center {
    /*width: 90%;*/
    .user-info {
      display: flex;
      justify-content: left;
      align-items: center;
      background-color: #eee;
      font-size: 14px;
      border-radius: 5px 5px 0 0;
      height: 80px;
      position: relative;
      margin-top: 30px;
      .head {
        img {
          position: relative;
          top: -10px;
          width: 80px;
        }
      }
      .user1 {
        display: flex;
        align-items: center;
        justify-content: center;
        .user1-1 {
          margin-right: 25px;
          font-size: 14px;
        }
      }
      .user2 {
        border-left: 1px dashed #999;
        border-right: 1px dashed #999;
      }
      .wechat-code {
        .wechat-img {
          display: flex;
          align-items: center;
          img {
            width: 30px;
            margin-left: 10px
          }
        }
      }
    }
    .user-balance {
      display: flex;
      align-items: flex-end;
      height: 100px;
      padding-bottom: 15px;
      background-color: #fff;
      border: 1px solid #eee;
      border-radius: 0 0 5px 5px;
      .el-button--warning {
        border: 1px solid #eeb174;
        color: #eeb174;
        background-color: #fff;
      }
      .money {
        color: #EEB174;
        line-height: 36px;
      }
      .user-money {
        color: #999;
        font-size: 12px;

      }
    }
    .table-head {
      display: flex;
      background: #edeeee;
      height: 120px;
      align-items: center;
      text-align: center;
      justify-content: space-around;
      font-size: 14px;
      margin-top: 60px;
    }
    .table-list {
      font-size: 14px;
      .ed {
        display: flex;
        justify-content: space-around;;
        height: 50px;
        align-items: center;
        div {
          width: 100px;
        }
      }
      .ed:nth-child(odd) {
        background-color: #f7f8f9;
      }
      .ed:nth-child(even) {
        background-color: #edeeee;
      }
    }
    .footer {
      height: 50px;
      background-color: #edeeee;
    }
  }

</style>
