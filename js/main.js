
if (document.querySelector('.ad')) {
  document.querySelector('.ad__close').onclick = () => {
    document.querySelector('.ad').style.opacity = "0";
  }
}

if (document.querySelector('.banner')) {
  document.addEventListener('click', (e) => {
    if (!e.target.matches('.banner__inner *') || e.target.matches('.banner__close')) {
      document.querySelector('.banner').remove();
    }
  });
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