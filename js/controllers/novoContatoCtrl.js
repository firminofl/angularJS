angular.module("listaTelefonica").controller("novoContatoCrtl",
    function ($scope, contatosAPI, serialGenerator, $location, operadoras) {
        $scope.operadoras = operadoras.data;

        $scope.adicionarContato = function (contato) {
            contato.serial = serialGenerator.generate();
            contatosAPI.saveContato(contato)
                .then(function () {
                    delete $scope.contato;
                    $scope.contatoForm.$setPristine();
                    $location.path("/contatos")
                });

        };
    });
