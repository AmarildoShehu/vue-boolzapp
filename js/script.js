console.log("js script ok");

console.log("Vue js ok", Vue);

const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      contacts: data.contacts,
      user: data.user,
      activeContact: null,
    };
  },
  methods: {
    //Conversazione contatto
    showConversation(contact) {
      console.log("conversazione di", contact.name);
      this.activeContact = contact;
    },
  },
});

app.mount("#root");
