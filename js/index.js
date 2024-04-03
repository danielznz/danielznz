$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        } 
    });
});

window.sr = ScrollReveal({reset: true});
sr.reveal('.titulo-projetos',{duration:2000,distance:'90px',delay: '150'})
sr.reveal('#habilidades h1',{duration:2000,distance:'90px',delay: '150'})