<template>
  <div id="form">
    <button
      class="btn btnCollapsePost p-3 text-white"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseForm"
      aria-expanded="false"
      aria-controls="collapseForm"
    >
      Poster un message
    </button>

    <div class="collapse" id="collapseForm">
      <div class="container mt-3 w-75">
        <form @submit="checkForm" method="post">
          <p v-if="errors.length">
              <b>Erreur(s) !</b>
              <ul>
                  <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
              </ul>
          </p>

          <div id="messageForm" class="card">
            <div class="card-body">

              <div class="mt-2 mb-2">
                <label for="inputPseudo" class="col-form-label">Pseudo:</label>
                <input
                  type="text"
                  id="inputPseudo"
                  name="inputPseudo"
                  v-model="inputPseudo"
                  class="form-control text-center border-dark"
                  aria-describedby="pseudoHelpBlock"
                />
                <div id="pseudoHelpBlock" class="form-text">
                  Must be 8-20 characters long.
                </div>
              </div>

              <div class="mt-2 mb-2">
                <label for="inputCity" class="col-form-label">Ville:</label>
                <input
                  type="text"
                  id="inputCity"
                  name="inputCity"
                  v-model="inputCity"
                  class="form-control text-center border-dark"
                />
              </div>

              <div class="mt-2 mb-2">
                <label for="inputCountry" class="col-form-label">Pays:</label>
                <input
                  type="text"
                  id="inputCountry"
                  name="inputCountry"
                  v-model="inputCountry"
                  class="form-control text-center border-dark"
                />
              </div>

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
                <button class="btn btnPost text-white" type="submit">Poster</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  </div>



</template>

<script>
import axios from "axios";

export default {
  name: "Form",

  data() {
    return {
      errors: [],
      inputPseudo: null,
      inputCity: null,
      inputCountry: null,
      inputMessageTitle: null,
      inputMessageTags: null,
      inputMessage: null,
    };
  },

  methods: {
    checkForm: function (e) {
      e.preventDefault();

      if (
        this.inputPseudo &&
        this.inputCity &&
        this.inputCountry &&
        this.inputMessageTitle &&
        this.inputMessageTags &&
        this.inputMessage
      ) {
        this.sendMessage();
      }

      this.errors = [];

      if (!this.inputPseudo) {
        this.errors.push("Le champ 'pseudo' est vide !");
      }
      if (!this.inputCity) {
        this.errors.push("Le champ 'ville' est vide !");
      }
      if (!this.inputCountry) {
        this.errors.push("Le champ 'pays' est vide !");
      }
      if (!this.inputMessageTitle) {
        this.errors.push("Le champ 'intitulé du message' est vide !");
      }
      if (!this.inputMessageTags) {
        this.errors.push("Le champ 'tags' est vide !");
      }
      if (!this.inputMessage) {
        this.errors.push("Le champ 'message' est vide !");
      }
    },

    sendMessage() {
      let newMessage = {
        pseudo: this.inputPseudo,
        city: this.inputCity,
        country: this.inputCountry,
        title: this.inputMessageTitle,
        tags: this.inputMessageTags,
        content: this.inputMessage,
        date: new Date(),
      };
      axios
        .post(
          "https://crudcrud.com/api/6f2a8b6b84074d46bd27bfe50a20953e/message",
          newMessage
        )

        .then(() => {
          console.log("Message posté avec succes !");
          location.reload();
        })
        .catch(console.log("Erreur !!!"));
    },
  },
};
</script>

<style>
#form .btnCollapsePost {
  background-color: #01002a;
  font-size: 30px;
  font-weight: bold;
}
#collapseForm li {
  list-style: none;
}
#form .card {
  border: solid 2px #01002a;
}
#inputMessage {
  height: 150px;
}
#form .btnPost {
  background-color: #01002a;
  font-size: 20px;
  font-weight: bold;
}
</style>