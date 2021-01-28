<template>
  <Header />
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-md-3">
        <Form />
      </div>
      <div class="col-md-6">
        <MessagesList :messages="messages" />
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
  <Footer />
</template>

<script>
import axios from "axios";
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
import MessagesList from "./components/MessagesList.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Form,
    MessagesList,
    Footer,
  },

  data() {
    return {
      messages: null,
      error: false,
    };
  },

  created: function () {
    axios
      .get("https://crudcrud.com/api/218e3848ab7d44dab9ee2cc61fcd83d1/message")

      .then((res) => {
        this.messages = res.data;
        console.log(this.messages);
      })
      .catch((error) => {
        this.error = true;
        console.log(error);
      });
  },
};
</script>

<style>
#app {
  font-family: "Vollkorn", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 100px;
}
</style>
