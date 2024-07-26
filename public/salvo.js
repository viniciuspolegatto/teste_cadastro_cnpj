    <p><strong>CNPJ:</strong> ${dadosCnpj.cnpj}</p>
    <p><strong>Razão Social:</strong> ${dadosCnpj.nome}</p>
    <p><strong>Nome Fantasia:</strong> ${dadosCnpj.fantasia}</p>
    <p><strong>Atividade Principal:</strong> ${dadosCnpj.atividade_principal[0].text}</p>
    <p><strong>Logradouro:</strong> ${dadosCnpj.logradouro}</p>
    <p><strong>Município:</strong> ${dadosCnpj.municipio}</p>
    <p><strong>Situação da Empresa:</strong> ${dadosCnpj.situacao}</p>
    <p><strong>Telefone:</strong> ${dadosCnpj.telefone}</p>
      
      
      




                    <script>
                    // Recuperar os dados armazenados no localStorage
                    const dadosCnpj = JSON.parse(
                      localStorage.getItem("dadosCnpj")
                    );
                    const cepDigitado = localStorage.getItem("cepDigitado");

                    // Verificar se os dados foram recuperados com sucesso
                    if (dadosCnpj && cepDigitado) {
                      
                      // Formatar as informações em texto discursivo com formatação HTML
                     <h3 style="text-align: center; font-weight: bold;">CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE CONSULTORIA TECNOLÓGICA - PROGRAMA SEBRAETEC 4.0 </h3>
      <p style="text-align: justify;">As partes abaixo qualificadas, por seus representantes legais, assinam o presente contrato de prestação de serviços de consultoria tecnológica individual, pertencentes ao Programa SEBRAETEC 4.0.</p>
      <h4 style="text-align: justify; font-weight: bold;">I - PARTES</h4>`;
                      

                      const texto3senai = `<p style="text-align: justify;">${dadosCnpj.nome}, inscrita no CNPJ nº ${dadosCnpj.cnpj}, localizada na ${dadosCnpj.logradouro}, ${dadosCnpj.numero}, bairro ${dadosCnpj.bairro}, no município de ${dadosCnpj.municipio} - SP, CEP: ${dadosCnpj.cep}, telefone(s) ${dadosCnpj.telefone}, e-mail ${dadosCnpj.email}, empresa neste ato representada por .... Cep Pessoal digitado: ${cepDigitado}, logradouro ${cepDigitado.logradouro} </P>`;

                      <h4 style="text-align: justify; font-weight: bold;">2. Contratada - SEBRAE-SP</h4>
                      <p style="text-align: justify;">Serviço de Apoio às Micro e Pequenas Empresas do Estado de São Paulo - SEBRAE- SP, por sua Unidade Desenvolvimento Setorial e Territorial, CNPJ nº 43.728.245/0001-42, com endereço na Rua Vergueiro, nº 1117, 12º andar, Paraíso, São Paulo - SP, CEP: 01.504-001, Telefone: 11 – 3177 4741, doravante denominado como CONTRATADA</p>

                      const texto6senai = `<h3 style="text-align: center; font-weight: bold;">CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE CONSULTORIA TECNOLÓGICA - PROGRAMA SEBRAETEC 4.0 </h3>
      <p style="text-align: justify;">As partes abaixo qualificadas, por seus representantes legais, assinam o presente contrato de prestação de serviços de consultoria tecnológica individual, pertencentes ao Programa SEBRAETEC 4.0.</p>
      <h4 style="text-align: justify; font-weight: bold;">I - PARTES</h4>`;
                      const texto7senai = `<h4 style="text-align: justify; font-weight: bold;">1. Contratante - EMPRESA</h4>`;

                      const texto8senai = `<p style="text-align: justify;">${dadosCnpj.nome}, inscrita no CNPJ nº ${dadosCnpj.cnpj}, localizada na ${dadosCnpj.logradouro}, ${dadosCnpj.numero}, bairro ${dadosCnpj.bairro}, no município de ${dadosCnpj.municipio} - SP, CEP: ${dadosCnpj.cep}, telefone(s) ${dadosCnpj.telefone}, e-mail ${dadosCnpj.email}, empresa neste ato representada por .... Cep Pessoal digitado: ${cepDigitado}, logradouro ${cepDigitado.logradouro} </P>`;

                      const texto9senai = `<h4 style="text-align: justify; font-weight: bold;">2. Contratada - SEBRAE-SP</h4>`;
                      const texto10senai = `<p style="text-align: justify;">Serviço de Apoio às Micro e Pequenas Empresas do Estado de São Paulo - SEBRAE- SP, por sua Unidade Desenvolvimento Setorial e Territorial, CNPJ nº 43.728.245/0001-42, com endereço na Rua Vergueiro, nº 1117, 12º andar, Paraíso, São Paulo - SP, CEP: 01.504-001, Telefone: 11 – 3177 4741, doravante denominado como CONTRATADA</p>`;

                      const textoFormatado =
                        texto1senai +
                        texto2senai +
                        texto3senai +
                        texto4senai +
                        texto5senai +
                        texto6senai +
                        texto7senai +
                        texto8senai +
                        texto9senai +
                        texto10senai +
                        `


CNPJ: ${dadosCnpj.cnpj}
Razão Social: ${dadosCnpj.nome}
Atividade Principal: ${dadosCnpj.atividade_principal[0].text}</p>
`;

                      // Exibir o texto formatado na página
                      const divTextoContrato =
                        document.getElementById("textoContrato");
                      divTextoContrato.innerHTML = textoFormatado; // Usar innerHTML para interpretar o HTML
                    } else {
                      alert("Dados de CNPJ e/ou CEP não encontrados.");
                    }

                    // Função para voltar à página index.html
                    function voltarParaIndex() {
                      window.location.href = "/index.html";
                    }
                  </script>