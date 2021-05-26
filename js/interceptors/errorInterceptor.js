angular.module("listaTelefonica").factory("errorInterceptor",
    function ($q, $location) {
        return {
            responseError: function (rejection) {
                switch (rejection.status) {
                    case 404:
                        $location.path("/error");
                        break
                }
                return $q.reject(rejection);
            }
        };
    }
);
