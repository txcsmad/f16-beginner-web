Vue.component('toc', {
  props: {
    'pages' : Array,
  },
  template: 
  `<div class="panel two columns" id="toc">
    <h5 v-for="page in pages" 
      class="toc-elem"
      v-bind:class="{\'current-page\': page.current}">
    <a v-bind:href="page.link">{{page.text}}</a>
    </h5>
  </div>`
})

Vue.component('text-section', {
  props: {
    'title' : String,
  },
  template:
  `<h3>{{ title }}</h3>
  <slot></slot>`
})

Vue.component('big-text-section', {
  props: {
    'title' : String,
  },
  template:
  `<h1>{{ title }}</h1>
  <slot></slot>`
})

var app = new Vue({
  el: '#app',
  data: {
    pages : [
      {"link": "../week1/wk1.html", "text": "Week 1", "current": true},
      {"link": "../week2/wk2.html", "text": "Week 2"},
      {"link": "../week3/wk3.html", "text": "Week 3"},
      {"link": "../week4/wk4.html", "text": "Week 4"},
      {"link": "../week5/wk5.html", "text": "Week 5"},
      {"link": "../week6/wk6.html", "text": "Week 6"},
      {"link": "../week7/wk7.html", "text": "Week 7"},
      {"link": "../week8/wk8.html", "text": "Week 8"},
      {"link": "../week9/wk9.html", "text": "Week 9"}
    ]
  }
})