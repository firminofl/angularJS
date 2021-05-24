angular.module("listaTelefonica").controller("listaTelefonicaCrtl",
    function ($scope, contatosAPI, operadorasAPI, serialGenerator) {
        $scope.app = "Lista Telefônica";

        const carregarContatos = function () {
            contatosAPI.getContatos()
                .then(function (data, status) {
                    if (data.data.length !== 0)
                        $scope.contatos = data.data;
                    else
                        $scope.errorMessage = 'Não há dados na base!'
                })
                .catch(function () {
                    $scope.errorMessage = 'Não foi possível carregar os dados!'
                });
        };

        const carregarOperadoras = function () {
            operadorasAPI.getOperadoras()
                .then(function (data, status) {
                    $scope.operadoras = data.data;
                })
                .catch(function (data, status) {
                    console.log(data);
                });
        }

        $scope.adicionarContato = function (contato) {
            contato.serial = serialGenerator.generate();
            contato.data = new Date();
            contatosAPI.saveContato(contato)
                .then(function (data) {
                    delete $scope.contato;
                    $scope.contatoForm.$setPristine();
                    carregarContatos();
                });

        }

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

        carregarContatos();
        carregarOperadoras();
    });
