<template>
  <div id="message" class="container mt-4">
    <div class="row justify-content-center">
      <div class="card w-50 pe-0 ps-0">
        <div class="card-header">
          <h4 class="card-title">{{ title }}</h4>
          <h5 class="card-subtitle text-muted">
            Posté par {{ pseudo }} le
            {{ moment(message.date).format("DD.MM.YYYY à HH:mm") }}
          </h5>
        </div>

        <div class="card-body">
          <p class="card-text">{{ message }}</p>
        </div>

        <div class="card-footer">
          <input id="inputModif" type="submit" value="Modifier" />
          <input
            v-on:click="deleteMessage()"
            id="inputSupp"
            type="submit"
            value="Supprimer"
            method="delete"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";

export default {
  name: "Message",
  props: ["id", "pseudo", "city", "coutry", "title", "message", "tags", "date"],

  created: function () {
    this.moment = moment;
  },

  //     data: {
  //     result: ''
  //   },

  //   created: function(){
  //     this.getResult();
  //   },

  //   methods: {

  //     deleteData: function(result, id) {
  //       axios.delete('https://my-json-server.typicode.com/json/posts/' + id)
  //       .then(response => {
  //         this.result.splice(id, 1)
  //         console.log(this.result);
  //       });
  //     },

  //     getResult: function() {
  //       // this.results = 'Loading...';
  //       axios.get('https://my-json-server.typicode.com/json/db')
  //       .then(response => {
  //         // console.log(response.data);
  //         this.result = response.data.posts;
  //         console.log(this.result);
  //       });
  //     }
  //   }
  //   });

  data() {
    return {
      resut: "",
      error: false,
    };
  },

  created: function () {
    this.getResult();
  },

  methods: {
    deleteMessage(message) {
      axios
        .delete(
          "https://crudcrud.com/api/314b2cababf745bb80ae99ae80f0dd6a/message",
          message.id
        )

        .then((res) => {
          this.message = res.data.results;
          console.log("Message supprimé");
          location.reload();
        })
        .catch((error) => {
          this.error = true;
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>