angular.module("listaTelefonica").config(
    function ($routeProvider) {
        $routeProvider.when('/contatos', {
            templateUrl: 'view/contatos.html',
            controller: 'listaTelefonicaCrtl',
            resolve: {
                contatos: function (contatosAPI) {
                    return contatosAPI.getContatos();
                },
                operadoras: function (operadorasAPI) {
                    return operadorasAPI.getOperadoras();
                }
            }
        });

        $routeProvider.when('/contatos/:id', {
            templateUrl: 'view/detalhesContato.html',
            controller: 'detalhesContatoCrtl',
            resolve: {
                contato: function (contatosAPI, $route) {
                    const routeId = $route.current.params.id;

                    return contatosAPI.getContato(routeId);
                },
            }
        });

        $routeProvider.when('/novoContato', {
            templateUrl: 'view/novoContato.html',
            controller: 'novoContatoCrtl',
            resolve: {
                operadoras: function (operadorasAPI) {
                    return operadorasAPI.getOperadoras();
                }
            }
        });

        $routeProvider.otherwise({
            redirectTo: '/contatos'
        })
    }
);
