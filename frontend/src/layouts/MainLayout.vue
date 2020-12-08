<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="row justify-center items-center background full-width full-height">
      <form-login/>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Login from '../pages/Login.vue'

export default {
  name: 'MainLayout',
  components: { 'form-login': Login },
  data () {
    return {
    }
  }
}
</script>

<style>
.background{
  background-image: url('../statics/images/background.png');
  background-size: cover;
  opacity: 0.9;
}
</style>
