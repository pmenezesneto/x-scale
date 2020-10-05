<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="row justify-center items-center background">
      <form-login/>
      <router-view />
    </q-page-container>
          <!-- <q-side-link  to="/cadastro" clickable @click="$router.replace('/cadastro')">Go to Route</q-side-link> -->
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
  opacity: 0.9;
</style>
