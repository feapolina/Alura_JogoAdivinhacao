function startGame() {
  var numeroSecreto = Math.floor(Math.random() * 11);
  var chuteDoUsuario;
  var qntdChutes = 1;

  while (qntdChutes <= 3) {
    chuteDoUsuario = parseInt(prompt("Digite um número entre 0 e 10: "));

    if (chuteDoUsuario === numeroSecreto) {
      alert("Parabéns! Você acertou em " + qntdChutes + " tentativas.");
      break;
    } else if (chuteDoUsuario < numeroSecreto) {
      alert("O número é maior. Tente novamente.");
    } else {
      alert("O número é menor. Tente novamente.");
    }

    qntdChutes++;

    if (qntdChutes > 3) {
      alert("Você perdeu! A resposta era: " + numeroSecreto);
    }
  }
}
// testando commit
