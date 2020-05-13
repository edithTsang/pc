
<template>
  <div>
    <Breadcrumb :breadcrumb="breadcrumb" />
    <div class="finacia-records">
      <div class="money">
        <div class="button">
          <b>￥0.00</b>
          <div class="txt">账户余额</div>
        </div>
        <div class="button">
          <b>￥0.00</b>
          <div class="txt">赠送余额</div>
        </div>
        <div class="button">
          <b>￥0.00</b>
          <div class="txt">补偿余额</div>
        </div>
        <div class="recharge" @click="recharge">充值</div>
      </div>
      <div class="search">
        <el-row>
          <el-col :span="22">
            <div class="search-1">
              <div class="input-suffix">
                订单编号：
                <el-input v-model="input" size="small" style="width: 200px" placeholder="请输入内容" clearable />
              </div>
              <div class="input-suffix">
                下单日期：
                <el-date-picker v-model="value1" size="small" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
              </div>
              <div class="input-suffix">
                订单状态：
                <el-select v-model="status" size="small" clearable placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="search-2" @click="search">查询</div>
          </el-col>
        </el-row>
      </div>
      <div class="table">
        <el-table ref="multipleTable" v-loading="loading" :data="tableData" tooltip-effect="dark" style="width: 100%" :header-cell-style="tableHeaderStyle">
          <el-table-column label="变动类型" align="center">
            <template slot-scope="scope">{{ scope.row.address }}</template>
          </el-table-column>
          <el-table-column prop="name" label="交易类型" align="center" />
          <el-table-column prop="money" label="变动金额" show-overflow-tooltip align="center" />
          <el-table-column prop="money" label="变动前金额" show-overflow-tooltip align="center" />
          <el-table-column prop="money" label="订单编码" show-overflow-tooltip align="center" />
          <el-table-column prop="money" label="变动描述" show-overflow-tooltip align="center" />
          <el-table-column prop="money" label="变动时间" show-overflow-tooltip align="center" />
        </el-table>
        <div class="pagination-container" align="right">
          <el-pagination :current-page="page.pages" :page-sizes="[10,20,30, 50]" :page-size="page.pageSize" :total="page.pageCount" background layout="total, sizes, prev, pager, next, jumper" @size-change="init($event,'pageSize')" @current-change="init($event,'page')" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumb from '../../../components/Member/Breadcrumb'
export default {
  name: 'FinaciaRecords',
  components: { Breadcrumb },
  data() {
    return {
      breadcrumb: {
        text: '个人中心',
        text2: '财务管理',
        text3: '财务记录'
      },
      loading: true,
      input: '',
      value1: '',
      input1: '',
      status: '全部',
      tableHeaderStyle: {
        'background-color': '#f7f8f9',
        'color': '#333333',
        'border': '1px solid #ededed'
      },
      page: {
        pages: 1,
        pageSize: 10,
        pageCount: 11
      },
      options: [
        {
          value: '0',
          label: '全部'
        },
        {
          value: '1',
          label: '已撤销'
        },
        {
          value: '2',
          label: '未确定'
        },
        {
          value: '3',
          label: '待支付'
        },
        {
          value: '4',
          label: '平台待收货'
        },
        {
          value: '5',
          label: '好多好多'
        },
        {
          value: '6',
          label: '好多好多'
        },
        {
          value: '7',
          label: '好多好多'
        }
      ],
      tableData: [{
        name: '空加派美国UPS空派 （广州飞）',
        address: '广州市---美国BAT5',
        money: '1'
      }, {
        name: '空加派美国UPS空派 （广州飞）',
        address: '广州市---美国BAT5',
        money: '2'
      }, {
        name: '空加派美国UPS空派 （广州飞）',
        address: '广州市---美国BAT5',
        money: '3'
      }, {
        name: '空加派美国UPS空派 （广州飞）',
        address: '广州市---美国BAT5',
        money: '4'
      }, {
        name: '空加派美国UPS空派 （广州飞）',
        address: '广州市---美国BAT5',
        money: '5'
      }]
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  methods: {
    recharge() {
      console.log('点我充值')
    },
    search() {
      console.log('搜索')
    },
    async init(value, type) {
      console.log(value)
      console.log(type)
      this.loading = true
    }
  }
}
</script>
<style scoped lang="scss">
  .finacia-records{
    .money{
      display: flex;
      align-items: center;
      height: 120px;
      background: #f3f3f3;
      border-radius: 5px;
      .button{
        margin: 0 50px 0 30px;
        b{
          color: #EEB174;
        }
        .txt{
          font-size: 14px;
        }
      }
      .recharge{
        height: 40px;
        line-height: 40px;
        width: 150px;
        background: #FFCC01;
        border-radius: 5px;
        cursor: pointer;
      }
    }
    .money .button:last-child{
      border-right: 1px solid #000;
    }
    .search{
      margin: 20px 0;
      font-size: 14px;
      width: 100%;
      .search-1{
        display: flex;
        justify-content: space-around;
        height: 70px;
        background-color: #b5c4d6;
        border-radius: 5px 0 0 5px;
        .input-suffix{
          display: flex;
          align-items: center;
        }
      }
      .search-2{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        background-color: #ffcc01;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
      }
    }
  }
  /*ele*/
  .has-gutter{
    background-color: #EDEDED !important;
  }
  .el-button--text{
    color: #e9b480;
  }

</style>

