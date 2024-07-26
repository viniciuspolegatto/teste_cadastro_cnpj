document.addEventListener("DOMContentLoaded", function () {
  const dadosCnpj = JSON.parse(localStorage.getItem("dadosCnpj"));
  const cepDigitadoString = localStorage.getItem("cepDigitado");
  const cepDigitado = cepDigitadoString ? JSON.parse(cepDigitadoString) : null;
  const nomeCliente = localStorage.getItem("nomeCliente");
  const numeroResidencia = localStorage.getItem("numeroResidencia");
  const telefone = localStorage.getItem("telefone");
  const emailpessoal = localStorage.getItem("email");
  const cpf = localStorage.getItem("cpf");

  if (!dadosCnpj || !cepDigitado) {
    alert(
      "Dados não encontrados. Por favor, volte e preencha os dados novamente."
    );
    window.location.href = "/index.html";
    return;
  }

  const reportDiv = document.getElementById("report");
  reportDiv.innerHTML = `
    <p style="text-align: justify;">
      ${dadosCnpj.nome}, inscrita no CNPJ nº ${dadosCnpj.cnpj}, localizada na ${dadosCnpj.logradouro}, ${dadosCnpj.numero},
      bairro ${dadosCnpj.bairro}, no município de ${dadosCnpj.municipio} - SP, CEP: ${dadosCnpj.cep}, telefone(s) ${dadosCnpj.telefone},
      e-mail ${dadosCnpj.email}, empresa neste ato representada por ${nomeCliente}, brasileiro(a), com inscrição no CPF nº ${cpf},
      residente .... Cep Pessoal digitado: ${cepDigitado.cep}, logradouro ${cepDigitado.logradouro}, ${cepDigitado.bairro}, ${cepDigitado.localidade} - ${cepDigitado.uf}
    </p>
  `;

  const reportDivCep = document.getElementById("reportCep");
  reportDivCep.innerHTML = `
    <p style="text-align: justify;">
      ${cepDigitado.logradouro}, ${cepDigitado.bairro}, ${cepDigitado.localidade} - ${cepDigitado.uf}
    </p>
  `;

  document.getElementById("voltar").addEventListener("click", function () {
    window.location.href = "/index.html";
  });
});
