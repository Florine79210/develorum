<template>
  <div class="container" id="messagesList">
    <li class="list-unstyled" v-for="message in messages" :key="message.id">
      <Message
        :id="message.id"
        :pseudo="message.pseudo"
        :city="message.city"
        :country="message.country"
        :title="message.title"
        :tags="message.tags"
        :message="message.message"
        :date="message.date"
      />
    </li>
  </div>
</template>

<script>
import Message from "./Message.vue";

export default {
  name: "MessagesList",
  props: ["messages"],
  components: {
    Message,
  },
};
</script>

<style>

</style>