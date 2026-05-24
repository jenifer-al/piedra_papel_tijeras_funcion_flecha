



const mostrar = () => {

    const inputUno = parseInt(document.getElementById("eleccion").value);

     const cajaResultado = document.getElementById("resultado");


        //1.validar si el número está en el rango

        if(isNaN (inputUno) || inputUno <1 || inputUno > 3) {

            cajaResultado.innerText = "« Entiendo que no quieres jugar. Adiós »";


        }

        // 2. Generar número aleatorio para la máquina (1 a 3)
    const pc = Math.floor(Math.random() * 3) + 1;
    
    // Mapeo de números a palabras
    const opciones = { 1: "piedra", 2: "papel", 3: "tijera" };
    const yo = opciones[pc];
    const tu = opciones[inputUno];

    // 3. Lógica del juego
    let mensaje = "";
    
    if (pc === inputUno) {
        mensaje = `Yo ${yo} y tú ${tu}. ¡Es un empate!`;
    } else if (
        (inputUno === 1 && pc === 3) || // Piedra vence a tijera
        (inputUno === 2 && pc === 1) || // Papel vence a piedra
        (inputUno === 3 && pc === 2)    // Tijera vence a papel
    ) {
        mensaje = `Yo ${yo} y tú ${tu}. ¡Has ganado!`;
    } else {
        mensaje = `Yo ${yo} y tú ${tu}. ¡He ganado!`;
    }

    // 4. Mostrar resultado
    cajaResultado.innerText = mensaje;
   


}








