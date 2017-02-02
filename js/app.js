(function(){
  "use strict";
  
  console.log('Hello!');

  //Variables
  var menuItem = document.querySelectorAll(".menuItem");
  var pageTitle = document.querySelector("#content h3");
  var topContent = document.querySelector("#content p");
  var team1 = document.querySelector("#team1");
  var teamImg1 = document.querySelector("#teamImg1");
  var teamBio1 = document.querySelector("#teamBio1");
  var team2 = document.querySelector("#team2");
  var teamImg2 = document.querySelector("#teamImg2");
  var teamBio2 = document.querySelector("#teamBio2");  
  var quote1 = document.querySelector("#quote1");
  var quote1Author = document.querySelector("#quote1Author");
  var quote2 = document.querySelector("#quote2");
  var quote2Author = document.querySelector("#quote2Author");
  var quote3 = document.querySelector("#quote3");
  var quote3Author = document.querySelector("#quote3Author");

  //Functions
  function changePage() {

    document.body.style.backgroundImage = "url('images/"+KBContent[this.id].bg+".jpg')";
    console.log("url('images/"+KBContent[this.id].bg+".jpg')");

    pageTitle.innerHTML = KBContent[this.id].title;
    topContent.innerHTML = KBContent[this.id].text;

    team1.innerHTML = KBContent[this.id].team1;
    teamImg1.src = "images/"+KBContent[this.id].teamImg1+".jpg";
    teamBio1.innerHTML = KBContent[this.id].teamBio1;
    team2.innerHTML = KBContent[this.id].team2;
    teamImg2.src = "images/"+KBContent[this.id].teamImg2+".jpg";
    teamBio2.innerHTML = KBContent[this.id].teamBio2;

    quote1.innerHTML = KBContent[this.id].quote1;
    quote1Author.innerHTML = KBContent[this.id].quote1Author;
    quote2.innerHTML = KBContent[this.id].quote2;
    quote2Author.innerHTML = KBContent[this.id].quote2Author;
    quote3.innerHTML = KBContent[this.id].quote3;
    quote3Author.innerHTML = KBContent[this.id].quote3Author;    
 
  }

  //Listeners
  [].forEach.call(menuItem, function(i) {
    i.addEventListener("click", changePage, true);
  });

})();
