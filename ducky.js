window.onload = function() {
  const body = document.body;

  console.log(body);

  const duck = document.createElement('div');
  duck.className = 'duck';
  duck.style.top = Math.random() * window.innerWidth + 'px';
  duck.style.left = Math.random() * window.innerHeight + 'px';
  document.body.appendChild(duck);
  setTimeout(function() { duck.remove() }, 1)
  function createDuck() {
      const duck = document.createElement('div');
      duck.className = 'duck';
      duck.style.top = Math.random() * window.innerWidth + 'px';
      duck.style.left = Math.random() * window.innerHeight + 'px';
      document.body.appendChild(duck);
      let flapper = setInterval(function flapDuck() {
          duck.classList.toggle('flap');
      }, 250);
      function moveDuck() {
          let top = Math.random() * window.innerWidth;
          let left = Math.random() * window.innerHeight;
          duck.style.top = top + 'px';
          duck.style.left = left + 'px';
          function addShot() {
              duck.classList.add('shot');
              setTimeout(function() { duck.remove(); checkForWinner() }, 1000)
          }
          duck.addEventListener('click', addShot);
      }
      moveDuck()
      let mover = setInterval(moveDuck, 1000);
      return duck;
  };
  for (let i = 0; i < 5; i++) {
      createDuck()
  }
  function checkForWinner() {
  if (document.getElementsByClassName('duck').length == 0) {
      alert('You win!')
    }
  }

};
