(function (angular) {
  angular.module('ngRadialProgressBar', []).directive('radialProgress', function () {
    return {
      restrict: 'E',
      terminal: true,
      priority: 1000,
      link: function (scope) {
        scope.percents = (function () {
          var texts = [];
          for (var i = -1; i <= 100; i++) texts.push(i + ' %');
          return texts;
        })();
      },
      scope: {
        progress: '@'
      },
      template: ['<div class="radial-progress-bar" ng-attr-data-progress="{{ progress }}">',
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
        '        <div class="percentage">',
        '            <div class="numbers">',
        '                <span ng-repeat="i in percents">{{ i }}</span>',
        '            </div>',
        '        </div>',
        '    </div>',
        '</div>'].join('')
    };
  });
})(angular);
