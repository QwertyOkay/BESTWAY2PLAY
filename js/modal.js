(() => {
    const refs = {
      openModalBtn6: document.querySelector('[data-modal-open6]'),
      closeModalBtn6: document.querySelector('[data-modal-close6]'),

      modal6: document.querySelector('[data-modal6]'),
      };
  
    refs.openModalBtn6.addEventListener('click', toggleModal6);
    refs.closeModalBtn6.addEventListener('click', toggleModal6);
      
    function toggleModal6() {
    refs.modal6.classList.toggle('is-hidden6');
    }
    
    })();


  //   (() => {
  //   const refs = {
  //     // openMenuBtn: document.querySelector('[data-menu-open]'),
  //     closeMenuBtn: document.querySelector('[data-menu-close]'),
  //     menu: document.querySelector('[data-menu]'),
  //   };
  
  //   // refs.openMenuBtn.addEventListener('click', toggleMenu);
  //   refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
  //   function toggleMenu() {
  //     refs.menu.classList.toggle('is-hidden');
  //   }
  // })();
  