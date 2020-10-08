import Count from './Count';

describe('Count', function () {
    test('adds 4 numbers', () => {
        let count = new Count();
        let numbers = [1, 2, 4, 3];
        let sum = count.add(numbers);
        expect(sum.numbers).toBe(numbers);
        expect(sum.sum).toBe(10);
    });
});
