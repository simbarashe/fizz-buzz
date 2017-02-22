describe('Number generator factory', function () {
    var _numberGeneratorService;

    beforeEach(angular.mock.module('services.NumberGenerator'));

    beforeEach(inject(function (_NumberGeneratorService_) {
        _numberGeneratorService = _NumberGeneratorService_;
    }));

    it('should exist', function () {
        expect(_numberGeneratorService).toBeDefined();
    });

    describe('.get()', function () {

        it('should exist', function () {
            expect(_numberGeneratorService.get).toBeDefined();
        });

        it('should return a hard-coded list of numbers', function () {
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
            spyOn(_numberGeneratorService, 'get').and.callFake(function () {
                return numberList;
            });
            expect(_numberGeneratorService.get(1, 5)).toEqual(numberList);
        });

        it('should return a list of numbers', function () {
            var numberList = [{ number: 1, description: '1' },
            { number: 2, description: '2' },
            { number: 3, description: 'Fizz' },
            { number: 4, description: '4' },
            { number: 5, description: 'Buzz' }]
            expect(_numberGeneratorService.get(1, 5)).toEqual(numberList);
        });

        it('should return an empty array if start is greater than end', function () {
            expect(_numberGeneratorService.get(5, 1)).toEqual([]);
        });

        it('should return an empty array if start is non numeric', function () {
            expect(_numberGeneratorService.get('a', 1)).toEqual([]);
        });

        it('should return an empty array if end is non numeric', function () {
            expect(_numberGeneratorService.get(1, 'a')).toEqual([]);
        });

        it('should return an empty array if start is empty', function () {
            expect(_numberGeneratorService.get('', 1)).toEqual([]);
        });

        it('should return an empty array if end is empty', function () {
            expect(_numberGeneratorService.get(1, '')).toEqual([]);
        });

    });
});