document.addEventListener('DOMContentLoaded', function() {
  const dadosCnpj = JSON.parse(localStorage.getItem('dadosCnpj'));
  const cepDigitado = localStorage.getItem('cepDigitado');

  if (!dadosCnpj || !cepDigitado) {
    alert("Dados não encontrados. Por favor, volte e preencha os dados novamente.");
    window.location.href = '/index.html';
    return;
  }

  const reportDiv = document.getElementById('report');
  reportDiv.innerHTML =`
  <p style="text-align: justify;">${dadosCnpj.nome}, inscrita no CNPJ nº ${dadosCnpj.cnpj}, localizada na ${dadosCnpj.logradouro}, ${dadosCnpj.numero}, bairro ${dadosCnpj.bairro}, no município de ${dadosCnpj.municipio} - SP, CEP: ${dadosCnpj.cep}, telefone(s) ${dadosCnpj.telefone}, e-mail ${dadosCnpj.email}, empresa neste ato representada por .... Cep Pessoal digitado: ${cepDigitado}, logradouro ${cepDigitado.logradouro} </P>
  `;
  

    <p><strong>CEP Pessoal:</strong> ${cepDigitado}</p>
    <p><strong>Endereço Pessoal:</strong> ${dadosCnpj.logradouro}, ${dadosCnpj.bairro}, ${dadosCnpj.localidade} - ${dadosCnpj.uf}</p>
  `;

  document.getElementById('voltar').addEventListener('click', function() {
    window.location.href = '/index.html';
  });
});
