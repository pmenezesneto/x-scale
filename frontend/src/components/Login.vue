<template>
    <div class="col-4 floating-label">
      <div class="col" style="height: 350px">
        <div class="row floating-label justify-center items-center">
          <q-icon class="justify-center items-center fas fa-user" color="white" size="7rem" style="opacity: 0.8;"/>
        </div>
        <div class="column justify-evenly" style="height: 175px">
          <div class="col-4">
              <q-input rounded standout="black" bg-color="white" v-model="loginInformations.user" label="usuário" style="opacity: 0.2;font-family: 'Arciform';font-size:20px"/>
          </div>
          <div class="col-4">
              <q-input rounded standout="black" bg-color="white" v-model="loginInformations.password" :type="isPwd ? 'password' : 'text'" label="senha" style="opacity: 0.2;font-family: 'Arciform'; font-size:20px">
                <template v-slot:append>
                  <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
          </div>
        </div>
        <div class="row floating-label justify-center items-center">
          <q-btn
              color="deep-purple-9"
              size="19px"
              text-color="blue"
              no-caps
              style="border-radius: 10px;font-family: 'Arciform';"
              @click="login"
              label="acessar"
          />
        </div>
        <q-btn flat color="blue-grey-3" size="16px" no-caps label="Cadastrar" @click="$router.replace('/cadastro')"  style="font-family: 'Arciform';"/>
      </div>
    </div>
</template>

<script>
import settings from 'src/statics/axiosSettings'
export default {
  name: 'Login',
  computed: {
    formLogin: function () {
      return {
        user: this.loginInformations.user,
        password: this.loginInformations.password
      }
    }
  },
  props: {
    loginInformations: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      user: '',
      password: '',
      isPwd: true
    }
  },
  methods: {
    login () {
      if (this.loginInformations.user === '' || this.loginInformations.password === '') {
        alert('FALHOU')
      } else {
        console.log(this.$q, '$q')
        this.$q.loading.show({
          delay: 400 // ms
        })
        try {
          const response = this.$axios.post(`${settings.baseUrl}/sessions`, this.formLogin)
          this.$q.loading.hide()
          // seta local storage
          this.$q.localStorage.set('authtoken', response.data.token)
        } catch (exc) {
          this.$q.loading.hide()
          this.alert('ERRO NO LOGIN: ' + exc)
        }
      }
    }
  }
}
</script>
