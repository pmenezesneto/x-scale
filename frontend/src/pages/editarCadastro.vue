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
                    <q-input label-color="blue-10" rounded outlined standout="black" v-model="usuarioCad.nome" label="Nome" class="inputlogin q-ma-sm" />
                </div>
                <div class="col-10 ">
                    <q-input label-color="blue-10" rounded outlined standout="black" bg-color="white" v-model="usuarioCad.email" label="E-mail" class="inputlogin q-ma-sm"/>
                </div>
                <div class="col-10 ">
                    <q-input label-color="blue-10" rounded outlined standout="black" bg-color="white" v-model="usuarioCad.telefone" label="Telefone" mask="(##) # #### - ####" class="inputlogin q-ma-sm"/>
                </div>
                <div class="col-10 ">
                    <q-input label-color="blue-10" rounded outlined standout="black" bg-color="white" v-model="usuarioCad.senha" :type="isPwd ? 'password' : 'text'" label="Senha" class="inputlogin q-ma-sm">
                      <template v-slot:append>
                        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd"/>
                      </template>
                    </q-input>
                </div>
                <div class="col-10 ">
                    <q-input label-color="blue-10" rounded outlined standout="black" bg-color="white" v-model="usuarioCad.senha" :type="isPwdc ? 'password' : 'text'" label="Confirmar Senha" class="inputlogin q-ma-sm">
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
                    <div v-for="n in usuarioCad.disponibilidade" :key="n" class="row q-pa-sm" >
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
            <q-btn color="negative" class="full-width btn-register" text-color="white" no-caps @click="cancel" label="cancelar" style="border-radius: 20px; font-size:30px;"/>
          </div>
          <div class="col-5 q-mr-lg">
            <q-btn color="deep-purple-9" class="full-width btn-register" text-color="white" no-caps @click="alterar" label="Alterar" style="border-radius: 20px; font-size:30px;"/>
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
    // formCadastro: function () {
    //   return {
    //     nome: this.register.nome,
    //     email: this.register.email,
    //     telefone: this.register.telefone,
    //     senha: this.register.senha,
    //     disponibilidade: this.register.disponibilidade
    //   }
    // },
    ...mapState('users', ['user', 'userEdited', 'userCadStatus'])
  },
  props: {
    register: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  mounted () {
    this.zerarHoras()
    console.log(this.$route)
    this.setEditUser(this.id)
    this.usuarioCad.nome = this.user._source.nome
    this.usuarioCad.email = this.user._source.email
    this.usuarioCad.telefone = this.user._source.telefone
    this.usuarioCad.senha = this.user._source.senha
    this.usuarioCad.disponibilidade = this.user._source.disponibilidade
    console.log(this.usuarioCad.disponibilidade)
    if (this.usuarioCad.disponibilidade === undefined) this.zerarHoras()
  },
  data () {
    return {
      usuarioCad: {
        nome: '',
        email: '',
        telefone: '',
        senha: '',
        disponibilidade: []
      },
      isPwd: true,
      isPwdc: true,
      id: this.$route.params.id
    }
  },
  methods: {
    ...mapActions('users', ['setEditUser']),
    ...mapActions('users', ['setUserEdited']),
    alterar () {
      if (this.register.user === '' || this.register.password === '' || this.register.telephone === '' || this.register.password === '' || this.register.confpassword === '') {
        console.log('FALHOU')
      } else {
        this.setUserEdited(this.id, this.usuarioCad)
        if (this.userCadStatus) {
          console.log('sucesso')
        } else {
          alert('falha')
        }
        this.$router.replace('/listDisponibilidade')
      }
    },
    cancel () {
      console.log('cancelando')
      this.$router.replace('/listDisponibilidade')
    },
    zerarHoras () {
      this.usuarioCad.disponibilidade = [
        {
          day: 'seg',
          present: false,
          start: '0',
          end: '0'
        },
        {
          day: 'ter',
          present: false,
          start: '0',
          end: '0'
        },
        {
          day: 'qua',
          present: false,
          start: '0',
          end: '0'
        },
        {
          day: 'qui',
          present: false,
          start: '0',
          end: '0'
        },
        {
          day: 'sex',
          present: false,
          start: '0',
          end: '0'
        },
        {
          day: 'sab',
          present: false,
          start: '0',
          end: '0'
        }]
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
  font-size:50px;
  color: rgba(73, 48, 104, .9)
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
