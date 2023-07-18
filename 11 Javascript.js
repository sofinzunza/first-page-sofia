function validar(){
    console.log("VALIDANDO...");
    todoOK = true;

    if (!validarCorreoVacio()) todoOK = false;
    if (!validarNumeroVacio()) todoOK = false;
    if (!valudarOpciones()) todoOK = false;

    if (todoOK){
        console.log("TODO OK!!");
        document.frm.action = document.frm.destino.value;
        document.frm.submit();
        return true;
    }

    return false;
}

function validarCorreoVacio() {
    inp = document.frm.correo;
    if (inp.value.trim().length == 0){
        console.log("FALTA EL CORREO!")
        cambiarColor('ok01', 'rojo');
        return false;
    }
    cambiarColor('ok01', 'verde');
    console.log("NOMBRE OK!")
    return true;
}

function validarNumeroVacio() {
    inp = document.frm.numero;
    if (inp.value.trim().length == 0){
        cambiarColor('ok02', 'rojo');
        return false;
    }
    cambiarColor('ok02', 'verde');
    return true;
}

function valudarOpciones() {
    id = "ok03"
    cant = 0;

    if(document.frm.opcion_1.checked == true) cant++;
    if(document.frm.opcion_2.checked == true) cant++;
    if(document.frm.opcion_3.checked == true) cant++;

    if (cant >= 1){
        cambiarColor(id, 'verde');
        return true;
    }

    cambiarColor(id, 'rojo');
    return false;

}

function cambiarColor(id, color){
    el = document.getElementById(id);
    el.classList.remove('rojo');
    el.classList.remove('verde');
    el.classList.add(color);
}




