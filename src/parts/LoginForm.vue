<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <c-input type="text" :cval.sync="username" :ok-status.sync="usernameOk" placeholder="请输入用户名" :reg-map="userRegMap" >
        </div>
        
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <c-input type="password" :cval.sync="password" :ok-status.sync="passwordOk" placeholder="请输入密码" :reg-map="pasRegMap">
        </div>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          {{username}} - {{password}} - {{usernameOk}} - {{passwordOk}}
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cInput from '../components/Input'
export default {
  components: {
    cInput
  },
  data () {
    return {
      userRegMap: {
        '@': '必须包含@'
      },
      pasRegMap: {
        '^\\w{1,6}$': '位数不对'
      },
      usernameOk: false,
      passwordOk: false,
      username: '',
      password: ''
    }
  },
  methods: {
    onLogin () {
      if (this.usernameOk && this.passwordOk) {
        console.log('login')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
