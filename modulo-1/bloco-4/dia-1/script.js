var estadoCandidato = "reprovado";

switch (estadoCandidato) {
    case "aprovado":
        console.log("Parabéns, você foi aprovado(a)!");
        break;
    case "lista":
        console.log("Atenção, você está na lista de espera.");
        break;
    case "reprovado":
        console.log("Você foi reprovado(a)!");
        break;
    default:
        console.log("Informação inválida, tente novamente");
}