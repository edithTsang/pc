const memberRouter = {
  path: '/member', // 会员中心
  name: 'member',
  meta: { requireAuth: true },
  component: () => import('@/views/member/Index.vue'),
  children: [
    { path: 'user_center',
      name: 'user_center',
      component: () => import('@/views/member/UserManage/MemberCenter.vue') // 个人中心
    },
    { path: 'my_odd',
      name: 'my_odd',
      component: () => import('@/views/member/OddManage/MyOdd.vue') // 我的订单
    },
    { path: 'ocean_odd',
      name: 'OceanOdd',
      component: () => import('@/views/member/OddManage/OceanOdd.vue') // 海运订单
    },
    { path: 'air_transport',
      name: 'AirTransport',
      component: () => import('@/views/member/OddManage/AirTransport.vue') // 空运订单
    },
    { path: 'express_odd',
      name: 'ExpressOdd',
      component: () => import('@/views/member/OddManage/ExpressOdd.vue') // 快递订单
    },
    { path: 'financial_records',
      name: 'financial_records',
      component: () => import('@/views/member/FinancialManage/FinancialRecords.vue') // 财务记录
    },
    { path: 'online_recharge',
      name: 'OnlineRecharge',
      component: () => import('@/views/member/FinancialManage/OnlineRecharge.vue') // 在线充值
    },
    { path: 'recharge_order',
      name: 'RechargeOrder',
      component: () => import('@/views/member/FinancialManage/RechargeOrder.vue') // 充值订单
    },
    { path: 'entry_application',
      name: 'EntryApplication',
      component: () => import('@/views/member/FinancialManage/EntryApplication.vue') // 入账申请
    },
    { path: 'coupon',
      name: 'Coupon',
      component: () => import('@/views/member/FinancialManage/Coupon.vue') // 优惠卷
    },
    { path: 'my_yun_bei',
      name: 'MyYunBei',
      component: () => import('@/views/member/FinancialManage/MyYunBei.vue') // 我的运呗
    },
    { path: 'yun_bei_record',
      name: 'YunBeiRecord',
      component: () => import('@/views/member/FinancialManage/YunBeiRecord.vue') // 运呗申请记录
    },
    { path: 'basic_info',
      name: 'BasicInfo',
      component: () => import('@/views/member/AccoundManage/BasicInfo.vue') // 基本资料
    },
    { path: 'sender',
      name: 'Sender',
      component: () => import('@/views/member/AccoundManage/Sender.vue') // 发件人管理
    },
    { path: 'addressee',
      name: 'Addressee',
      component: () => import('@/views/member/AccoundManage/Addressee.vue') // 收件人管理
    },
    { path: 'produc',
      name: 'Produc',
      component: () => import('@/views/member/AccoundManage/Produc.vue') // 产品信息库
    },
    { path: 'iphone_set',
      name: 'IphoneSet',
      component: () => import('@/views/member/AccoundManage/IphoneSet.vue') // 手机修改
    },
    { path: 'email_set',
      name: 'EmailSet',
      component: () => import('@/views/member/AccoundManage/EmailSet.vue') // 邮箱修改
    },
    { path: 'certification',
      name: 'Certification',
      component: () => import('@/views/member/AccoundManage/Certification.vue') // 实名认证
    },
    { path: 'sub_account',
      name: 'SubAccount',
      component: () => import('@/views/member/AccoundManage/SubAccount.vue') // 子账号管理
    },
    { path: 'role',
      name: 'Role',
      component: () => import('@/views/member/AccoundManage/Role.vue') // 角色管理
    }
  ]
}

export default memberRouter
