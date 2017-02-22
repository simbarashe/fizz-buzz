(function () {
  'use strict';

  // Define the component and controller we loaded in our test
  angular.module('components.NumberGenerator', [])
    .controller('NumberGeneratorController', function (NumberGeneratorService, appsettings) {
      var vm = this;
      vm.tableRows = appsettings.tableRows;    
      vm.numberList = NumberGeneratorService.get(1, 100);
      vm.viewby = vm.tableRows[0].id;
      vm.totalItems = vm.numberList.length;
      vm.currentPage = 1;
      vm.itemsPerPage = vm.viewby;
      vm.maxSize = 5; //Number of pager buttons to show

      vm.setPage = function (pageNo) {
        vm.currentPage = pageNo;
      };  

      vm.setItemsPerPage = function (num) {
        vm.itemsPerPage = num;
        vm.currentPage = 1; //reset to first page
      }

    })
    .config(function ($stateProvider) {
      $stateProvider
        .state('number-generator', {
          url: '/number-generator',
          templateUrl: 'components/number-generator/number-generator.html',
          controller: 'NumberGeneratorController as nc'
        });
    });
})();