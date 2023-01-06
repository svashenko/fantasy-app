
if (document.querySelector('.ad')) {
  document.querySelector('.ad__close').onclick = () => {
    document.querySelector('.ad').style.opacity = "0";
    document.querySelector('.my-team').style.paddingBottom = "0";
  }
}

if (document.querySelector('.banner')) {
  document.addEventListener('click', (e) => {
    if (!e.target.matches('.banner__inner *') || e.target.matches('.banner__close')) {
      document.querySelector('.banner').remove();
    }
  });
}

if (document.querySelector('.probabilities__btn')) {
  document.querySelector('.probabilities__btn').onclick = () => {
    if (document.querySelector('.probabilities__btn').classList.contains('show')) {
      document.querySelector('.probabilities-tab__inner').style.height = "100%";
      document.querySelector('.probabilities__btn span').textContent = "hide prohabilities";
      document.querySelector('.probabilities__btn img').style.transform = "rotate(180deg)";
      document.querySelector('.probabilities__btn').classList.remove('show');
      document.querySelector('.probabilities__btn').classList.add('hide');
    } else if (document.querySelector('.probabilities__btn').classList.contains('hide')) {
      document.querySelector('.probabilities-tab__inner').style.height = "37vw";
      document.querySelector('.probabilities__btn span').textContent = "show prohabilities";
      document.querySelector('.probabilities__btn img').style.transform = "rotate(180deg)";
      document.querySelector('.probabilities__btn').classList.remove('hide');
      document.querySelector('.probabilities__btn').classList.add('show');
    }
  }
}


if (document.querySelector('.game__btn')) {
  document.querySelector('.game__btn').onclick = () => {
    if (document.querySelector('.game__btn').classList.contains('show')) {
      document.querySelector('.game-tab__inner').style.height = "100%";
      document.querySelector('.game__btn span').textContent = "hide game by game";
      document.querySelector('.game__btn img').style.transform = "rotate(180deg)";
      document.querySelector('.game__btn').classList.remove('show');
      document.querySelector('.game__btn').classList.add('hide');
    } else if (document.querySelector('.game__btn').classList.contains('hide')) {
      document.querySelector('.game-tab__inner').style.height = "15vw";
      document.querySelector('.game__btn span').textContent = "show game by game";
      document.querySelector('.game__btn img').style.transform = "rotate(180deg)";
      document.querySelector('.game__btn').classList.remove('hide');
      document.querySelector('.game__btn').classList.add('show');
    }
  }
}

if (btns = document.querySelectorAll('.trade__btn')) {
  btns.forEach(item => {
    item.addEventListener('click', function () {
      btns.forEach(item => {
        item.classList.remove('active')
      })
      item.classList.add('active')
    })
  })
}