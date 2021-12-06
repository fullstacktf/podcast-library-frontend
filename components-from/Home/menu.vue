<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#fcfcfc"
      dark
      shrink-on-scroll
      prominent
      src="https://www.idevice.ro/wp-content/uploads/2018/05/treble_clef_musical_notes_multicolored_121263_2780x2780.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Podbuster</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab @click="llamarRegistration()">Realice un registro</v-tab>
          <v-tab>Podcasts</v-tab>
          <v-tab>Categories</v-tab>
          <v-tab>Authors</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  data() {
    
  },

   methods:{

       llamarRegistration(){

           this.$router.push('Registration')
       }
   }
}
</script>