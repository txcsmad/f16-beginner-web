Vue.component('toc', {
  props: {
    'current' : String
  },
  data: function () {
    pages = 
      {"Web 101": {"link": "../web101/web101.html"},
	"Intro": {"link" : "../week1/wk1.html"},
        "OOP": {"link": "../week2/wk2.html"},
        "Functions": {"link": "../week3/wk3.html"},
        "CSS": {"link": "../week4/wk4.html"},
        "Layout": {"link": "../week5/wk5.html"},
        "HTTP": {"link": "../week6/wk6.html"},
        "Servers": {"link": "../week7/wk7.html"},
        "Vue": {"link": "../week8/wk8.html"},
        "Templates": {"link": "../week9/wk9.html"}};
    if(pages[this.current]){
      pages[this.current].current = true;
    }
    return {
      'pages' : pages,
      'page_titles' : 
        ["Web 101", "Intro", "OOP", "Functions", "CSS", "Layout", 
          "HTTP", "Servers", "Vue", "Templates"]
    }
  },
  template:
  `<div class="panel two columns" style="border-right: 1px solid #bdc3c7; padding-right: 20px;" id="toc">
    <img src="../images/mad_m.png" width="50%" style="margin-bottom: 15%; margin-top: -9px;">
    <h5 v-for="page in page_titles" 
        class="toc-elem"
        v-bind:class="{\'current-page\': pages[page].current}">
      <a v-bind:href="pages[page].link">{{page}}</a>
    </h5>
  </div>`
})

// BAD: don't have link tags and non UI tags in your components
Vue.component('head-info', {
  template:
  `<meta charset="utf-8">
  <title>Basic Object Oriented Programming</title>
  <link rel="stylesheet" href="../css/normalize.css">
    <link rel="stylesheet" href="../css/skeleton.css">
  <link href="https://fonts.googleapis.com/css?family=Fira+Mono|Roboto" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
  <link rel="stylesheet" href="../custom.css">`
})

Vue.component('body-container', {
  template:
  `<div class="nine columns">
    <slot></slot>
  </div>`
})
