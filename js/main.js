$(function(){


  //trigger&header
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('header').toggleClass('active')
  })
  // trigger remove
  $('.sub-menu li, .login').click(function(){
    $('header, .trigger').removeClass('active')
  })

  const icon = document.querySelector('.search-btn');
  const search = document.querySelector('.search');
  icon.onclick = function(){
    search.classList.toggle('active')
  }

  
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header').addClass('pcactive')
      $('.go-top').addClass('active')
    }else{
      $('header').removeClass('pcactive')
      $('.go-top').removeClass('active')
    }
  })

  window.addEventListener('scroll', function(){
    let value = window.innerWidth
    console.log("window.innerWidth", value)

    if(value<1200){
      $('header').removeClass('pcactive')
      $('.trigger').click(function(){
        $('header').addClass('pcactive')
      })
    }
  })



})