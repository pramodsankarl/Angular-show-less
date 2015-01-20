(function (angular) {
    angular.module('showless', []);
    angular.module('showless').directive('moreless', ['$timeout', '$window', function ($timeout, $window) {

        var defOption = {
            height: 200
        };

        var defOffset = 10;

        return {
            restrict: 'EA',
            transclude: true,
            scope: {},
            template: '<div class="showless"><div ng-transclude class="content" ng-style="style"></div><section class="trigger" ng-if="showSection"> \
      <i class="down-arrow"></i> \
      <span ng-click="toggleMore()">{{more ? "More":"Less"}}</span> \
</section></div>',
            link: function (scope, elm, attrs) {
                var origHeight,
                options = angular.extend({}, angular.copy(defOption), scope.$eval(attrs.options));

                initialize();


                function initialize() {
                    scope.toggleMore = toggleMore;
                    scope.toggleSection = toggleSection;
                    scope.toggleSection(false);
                    $timeout(_initShowLess);
                }

                function _initShowLess() {

                    origHeight = elm.find('.content').height();
                    scope.style = {
                        height: origHeight
                    };
                    if (origHeight > options.height) {
                        scope.toggleSection(true);
                        scope.style.height = options.height;
                        scope.toggleMore();
                    }
                }

                function toggleMore() {
                    expandCollapse(scope.more);
                    scope.more = !scope.more;
                }

                function toggleSection(show) {
                    scope.showSection = show;
                }

                function expandCollapse(expand) {
                    var height = expand ? origHeight : options.height;
                    scope.style.height = height;
                }


            }
        }

    }]);

})(window.angular);