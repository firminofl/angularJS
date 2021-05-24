angular.module("listaTelefonica").directive("uiAlert", function (){
    return {
        templateUrl: "view/ui-alert.html",
        restrict: "AE",
        scope: {
            title: "@"
        },
        transclude: true
    }
})
