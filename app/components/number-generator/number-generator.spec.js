describe('NumberGeneratorController', function () {
  var $controller, numberGeneratorController, numberGeneratorService;
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

  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('components.NumberGenerator'));
  beforeEach(angular.mock.module('services.NumberGenerator'));

  beforeEach(inject(function (_$controller_, _NumberGeneratorService_) {
    $controller = _$controller_;
    numberGeneratorService = _NumberGeneratorService_;

    spyOn(numberGeneratorService, 'get').and.callFake(function () {
      return numberList;
    });

    numberGeneratorController = $controller('NumberGeneratorController', { NumberGeneratorService: numberGeneratorService });
  }));

  it('should be defined', function () {
    expect(numberGeneratorController).toBeDefined();
  });

  it('should initialize with a call to numberGeneratorService.get()', function () {
    expect(numberGeneratorService.get).toHaveBeenCalled();
    expect(numberGeneratorController.numberList).toEqual(numberList);
  });
});