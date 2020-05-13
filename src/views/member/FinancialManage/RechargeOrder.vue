
<template>
  <div>
    <Breadcrumb :breadcrumb="breadcrumb" />
    <div class="rechrge-order">
      <div class="search">
        <el-row>
          <el-col :span="22">
            <div class="search-1">
              <div class="input-suffix">
                充值日期：
                <el-date-picker v-model="value1" size="small" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
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
          <el-table-column label="订单编码" align="center">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column prop="name2" label="订单交易号" align="center" />
          <el-table-column prop="bankNumber" label="充值金额" show-overflow-tooltip align="center" />
          <el-table-column prop="bankNumber" label="添加时间" show-overflow-tooltip align="center" />
          <el-table-column prop="bankNumber" label="支付时间" show-overflow-tooltip align="center" />
          <el-table-column prop="bankNumber" label="状态" show-overflow-tooltip align="center" />
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
  name: 'RechrgeOrder',
  components: { Breadcrumb },
  data() {
    return {
      breadcrumb: {
        text: '个人中心',
        text2: '财务管理',
        text3: '充值订单'
      },
      value: '',
      value1: '',
      loading: true,
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
      tableData: [{
        name: '测试数据1',
        name2: '测试数据2',
        bankNumber: '测试数据3'
      }, {
        name: '测试数据1',
        name2: '测试数据2',
        bankNumber: '测试数据3'
      }, {
        name: '测试数据1',
        name2: '测试数据2',
        bankNumber: '测试数据3'
      }, {
        name: '测试数据1',
        name2: '测试数据2',
        bankNumber: '测试数据3'
      }, {
        name: '测试数据1',
        name2: '测试数据2',
        bankNumber: '测试数据3'
      }, {
        name: '测试数据1',
        name2: '测试数据2',
        bankNumber: '测试数据3'
      }, {
        name: '测试数据1',
        name2: '测试数据2',
        bankNumber: '测试数据3'
      }, {
        name: '测试数据1',
        name2: '测试数据2',
        bankNumber: '测试数据3'
      }, {
        name: '测试数据1',
        name2: '测试数据2',
        bankNumber: '测试数据3'
      }, {
        name: '测试数据1',
        name2: '测试数据2',
        bankNumber: '测试数据3'
      }, {
        name: '测试数据1',
        name2: '测试数据2',
        bankNumber: '测试数据3'
      }]
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  methods: {
    search() {
      console.log('点我干嘛')
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
  .rechrge-order{
    .search{
      font-size: 14px;
      width: 100%;
      .search-1{
        display: flex;
        height: 70px;
        background-color: #b5c4d6;
        border-radius: 5px 0 0 5px;
        .input-suffix{
          margin-left: 30px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
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
    .table{
      margin-top: 20px;
    }
  }
</style>

