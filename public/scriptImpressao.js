document.getElementById('botaoImpressaoCnpj').addEventListener('click', async function() {
  const cepDigitado = document.getElementById('cep').value;
  const cnpjDigitado = document.getElementById('cnpj').value;

  console.log('CEP Digitado:', cepDigitado);
  console.log('CNPJ Digitado:', cnpjDigitado);

  try {
    // Buscar dados do CEP na API ViaCEP
    let resCep = await fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`);
    let dataCep = await resCep.json();
    console.log('Dados do CEP:', dataCep);

    if (dataCep.erro) {
      throw new Error("CEP não encontrado");
    }

    // Buscar dados do CNPJ na API local
    let resCnpj = await fetch(`/cnpj/${cnpjDigitado}`);
    let dataCnpj = await resCnpj.json();
    console.log('Dados do CNPJ:', dataCnpj);

    const endereco = `${dataCep.logradouro}, ${dataCep.bairro}, ${dataCep.localidade} - ${dataCep.uf}`;

    // Preenchendo as células da tabela com os valores
    document.getElementById('cnpj-td').textContent = cnpjDigitado;
    document.getElementById('razao-social-td').textContent = dataCnpj.nome;
    document.getElementById('empresa-atividade-principal').textContent = dataCnpj.atividade_principal.0;
    document.getElementById('empresa-nome-fantasia').textContent = dataCnpj.fantasia;
    document.getElementById('empresa-logradouro').textContent = dataCnpj.logradouro;
    document.getElementById('empresa-municipio').textContent = dataCnpj.municipio;
    document.getElementById('empresa-situacao').textContent = dataCnpj.situacao;
    document.getElementById('telefone-td').textContent = dataCnpj.telefone;
    document.getElementById('endereco-td').textContent = endereco;
    document.getElementById('cep-td').textContent = cepDigitado;

    // Exibindo a tabela
    document.getElementById('data-table').style.display = 'block';
  } catch (error) {
    console.error(error);
    alert("Erro ao buscar os dados. Por favor, verifique as informações digitadas e tente novamente.");
  }
});

document.getElementById("botaoVoltarIndexImpressao").addEventListener("click", function() {
  window.location.href = "/index.html";
});
