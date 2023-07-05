let taxRate = 1.23;
const vm = Vue.createApp({
  data() {
    return {
      price: 4,
      items: 0,
    };
  },
  methods: {},
  computed: {
    tqxRate() {
      console.log("taxrate");
      return taxRate;
    },
    includingVat() {
      console.log("including VAT");
      return (this.price * taxRate).toFixed(2);
    },
    total() {
      return (this.includingVat * this.items).toFixed(2);
    },
  },
}).mount("#app");
