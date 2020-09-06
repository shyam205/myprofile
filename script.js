const menuBtn = document.querySelector('.menu-btn');
       
        let menuOpen = false;
        menuBtn.addEventListener('click',() => {
          if(!menuOpen){
            menuBtn.classList.add('open');
            menuOpen = true;
          } else{
            menuBtn.classList.remove('open');
            menuOpen = false;
          }
        });

    let paratext = document.getElementById('paratext');

      window.addEventListener('scroll', function(){
        var value = window.scrollY;
        paratext.style.top = -(value * 0.25) + 'px';
      })