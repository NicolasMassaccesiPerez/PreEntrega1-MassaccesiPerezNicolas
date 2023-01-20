function calcularPromedioAlumno() {
    let notasAlumno = [];
    for (let i = 1; i <= 3; i++) {
        let nota = parseInt(prompt("Ingresa la nota " + (i) + " del alumno: "));
        while(isNaN(nota)){
            nota = parseInt(prompt("Ingresa un valor numérico como nota " + (i+1) + " del alumno: "));
        }
        notasAlumno.push(nota);
    }
    let sumaNotas = 0;
    for (let i = 0; i < notasAlumno.length; i++) {
        sumaNotas += notasAlumno[i];
    }
    let promedio = sumaNotas / notasAlumno.length;
    alert("El promedio del alumno es: " + promedio);
    if (promedio >= 7) {
        alert("El alumno esta aprobado");
    } else {
        alert("El alumno esta reprobado");
    }
}
calcularPromedioAlumno();









