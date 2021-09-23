window.onload = iniciar;

function iniciar() {
    const redneuronal = new brain.NeuralNetwork();

    const datos = [
        {
            "input": { "R":0.72, "G":0.9, "B":1}, // celeste claro
            "output": {"claro":1}
        },{
            "input": { "R":0, "G":0.11, "B":0.2}, // azul oscuro
            "output": {"oscuro":1}
        },{
            "input": { "R":0.1, "G":0.2, "B":0.3},
            "output": {"oscuro":1}
        },{
            "input": { "R":0.74, "G":0.78, "B":0.86},
            "output": {"claro":1}
        }
    ];

    redneuronal.train(datos);

    let resultado = brain.likely({"R":0.25, "G":1, "B":0.55}, redneuronal);
    //alert(resultado);
    document.getElementById("resultado").innerHTML = resultado;
}
