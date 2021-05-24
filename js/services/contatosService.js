angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {
    const _getContatos = function () {
        return $http.get(config.baseUrl + "/contatos");
    };

    const _saveContato = function (contato) {
        return $http.post(config.baseUrl + "/contatos", contato);
    }

    const _deleteContato = function (id) {
        return $http.delete(config.baseUrl + "/contatos/" + id)
    }
    return {
        getContatos: _getContatos,
        saveContato: _saveContato,
        deleteContato: _deleteContato
    }
});
