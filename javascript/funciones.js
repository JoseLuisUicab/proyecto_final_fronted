// $("#menu").click(function () {
//   $("#contenedormenu").slideToggle();
// });

// Funcion para el menu responsive
$(".container").click(function () {
  $(".contenedormenu").toggleClass("abrirmenu");
});

// Funcion para desplazamiento de los vinculos
$(".btn_ancla").click(function () {
  var ancla = $(this).attr("href");
  $("html,body").animate(
    {
      scrollTop: $(ancla).offset().top,
    },
    1000
  );
  $("#contenedormenu").toggleClass("abrirmenu");
});

// Funcion para el boton subir
$(document).ready(function () {
  $("#subir").click(function () {
    $("html,body").animate(
      {
        scrollTop: "0px",
      },
      1000
    );
  });
});

/* MOMDAL */

/*  function tiempo() {
   fondomodal.style.display = "block";
 }
 setTimeout(tiempo, 5000); */
window.onload = function () {
  var fondomodal = document.getElementById("modal");
  var btn = document.getElementById("Btn");
  var btn1 = document.getElementById("Btn1");
  var cerrar = document.getElementById("cerrarbtn");
  var video = document.getElementById("video");

  // your code 
  btn.onclick = function () {
    fondomodal.style.display = "block";
    /* video.attr.display="block"; */

  };
  btn1.onclick = function () {
    fondomodal.style.display = "block";
    /* video.attr.display="block"; */

  };
  cerrar.onclick = function () {
    fondomodal.style.display = "none";
    /*   document.getElementById('video').pause(); */
    /*  $('#video_modal').trigger('pause'); */


  };
};


/* $("#modal").on('cerrarbtn', function (e) {
  $("#modal iframe").attr("src", $("#myModal iframe").attr("src"));
}); */
      /*  window.onclick = function (event) {
  if (event.target == fondomodal) {
    fondomodal.style.display = "none";
  }
}; */


$(".titulo1").click(function () {
  $(".contenido1").slideToggle();
  $(".icono1").toggleClass("rotar");
});

$(".titulo2").click(function () {
  $(".contenido2").slideToggle();
  $(".icono2").toggleClass("rotar");
});

$(".titulo3").click(function () {
  $(".contenido3").slideToggle();
  $(".icono3").toggleClass("rotar");
});

$(".titulo4").click(function () {
  $(".contenido4").slideToggle();
  $(".icono4").toggleClass("rotar");
});

$(".titulo5").click(function () {
  $(".contenido5").slideToggle();
  $(".icono5").toggleClass("rotar");
});
$(".titulo6").click(function () {
  $(".contenido6").slideToggle();
  $(".icono6").toggleClass("rotar");
});


function validar() {
  if (document.form1.nombre.value.length == 0) {
    Swal.fire({
      title: 'falta tu nombre',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    document.form1.nombre.focus();
    return 0;
  }
  if (document.form1.telefono.value.length == 0) {
    Swal.fire({
      title: 'falta tu telefono',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    document.form1.telefono.focus();
    return 0;
  }
  if (document.form1.correo.value.length == 0) {
    Swal.fire({
      title: 'falta tu correo',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    document.form1.correo.focus();
    return 0;
  }

  if (document.form1.area.value.length == 0) {
    Swal.fire({
      title: 'textarea vacio',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    document.form1.area.focus();
    return 0;
  }
  document.form1.submit();
}


/* VALIDAR FORMULARIO */
/* function validar() {

  var correo = document.getElementById("co").value;
  var nom = document.getElementsById("nom").value;
  var tel = document.getElementsById("nu").value;
  var coment = document.getElementsById("ar").value;
  var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!expr.test(correo)) {                                                            //COMPRUEBA MAIL
    /* alert("Error: La dirección de correo " + correo + " es incorrecta."); 
    Swal.fire({
      title: 'correo no en formato valido',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    return false;
  }

  if ((correo ==="") || (nom === "") || (tel === "") || (coment === "")) {  //COMPRUEBA CAMPOS VACIOS
    alert("Los campos no pueden quedar vacios");
    Swal.fire({
      title: 'tienes dejado algun campo vacio',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    return false;
  }

} */