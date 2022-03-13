// VANTA.NET({
//     el: "#page-header",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     scale: 1.00,
//     scaleMobile: 1.00,
//     color: 0xe3ba14,
//     backgroundColor: 0x0,
//     points: 17.00,
//     maxDistance: 27.00,
//     spacing: 14.00,
//     showDots: false
//   })

const progText = document.querySelectorAll('.progText');
const progress = document.querySelectorAll('.progress');
const progContainer = document.querySelector('.right');
let bool = false;


window.addEventListener('scroll', () => {
    if(window.pageYOffset > progContainer.offsetTop - 600 && bool === false) {
        for(let i=0;i<progText.length;i++) {
            progText[i].innerText = 0;
            count = 0;

            progress[i].style.bottom = "100%"

            progress[i].style.bottom = progText[i].dataset.count - 100 + "%";

            function updateCount() {
                target = parseInt(progText[i].dataset.count);

                if(count < target) {
                    count++;
                    progText[i].innerText = count;
                    setTimeout(updateCount, 50);
                } else {
                    progText[i].innerText = target + "%";
                }
            }
            updateCount();
            bool = true;
        }
    }
});

const menubtn = document.querySelector('#nav-toggle');
const closebtn = document.querySelector('#nav-close');
const menu = document.querySelector('nav .container ul');

//show menu
menubtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menubtn.style.display = 'none';
    closebtn.style.display = 'inline-block';
})

//hide menu
closebtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menubtn.style.display = 'inline-block';
    closebtn.style.display = 'none';
})