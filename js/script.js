console.log("js script ok");

console.log("Vue js ok", Vue);

const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      contacts: data.contacts,
      user: data.user,
      //Conversazione contatto
      activeContact: null,

      // testo del nuovo messaggio
      newMessageText: "",
    };
  },
  methods: {
    //Conversazione contatto
    showConversation(contact) {
      console.log("conversazione di", contact.name);
      this.activeContact = contact;
    },
    // Aggiunge un nuovo messaggio e ottiene una risposta dopo 1 secondo
    addMessage() {
      if (!this.activeContact || !this.newMessageText) return;

      this.addNewMessage("sent", this.newMessageText);

      this.newMessageText = "";

      setTimeout(() => {
        this.addNewMessage("received", "Ok");
      }, 1000);
    },
    addNewMessage(status, text) {
      this.activeContact.messages.push({
        id: Date.now(),
        text,
        date: new Date().toISOString(),
        status,
      });
    },
  },
});

app.mount("#root");
