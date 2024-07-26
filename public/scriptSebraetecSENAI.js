/*

// Recuperar os dados armazenados na sessionStorage
const dadosCnpj = JSON.parse(sessionStorage.getItem('dadosCnpj'));
const cepDigitado = sessionStorage.getItem('cepDigitado');

// Verificar se os dados foram recuperados com sucesso
if (dadosCnpj && cepDigitado) {
  
  // Formatar as informações em texto discursivo
  const textoFormatado = `
    Informações do Contrato SEBRAETEC SENAI:
    - CNPJ: ${dadosCnpj.cnpj}
    - Razão Social: ${dadosCnpj.nome}
    - Atividade Principal: ${dadosCnpj.atividade_principal[0].text}
    - CEP Digitado: ${cepDigitado}
  
  `;

  // Exibir o texto formatado na página
  const divTextoContrato = document.getElementById('textoContrato');
  divTextoContrato.textContent = textoFormatado;

  // Imprimir o texto formatado em uma folha A4 com margens de 2 cm
  // Para isso, você pode usar estilos CSS para controlar a impressão
  // Exemplo de estilos CSS:
  divTextoContrato.style.margin = '2cm';
  divTextoContrato.style.pageBreakBefore = 'always'; // Quebra de página antes do texto para início em nova página
} else {
  alert('Dados de CNPJ e/ou CEP não encontrados.');
}



// Recuperar os dados armazenados no localStorage
const dadosCnpj = JSON.parse(localStorage.getItem('dadosCnpj'));
const cepDigitado = localStorage.getItem('cepDigitado');

// Verificar se os dados foram recuperados com sucesso
if (dadosCnpj && cepDigitado) {
  // Formatar as informações em texto discursivo
  const textoFormatado = `
    Informações do Contrato SEBRAETEC SENAI:
    - CNPJ: ${dadosCnpj.cnpj}
    - Razão Social: ${dadosCnpj.nome}
    - Atividade Principal: ${dadosCnpj.atividade_principal[0].text}
    - CEP Digitado: ${cepDigitado}
    // Adicione mais informações conforme necessário
  `;

  // Exibir o texto formatado na página
  const divTextoContrato = document.getElementById('textoContrato');
  divTextoContrato.textContent = textoFormatado;

  // Imprimir o texto formatado em uma folha A4 com margens de 2 cm
  // Para isso, você pode usar estilos CSS para controlar a impressão
  // Exemplo de estilos CSS:
  divTextoContrato.style.margin = '2cm';
  divTextoContrato.style.pageBreakBefore = 'always'; // Quebra de página antes do texto para início em nova página
} else {
  alert('Dados de CNPJ e/ou CEP não encontrados.');
}

// Função para voltar à página index.html
function voltarParaIndex() {
  window.location.href = "/index.html";
}






<script>
    // Recuperar os dados armazenados no localStorage
    const dadosCnpj = JSON.parse(localStorage.getItem('dadosCnpj'));
    const cepDigitado = localStorage.getItem('cepDigitado');

    // Verificar se os dados foram recuperados com sucesso

              if (dadosCnpj && cepDigitado) {
      

      // Formatar as informações em texto discursivo com formatação HTML
      const texto1senai = `<h3 style="text-align: center; font-weight: bold;">CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE CONSULTORIA TECNOLÓGICA - PROGRAMA SEBRAETEC 4.0 </h3>
      <p style="text-align: justify;">As partes abaixo qualificadas, por seus representantes legais, assinam o presente contrato de prestação de serviços de consultoria tecnológica individual, pertencentes ao Programa SEBRAETEC 4.0.</p>
      <h4 style="text-align: justify; font-weight: bold;">I - PARTES</h4>`;
      const texto2senai = `<h4 style="text-align: justify; font-weight: bold;">1. Contratante - EMPRESA</h4>`
      
      const texto3senai = `<p style="text-align: justify;">${dadosCnpj.nome}, inscrita no CNPJ nº ${dadosCnpj.cnpj}, localizada na ${dadosCnpj.logradouro}, ${dadosCnpj.numero}, bairro ${dadosCnpj.bairro}, no município de ${dadosCnpj.municipio} - SP, CEP: ${dadosCnpj.cep}, telefone(s) ${dadosCnpj.telefone}, e-mail ${dadosCnpj.email}, empresa neste ato representada por .... Cep Pessoal digitado: ${cepDigitado}, logradouro ${cepDigitado.logradouro} </P>`
      
      const texto4senai = `<h4 style="text-align: justify; font-weight: bold;">2. Contratada - SEBRAE-SP</h4>`
      const texto5senai = `<p style="text-align: justify;">Serviço de Apoio às Micro e Pequenas Empresas do Estado de São Paulo - SEBRAE- SP, por sua Unidade Desenvolvimento Setorial e Territorial, CNPJ nº 43.728.245/0001-42, com endereço na Rua Vergueiro, nº 1117, 12º andar, Paraíso, São Paulo - SP, CEP: 01.504-001, Telefone: 11 – 3177 4741, doravante denominado como CONTRATADA</p>`
     
      const texto6senai = `<h3 style="text-align: center; font-weight: bold;">CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE CONSULTORIA TECNOLÓGICA - PROGRAMA SEBRAETEC 4.0 </h3>
      <p style="text-align: justify;">As partes abaixo qualificadas, por seus representantes legais, assinam o presente contrato de prestação de serviços de consultoria tecnológica individual, pertencentes ao Programa SEBRAETEC 4.0.</p>
      <h4 style="text-align: justify; font-weight: bold;">I - PARTES</h4>`;
      const texto7senai = `<h4 style="text-align: justify; font-weight: bold;">1. Contratante - EMPRESA</h4>`
      
      const texto8senai = `<p style="text-align: justify;">${dadosCnpj.nome}, inscrita no CNPJ nº ${dadosCnpj.cnpj}, localizada na ${dadosCnpj.logradouro}, ${dadosCnpj.numero}, bairro ${dadosCnpj.bairro}, no município de ${dadosCnpj.municipio} - SP, CEP: ${dadosCnpj.cep}, telefone(s) ${dadosCnpj.telefone}, e-mail ${dadosCnpj.email}, empresa neste ato representada por .... Cep Pessoal digitado: ${cepDigitado}, logradouro ${cepDigitado.logradouro} </P>`
      
      const texto9senai = `<h4 style="text-align: justify; font-weight: bold;">2. Contratada - SEBRAE-SP</h4>`
      const texto10senai = `<p style="text-align: justify;">Serviço de Apoio às Micro e Pequenas Empresas do Estado de São Paulo - SEBRAE- SP, por sua Unidade Desenvolvimento Setorial e Territorial, CNPJ nº 43.728.245/0001-42, com endereço na Rua Vergueiro, nº 1117, 12º andar, Paraíso, São Paulo - SP, CEP: 01.504-001, Telefone: 11 – 3177 4741, doravante denominado como CONTRATADA</p>`

      
      const textoFormatado = texto1senai+texto2senai+texto3senai+texto4senai+texto5senai+texto6senai+texto7senai+texto8senai+texto9senai+texto10senai+`


CNPJ: ${dadosCnpj.cnpj}
Razão Social: ${dadosCnpj.nome}
Atividade Principal: ${dadosCnpj.atividade_principal[0].text}</p>
`;

// Exibir o texto formatado na página
const divTextoContrato = document.getElementById('textoContrato');
divTextoContrato.innerHTML = textoFormatado; // Usar innerHTML para interpretar o HTML

    } else {
      alert('Dados de CNPJ e/ou CEP não encontrados.');
    }

    // Função para voltar à página index.html
    function voltarParaIndex() {
      window.location.href = "/index.html";
    }
  </script>

















*/