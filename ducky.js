window.onload = function () {
  const body = document.body;

  console.log(body);

  // S1–4
  function createDuck() {
    const duck = document.createElement("div");
    duck.className = "duck";
    document.body.appendChild(duck);

    setInterval(function () {
      duck.classList.toggle("flap");
    }, 250);

    // USE RAND. 2 MOVE
    function moveDuck() {
      duck.style.top = Math.random() * window.innerWidth + "px";
      duck.style.left = Math.random() * window.innerHeight + "px";
    }
  
    // MOVEMENT RANDOMIZED
    setInterval(moveDuck, 1000);

    duck.addEventListener("click", function () {
      duck.classList.add("shot");
      setTimeout(function () {
        duck.remove();
        checkForWinner();
      }, 1000);
    });
  } // endCREATEDUCKfunc.

  for (let i = 0; i < 6; i++){
    createDuck();
  }

  function checkForWinner() {
    if (document.getElementsByClassName("duck").length === 0)
      alert("YOU WIN!");
  }



};