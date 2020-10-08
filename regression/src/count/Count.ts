import Sum from './sum';

export default class Count {
    public add(numbers: Array<number>): Sum {
        const sum = numbers.reduce((sum: number, number: number) => sum + number);
        return new Sum(numbers, sum);
    }
}
