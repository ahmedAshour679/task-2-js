var age=+window.prompt("Please enter your age");


function cardGen(x)
{
    var cartona="";

for (var i=1; i<=100;i++) {

    cartona+=`
    <div class="card" style="width: 18rem;">
  <img src="./imgs/1962927.jpg" class="" alt="...">
  <div class="card-body">
      <h5 class="card-title"> Age is ${x} </h5>
    <h5 class="card-title">Card Number ${i} </h5>
    <p class="card-text">Some quick example text to build on the card title </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`; 
}

document.getElementById("fox").innerHTML=cartona;
}



while ( isNaN(age) ) 
    {

    age=window.prompt(" Please enter your age again");


}


console.log(age);

if ( age>=18 ) {

    cardGen(age);

}
else {
    document.getElementById("fox").innerHTML="<h1> your are not eligible to log the website  </h1>";

}