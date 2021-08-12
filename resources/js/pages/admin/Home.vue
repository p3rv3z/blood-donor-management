<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!-- <v-system-bar></v-system-bar> -->
      <v-list dense v-if="isAuthenticated">
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{ authUser.name }}
            </v-list-item-title>
            <v-list-item-subtitle> {{ authUser.email }} </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="isAuthenticated" @click.prevent="handleLogout">
            <v-list-item-icon>
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>

    <v-snackbar v-model="snackbar.status">
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="green" text v-bind="attrs" @click="snackbar.status = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import AuthService from "./../../services/AuthService";
import { mapGetters } from "vuex";

export default {

  data: () => ({
    drawer: null,
    selectedItem: 0,

    items: [
      { text: "My Files", icon: "mdi-folder" },
      { text: "Shared with me", icon: "mdi-account-multiple" },
      { text: "Starred", icon: "mdi-star" },
      { text: "Recent", icon: "mdi-history" },
      { text: "Offline", icon: "mdi-check-circle" },
      { text: "Uploads", icon: "mdi-upload" },
      { text: "Backup", icon: "mdi-cloud-upload" },
    ],

    snackbar: {
      status: false,
      text: 'Logged In Successfully',
    },
  }),

  computed: {
    ...mapGetters({
      authUser: 'auth/authUser',
      isAuthenticated: 'auth/isAuthenticated'
    })
  },

  methods: {
    async handleLogout() {
      await AuthService.logout();
      await this.$store.dispatch("auth/logout");
      this.$router.push({ name: "login" });
    },
  },


};
</script>
