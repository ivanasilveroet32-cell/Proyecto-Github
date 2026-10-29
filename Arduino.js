function validarCuestionario() {
    const r1 = document.querySelector('input[name="p1"]:checked');
    const r2 = document.querySelector('input[name="p2"]:checked');
    const r3 = document.querySelector('input[name="p3"]:checked');

    if (!r1 || !r2 || !r3) {
        alert("⚠️ Por favor, responde todas las preguntas antes de verificar.");
        return;
    }

    let errores = 0;
    let mensajeError = "❌ Tienes errores en las siguientes preguntas:\n";

    if (r1.value !== "correcta") {
        errores++;
        mensajeError += "- Pregunta 1: La RAM no procesa operaciones matemáticas.\n";
    }

    if (r2.value !== "correcta") {
        errores++;
        mensajeError += "- Pregunta 2: El almacenamiento secundario retiene los datos aunque no haya energía.\n";
    }


    if (r3.value !== "correcta") {
        errores++;
        mensajeError += "- Pregunta 3: Los periféricos son dispositivos externos, no canales de transmisión.\n";
    }

   
    if (errores === 0) {
        alert("¡Felicitaciones! 🎉 Has respondido correctamente todas las preguntas de Organización de Computadoras. ¡Excelente trabajo!");
    } else {
        alert(mensajeError + "\n⚠️ Por favor, revisa tus apuntes y vuélvelo a realizar.");
    }
}