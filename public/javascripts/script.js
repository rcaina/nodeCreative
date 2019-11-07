var app = new Vue({
  el: '#app',
  data: {

    dog: {},
    dogform: '',
    dogURL: '',
    
  },
  computed: {
    
    avatarUrl: function(){
      return this.dog.message;
    },
  },
  methods: {
    async owlREST(){
      console.log("breed is: " + this.owlform);
      var url = "http://18.189.6.106:3000/dog/" + this.dogform;
      console.log(url);
      let response = await axios.get(url);
      console.log(response.data);
      this.dog = response.data;
            console.log(this.dog.message);
          avatarUrl = this.dog.message;
          console.log(avatarUrl);
    },
  },
});