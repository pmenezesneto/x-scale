<template>
    <div class="col-lg-4 col-md-5 col-sm-5 floating-label">
      <div class="col" style="height: 350px">
        <div class="row floating-label justify-center items-center">
          <q-icon class="justify-center items-center fas fa-user" color="white" size="7rem" style="opacity: 0.8;"/>
        </div>
        <div class="column justify-evenly" style="height: 175px">
          <div class="col-4">
              <q-input rounded standout="black" bg-color="white" v-model="loginInformationsField.user" label="usuário" class="inputlogin"/>
          </div>
          <div class="col-4">
              <q-input rounded standout="black" bg-color="white" v-model="loginInformationsField.password" :type="isPwd ? 'password' : 'text'" label="senha" class="inputlogin">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd"/>
                </template>
              </q-input>
          </div>
        </div>
        <div class="row floating-label justify-center items-center btn-login">
          <q-btn
              color="deep-purple-9"
              size="19px"
              text-color="blue"
              no-caps
              @click="login"
              label="acessar"
          />
        </div>
      </div>
      <!-- <q-btn class="absolute-bottom-right q-mr-xl q-mb-md text-weight-bolder" flat color="deep-purple-9" size="23px" no-caps label="Cadastrar" @click="$router.replace('/cadastro')"  style="font-family: 'Arciform';"/> -->
      <q-icon class="absolute-bottom-left fas fa-angle-right q-ml-xl q-mb-md" color="white" size="3rem" style="opacity: 0.8;"/>
      <q-icon class="absolute-bottom-left fas fa-angle-left q-ml-md q-mb-md" color="white" size="3rem" style="opacity: 0.8;"/>
    </div>
</template>
<script>
// import settings from 'src/statics/axiosSettings'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Login',
  computed: {
    // formLogin: function () {
    //   return {
    //     user: this.loginInformations.user,
    //     password: this.loginInformations.password
    //   }
    // }
    ...mapState('users', ['loginInformations', 'statusLogin'])
  },
  props: {
    // loginInformations: {
    //   type: Object,
    //   default: () => {
    //     return {}
    //   }
    // }
  },
  data () {
    return {
      loginInformationsField: {
        user: '',
        password: ''
      },
      isPwd: true
    }
  },
  methods: {
    ...mapActions('users', ['setUserLogin']),
    login () {
      if (this.loginInformationsField.user === '' || this.loginInformationsField.password === '') {
        alert('FALHOU')
      } else {
        // console.log('login informações :::' + this.formLogin)
        this.setUserLogin(this.loginInformationsField.user)
        console.log(this.statusLogin)
        if (this.statusLogin) {
          console.log(this.statusLogin)
          this.$router.push('/home')
        } else {
          alert('deu ruim')
        }
      }
    }
  }
}
</script>

<style>
.inputlogin{
  opacity: 0.2;
  font-family: 'Arciform';
  font-size:20px;
}
.btn-login{
  border-radius: 10px;
  font-family: 'Arciform';
}
</style>
