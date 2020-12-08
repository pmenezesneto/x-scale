<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal class="bg-black">
        <q-toolbar class="backgroundbar" style="box-shadow: 0 10px 10px -10px rgba(0,0,0,.5);">
          <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />
          <q-toolbar-title class="q-ml-md" style="font-family: 'Arciform';font-size: 30pt;">{{titlemenu}}</q-toolbar-title>
          <q-tabs
          v-model="tabsAdmin"
          v-if="this.$route.name === 'cadastro' || this.$route.name === 'listDisponibilidade' || this.$route.name === 'escalonamento' || this.$route.name === 'feriasfolgas'"
          align="right"
          :breakpoint="0"
          style="font-family: 'Arciform';"
          >
            <q-route-tab name="cadastro" label="Cadastro Funcionarios" icon="group" no-caps to="/cadastro"/>
            <q-route-tab name="lista" label="Lista Funcionarios" icon="list" no-caps to="/listDisponibilidade"/>
            <q-route-tab name="escalonamento" label="Escalonamento" icon="event_note" no-caps to="/escalonamento"/>
            <q-route-tab name="feriasFolga" label="Ferias/Folgas" icon="beach_access" no-caps to="/feriasfolgas"/>
          </q-tabs>
        </q-toolbar>
    </q-header>
     <q-drawer
        v-model="drawerLeft"
        :width="200"
        :breakpoint="700"
        elevated
        content-class="backgroundlateral"
      >
       <q-scroll-area class="fit">
       <q-tabs
          v-model="tabAll"
          vertical
          class="text-cyan-1 q-mb-lg"
          style="font-family: 'Arciform';"
        >
          <q-route-tab @click.stop.prevent="mudanome('Escala')" name="scale" icon="event_note" label="Escala" no-caps style="padding: 30px;" to="/escala"/>
          <q-route-tab @click.stop.prevent="mudanome('Usuario')" name="user" icon="group" label="Usuário" no-caps style="padding: 32px;" to="/usuario"/>
          <q-route-tab @click.stop.prevent="mudanome('Historico')" name="history" icon="history" label="Histórico" no-caps style="padding: 32px;" to="/historico"/>
          <q-separator class="q-mt-xl"/>
          <q-route-tab @click.stop.prevent="mudanome('Area do Adiministrador')" name="admin" icon="admin_panel_settings" label="Adiministrador" no-caps style="padding: 32px;" to="/cadastro"/>
        </q-tabs>

        </q-scroll-area>
    </q-drawer>
    <q-page-container class="row justify-center items-center full-width full-height">
         <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {},
  data () {
    return {
      drawerLeft: false,
      drawerRight: true,
      titlemenu: '',
      tabsAdmin: '',
      tabAll: ''
    }
  },
  created () {
    this.$router.push({ name: 'escala' })
    this.titlemenu = this.$route.name
  },
  methods: {
    mudanome (nome) {
      this.titlemenu = nome
      console.log(this.$route)
    }
  }
}
</script>

<style>
.backgroundbar{
  background-image: url('../statics/images/bar.png');
  background-size: cover;
  opacity: 0.9;
}
.backgroundlateral{
  background-image: url('../statics/images/lateral.png');
  background-size: cover;
  opacity: 0.9;
}
.tabssize{
/* font-size: .15rem; */
/* icon-font-size: 23px; */
/* padding-with-icon: 8px 10px; */
/* min-height-with-icon: 48px */
}
</style>
