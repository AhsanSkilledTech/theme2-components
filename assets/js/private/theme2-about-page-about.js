function animateNumbers() {
    $(".abtPgBx2cl2Iner-wrpr-tab-h").each(function () {
        var targetValue = parseInt($(this).text()); // Get the target value from the element
        $(this)
        .prop("Counter", 0)
        .animate(
            {
                Counter: targetValue,
            },
            {
                duration: 2000, // Animation duration in milliseconds
                easing: "swing", // Easing function
                step: function (now) {
                    $(this).text(Math.ceil(now)); // Update the element's text with the animated value
                },
                complete: function () {
                    $(this).text(targetValue); // Set the final value after animation completion
                },
            },
        );
    });
}
// Function to check if the section is in the viewport
function isSectionVisible(element) {
    var scrollPos = $(window).scrollTop();
    var sectionTop = $(element).offset().top;
    var sectionHeight = $(element).outerHeight();
    var sectionBottom = sectionTop + sectionHeight;
    return (
        sectionTop <= scrollPos + $(window).height() && sectionBottom >= scrollPos
    );
}
// Check if the section is visible on page load
$(document).ready(function () {
    if (isSectionVisible(".abtPgBx2cl2Iner-wrpr-tab-h")) {
        animateNumbers();
    }
});
// Check if the section becomes visible while scrolling
$(window).scroll(function () {
    if (isSectionVisible(".abtPgBx2cl2Iner")) {
        $(window).off("scroll"); // Unbind the scroll event after animating on page load
        animateNumbers();
    }
});