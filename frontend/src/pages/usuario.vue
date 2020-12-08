<template>

<div class="row justify-center">
    <div class="col-4 q-ma-sm q-ml-lg" style="border: 3px solid #4527a0;border-radius: 20px;color: #4527a0">
      <div class="row justify-center q-mt-lg">
          <q-icon class="fas fa-user-circle" size="4rem" style="opacity: 0.8;"/>
        </div>
        <div class="row justify-center">
          <h5>{{this.name}}</h5>
        </div>
         <div class="row justify-center">
           <p>email</p>
          </div>
          <div class="row justify-center">
               <h6>{{this.email}}</h6>
          </div>
         <div class="row justify-center">
           <p>telefone</p>
          </div>
          <div class="row justify-center">
               <h6>{{this.telephone}}</h6>
          </div>
              <div class="col-md-5 col-sm-5 col-lg-5 col-xs-10 q-mr-md q-pa-md availability-register1">
                <div class="row-12" >
                    <div class="col-12 text-center q-pa-sm" style="font-size:25px;">Disponibilidade</div>
                    <div v-for="n in availability" :key="n" class="row q-pa-sm" >
                        <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12 q-pl-md">
                            {{n.day}}
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
            <div class="row justify-center q-mt-lg">
            <q-btn unelevated text-color="deep-purple-9" no-caps @click="functionTeste" label="Alter Dados" style="font-size:30px; opacity: 0.7;"/>
            </div>
    </div>
    <div class="col-7 q-ma-sm" style="border: 3px solid #4527a0;border-radius: 20px;">
      <div class="row q-ma-lg justify-center">
        <div class="col-3">
        <!-- <div class="col-12"> -->
          <q-btn
      rounded
      color="deep-purple-9"
      size="lg"
      icon="far fa-calendar-check"
      class="full-width"
    />
    </div>
    <!-- </div> -->
    </div>
    <div class="row">
      <div class="col-12">
    <q-list v-for="n in nomesDis" :key="n">
      <q-item class="justify-center">
        <div class="col-9 q-pa-sm" style="border-radius: 50px; border: 3px solid #4527a0;">
        <!-- <q-item-section side> -->
          <q-icon name='info' size='md' :color="n.dis ? 'green' : 'red'" />
        <!-- </q-item-section> -->
        <!-- <q-item-section > Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maiores adipisc {{n}} </q-item-section> -->
         {{n.name}}
        </div>
      </q-item>
    </q-list>
    </div>
    </div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo numquam accusantium magni, aut voluptas quidem consequatur deserunt quibusdam voluptatibus eius eveniet velit delectus maxime aperiam laboriosam iste, dolor ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias maxime minima, ratione fuga blanditiis nobis recusandae ab corporis sequi quae. Exercitationem quibusdam inventore molestias. Placeat ipsam illo quaerat voluptatem.
    </div>

</div>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      name: 'Joyce Emanuele Oliveira Silva',
      email: 'joyceexemplo@gmail.com',
      telephone: '(34) 9 12941592',
      password: '',
      confpassword: '',
      availability: [
        {
          day: 'seg',
          present: false,
          start: '08:00',
          end: '22:00'
        },
        {
          day: 'ter',
          present: false,
          start: '08:00',
          end: '22:00'
        },
        {
          day: 'qua',
          present: false,
          start: '08:00',
          end: '22:00'
        },
        {
          day: 'qui',
          present: false,
          start: '08:00',
          end: '22:00'
        },
        {
          day: 'sex',
          present: false,
          start: '08:00',
          end: '22:00'
        },
        {
          day: 'sab',
          present: false,
          start: '08:00',
          end: '22:00'
        }],
      isPwd: true,
      isPwdc: true,
      nomesDis: [{ dis: true, name: 'João da silva borges' }, { dis: false, name: 'mariazinha da floresta brilhante' }, { dis: true, name: 'soline mar silva frangelo' }, { dis: true, name: 'João da silva borges' }, { dis: true, name: 'mariazinha da floresta brilhante' }, { dis: true, name: 'soline mar silva frangelo' }, { dis: true, name: 'João da silva borges' }, { dis: true, name: 'mariazinha da floresta brilhante' }, { dis: false, name: 'soline mar silva frangelo' }]
    }
  },
  methods: {
    functionTeste () {
      this.$router.replace('/editarCadastro')
    }
  }
}
</script>

<style>
.availability-register1{
  background: rgb(255, 255, 255);
  opacity: 0.9;
  font-family: 'Arciform';
  font-size:20px;
}
</style>
