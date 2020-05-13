<template>
  <div>
    <Breadcrumb :breadcrumb="breadcrumb" />
    <div class="coupon">
      <div class="tab">
        <el-tabs v-model="bigTab">
          <el-tab-pane name="all" class="tab-one">
            <span slot="label" class="title">
              <svg-icon name="all" class="svg-icon" />
              <span slot="title" class="nav-title">全部</span>
            </span>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="可领取" name="0">
                <Ticket :list="dataList" />
              </el-tab-pane>
              <el-tab-pane label="可使用" name="1">
                <Ticket :list="dataList" />
              </el-tab-pane>
              <el-tab-pane label="已使用" name="2">
                <Ticket :list="dataList" />
              </el-tab-pane>
            </el-tabs>
          </el-tab-pane>
          <el-tab-pane name="broad" class="tab-one">
            <span slot="label" class="title">
              <svg-icon name="broad" class="svg-icon" /> <span slot="title" class="nav-title">海运</span>
            </span>
            <el-tabs v-model="activeName2" @tab-click="handleClick">
              <el-tab-pane label="可领取" name="3">
                <Ticket :list="dataList" />
              </el-tab-pane>
              <el-tab-pane label="可使用" name="4">
                <Ticket :list="dataList" />
              </el-tab-pane>
              <el-tab-pane label="已使用" name="5">
                <Ticket :list="dataList" />
              </el-tab-pane>
            </el-tabs>
          </el-tab-pane>
          <el-tab-pane name="plane" class="tab-one">
            <span slot="label" class="title">
              <svg-icon name="plane" class="svg-icon" /> <span slot="title" class="nav-title">空运</span>
            </span>
            <el-tabs v-model="activeName3" @tab-click="handleClick">
              <el-tab-pane label="可领取" name="6">
                <Ticket :list="dataList" />
              </el-tab-pane>
              <el-tab-pane label="可使用" name="7">
                <Ticket :list="dataList" />
              </el-tab-pane>
              <el-tab-pane label="已使用" name="8">
                <Ticket :list="dataList" />
              </el-tab-pane>
            </el-tabs>
          </el-tab-pane>
          <el-tab-pane name="delivery" class="tab-one">
            <span slot="label" class="title">
              <svg-icon name="delivery" class="svg-icon" /> <span slot="title" class="nav-title">快递</span>
            </span>
            <el-tabs v-model="activeName4" @tab-click="handleClick">
              <el-tab-pane label="可领取" name="9">
                <Ticket :list="dataList" />
              </el-tab-pane>
              <el-tab-pane label="可使用" name="10">
                <Ticket :list="dataList" />
              </el-tab-pane>
              <el-tab-pane label="已使用" name="11">
                <Ticket :list="dataList" />
              </el-tab-pane>
            </el-tabs>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumb from '../../../components/Member/Breadcrumb'
import Ticket from '../../../components/Member/CouponTicket'

export default {
  components: { Breadcrumb, Ticket },
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
      dataList: [
        {
          name: '50元专属优惠券',
          date: '有效期至:2020-05-01 00:00:00',
          tip: '平台专属用户优惠券支付尾款时 可使用(特价渠道除外)',
          money: '￥50.00',
          full: '满1000.00使用',
          flag: true
        },
        {
          name: '50元专属优惠券',
          date: '有效期至:2020-05-01 00:00:00',
          tip: '平台专属用户优惠券支付尾款时 可使用(特价渠道除外)',
          money: '￥50.00',
          full: '满1000.00使用',
          flag: true
        },
        {
          name: '50元专属优惠券',
          date: '有效期至:2020-05-01 00:00:00',
          tip: '平台专属用户优惠券支付尾款时 可使用(特价渠道除外)',
          money: '￥50.00',
          full: '满1000.00使用',
          flag: true
        },
        {
          name: '50元专属优惠券',
          date: '有效期至:2020-05-01 00:00:00',
          tip: '平台专属用户优惠券支付尾款时 可使用(特价渠道除外)',
          money: '￥50.00',
          full: '满1000.00使用',
          flag: true
        },
        {
          name: '50元专属优惠券',
          date: '有效期至:2020-05-01 00:00:00',
          tip: '平台专属用户优惠券支付尾款时 可使用(特价渠道除外)',
          money: '￥50.00',
          full: '满1000.00使用',
          flag: true
        },
        {
          name: '50元专属优惠券',
          date: '有效期至:2020-05-01 00:00:00',
          tip: '平台专属用户优惠券支付尾款时 可使用(特价渠道除外)',
          money: '￥50.00',
          full: '满1000.00使用',
          flag: true
        },
        {
          name: '50元专属优惠券',
          date: '有效期至:2020-05-01 00:00:00',
          tip: '平台专属用户优惠券支付尾款时 可使用(特价渠道除外)',
          money: '￥50.00',
          full: '满1000.00使用',
          flag: false
        },
        {
          name: '50元专属优惠券',
          date: '有效期至:2020-05-01 00:00:00',
          tip: '平台专属用户优惠券支付尾款时 可使用(特价渠道除外)',
          money: '￥50.00',
          full: '满1000.00使用',
          flag: false
        }
      ]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab)
    }
  }
}
</script>
<style scoped lang="scss">
  .coupon {
    background: #f3f3f3;
    .tab {
      .title {
        display: flex;
        align-items: center;
        .nav-title {
          margin: 0 10px;
        }
      }
      .coupon-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-top: 20px;
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
  .el-tabs__nav {
    margin-left: 60px !important;
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
    background-color: #232f3e;
  }

  .el-tabs__active-bar {
    height: 3px;
  }

  .el-tabs__nav-wrap::after {
    background-color: #F3F3F3;
  }

  .tab-one {
    padding-top: 10px;
    /*height: 61px;*/
    line-height: 61px;
    background: #fff;
  }

  .el-tabs__header {
    padding-top: 10px;
    height: 50px;
    line-height: 67px;
  }
</style>
