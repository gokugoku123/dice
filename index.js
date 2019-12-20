function display() {

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var randomNumber1Image = "dice" + randomNumber1 + ".svg";

  var randomNumber1ImageSource = "images/" + randomNumber1Image;



  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomNumberImage2 = "dice" + randomNumber2 + ".svg";

  var randomNumber2ImageSource = "images/" + randomNumberImage2;



  var image1 = document.querySelectorAll("img")[0]

  image1.setAttribute("src", randomNumber1ImageSource);
  var image2 = document.querySelectorAll("img")[1];

  image2.setAttribute("src", randomNumber2ImageSource);


  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins the Roll...!";
    document.querySelector("h1").style.color = "#f3fe7e";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins the Roll...!";
    document.querySelector("h1").style.color = "#9cf196";
  } else {
    document.querySelector("h1").innerHTML = "The Roll has ended in a Draw...!";
    document.querySelector("h1").style.color = "#f9f9f9";
  }

}