const $stars = document.querySelectorAll('.star');

function checkedStar(num, i) {
    if (i === num) {
        for (let i = 0; i < $stars.length; i++) {
            $stars[i].checked = true;
            if (i > num) $stars[i].checked = false; 
        };
    }; 
};

$stars.forEach((star, i) => {
    star.addEventListener('change', () => {
        for (let num = 0; num < 5; num++) checkedStar(num, i);
    });
}); 