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
      if (!this.activeContact || !this.newMessageText) {
        return;
      }

      // Aggiungi il messaggio nella conversazione
      const newMessage = {
        id: Date.now(),
        text: this.newMessageText,
        date: new Date().toISOString(),
        status: "sent",
      };

      this.activeContact.messages.push(newMessage);

      // Pulisci il campo di input
      this.newMessageText = "";

      // risposta ok dopo 1 secondo
      setTimeout(() => {
        const replyMessage = {
          id: Date.now() + 1,
          text: "Ok",
          date: new Date().toISOString(),
          status: "received",
        };
        this.activeContact.messages.push(replyMessage);
      }, 1000);
    },
  },
});

app.mount("#root");
