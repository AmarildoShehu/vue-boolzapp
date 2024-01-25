console.log("js script ok");

console.log("Vue js ok", Vue);

const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      user: data.user,
      contacts: data.contacts,
    };
  },
});

app.mount("#root");
