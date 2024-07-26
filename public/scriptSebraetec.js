document.addEventListener('DOMContentLoaded', function() {
  const dadosCnpj = JSON.parse(localStorage.getItem('dadosCnpj'));
  const cepDigitado = localStorage.getItem('cepDigitado');

  if (!dadosCnpj || !cepDigitado) {
    alert("Dados não encontrados. Por favor, volte e preencha os dados novamente.");
    window.location.href = '/index.html';
    return;
  }

  const reportDiv = document.getElementById('report');
  reportDiv.innerHTML = `
    <p><strong>CNPJ:</strong> ${dadosCnpj.cnpj}</p>
    <p><strong>Razão Social:</strong> ${dadosCnpj.nome}</p>
    <p><strong>Nome Fantasia:</strong> ${dadosCnpj.fantasia}</p>
    <p><strong>Atividade Principal:</strong> ${dadosCnpj.atividade_principal[0].text}</p>
    <p><strong>Logradouro:</strong> ${dadosCnpj.logradouro}</p>
    <p><strong>Município:</strong> ${dadosCnpj.municipio}</p>
    <p><strong>Situação da Empresa:</strong> ${dadosCnpj.situacao}</p>
    <p><strong>Telefone:</strong> ${dadosCnpj.telefone}</p>
    <p><strong>CEP Pessoal:</strong> ${cepDigitado}</p>
    <p><strong>Endereço Pessoal:</strong> ${dadosCnpj.logradouro}, ${dadosCnpj.bairro}, ${dadosCnpj.localidade} - ${dadosCnpj.uf}</p>
  `;

  document.getElementById('voltar').addEventListener('click', function() {
    window.location.href = '/index.html';
  });
});
