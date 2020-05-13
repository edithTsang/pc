<template>
  <div>
    <Breadcrumb :breadcrumb="breadcrumb" />
    <div class="my-order">
      <div class="search">
        <el-row>
          <el-col :span="22">
            <div class="search-1">
              <div class="input-suffix">订单编号：<el-input v-model="input" size="small" style="width: 200px" placeholder="请输入内容" clearable /></div>
              <div class="input-suffix">下单日期：
                <el-date-picker
                  v-model="value1"
                  size="small"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                />
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
      <div class="table" align="left">
        <div style="margin: 20px 0">
          <el-button type="info" size="small" @click="onExport()">批量导出账单</el-button>
          <el-button type="info" size="small" @click="onPrint()">批量打印标签</el-button>
        </div>
        <el-table
          ref="multipleTable"
          v-loading="loading"
          :data="data.tableData"
          tooltip-effect="dark"
          style="width: 100%"
          :header-cell-style="tableHeaderStyle"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="44" align="center" />
          <el-table-column label="起运城市----目的国家" width="180" align="left">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name" label="运输方式--渠道名称" width="150" align="center" />
          <el-table-column prop="address" label="订单状态" show-overflow-tooltip align="center" />
          <el-table-column prop="address" label="下单计费重量/体积/件数" show-overflow-tooltip width="150" align="center" />
          <el-table-column prop="address" label="收货计费重量/体积/件数" show-overflow-tooltip width="150" align="center" />
          <el-table-column prop="address" label="单价" show-overflow-tooltip align="center" />
          <el-table-column prop="address" label="附加费" show-overflow-tooltip align="center" />
          <el-table-column prop="address" label="总价" show-overflow-tooltip align="center" />
          <el-table-column prop="address" label="已支付" show-overflow-tooltip align="center" />
          <el-table-column prop="address" label="已优惠" show-overflow-tooltip align="center" />
          <el-table-column prop="address" label="操作" show-overflow-tooltip align="center" width="80">
            <template slot-scope="scope">
              <div><el-button type="text" size="small">编辑</el-button></div>
              <div><el-button type="text" size="small">取消</el-button></div>
              <div><el-button type="text" size="small" @click="handleCheck(scope.row)">查看</el-button></div>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination-container" align="right">
          <el-pagination :current-page="page.pages" :page-sizes="[10,20,30, 50]" :page-size="page.pageSize" :total="page.pageCount" background layout="total, sizes, prev, pager, next, jumper" @size-change="init($event,'pageSize')" @current-change="init($event,'page')" />
        </div>
      </div>
    </div>
    <!--<el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" align="left" width="40%">-->
    <!--<el-form-->
    <!--ref="dataForm"-->
    <!--:rules="rules"-->
    <!--:model="temp"-->
    <!--label-position="left"-->
    <!--align="left"-->
    <!--label-width="100px"-->
    <!--style="width: 80%; margin-left:50px;"-->
    <!--&gt;-->
    <!--<el-form-item label="英文名字" prop="title">-->
    <!--<el-input v-model="temp.title" />-->
    <!--</el-form-item>-->
    <!--<el-form-item label="中文名字">-->
    <!--<el-input v-model="temp.type" />-->
    <!--</el-form-item>-->
    <!--<el-form-item label="海关编码" >-->
    <!--<el-input v-model="temp.year" />-->
    <!--</el-form-item>-->
    <!--<el-form-item label="材质">-->
    <!--<el-input v-model="temp.year" />-->
    <!--</el-form-item>-->
    <!--<el-form-item label="用途">-->
    <!--<el-input v-model="temp.year" />-->
    <!--</el-form-item>-->
    <!--<el-form-item label="规格">-->
    <!--<el-input v-model="temp.year" />-->
    <!--</el-form-item>-->
    <!--<el-form-item label="型号">-->
    <!--<el-input v-model="temp.year" />-->
    <!--</el-form-item>-->
    <!--<el-form-item label="颜色">-->
    <!--<el-input v-model="temp.year" />-->
    <!--</el-form-item>-->
    <!--<el-form-item label="品牌">-->
    <!--<el-input v-model="temp.title" style="width: 300px;margin-right:30px " :disabled="titleDisabled === true" />-->
    <!--<el-checkbox v-model="privateAddress" label="无牌" @change="onPrivate" />-->
    <!--</el-form-item>-->
    <!--<el-form-item label="产品图片">-->
    <!--<div style="display: flex">-->
    <!--<el-upload-->
    <!--class="avatar-uploader"-->
    <!--action="https://jsonplaceholder.typicode.com/posts/"-->
    <!--:show-file-list="false"-->
    <!--:on-success="handleAvatarSuccess"-->
    <!--:before-upload="beforeAvatarUpload"-->
    <!--&gt;-->
    <!--<img v-if="imageUpload" :src="imageUpload" class="avatar">-->
    <!--<i v-else class="el-icon-plus avatar-uploader-icon" />-->
    <!--</el-upload>-->
    <!--<img v-if="imageUrl" :src="imageUrl" class="avatar">-->
    <!--<i v-else class="el-icon-upload2 avatar-uploader-icon" stop />-->
    <!--</div>-->
    <!--</el-form-item>-->
    <!--</el-form>-->
    <!--<div slot="footer" class="dialog-footer">-->
    <!--<el-button @click="dialogFormVisible = false">-->
    <!--取消-->
    <!--</el-button>-->
    <!--<el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">-->
    <!--提交-->
    <!--</el-button>-->
    <!--</div>-->
    <!--</el-dialog>-->
  </div>
</template>
<script>
import Breadcrumb from '../../../components/Member/Breadcrumb'
export default {
  name: 'AirTransport',
  components: { Breadcrumb },
  data() {
    return {
      breadcrumb: {
        text: '个人中心',
        text2: '订单管理',
        text3: '我的订单'
      },
      input: '',
      value1: '',
      input1: '',
      status: '全部',
      isExport: [],
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
      options: [
        { value: '0', label: '全部' },
        { value: '1', label: '已撤销' },
        { value: '2', label: '未确定' },
        { value: '3', label: '待支付' },
        { value: '4', label: '平台待收货' },
        { value: '5', label: '好多好多' },
        { value: '6', label: '好多好多'
        }, { value: '7', label: '好多好多' }
      ],
      data: {
        totla: 10,
        tableData: [{
          date: '广州市---美国BAT5',
          name: '空加派美国UPS空派 （广州飞）',
          address: '未确定'
        }, {
          date: '广州市---美国BAT5',
          name: '空加派美国UPS空派 （广州飞）',
          address: '未确定'
        }, {
          date: '广州市---美国BAT5',
          name: '空加派美国UPS空派 （广州飞）',
          address: '未确定'
        }, {
          date: '广州市---美国BAT5',
          name: '空加派美国UPS空派 （广州飞）',
          address: '未确定'
        }, {
          date: '广州市---美国BAT5',
          name: '空加派美国UPS空派 （广州飞）',
          address: '未确定'
        }]
      },
      multipleSelection: [],
      fileComment: [{ 'label': '商务文件评分', 'children': [{ 'label': '1' }, { 'label': '2' }, { 'label': '管理员' }] }]
    }
  },
  created() {
    // axios.get('https://www.easy-mock.com/mock/5cee365d7589043c498e8819/example/edith/list')
    //   .then((response) => {
    //     console.log(response)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  methods: {
    search() {
      this.loading = true
      this.page.pageCount = this.data.pageCount || 0
      this.page.pageSize = 10 || 0

      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
    async init(value, type) {
      console.log(value)
      console.log(type)
      this.loading = true
      // if (type) {
      //   this.filterForm[type] = value || 1
      // }
      // departmentIndex.list(this.filterForm).then(res => {
      //   this.listLoading = false
      //   this.tableList = res.data.lists
      //   this.page.pageCount = res.data.pageCount || 0
      //   this.page.totalPage = res.data.totalPage || 0
      //   this.page.pageSize = res.data.pageSize || this.page.pageSize
      // }).catch(() => {
      //   this.listLoading = false
      // })
    },
    onExport() {
      if (this.isExport.length === 0) {
        this.$alert('请先勾选订单', {
          confirmButtonText: '确定',
          callback: action => {
            // this.$message({
            //   type: 'info',
            //   message: `action: ${action}`
            // })
          }
        })
      }
    },
    onPrint() {
      this.onExport()
    },
    // 查看
    handleCheck(row) {
      console.log(row)
    },
    handleSelectionChange(val) {
      this.isExport = val
      this.multipleSelection = val
    }
  }
}
</script>
<style scoped lang="scss">
  .my-order{
    /*width: 90%;*/
    .search{
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
    color: red;
  }
  .el-button--text{
    color: #e9b480;
  }
</style>

