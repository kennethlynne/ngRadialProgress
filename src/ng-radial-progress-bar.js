(function (angular) {
  angular.module('ngRadialProgressBar', [])
    .directive('radialProgressBar', function () {
      return {
        restrict: 'E',
        transclude: true,
        scope: {
          progress: '@'
        },
        template: ['<div ng-attr-data-progress="{{progress}}">',
          '    <div class="circle">',
          '        <div class="mask full">',
          '            <div class="fill"></div>',
          '        </div>',
          '        <div class="mask half">',
          '            <div class="fill"></div>',
          '            <div class="fill fix"></div>',
          '        </div>',
          '        <div class="shadow"></div>',
          '    </div>',
          '    <div class="inset">',
          '        <div class="percentage" ng-transclude>',
          '        </div>',
          '    </div>',
          '</div>'].join('')
      };
    });
})(angular);
