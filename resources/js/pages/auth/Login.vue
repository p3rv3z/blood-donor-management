<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="success">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid">
                  <v-text-field
                    color="green"
                    prepend-icon="mdi-email"
                    label="E-mail"
                    v-model="form.email"
                    :rules="rules.email"
                    required
                  ></v-text-field>
                  <v-text-field
                    color="green"
                    prepend-icon="mdi-lock"
                    label="Password"
                    type="password"
                    v-model="form.password"
                    :rules="rules.password"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="success"
                  :disabled="!valid"
                  @click.prevent="handleLogin"
                  >Login</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>

        <v-snackbar v-model="snackbar.status">
          {{ snackbar.text }}

          <template v-slot:action="{ attrs }">
            <v-btn
              color="red"
              text
              v-bind="attrs"
              @click="snackbar.status = false"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import AuthService from "./../../services/AuthService"

export default {
  data: () => {
    return {
      drawer: null,
      valid: true,

      form: {
        email: "",
        password: "",
      },

      rules: {
        email: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        password: [
          v => !!v || 'Password is required',
        ],
      },

      snackbar: {
        status: false,
        text: '',
      },
    }
  },

  props: {
    source: String,
  },

  methods: {
    async handleLogin() {

      try {
        await AuthService.login(this.form);
        const authUser = await this.$store.dispatch("auth/getAuthUser");

        if (authUser) {
          this.$router.push({ name: "app.dashboard" })
        } else {
          this.snackbar.status = true
          this.snackbar.text = "Unable to fetch user after login, please check your API settings."
          console.log(
            "Unable to fetch user after login, check your API settings."
          );
        }

      } catch (error) {
        this.snackbar.status = true
        if (error.response.status === 422) {
          this.snackbar.text = error.response.data.errors.email[0]
        }
      }
    },
  },
}
</script>
