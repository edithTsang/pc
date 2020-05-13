<template>
  <div>
    <Breadcrumb :breadcrumb="breadcrumb" />
    <div class="addressee">
      <div align="left" style="margin-bottom: 20px">
        <el-button type="warning" icon="el-icon-plus" @click="handleCreate">新增收件人地址</el-button>
      </div>
      <div class="table">
        <el-table
          ref="multipleTable"
          v-loading="loading"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          :header-cell-style="tableHeaderStyle"
        >
          <el-table-column label="序号" show-overflow-tooltip align="center">
            <template slot-scope="scope">{{ scope.$index }}</template>
          </el-table-column>
          <el-table-column prop="title" label="公司" show-overflow-tooltip align="center" />
          <el-table-column prop="contacts" label="联系人" show-overflow-tooltip align="center" />
          <el-table-column prop="phone" label="联系电话" show-overflow-tooltip align="center" />
          <el-table-column prop="emailCode" label="邮编" show-overflow-tooltip align="center" />
          <el-table-column prop="country" label="国家/城市" show-overflow-tooltip align="center" />
          <el-table-column prop="address" label="详细地址" show-overflow-tooltip align="center" />
          <el-table-column label="操作" show-overflow-tooltip align="center" width="150">
            <template slot-scope="scope">
              <div><el-button type="text" size="small" @click="handleUpdate(scope.row)">编辑</el-button></div>
              <div><el-button type="text" size="small" @click="handleDelete(scope.row, scope.$index)">删除</el-button></div>
              <div><el-button type="warning" size="small">设为默认</el-button></div>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination-container" align="right">
          <el-pagination :current-page="page.pages" :page-sizes="[10,20,30, 50]" :page-size="page.pageSize" :total="page.pageCount" background layout="total, sizes, prev, pager, next, jumper" @size-change="init($event,'pageSize')" @current-change="init($event,'page')" />
        </div>
      </div>
      <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" align="left" width="40%">
        <el-form
          ref="dataForm"
          :rules="rules"
          :model="temp"
          label-position="left"
          align="left"
          label-width="100px"
          style="width: 80%; margin-left:50px;"
        >
          <el-form-item label="公司" prop="title">
            <el-input v-model="temp.title" style="width: 300px;margin-right:30px " :disabled="titleDisabled === true" />
            <el-checkbox v-model="privateAddress" label="私人地址" @change="onPrivate" />
          </el-form-item>
          <el-form-item label="联系人" prop="contacts">
            <el-input v-model="temp.type" />
          </el-form-item>
          <el-form-item label="联系电话" prop="phone">
            <el-input v-model="temp.year" />
          </el-form-item>
          <el-form-item label="邮编" prop="emailCode">
            <el-input v-model="temp.year" />
          </el-form-item>
          <el-form-item label="国家" prop="country">
            <el-select v-model="temp.year" class="filter-item" placeholder="请选择">
              <el-option label="中国" value="1" />
            </el-select>
          </el-form-item>
          <el-form-item label="地址" prop="province">
            <v-distpicker :placeholders="placeholders" :province="temp.province" :city="temp.city" :area="temp.area" @selected="selected" />
          </el-form-item>
          <el-form-item label="详细地址" prop="address">
            <el-input v-model="temp.address" />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">
            取消
          </el-button>
          <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
            提交
          </el-button>
        </div>
      </el-dialog>

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
        text3: '收件人管理'
      },
      dialogFormVisible: false,
      flag: false,
      dialogStatus: '',
      loading: true,
      titleDisabled: false,
      privateAddress: false,
      imageUrl: require('@/assets/image/head_default.gif'),
      imageUpload: '',
      textMap: {
        update: '编辑收件人地址',
        create: '新增收件人地址'
      },
      page: {
        pages: 1,
        pageSize: 10,
        pageCount: 11
      },
      placeholders: {
        province: '请选择省',
        city: '请选择市',
        area: '请选择区'
      },
      temp: {
        title: '',
        monthday: '',
        type: '',
        year: ''
      },
      tableHeaderStyle: {
        'background-color': '#f7f8f9',
        'color': '#333333',
        'border': '1px solid #ededed'
      },
      tableData: [{
        title: '测试数据',
        contacts: '测试数据2',
        phone: '测试数据3',
        emailCode: '测试数据3',
        address: '测试数据3',
        province: '测试数据3',
        country: '测试数据3'
      }],
      rules: {
        title: [{ required: true, message: '公司名称不能为空', trigger: 'blur' }],
        contacts: [{ required: true, message: '联系人不能为空', trigger: 'blur' }],
        phone: [{ required: true, message: '联系电话不能为空', trigger: 'blur' }],
        emailCode: [{ required: true, message: '邮编不能为空', trigger: 'blur' }],
        address: [{ required: true, message: '详细地址不能为空', trigger: 'blur' }],
        province: [{ type: 'array', required: true, trigger: 'change', message: '请选择地址' }],
        country: [{ required: true, trigger: 'change', message: '请选择国家' }]
      },
      listQuery: {
        key: '',
        name: ''
      }
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  methods: {
    async init(value, type) {
      console.log(value)
      console.log(type)
      this.loading = true
    },
    resetTemp() {
      this.temp = {
        title: '',
        monthday: '',
        type: '',
        year: ''
      }
      this.titleDisabled = false
      this.privateAddress = false
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      // this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleDelete(row, $index) {
      console.log(row)
      console.log($index)
      this.$notify({
        title: '成功',
        message: '删除成功',
        type: 'success',
        duration: 2000
      })
      this.tableData.splice($index, 1)
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        // if (valid) {
        //   const tempData = Object.assign({}, this.temp)
        //   tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
        //   updateArticle(tempData).then(() => {
        //     const index = this.list.findIndex(v => v.id === this.temp.id)
        //     this.list.splice(index, 1, this.temp)
        //     this.dialogFormVisible = false
        //     this.$notify({
        //       title: '成功',
        //       message: '更新成功',
        //       type: 'success',
        //       duration: 2000
        //     })
        //   })
        // }
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
          this.temp.author = 'vue-element-admin'
          // createArticle(this.temp).then(() => {
          //   this.list.unshift(this.temp)
          //   this.dialogFormVisible = false
          //   this.$notify({
          //     title: '成功',
          //     message: '创建成功',
          //     type: 'success',
          //     duration: 2000
          //   })
          // })
        }
      })
    },
    selected(data) {
      console.log(data)
      this.temp.province = data.province.value
      this.temp.city = data.city.value
      this.temp.area = data.area.value
    },
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
    },
    onPrivate(val) {
      console.log(val)
      if (val === true) {
        this.titleDisabled = true
      } else {
        this.titleDisabled = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .addressee{

  }
  /*ele*/
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    /*background: #ccc;*/
    margin-right: 30px;
    border: 1px dashed #eee;
  }
  .avatar {
    width: 80px;
    height: 80px;
    display: block;
    margin-right: 30px;

  }
  .el-button--text{
    color: #e9b480;
  }
</style>

