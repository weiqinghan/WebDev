const toTop = () => window.scrollTo({top:0,behavior:'smooth'});

window.onscroll = () => {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        alert('Surprise! This is a javascript function that is triggered by hitting the bottom of the page. I am still working on the display of a cute animation. Check back later!');
    }
}