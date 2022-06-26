
(function () {

  // Burger handler

  const burgerItem = document.querySelector('.menu__icon');  
  const menu = document.querySelector('.menu__body');
  const menuLinks = document.querySelectorAll('.menu__link');

  burgerItem.addEventListener('click', () => {
    document.body.classList.toggle('_lock');
    menu.classList.toggle('_active');
    burgerItem.classList.toggle('_active');
  });


  // if(window.innerWidth <= 992) {
  //   for (let i = 0; i < menuLinks.length; i += 1) {
  //     menuLinks[i].addEventListener('click', () => {
  //       menu.classList.remove('_active');
  //       burgerItem.classList.remove('_active');
  //       document.body.classList.remove('_lock');
  //     }); 
  //   }
  // }


  // header logo

  const header = document.querySelector('.header');
  
	window.onscroll = () => {
		if (window.pageYOffset > 550) {
			header.classList.add('header__active');
		} else {
			header.classList.remove('header__active');
		}
	};


  const linksmenu = document.querySelectorAll('.menu__link[data-goto]');

  if (linksmenu.length > 0) {
    linksmenu.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
      const menuLink = e.target;
      if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
      

        if(burgerItem.classList.contains('_active')) {
          document.body.classList.remove('_lock');
          menu.classList.remove('_active');
          burgerItem.classList.remove('_active');         

        }

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth"
        });
        e.preventDefault();
      }
    }
  }
  
// Дописать отключение menu послу scroll
  
}());


