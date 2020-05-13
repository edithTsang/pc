const tel = /^1[3456789]\d{9}$/ // 手机号码
const username = /^[a-z0-9_-]{5,16}$/ // 用户名
const code = /^\d{4}$/ // 验证码
const password = /^[a-z0-9_-]{6,18}$/ // 密码
const name = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/ // 姓名
const Validate = (function() {
  function Validate() {}
  // 公用验证
  Validate.Form = function() {
    return {
      userName: function(rule, value, callback) {
        if (!value) {
          return callback(new Error('用户名不能为空'))
        }
        if (!username.test(value)) {
          callback(new Error('用户名长度在5~16之间,只能包含字母或数字!'))
        } else {
          callback()
        }
      },
      phone: (rule, value, callback) => {
        if (!value) {
          return callback(new Error('电话号码不能为空'))
        }
        if (!tel.test(value)) {
          callback(new Error('请输入正确的手机号码'))
        } else {
          callback()
        }
      },
      code: (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'))
        }
        if (!code.test(value)) {
          callback(new Error('请输入正确的验证码'))
        } else {
          callback()
        }
      },
      password: (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不能为空'))
        }
        if (!password.test(value)) {
          callback(new Error('密码长度在6~18之间，只能包含字母、数字和下划线或横杠'))
        } else {
          callback()
        }
      },
      name: (rule, value, callback) => {
        if (!value) {
          return callback(new Error('姓名不能为空'))
        }
        if (!name.test(value)) {
          callback(new Error('请输入正确的姓名'))
        } else {
          callback()
        }
      }
    }
  }
  return Validate
}())
exports.Validate = Validate
