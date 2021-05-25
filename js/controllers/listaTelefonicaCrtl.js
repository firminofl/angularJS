angular.module("listaTelefonica").controller("listaTelefonicaCrtl",
    function ($scope, contatos, operadoras, contatosAPI) {

        $scope.app = "Lista Telefônica";
        $scope.contatos = contatos.data;
        $scope.operadoras = operadoras.data;

        $scope.excluirContatos = function (contatos) {
            $scope.contatos = contatos.filter(function (contato) {
                if (contato.selecionado)
                    contatosAPI.deleteContato(contato.id);
            });
        };

        $scope.isContatoSelecionados = function (contatos) {
            if (contatos)
                return contatos.some(function (contato) {
                    return contato.selecionado;
                })
        };
    });
