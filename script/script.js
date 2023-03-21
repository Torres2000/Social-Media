

var toggle = document.querySelector(".onoffswitch-checkbox");





toggle.addEventListener('change', function() {
    /*
    //cambiamos el color del body
    document.body.style.background =this.checked ? "var(--White)" : "var(--Very_Dark_Blue)";

    // Cambiamos el color a social media
    var social_media = document.getElementById("social-media");
    social_media.style.color =this.checked ? "var(--Very_Dark_Blue3)" : "var(--White)";
    
    // Cambiamos el color a overview
    var Overview = document.getElementById("Overview");
    Overview.style.color =this.checked ? "var(--Very_Dark_Blue3)" : "var(--White)";
    
    // Cambiamos el color a la banda
    var banda = document.getElementById("bandahorizontal");
    banda.style.background =this.checked ? "var(--Very_Pale_Blue)" : "var(--Very_Dark_Blue2)";
    
    // Cambiamos el color dark mode del toggle boton
    var darkMode = document.getElementById("dar-mode");
    darkMode.style.color =this.checked ? "var(--Dark_Grayish_Blue)" : "var(--White)";
    
   
     //Bucle para cambiar el color a las tarjetas de social media
    for (let step = 1; step <=4; step++) {
        
        var tar = "product-card"+step;
        var tarjetas = document.getElementById(tar)
         
        //Cambiamos el color a las tarjetas
        tarjetas.style.background = this.checked ? "var(--Light_Grayish_Blue)" : "var(--Dark_Desaturated_Blue)";
        //Cambiamos el color a las letras @
        var usuario = document.getElementById("usuario"+step);
        usuario.style.color = this.checked ? "var(--Dark_Grayish_Blue)" : "var(--Desaturated_Blue)";
   
        //Cambiamos el color a las cantidades
        var cantidad = document.getElementById("cantidad"+step);
        cantidad.style.color = this.checked ? "var(--Very_Dark_Blue3)" : "var(--White)";

        //Cambiar el color a Folowers
        var Folowers = document.getElementById("folowers"+step);
        Folowers.style.color = this.checked ? "var(--Dark_Grayish_Blue)" : "var(--Desaturated_Blue)";

    }
      //Bucle para cambiar el color a las tarjetas de overview
      for (let step = 1; step <=8; step++) {

        //Cambiamos el color a las tarjetas de overview
        var overviewTarjeta = document.getElementById("product-card-overview"+step)
        overviewTarjeta.style.background = this.checked ? "var(--Light_Grayish_Blue)" : "var(--Dark_Desaturated_Blue)";

        //Cambiar el color a overview likes y demas 
        var likes = document.getElementById("likes"+step);
        likes.style.color = this.checked ? "var(--Dark_Grayish_Blue)" : "var(--Desaturated_Blue)";

        //Cambiamos el color a las cantidades
        var cantidad2 = document.getElementById("total-overview"+step);
        cantidad2.style.color = this.checked ? "var(--Very_Dark_Blue3)" : "var(--White)";

    }

    */

    var ejemplo = this.checked ? cambiarANegro() : cambiarABlanco();
})
  

//Ejemplo con funcion para quitar y poner clases

function cambiarANegro(){
    // Cambiamos el color a social media
    for (let step = 1; step <=4; step++){

    document.getElementById("product-card"+step).classList.add("blanco")
    document.getElementById("product-card"+step).classList.remove("negro")

    //Cambiamos el color al total
    document.getElementById("cantidad"+step).classList.add("colorNegro");
    document.getElementById("cantidad"+step).classList.remove("colorBlanco");
    
    // Cambiamos el color a overview
    for (let step = 1; step <=8; step++){

        document.getElementById("product-card-overview"+step).classList.add("blanco")
        document.getElementById("product-card-overview"+step).classList.remove("negro")

        //Cambiar el color al total de views
        document.getElementById("total-overview"+step).classList.add("colorNegro");
        document.getElementById("total-overview"+step).classList.remove("colorBlanco");

        //Cambiar el color a los lkes
        document.getElementById("likes"+step).classList.add("colorNegrito")
        document.getElementById("likes"+step).classList.remove("colorBlanquito")
    }
    
    // Cambiamos el color a la banda horizontal
    document.getElementById("bandahorizontal").classList.add("bandahorizontal-azul")
    document.getElementById("bandahorizontal").classList.remove("bandahorizontal-negro")

    //Cambiar el color a social media 
    document.getElementById("social-media").style.color = "var(--Very_Dark_Blue3)"
    document.getElementById("dar-mode").style.color = "var(--Dark_Grayish_Blue)"

    //Cambiar el color a social media 
    document.getElementById("Overview").style.color = "var(--Very_Dark_Blue3)"

    document.getElementById("total").style.borderBottomColor = "var(--Dark_Grayish_Blue)"

    //Cambiar el color al autor
}

document.body.style.background = "var(--White)";
}





function cambiarABlanco(){
    // Cambiamos el color a overview
    for (let step = 1; step <=4; step++){

        document.getElementById("product-card"+step).classList.add("negro")
        document.getElementById("product-card"+step).classList.remove("blanco")
        //Cambiamos el color al total
        document.getElementById("cantidad"+step).classList.remove("colorNegro");
        document.getElementById("cantidad"+step).classList.add("colorBlanco");
    }
    for (let step = 1; step <=8; step++){

        document.getElementById("product-card-overview"+step).classList.add("negro")
        document.getElementById("product-card-overview"+step).classList.remove("blanco")
        
        //Cambiamos el hover
        document.getElementById("product-card-overview"+step).classList.add("overview2")
        document.getElementById("product-card-overview"+step).classList.remove("overview1")


        //Cambiar el color al total de views
        document.getElementById("total-overview"+step).classList.remove("colorNegro");
        document.getElementById("total-overview"+step).classList.add("colorBlanco");

        //Cambiar el color a los lkes
        document.getElementById("likes"+step).classList.remove("colorNegrito")
        document.getElementById("likes"+step).classList.add("colorBlanquito")

    }

    //cambiamos el color del body
    document.body.style.background = "var(--Very_Dark_Blue)";
    // Cambiamos el color a social media
    var social_media = document.getElementById("social-media");
    social_media.style.color =this.checked ? "var(--Very_Dark_Blue3)" : "var(--White)";

    // Cambiamos el color a la banda horizontal
    document.getElementById("bandahorizontal").classList.remove("bandahorizontal-azul")
    document.getElementById("bandahorizontal").classList.add("bandahorizontal-negro")


    document.getElementById("social-media").style.color = "var(--White)"
    document.getElementById("dar-mode").style.color = "var(--White)"

    //Cambiar el color a social media 
    document.getElementById("Overview").style.color = "var(--White)"

    document.getElementById("total").style.borderBottomColor = "var(--Desaturated_Blue)"

    
}