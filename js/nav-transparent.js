$(document).ready(function () {
    // Transition effect for navbar
    $(window).scroll(function () {
        // checks if window is scrolled more than 100px, adds/removes solid class
        if ($(this).scrollTop() > 10) {
            $('.navbar').addClass('solid');
        } else {
            $('.navbar').removeClass('solid');
        }
    });
});


// THE CSS USED FOR THIS ON NAVBAR CLASS
//.solid {
//    background-color: #######;
//    transition: background-color .5s ease 0s;
//}
