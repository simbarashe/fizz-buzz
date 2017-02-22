describe('NumberGeneratorController', function () {
  var $controller, numberGeneratorController, numberGeneratorService, appsettings;
  var numberList = [
    {
      number: 1,
      description: '1'
    },
    {
      number: 3,
      description: 'Fizz'
    },
    {
      number: 5,
      description: '5'
    },
    {
      number: 15,
      description: 'FizzBuzz'
    },
  ];

  var appsettings = {
    tableRows: [{ id: 10, description: '10' },
    { id: 20, description: '20' },
    { id: 30, description: '30' },
    { id: 40, description: '40' },
    { id: 50, description: '50' }]
  };

  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('components.NumberGenerator'));
  beforeEach(angular.mock.module('services.NumberGenerator'));
  beforeEach(function () {
    module('fizz-buzz', function ($provide) {
      $provide.constant('appsettings', appsettings);
    });
  });

  beforeEach(inject(function (_$controller_, _NumberGeneratorService_) {
    $controller = _$controller_;
    numberGeneratorService = _NumberGeneratorService_;

    spyOn(numberGeneratorService, 'get').and.callFake(function () {
      return numberList;
    });

    numberGeneratorController = $controller('NumberGeneratorController', {
      NumberGeneratorService: numberGeneratorService,
      appsettings: appsettings
    });
  }));

  it('should be defined', function () {
    expect(numberGeneratorController).toBeDefined();
  });

  it('should initialize with a call to numberGeneratorService.get()', function () {
    expect(numberGeneratorService.get).toHaveBeenCalled();
    expect(numberGeneratorController.numberList).toEqual(numberList);
    expect(numberGeneratorController.tableRows).toEqual(appsettings.tableRows);
  });

  it('should initialize table rows', function () {
    expect(numberGeneratorController.tableRows).toEqual(appsettings.tableRows);
  });
});