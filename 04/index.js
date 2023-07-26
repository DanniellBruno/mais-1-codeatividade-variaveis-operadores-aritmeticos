var capital = 1000
var taxa = 12.5
var periodoTempo = 5
var montante = capital * Math.pow(1 + taxa, periodoTempo)

console.log("O Juros Compostos é:", montante)
