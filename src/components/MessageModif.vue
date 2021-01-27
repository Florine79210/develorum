<template>
    <div id="contentMessageModif">
        <h3 class="pt-2 pb-2">Modifier le message</h3>

        <form @submit="checkEditForm" method="put">
          <p v-if="errors.length">
              <b>Erreur(s) !</b>
              <ul>
                  <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
              </ul>
          </p>

          <div id="modifForm" class="card">
            <div class="card-body">

              <div class="mt-2 mb-2">
                <label for="inputMessageTitle" class="col-form-label"
                  >Intitulé du message:</label
                >
                <input
                  type="text"
                  id="inputMessageTitle"
                  name="inputMessageTitle"
                  v-model="inputMessageTitle"
                  class="form-control text-center border-dark"
                />
              </div>

              <div class="mt-2 mb-2">
                <label for="inputMessageTags" class="col-form-label">Tags:</label>
                <input
                  type="text"
                  id="inputMessageTags"
                  name="inputMessageTags"
                  v-model="inputMessageTags"
                  class="form-control text-center border-dark"
                />
              </div>

              <div class="mt-2 mb-2">
                <label for="inputMessage" class="col-form-label">Message:</label>
                <input
                  type="text"
                  id="inputMessage"
                  name="inputMessage"
                  v-model="inputMessage"
                  class="form-control text-center border-dark"
                  aria-describedby="messageHelpBlock"
                />
                <div id="messageHelpBlock" class="form-text">
                  Must be 8-150 characters long.
                </div>
              </div>

              <div class="mt-2 mb-2">
                <button class="btn btnMessageModif text-white" type="submit">Modifier</button>
              </div>
            </div>
          </div>
        </form>

    </div>
    
</template>

<script>
import axios from "axios";
export default {
  name: "MessageModif",

  data() {
    return {
      errors: [],
      id: this.$route.params.id,
      inputPseudo: null,
      inputCity: null,
      inputCountry: null,
      inputMessageTitle: null,
      inputMessageTags: null,
      inputMessage: null,
    };
  },

  methods: {
    checkEditForm: function (e) {
      e.preventDefault();
      this.updateMessage();
    },

    getMessage(component) {
      axios
        .get(
          "https://crudcrud.com/api/6f2a8b6b84074d46bd27bfe50a20953e/message/" +
            component.id
        )
        .then(function (response) {
          console.log("message récupéré");

          let message = response.data;
          console.log(message);

          component.inputMessageTitle = message.title;
          component.inputPseudo = message.pseudo;
          component.inputCountry = message.country;
          component.inputCity = message.city;
          component.inputMessage = message.content;
          component.inputMessageTags = message.tags;

          console.log("test input country" + component.inputCountry);
        })
        .catch(console.log("échec récupération message"));
    },

    updateMessage() {
      let message = {
        title: this.inputMessageTitle,
        pseudo: this.inputPseudo,
        ville: this.inputCity,
        pays: this.inputCountry,
        content: this.inputMessage,
        tags: this.inputMessageTags,
        date: new Date(),
      };

      axios
        .put(
          "https://crudcrud.com/api/6f2a8b6b84074d46bd27bfe50a20953e/message/" +
            this.id,
          message
        )

        .then(() => {
          alert("Message modifié");
          this.$router.push({ name: "App" });
        })
        .catch((error) => {
          this.error = true;
          console.log(error);
        });
    },
  },
  created() {
    this.getMessage(this);
  },
};
</script>

<style>
</style>