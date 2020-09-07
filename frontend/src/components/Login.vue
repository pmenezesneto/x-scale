<template>
    <div class="col-4 floating-label">
      <div class="col" style="height: 150px">
        <div class="row floating-label justify-center items-center">
          <q-icon class="justify-center items-center" size="5rem" name="person" />
        </div>
        <div class="column justify-evenly" style="height: 150px">
          <div class="col-4">
              <q-input rounded outlined v-model="loginInformations.user" label="usuário" />
          </div>
          <div class="col-4">
              <q-input rounded outlined v-model="loginInformations.password" label="senha" />
          </div>
        </div>
        <div class="row floating-label justify-center items-center">
          <q-btn
              @click="login"
              label="acessar"
          />
        </div>
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
      password: ''
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
