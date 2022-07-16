const toTop = () => window.scrollTo({top:0,behavior:'smooth'});

window.onscroll = () => {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        alert('you hit bottom of page');
    }
}