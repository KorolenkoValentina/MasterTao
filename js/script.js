$(document).ready(function () {
  $('.first-slider-screen ').slick({
    // infinite:false,
    dots: true,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'> <img src='img/arrow-left-banner.svg'> </button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='img/arrow-right-banner.svg'></button>",
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
      }
    }]
  });
})

$(document).ready(function() {
  $('.header__burger').click(function(event) {
  $('.header__burger,.header__menu').toggleClass('active');
 $('body').toggleClass('lock');
   });
 });


document.getElementById('fileInput').onchange = function () {
  
  //short name
  document.getElementById('file-name').innerHTML = this.files[0].name;
  
  //long name
  // document.getElementById('file-name').innerHTML = this.value;
};

if (document.documentElement.clientWidth < 768) {
  let element = document.querySelector('.benefits-box');
  element.classList.add('benefits-box-slider');

  if (window.matchMedia("(max-width: 767px)").matches) {

    $(document).ready(function () {
      $('.benefits-box-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
      });
    });
  }
}


$(document).ready(function () {
  $('.delivery-slider').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: "<button type='button' class='slick-prev pull-left'> <img src='img/arrow-left.svg'> </button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='img/arrow-right.svg'></button>",
    responsive: [{
      breakpoint: 1400,
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
      {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
})


$(document).ready(function () {
  $('.services-slider').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: "<button type='button' class='slick-prev pull-left'> <img src='img/arrow-left.svg'> </button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='img/arrow-right.svg'></button>",
    responsive: [
      {
      breakpoint: 1400,
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
      {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
})

const card = document.querySelectorAll('.accordion-item')
/*ф-я которая просто удаляет класc active*/
function removeSiblings() {
  const cardActive = document.querySelectorAll('.accordion-item.active')
  cardActive.forEach(siblings => {
    siblings.classList.remove('active');
  })
}

card.forEach(item => {
  item.addEventListener('click', () => {

    removeSiblings(); //ф-я удаления класса active

    item.classList.add('active');
  })
})
