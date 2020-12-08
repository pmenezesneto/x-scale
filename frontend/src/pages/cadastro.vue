<template>
  <div class="row">
    <div class="col-12 q-pa-md q-mt-xl">
        <!-- <div class="row justify-center">
            <div class="col-10 q-pa-md q-mt-xl q-mb-md text-center titlle-register">Cadastro</div>
        </div> -->
        <div class="row justify-center q-mt-md">
            <div class="col-md-5 col-sm-5 col-lg-5 col-xs-12 q-mr-md q-ma-md">
              <div class="row gutter-md justify-center items-center full-width full-height">
                <div class="col-10">
                    <q-input label-color="blue-10" rounded outlined standout="black" bg-color="white" v-model="userCad.nome" label="Nome" class="inputlogin q-ma-sm"/>
                </div>
                <div class="col-10 ">
                    <q-input label-color="blue-10" rounded outlined standout="black" bg-color="white" v-model="userCad.email" label="E-mail" class="inputlogin q-ma-sm"/>
                </div>
                <div class="col-10 ">
                    <q-input label-color="blue-10" rounded outlined standout="black" bg-color="white" v-model="userCad.telefone" label="Telefone" mask="(##) # #### - ####" class="inputlogin q-ma-sm"/>
                </div>
                <div class="col-10 ">
                    <q-input label-color="blue-10" rounded outlined standout="black" bg-color="white" v-model="userCad.senha" :type="isPwd ? 'password' : 'text'" label="Senha" class="inputlogin q-ma-sm">
                      <template v-slot:append>
                        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd"/>
                      </template>
                    </q-input>
                </div>
                <div class="col-10 ">
                    <q-input label-color="blue-10" rounded outlined standout="black" bg-color="white" v-model="confpassword" :type="isPwdc ? 'password' : 'text'" label="Confirmar Senha" class="inputlogin q-ma-sm">
                      <template v-slot:append>
                        <q-icon :name="isPwdc ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwdc = !isPwdc"/>
                      </template>
                    </q-input>
                </div>
              </div>
            </div>
            <div class="col-md-5 col-sm-5 col-lg-5 col-xs-10 q-mr-md q-pa-md availability-register">
                <div class="row-12" >
                    <div class="col-12 text-center q-pa-sm" style="font-size:30px;">Disponibilidade</div>
                    <div v-for="n in userCad.disponibilidade" :key="n" class="row q-pa-sm" >
                        <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12 q-pl-md">
                            <q-toggle size="lg" v-model="n.present" :label="n.day" left-label />
                        </div>
                        <div class="col q-mr-lg">
                            <q-input label-color="blue-9" rounded outlined standout v-model="n.start" type="time" :disable="!n.present"><q-icon name="schedule" size="md" class=" q-pt-sm" /></q-input>
                        </div>
                        <div class="col">
                            <q-input label-color="blue-9" rounded outlined standout v-model="n.end" type="time" :disable="!n.present"><q-icon name="schedule" size="md" class=" q-pt-sm" /></q-input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-center q-mt-xl">
          <div class="col-5 q-mr-lg">
            <q-btn color="deep-purple-9" class="full-width btn-register" text-color="white" no-caps @click="registerend" label="cadastrar" style="border-radius: 20px; font-size:30px; opacity: 0.7;"/>
          </div>
        </div>
  </div>
</div>
</template>
<script>
// import settings from 'src/statics/axiosSettings'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'register',
  computed: {
    ...mapState('users', ['cadastroNew', 'statusNewCad'])
  },
  props: {
    register: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      userCad: {
        nome: '',
        email: '',
        telefone: '',
        senha: '',
        disponibilidade: [
          {
            day: 'seg',
            present: false,
            start: '',
            end: ''
          },
          {
            day: 'ter',
            present: false,
            start: '',
            end: ''
          },
          {
            day: 'qua',
            present: false,
            start: '',
            end: ''
          },
          {
            day: 'qui',
            present: false,
            start: '',
            end: ''
          },
          {
            day: 'sex',
            present: false,
            start: '',
            end: ''
          },
          {
            day: 'sab',
            present: false,
            start: '',
            end: ''
          }]
      },
      confpassword: '',
      isPwd: true,
      isPwdc: true
    }
  },
  methods: {
    ...mapActions('users', ['setNewCad']),
    registerend () {
      // eslint-disable-next-line
      if (this.userCad.nome === '' || this.userCad.senha === '' || this.userCad.telefone === '' || this.userCad.senha === '' || this.confpassword === '' || this.userCad.senha != this.confpassword || !(/^[a-zA-Z\d]*@[a-zA-Z\d]+\.[a-zA-Z\d]+.*[a-zA-Z]$/).test(this.userCad.email)) {
        console.log('FALHOU')
      } else {
        this.setNewCad(this.userCad)
        if (this.statusNewCad) {
          console.log('sucesso')
        } else {
          alert('falha')
        }
        this.$router.replace('/listDisponibilidade')
      }
    }
  }
}
</script>
<style>
.background{
  background-image: url('../statics/images/background.png');
  background-size: cover;
  opacity: 0.9;
  overflow: auto;
}
.inputlogin{
  opacity: 0.9;
  font-family: 'Arciform';
  font-size: 20px;
  border-radius: 40px;
  border: 3px solid #4527a0;
}
.btn-register{
  border-radius: 10px;
  font-family: 'Arciform';
}
.titlle-register{
  background: rgba(9, 175, 237, .8);
  border-radius: 20px;
  font-family: 'Arciform';
  font-size: 50px;
  color: #0d47a1;
}
.availability-register{
  background: rgb(255, 255, 255);
  opacity: 0.9;
  border: 3px solid #4527a0;
  border-radius: 20px;
  font-family: 'Arciform';
  font-size:20px;
  color: #0d47a1;
}
</style>
