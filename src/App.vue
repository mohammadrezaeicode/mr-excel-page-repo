<script setup>
import {
  // RouterLink,
  RouterView
} from 'vue-router'
import NavItems from './components/nav/NavItems.vue'
import SubNavItem from './components/nav/SubNavItem.vue'


// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <v-app id="inspire">
    <!-- <v-system-bar>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar> -->

    <!-- <v-navigation-drawer color="grey-lighten-3" rail>
      <v-avatar class="d-block text-center mx-auto mt-4" color="grey-darken-1" size="36"></v-avatar>

      <v-divider class="mx-3 my-5"></v-divider>

      <v-avatar
        v-for="n in 6"
        :key="n"
        class="d-block text-center mx-auto mb-9"
        color="grey-lighten-1"
        size="28"
      ></v-avatar>
    </v-navigation-drawer> -->

    <v-navigation-drawer width="244" class="mt-0 pt-12">
      <!-- <v-sheet color="grey-lighten-5" height="128" width="100%"></v-sheet> -->
      <v-list
        ><v-list-item>
          <div class="ma-3">
            <NavItems></NavItems>
          </div>
        </v-list-item>
      </v-list>
      <!-- <v-list>
        <v-list-item v-for="n in 5" :key="n"  link>
        <div class="ml-2">test</div>
        </v-list-item>
      </v-list> -->
    </v-navigation-drawer>

    <!-- <v-app-bar class="px-3" color="grey-lighten-4"  flat height="72">
      <v-spacer></v-spacer>

      <v-responsive max-width="156">
        <v-text-field
          bg-color="grey-lighten-2"
          class="rounded-pill overflow-hidden"
          density="compact"
          hide-details
          variant="solo"
        ></v-text-field>
      </v-responsive>
    </v-app-bar> -->
    

    <v-main class="pt-0" style="margin-top: var(--v-layout-top)"><RouterView /></v-main>

    <v-navigation-drawer location="right">
      <v-list
        ><v-list-item>
          <div class="ma-3">
            <SubNavItem></SubNavItem>
          </div>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- <v-footer app height="72">
      <v-text-field
        bg-color="grey-lighten-1"
        class="rounded-pill overflow-hidden"
        density="compact"
        hide-details
        variant="solo"
      ></v-text-field>
    </v-footer> -->
  </v-app>
</template>

<style scoped>
/* ul {
  margin-left: 15px;
} */

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
