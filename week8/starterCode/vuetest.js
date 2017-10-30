var header = new Vue({
	el: '#header',
	data: {
		message: 'What a Vue!'
	}
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    image: 'js-yellow.png',
    text: 'This is an example of how to use Vue!',
    blue: true,
    green: true,
    list: ["hello", "my", "name", "is", "vue."],
    sentence: "hi how are you?"
  }, 
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
    toUpper: function() {
    	this.message = this.message.toUpperCase();
    }
  }
})