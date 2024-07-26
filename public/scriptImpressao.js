document.getElementById('botaoImpressaoCnpj').addEventListener('click', async function() {
  const cepDigitado = document.getElementById('cep').value;
  const cnpjDigitado = document.getElementById('cnpj').value;

  try {
    // Buscar dados do CEP na API ViaCEP
    let resCep = await fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`);
    let dataCep = await resCep.json();

    if (dataCep.erro) {
      throw new Error("CEP não encontrado");
    }

    // Buscar dados do CNPJ na API local
    let resCnpj = await fetch(`/cnpj/${cnpjDigitado}`);
    let dadosCnpj = await resCnpj.json();

    // Preenchendo as células da tabela com os valores
    document.getElementById('cnpj-td').textContent = cnpjDigitado;
    document.getElementById('razao-social-td').textContent = dadosCnpj.nome;
    document.getElementById('empresa-atividade-principal').textContent = dadosCnpj.atividade_principal[0].text;
    document.getElementById('empresa-nome-fantasia').textContent = dadosCnpj.fantasia;
    document.getElementById('empresa-logradouro').textContent = dadosCnpj.logradouro;
    document.getElementById('empresa-municipio').textContent = dadosCnpj.municipio;
    document.getElementById('empresa-situacao').textContent = dadosCnpj.situacao;
    document.getElementById('telefone-td').textContent = dadosCnpj.telefone;
    document.getElementById('endereco-td').textContent = `${dataCep.logradouro}, ${dataCep.bairro}, ${dataCep.localidade} - ${dataCep.uf}`;
    document.getElementById('cep-td').textContent = cepDigitado;

    // Exibindo a tabela
    document.getElementById('data-table').style.display = 'block';

    // Armazenar os dados no localStorage
    localStorage.setItem('dadosCnpj', JSON.stringify(dadosCnpj));
    localStorage.setItem('cepDigitado', cepDigitado);

  } catch (error) {
    console.error(error);
    alert("Erro ao buscar os dados. Por favor, verifique as informações digitadas e tente novamente.");
  }
  
    const reportDiv = document.getElementById('report');
  reportDiv.innerHTML =`
  <p style="text-align: justify;">${dadosCnpj.nome}, inscrita no CNPJ nº ${dadosCnpj.cnpj}, localizada na ${dadosCnpj.logradouro}, ${dadosCnpj.numero}, bairro ${dadosCnpj.bairro}, no município de ${dadosCnpj.municipio} - SP, CEP: ${dadosCnpj.cep}, telefone(s) ${dadosCnpj.telefone}, e-mail ${dadosCnpj.email}, empresa neste ato representada por .... Cep Pessoal digitado: ${cepDigitado}, logradouro ${cepDigitado.logradouro} </P>
  `;
  

  document.getElementById('voltar').addEventListener('click', function() {
    window.location.href = '/index.html';
  });
  
});
