console.log("js script ok");

console.log("Vue js ok", Vue);

const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      contacts: data.contacts,
      user: data.user,
      selectedContact: null,
      currentDateTime: new Date(),
    };
  },
  methods: {
    selectContact(contact) {
      this.selectedContact = contact;
    },
    formatDateTime(timestamp) {
      const date = new Date(timestamp);
      const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZoneName: "short",
      };
      return date.toLocaleString(undefined, options);
    },
  },
});

app.mount("#root");
