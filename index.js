d3.csv("dados orçamento - 2003-2022 - função, subfunção, resultado primário.csv", function(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].Ano);
        console.log(data[i].Função);
    }
});