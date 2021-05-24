angular.module("ui-accordion", []);

angular.module("ui-accordion").run(function ($templateCache) {
    $templateCache.put("view/accordion.html", '<div class="ui-accordion-title" ng-click="open()">{{title}}</div>\n' +
        '<div class="ui-accordion-content" ng-transclude ng-show="isOpened"></div>')
});

angular.module("ui-accordion").directive("uiAccordions", function () {
    return {
        controller: function ($scope, $element, $attrs) {
            const accordions = [];

            this.registerAccordion = function (accordion) {
                accordions.push(accordion);
            };

            this.closeAll = function () {
                accordions.forEach(function (accordion) {
                    accordion.isOpened = false;
                });
            };
        }
    };
});

angular.module("ui-accordion").directive("uiAccordion", function () {
    return {
        templateUrl: "view/accordion.html",
        transclude: true,
        scope: {
            title: "@"
        },
        require: "^uiAccordions",
        link: function (scope, element, attrs, ctrl) {
            ctrl.registerAccordion(scope);
            scope.open = function () {
                ctrl.closeAll();
                scope.isOpened = true;
            }
        }
    };
});
