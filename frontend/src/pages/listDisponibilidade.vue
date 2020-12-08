<template>
  <div class="row q-pa-md q-ma-md">
    <q-card
      class="shadow-1 overflow-hidden q-ma-md my-card"
      style="border-radius: 10px;"
      expand-icon-class="text-white"
      v-for="n in listusers" :key="n"
    >
    <q-list>
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">{{n._source.nome}} <q-icon name="edit" @click="edit(n._id)" class="cursor-pointer"/></div>
      </q-card-section>

      <q-item>
        <q-item-section>
          <q-item-label>Email</q-item-label>
          <q-item-label caption lines="2">{{n._source.email}}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-icon name="email" color="blue" />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          <q-item-label>Telefone</q-item-label>
          <q-item-label caption lines="2">{{n._source.telefone}}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-icon name="perm_phone_msg" color="blue" />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          <q-item-label>Disponibilidade</q-item-label>
          <q-item-label caption lines="2" v-for="m in n._source.disponibilidade" :key="m">{{m.day}} -- {{m.start}} - {{m.end}}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-icon name="event_available" color="blue" />
        </q-item-section>
      </q-item>

    </q-list>
    </q-card>
  </div>
</template>
<script>
// import settings from 'src/statics/axiosSettings'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'register',
  computed: {
    ...mapState('users', ['listusers'])
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
      // listusers: []
    }
  },
  mounted () {
    this.setUsers()
  },
  methods: {
    ...mapActions('users', ['setUsers']),
    edit (id) {
      console.log(id)
      // this.$router.replace('/editarCadastro')
      this.$router.push(`/editarCadastro/${id}`)
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
.my-card{
  width: 100%;
  max-width: 350px;
}
</style>
