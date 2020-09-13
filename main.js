let a11 = document.getElementById('a11');
let a12 = document.getElementById('a12');
let a13 = document.getElementById('a13');
let a21 = document.getElementById('a21');
let a22 = document.getElementById('a22');
let a23 = document.getElementById('a23');
let a31 = document.getElementById('a31');
let a32 = document.getElementById('a32');
let a33 = document.getElementById('a33');

sessionStorage.setItem('num', 0);

let obj = {
  a11: 1,
  a12: 2,
  a13: 3,
  a21: 4,
  a22: 5,
  a23: 6,
  a31: 7,
  a32: 8,
  a33: 9
}

sessionStorage.setItem('blockIds', JSON.stringify(obj));

function click() {
  let a = sessionStorage.getItem('num');

  a++;

  sessionStorage.setItem('num', a);

  let player = "";

  if (a % 2 == 0) {
    x_o = 'O';
    player = 'X';
  }
  else {
    x_o = 'X';
    player = 'O';
  }

  let turn = document.getElementById('turn');

  turn.innerText = `player ${player} - Your Turn`;

  this.innerText = x_o;

  let blockIds = JSON.parse(sessionStorage.getItem('blockIds'));

  let id = this.id;

  blockIds[id] = x_o;

  //Logic--> ¥ for winnig X player
  if ((blockIds.a11 == 'X' && blockIds.a12 == 'X') && blockIds.a13 == 'X') {
    a11.style.backgroundColor = "white";
    a12.style.backgroundColor = "white";
    a13.style.backgroundColor = "white";

    setTimeout(() => {
      let TorF = confirm("Player X wons this game \nPress 'ok' to play again");
      if (TorF) {
        location.reload();
      }
    }, 300);
  }

  else if ((blockIds.a21 == 'X' && blockIds.a22 == 'X') && blockIds.a23 == 'X') {
    a21.style.backgroundColor = "white";
    a22.style.backgroundColor = "white";
    a23.style.backgroundColor = "white";

    setTimeout(() => {
      let TorF = confirm("Player X wons this game \nPress 'ok' to play again");
      if (TorF) {
        location.reload();
      }
    }, 300);
  }

  else if ((blockIds.a31 == 'X' && blockIds.a32 == 'X') && blockIds.a33 == 'X') {
    a31.style.backgroundColor = "white";
    a32.style.backgroundColor = "white";
    a33.style.backgroundColor = "white";

    setTimeout(() => {
      let TorF = confirm("Player X wons this game \nPress 'ok' to play again");
      if (TorF) {
        location.reload();
      }
    }, 300);
  }

  else if ((blockIds.a11 == 'X' && blockIds.a21 == 'X') && blockIds.a31 == 'X') {
    a11.style.backgroundColor = "white";
    a21.style.backgroundColor = "white";
    a31.style.backgroundColor = "white";

    setTimeout(() => {
      let TorF = confirm("Player X wons this game \nPress 'ok' to play again");
      if (TorF) {
        location.reload();
      }
    }, 300);
  }

  else if ((blockIds.a12 == 'X' && blockIds.a22 == 'X') && blockIds.a32 == 'X') {
    a12.style.backgroundColor = "white";
    a22.style.backgroundColor = "white";
    a32.style.backgroundColor = "white";

    setTimeout(() => {
      let TorF = confirm("Player X wons this game \nPress 'ok' to play again");
      if (TorF) {
        location.reload();
      }
    }, 300);
  }

  else if ((blockIds.a13 == 'X' && blockIds.a23 == 'X') && blockIds.a33 == 'X') {
    a13.style.backgroundColor = "white";
    a23.style.backgroundColor = "white";
    a33.style.backgroundColor = "white";

    setTimeout(() => {
      let TorF = confirm("Player X wons this game \nPress 'ok' to play again");
      if (TorF) {
        location.reload();
      }
    }, 300);
  }

  else if ((blockIds.a11 == 'X' && blockIds.a22 == 'X') && blockIds.a33 == 'X') {
    a11.style.backgroundColor = "white";
    a22.style.backgroundColor = "white";
    a33.style.backgroundColor = "white";

    setTimeout(() => {
      let TorF = confirm("Player X wons this game \nPress 'ok' to play again");
      if (TorF) {
        location.reload();
      }
    }, 300);
  }

  else if ((blockIds.a13 == 'X' && blockIds.a22 == 'X') && blockIds.a31 == 'X') {
    a13.style.backgroundColor = "white";
    a22.style.backgroundColor = "white";
    a31.style.backgroundColor = "white";

    setTimeout(() => {
      let TorF = confirm("Player X wons this game \nPress 'ok' to play again");
      if (TorF) {
        location.reload();
      }
    }, 300);
  }


  //Logic--> ¥ for winnig O player
  else if ((blockIds.a11 == 'O' && blockIds.a12 == 'O') && blockIds.a13 == 'O') {
    a11.style.backgroundColor = "white";
    a12.style.backgroundColor = "white";
    a13.style.backgroundColor = "white";

    setTimeout(() => {
      let TorF = confirm("Player O wons this game \nPress 'ok' to play again");
      if (TorF) {
        location.reload();
      }
    }, 300);
  }

  else if ((blockIds.a21 == 'O' && blockIds.a22 == 'O') && blockIds.a23 == 'O') {
    a21.style.backgroundColor = "white";
    a22.style.backgroundColor = "white";
    a23.style.backgroundColor = "white";

    setTimeout(() => {
      let TorF = confirm("Player O wons this game \nPress 'ok' to play again");
      if (TorF) {
        location.reload();
      }
    }, 300);
  }

  else if ((blockIds.a31 == 'O' && blockIds.a32 == 'O') && blockIds.a33 == 'O') {
    a31.style.backgroundColor = "white";
    a32.style.backgroundColor = "white";
    a33.style.backgroundColor = "white";

    setTimeout(() => {
      let TorF = confirm("Player O wons this game \nPress 'ok' to play again");
      if (TorF) {
        location.reload();
      }
    }, 300);
  }

  else if ((blockIds.a11 == 'O' && blockIds.a21 == 'O') && blockIds.a31 == 'O') {
    a11.style.backgroundColor = "white";
    a21.style.backgroundColor = "white";
    a31.style.backgroundColor = "white";

    setTimeout(() => {
      let TorF = confirm("Player O wons this game \nPress 'ok' to play again");
      if (TorF) {
        location.reload();
      }
    }, 300);
  }

  else if ((blockIds.a12 == 'O' && blockIds.a22 == 'O') && blockIds.a32 == 'O') {
    a12.style.backgroundColor = "white";
    a22.style.backgroundColor = "white";
    a32.style.backgroundColor = "white";

    setTimeout(() => {
      let TorF = confirm("Player O wons this game \nPress 'ok' to play again");
      if (TorF) {
        location.reload();
      }
    }, 300);
  }

  else if ((blockIds.a13 == 'O' && blockIds.a23 == 'O') && blockIds.a33 == 'O') {

    a13.style.backgroundColor = "white";
    a23.style.backgroundColor = "white";
    a33.style.backgroundColor = "white";

    setTimeout(() => {
      let TorF = confirm("Player O wons this game \nPress 'ok' to play again");
      if (TorF) {
        location.reload();
      }
    }, 300);
  }

  else if ((blockIds.a11 == 'O' && blockIds.a22 == 'O') && blockIds.a33 == 'O') {
    a11.style.backgroundColor = "white";
    a22.style.backgroundColor = "white";
    a33.style.backgroundColor = "white";

    setTimeout(() => {
      let TorF = confirm("Player O wons this game \nPress 'ok' to play again");
      if (TorF) {
        location.reload();
      }
    }, 300);
  }

  else if ((blockIds.a13 == 'O' && blockIds.a22 == 'O') && blockIds.a31 == 'O') {
    a13.style.backgroundColor = "white";
    a22.style.backgroundColor = "white";
    a31.style.backgroundColor = "white";

    setTimeout(() => {
      let TorF = confirm("Player O wons this game \nPress 'ok' to play again");
      if (TorF) {
        location.reload();
      }
    }, 300);
  }

  sessionStorage.setItem('blockIds', JSON.stringify(blockIds));

  this.removeEventListener('click', click);
}

a11.addEventListener('click', click);

a12.addEventListener('click', click);

a13.addEventListener('click', click);

a21.addEventListener('click', click);

a22.addEventListener('click', click);

a23.addEventListener('click', click);

a31.addEventListener('click', click);

a32.addEventListener('click', click);

a33.addEventListener('click', click);