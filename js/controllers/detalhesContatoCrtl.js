angular.module("listaTelefonica").controller("detalhesContatoCrtl",
    function ($scope, $routeParams, contato) {
        $scope.app = 'Detalhes do contato';

        $scope.contato = contato.data;
    });
