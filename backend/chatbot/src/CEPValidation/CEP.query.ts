/**
 * Consulta um CEP
 */
 function consultaCEP(cep) {
    // Limpa o CEP para conter somente numeros, removendo traços e pontos
    cep = cep.replace(/\D/g, '');

    // Como a API retorna 404 com CEPs com tamanhos inválidos
    // Iremos validar antes para não ter que esperar o tempo limite do JSONP
    if (cep.length !== 8) return Promise.reject('CEP inválido');

    // Consulta o CEP na ViaCEP com 30 segundos de tempo limite
    return jsonp('https://viacep.com.br/ws/' + encodeURI(cep) + '/json/', 30000).then((json) => {
        
        if (json['erro'] === true) {
            return Promise.reject('CEP não encontrado');
        } else {
            return Promise.resolve(json);
        }
    });
}