let estudantes = new Array(
    {
        nome: "João",
        notaProva1: 7,
        notaProva2: 8,
    },
    {
        nome: "Maria",
        notaProva1: 9,
        notaProva2: 10,
    },
    {
        nome: "José",
        notaProva1: 5,
        notaProva2: 6,
    },
    {
        nome: "Ana",
        notaProva1: 8,
        notaProva2: 9,
    },
);
function calcularMedia(estudante) {
    return (estudante.notaProva1 + estudante.notaProva2) / 2;
}
for(let student of estudantes){
    if (calcularMedia(student) >= 7){
        alert(`O aluno ${student.nome} foi aprovado com média ${calcularMedia(student)}`);
    }
    else{
        alert(`O aluno ${student.nome} foi reprovado com média ${calcularMedia(student)}`);
    }
    
}