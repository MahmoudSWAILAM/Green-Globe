
/*================ Btn bages method ================*/

$(document).ready(function(){
    $(".contact_btn, #About_Btn, #Allproducts_Btn, #anotherprod_btn").on("click", function(){
        var page = "";
        switch($(this).attr('id')){
            case 'About_Btn':
                page = "About Us.html";
                break;
            case 'Allproducts_Btn':
                page = "Products.html";
                break;
            case 'anotherprod_btn':
                page = "Other Products.html";
                break;
            default:
                page = "Contact Us.html";
        }
        window.location.href = page;
    });
});



/*============== scroll Up ==============*/


let span = document.querySelector(".up");

window.onscroll = function () {
    if(this.scrollY >= 400){
        span.classList.add("show")
    } 
    else{
        span.classList.remove("show")
    }
}

span.onclick =function (){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}




/*============== scroll reveal ==============*/

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal , .reveal_right , .reveal_left , .reveal_top , .Nav_container');
        /*

    for(var i=0; i<reveals.length; i++){

        var windowheigh = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheigh - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }        */

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint;

        // Adjust revealPoint for different screen sizes
        if (window.innerWidth <= 250) {
            revealPoint = 80; // For phone screens
        } else if (window.innerWidth >= 450 && window.innerWidth <= 1024) {
            revealPoint = 110; // For tablet screens
        } else {
            revealPoint = 150; // For larger screens
        }

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }

}




/*============== prducts page number ==============


$(document).ready(function(){
    $("#number_cont").on("click",function(e){
        $(this).css({"background":"#255946" , "color":"#FFF"});    
    return false;
    });
    })
    */


/*============== Dropdown menu products filter ==============*/

//get all dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');

//loop throw all dropdown elements
dropdowns.forEach(dropdown => {
    //get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.options');
    const selected = dropdown.querySelector('.selected');

    //add a click event to the select element
    select.addEventListener('click' , () => {

        //add the (class name) styles to the select element
        select.classList.toggle('select_clicked');
        caret.classList.toggle('caret_rotate');
        menu.classList.toggle('menu_open');
    
    });

    //loop throw option elements

    options.forEach(options => {

        options.addEventListener('click' , () => {
            //Change selected inner textto clicked class name inner text
            selected.innerText = options.innerText;

            select.classList.remove('select_clicked');
            caret.classList.remove('caret_rotate');
            menu.classList.remove('menu_open');

            options.forEach(options => {
                options.classList.remove('Active');
            });
            options.classList.add('Active');

        });
    });
});




/*============= Page Number methoud ============*/


document.addEventListener('DOMContentLoaded', function() {
    const numberContainers = document.querySelectorAll('.Number_container');

    // Loop through all number containers
    numberContainers.forEach(function(container) {
        // Check if the container contains the number one
        if (container.querySelector('div').textContent.trim() === '1') {
            // Add the active class to the container containing number one
            container.classList.add('Number_containeractive');
        }

        // Add click event listener to each container
        container.addEventListener('click', function() {
            // Remove the active class from all containers
            numberContainers.forEach(function(item) {
                item.classList.remove('Number_containeractive');
            });

            // Add the active class to the clicked container
            container.classList.add('Number_containeractive');
        });
    });
});







document.addEventListener('DOMContentLoaded', function() {
    const visionBtn = document.querySelector('.OurVision_Btn');
    const missionBtn = document.querySelector('.OurMission_Btn');
    const visionParagraph = document.querySelector('.OurVision_p');
    const missionParagraph = document.querySelector('.OurMission_p');
    const readmore = document.querySelectorAll('.readmore');

    // Function to remove the active class and set readmore opacity to 1
    function resetState() {
        visionBtn.classList.remove('active');
        missionBtn.classList.remove('active');
        visionParagraph.classList.remove('active');
        missionParagraph.classList.remove('active');
        readmore.forEach(btn => {
            btn.style.opacity = '1';
        });
    }

    // Add event listener for clicking on OurVision_Btn
    visionBtn.addEventListener('click', function() {
        resetState();
        visionBtn.classList.add('active');
        visionParagraph.classList.add('active');
        readmore.forEach(btn => {
            btn.style.opacity = '0';
        });
    });

    // Add event listener for clicking on OurMission_Btn
    missionBtn.addEventListener('click', function() {
        resetState();
        missionBtn.classList.add('active');
        missionParagraph.classList.add('active');
        readmore.forEach(btn => {
            btn.style.opacity = '0';
        });
    });

    // Add event listener to document to reset state when clicking anywhere else
    document.addEventListener('click', function(event) {
        const target = event.target;
        if (!target.closest('.OurVision_Btn') && !target.closest('.OurMission_Btn')) {
            resetState();
        }
    });
});










document.addEventListener('DOMContentLoaded', function() {
    const uploadButton = document.getElementById('uploadButton');

    // Function to handle file upload
    function handleFileUpload(event) {
        // Get the selected file
        const file = event.target.files[0];

        // Create a FileReader object
        const reader = new FileReader();

        // Add load event listener to the FileReader object
        reader.addEventListener('load', function() {
            // Create an image element
            const image = document.createElement('img');

            // Set the source of the image to the data URL generated by FileReader
            image.src = reader.result;

            // Clear the Group1 div and append the image
            const group1 = document.querySelector('.Group1');
            group1.innerHTML = '';
            group1.appendChild(image);

            // Add click event listener to the image to allow replacing it with another photo
            image.addEventListener('click', function() {
                // Create an input element for file upload
                const input = document.createElement('input');
                input.type = 'file';

                // Add change event listener to the file input
                input.addEventListener('change', handleFileUpload);

                // Trigger the click event of the file input to open the file dialog
                input.click();
            });
        });

        // Read the selected file as Data URL
        reader.readAsDataURL(file);
    }

    // Add click event listener to the plus icon
    uploadButton.addEventListener('click', function() {
        // Create an input element for file upload
        const input = document.createElement('input');
        input.type = 'file';

        // Add change event listener to the file input
        input.addEventListener('change', handleFileUpload);

        // Trigger the click event of the file input to open the file dialog
        input.click();
    });
});

/*============== media nav ==============*/


    function toggleMobileMenu(menu){
        if(menu.classList.toggle('open')){
        sidemenu.style.right = "0";
        }
        else{
            sidemenu.style.right = "-330px"
        }
    }



    

    // Fresh swiper
    const swiper = new Swiper('.swiper', {

        slidesPerView: 1,
        spaceBetween: 30,
        // Optional parameters
        direction: 'horizontal',
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        

        
        breakpoints: {
            530: {
              slidesPerView: 2,
              spaceBetween: 200,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: -20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 150,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: -60,
            },
          },
      });

      // Canned swiper
      const swiper2 = new Swiper('.swiper2', {

        slidesPerView: 1,
        spaceBetween: 30,
        // Optional parameters
        direction: 'horizontal',
        // If we need pagination
        pagination: {
          el: '.swiper-pagination2',
          dynamicBullets: true,
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next2',
          prevEl: '.swiper-button-prev2',
        },
      
        // And if we need scrollbar
        

        
        breakpoints: {
            530: {
              slidesPerView: 2,
              spaceBetween: 200,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: -20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 150,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: -60,
            },
          },
      });


      // Dried swiper
      const swiper3 = new Swiper('.swiper3', {

        slidesPerView: 1,
        spaceBetween: 30,
        // Optional parameters
        direction: 'horizontal',
        // If we need pagination
        pagination: {
          el: '.swiper-pagination3',
          dynamicBullets: true,
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next3',
          prevEl: '.swiper-button-prev3',
        },
      
        // And if we need scrollbar
        

        
        breakpoints: {
            530: {
              slidesPerView: 2,
              spaceBetween: 200,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: -20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 150,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: -60,
            },
          },
      });

      

      // Frozen swiper
      const swiper4 = new Swiper('.swiper4', {

        slidesPerView: 1,
        spaceBetween: 30,
        // Optional parameters
        direction: 'horizontal',
        // If we need pagination
        pagination: {
          el: '.swiper-pagination4',
          dynamicBullets: true,
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next4',
          prevEl: '.swiper-button-prev4',
        },
      
        // And if we need scrollbar
        

        
        breakpoints: {
            530: {
            slidesPerView: 2,
            spaceBetween: 200,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: -20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 150,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: -60,
            },
          },
      });
    
      

      // Other Products swiper
      const swiper5 = new Swiper('.swiper5', {

        slidesPerView: 1,
        spaceBetween: 30,
        // Optional parameters
        direction: 'horizontal',
        // If we need pagination
        pagination: {
          el: '.swiper-pagination5',
          dynamicBullets: true,
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next5',
          prevEl: '.swiper-button-prev5',
        },
      
        // And if we need scrollbar
        

        
        breakpoints: {

            530: {
              slidesPerView: 2,
              spaceBetween: 200,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: -20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 150,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: -60,
            },
          },
      });



      
