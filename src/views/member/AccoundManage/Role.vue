<template>
  <div>
    <Breadcrumb :breadcrumb="breadcrumb" />
    <div>
      <!--<el-button type="primary" @click="handleAddRole">添加角色</el-button>-->
      <el-table v-loading="loading" :data="rolesList" style="width: 100%;margin-top:30px;" border>
        <el-table-column align="center" label="序号">
          <template slot-scope="scope">
            {{ scope.row.key }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="角色">
          <template slot-scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="handleEdit(scope)">权限</el-button>
            <!--<el-button type="danger" size="small" @click="handleDelete(scope)">删除</el-button>-->
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-container" align="right">
        <el-pagination :current-page="page.pages" :page-sizes="[10,20,30, 50]" :page-size="page.pageSize" :total="page.pageCount" background layout="total, sizes, prev, pager, next, jumper" @size-change="init($event,'pageSize')" @current-change="init($event,'page')" />
      </div>

      <el-dialog :visible.sync="dialogVisible" width="40%">
        <el-form :model="role" label-width="80px" label-position="left">
          <el-form-item label="角色名称">
            <el-input v-model="role.name" :disabled="true" />
          </el-form-item>
          <el-form-item label="">
            <el-tree :data="roleData" show-checkbox node-key="id" :default-expanded-keys="[1, 2, 3]" :default-checked-keys="[1,5,66]" :props="defaultProps" />
          </el-form-item>
        </el-form>
        <div style="text-align:right;">
          <el-button type="danger" @click="dialogVisible=false">确定</el-button>
          <el-button type="primary" @click="confirmRole">取消</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import Breadcrumb from '../../../components/Member/Breadcrumb'
export default {
  components: { Breadcrumb },
  data() {
    return {
      breadcrumb: {
        text: '个人中心',
        text2: '账号管理',
        text3: '角色管理'
      },
      dialogVisible: false,
      loading: true,
      page: {
        pages: 1,
        pageSize: 10,
        pageCount: 11
      },
      rolesList: [
        { key: '1', name: '开发人员' },
        { key: '2', name: '财务' },
        { key: '3', name: '业务' },
        { key: '4', name: '客服' }
      ],
      role: Object.assign({

      }),
      roleData: [{
        id: 1,
        label: '订单管理',
        children: [{
          id: 24,
          label: '我的订单列表'
        }, {
          id: 25,
          label: 'FBA订单列表'
        }, {
          id: 57,
          label: '海运订单列表'
        }, {
          id: 66,
          label: '空运订单列表'
        }, {
          id: 6,
          label: '快递订单列表'
        }, {
          id: 7,
          label: '小包订单列表'
        }, {
          id: 8,
          label: '查看订单详情'
        }, {
          id: 9,
          label: '编辑订单'
        }, {
          id: 10,
          label: '保存编辑订单 '
        }, {
          id: 11,
          label: '撤销订单 '
        }, {
          id: 12,
          label: '添加订单快递信息'
        }, {
          id: 13,
          label: '查看修改快递信息'
        }, {
          id: 14,
          label: '查看物流轨迹'
        }]
      }, {
        id: 2,
        label: '财务管理',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '账号管理',
        children: [{
          id: 7,
          label: '三级 3-1'
        }, {
          id: 8,
          label: '三级 3-2'
        }]
      }, {
        id: 4,
        label: '余额支付',
        children: [{
          id: 7,
          label: '四级 3-1'
        }, {
          id: 8,
          label: '四级 3-2'
        }]
      }, {
        id: 5,
        label: '运呗支付',
        children: [{
          id: 7,
          label: '五级 3-1'
        }, {
          id: 8,
          label: '五级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  mounted() {
  },
  methods: {
    async init(value, type) {
      console.log(value)
      console.log(type)
      this.loading = true
    },
    // handleAddRole() {
    //   if (this.$refs.tree) {
    //     this.$refs.tree.setCheckedNodes([])
    //   }
    //   // this.dialogType = 'new'
    //   this.dialogVisible = true
    // },
    handleEdit(scope) {
      console.log(scope.row)
      this.role = Object.assign({}, scope.row)
      this.dialogVisible = true
    },
    confirmRole() {
      console.log('提交')
    }
  }
}
</script>

