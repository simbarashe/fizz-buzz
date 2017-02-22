(function () {
    'use strict';

    // Creating the module and factory we referenced in the beforeEach blocks in our test file
    angular.module('services.NumberGenerator', [])
        .factory('NumberGeneratorService', function () {
            var numberGeneratorService = {};

            var dividends = [{
                dividend: 3,
                description: 'Fizz'
            },
            {
                dividend: 5,
                description: 'Buzz'
            }];

            numberGeneratorService.get = function (start, end) {
                if ((!angular.isNumber(start)) || (!angular.isNumber(end)) || (start > end))
                    return [];
                return generate(start, end)
            };

            var generate = function (start, end) {
                var step = 1;
                var result = [];
                for (var i = start; i <= end; i += step) {
                    var description = '';
                    angular.forEach(dividends, function (value, key) {
                        if (i % value.dividend === 0)
                            description += value.description;
                    });
                    if (!description) {
                        description = i.toString();
                    }
                    result.push({ number: i, description: description });
                }
                return result;
            };

            return numberGeneratorService;
        });
})();