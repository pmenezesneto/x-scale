<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="row justify-center items-center background">
      <form-login/>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Login from '../components/Login.vue'

export default {
  name: 'MainLayout',
  components: { 'form-login': Login },
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
.background
  background-image: url('../statics/images/background.png');
  background-size: 100%;
</style>
