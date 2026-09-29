function agendar(servico) {

    const nome = prompt('Qual é o seu nome?')
    if(nome === null || nome === ''){
        window.alert('Digite seu nome para prosseguir!')
    } else {
    const horario = prompt( 'Qual horário você deseja?')
    if(horario === null || horario === ''){
        window.alert('Digite um horário para continuar!')
    } else {
    const mensagem = "Olá! Meu nome é " + nome + " e gostaria de agendar " + servico + " no horário " + horario + " na Alex Barbearia.";
    const numero = "5594992222222";

    const url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);

    window.location.href = url;
}
}
}
