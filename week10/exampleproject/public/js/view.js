var app = new Vue({
  el: '#app',
  data: {
    posts: [],
  },
  mounted() {
    var gotData = function(){
      if(this.readyState == 4 && this.status == 200){
        app.posts = JSON.parse(this.responseText);
      } 
    }
    var req = new XMLHttpRequest();
    req.open("GET", "/posts");
    req.onreadystatechange = gotData;
    req.send();
  },
});
