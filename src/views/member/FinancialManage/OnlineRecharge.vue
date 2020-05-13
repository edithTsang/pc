
<template>
  <div>
    <Breadcrumb :breadcrumb="breadcrumb" />
    <div
      class="online-recharge"
      align="left"
    >
      <div class="recharge">
        <el-form :inline="true" :model="form" align="left">
          <el-form-item label="输入金额">
            <el-input v-model="form.name" placeholder="请输入不少于100元的金额" />
            <div class="tip" align="left">*注意：如线上支付额度受限可联系客服转账充值,享受同等充值赠送优惠！手动输入充值金额不享受充值赠送优惠</div>
          </el-form-item>
          <el-form-item>元</el-form-item>
          <el-form-item>
            <div class="recharge2" @click="recharge">充值</div>
          </el-form-item>
        </el-form>
      </div>
      <div class="payment">
        <h3>选择支付平台</h3>
        <div class="pay-type">
          <div class="alipay" :class="[showMarker === true?'active' : '']" @click="onShowMarker(1)">
            <img src="../../../assets/image/ALIPAY@2x.png" alt="alipay">
          </div>
          <div class="wechat" :class="[showMarker2 === true?'active' : '']" @click="onShowMarker(2)">
            <img src="../../../assets/image/wechatpay.png" alt="alipay">
          </div>
        </div>
      </div>
      <div class="bank-change">
        <h3>线下银行转账:</h3>
        <div class="text">
          <b>汇款流程</b>
          <p>1，完成线下汇款（请保存汇款凭证）</p>
          <p>请在银行汇款【备注栏】中填写海外运ID号、公司名称或姓名，我们将在确认到帐后的一个工作日内充值到您的海外运帐户中。如有疑问，请致电海外运客服中心 400-020-8899</p>
          <p>2，提交汇款凭证信息</p>
          <p>请您在完成线下汇款后，登录海外运官网上传凭证(www.haiwaiyun.com) 财务管理-->账号管理-->申请入账,</p>
          <p>完成线下汇款后请务必登录海外运提交汇款信息，否则所汇款金额不能充值到海外运帐户。</p>
        </div>
        <div class="table">
          <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 70%" :header-cell-style="tableHeaderStyle">
            <el-table-column label="账户名称" align="center">
              <template slot-scope="scope">{{ scope.row.name }}</template>
            </el-table-column>
            <el-table-column prop="name2" label="开户银行" align="center" />
            <el-table-column prop="bankNumber" label="账号银行" show-overflow-tooltip align="center" />
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumb from '../../../components/Member/Breadcrumb'
export default {
  name: 'OnlineRecharge',
  components: { Breadcrumb },
  data() {
    return {
      breadcrumb: {
        text: '个人中心',
        text2: '财务管理',
        text3: '在线充值'
      },
      form: {
        name: ''
      },
      showMarker: true,
      showMarker2: false,
      tableHeaderStyle: {
        'background-color': '#f7f8f9',
        'color': '#333333',
        'border': '1px solid #ededed'
      },
      tableData: [{
        name: '广州中和联运科技有限公司',
        name2: '中国民生银行股份有限公司广州万达广场支行',
        bankNumber: '159059719'
      }]
    }
  },
  methods: {
    recharge() {
      console.log('点我充值')
    },
    onShowMarker(val) {
      if (val === 1) {
        this.showMarker = true
        this.showMarker2 = false
      } else {
        this.showMarker2 = true
        this.showMarker = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .online-recharge{
    .recharge{
      display: flex;
      align-items: center;
      background: #FFF7EB;
      height: 120px;
      border-radius: 5px;
      .el-form{
        width: 100%;
        height: 50px;
        margin-left: 30px;
      }
      .recharge2{
        height: 40px;
        line-height: 40px;
        width: 150px;
        background: #FFCC01;
        border-radius: 5px;
        cursor: pointer;
        text-align: center;
        margin-left: 30px;
      }
      .tip{
        font-size: 12px;
        color: #999;
      }
    }
    .payment{
      background: #eee;
      height: 170px;
      border-radius: 5px;
      margin-top: 20px;
      padding: 10px 20px;
      h3{
        color: #666;
        font-family: MicrosoftYaHei;
      }
      .pay-type{
        margin-top: 20px;
        display: flex;
        .alipay, .wechat{
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 200px;
          height: 100px;
          position: relative;
          background: #fff;
          img{
            width: 110px;
          }
        }
        .wechat{
          margin-left: 50px;
        }
      }
    }
    .bank-change{
      margin-top: 20px;
      background: #EEEEEE;
      /*height: 250px;*/
      border-radius: 5px;
      padding: 10px 20px;
      h3{
        color: #666;
        font-family: MicrosoftYaHei;
      }
      .text{
        margin-top: 30px;
        font-size: 12px;
        line-height: 25px;
        color: #999;
      }
      .table{
        margin: 20px 0;
      }
    }
  }

  //角标
  .active {
    position: relative;
    width:81px;
    height:93px;
    line-height: 93px;
    color: #07A0F8;
    background-color: #fff;
    border:1px solid #07A0F8;

  }
  .active:before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    border: 17px solid #07A0F8;
    border-left-color: transparent;
    border-bottom-color: transparent;
  }
  .active:after {
    content: '';
    width: 5px;
    height: 12px;
    position: absolute;
    right: 6px;
    top: 0px;
    border: 2px solid #fff;
    border-top-color: transparent;
    border-left-color: transparent;
    transform: rotate(45deg);
  }
</style>

