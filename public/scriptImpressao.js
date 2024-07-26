(function() {
  // Obtendo os dados armazenados no localStorage
  const dadosCnpj = JSON.parse(localStorage.getItem('dadosCnpj'));
  const cepDigitado = JSON.parse(localStorage.getItem('cepDigitado'));

  if (!dadosCnpj || !cepDigitado) {
    alert("Dados não encontrados. Por favor, volte e preencha os dados novamente.");
    window.location.href = '/index.html';
    return;
  }

  // Atualizando o conteúdo da div 'report' com as informações
  const reportDiv = document.getElementById('report');
  reportDiv.innerHTML = `
    <p style="text-align: justify;">
      ${dadosCnpj.nome}, inscrita no CNPJ nº ${dadosCnpj.cnpj}, localizada na ${dadosCnpj.logradouro}, ${dadosCnpj.numero}, 
      bairro ${dadosCnpj.bairro}, no município de ${dadosCnpj.municipio} - SP, CEP: ${dadosCnpj.cep}, telefone(s) ${dadosCnpj.telefone}, 
      e-mail ${dadosCnpj.email}, empresa neste ato representada por .... Cep Pessoal digitado: ${cepDigitado.logradouro} 
    </p>
  `;

  // Adicionando um evento de clique ao botão de voltar
  document.getElementById('voltar').addEventListener('click', function() {
    window.location.href = '/index.html';
  });
})();
