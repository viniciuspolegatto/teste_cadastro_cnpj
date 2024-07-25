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
