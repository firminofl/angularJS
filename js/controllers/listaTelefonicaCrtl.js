angular.module("listaTelefonica").controller("listaTelefonicaCrtl",
    function ($scope, contatos, operadoras, contatosAPI) {

        $scope.app = "Lista Telefônica";
        $scope.contatos = contatos.data;
        $scope.operadoras = operadoras.data;
        $scope.hasContatoSelecionado =  false;

        $scope.excluirContatos = function (contatos) {
            $scope.contatos = contatos.filter(function (contato) {
                if (contato.selecionado) {
                    contatosAPI.deleteContato(contato.id);
                    $scope.hasContatoSelecionado = false;
                }
            });

            $scope.verificarContatoSelecionado($scope.contatos);
        };

        $scope.verificarContatoSelecionado = function (contatos) {
            if (contatos)
                $scope.hasContatoSelecionado = !contatos.some(function (contato) {
                    return contato.selecionado;
                })
        };
    });
