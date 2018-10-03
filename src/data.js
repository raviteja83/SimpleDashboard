import { sample } from 'lodash';
import moment from 'moment';

const counts = [10, 20, 25, 30, 35, 40, 45, 60, 80, 100, 200, 300];
const values = [10000, 15000, 20000, 50000, 100000, 200000, 500000];
const companies = ['a', 'b', 'c', 'd', 'e'];
const products = ['p1', 'p2', 'p3'];
const time = Array(30)
    .fill(0)
    .map((_, index) =>
        moment()
            .subtract(30 - index, 'day')
            .unix()
    );
const invoiceTypes = ['pending', 'delivered', 'clearDue'];

export const transactions = Array(30)
    .fill(0)
    .map(() => {
        return {
            time: sample(time),
            count: sample(counts),
            value: sample(values),
            company: sample(companies),
            product: sample(products)
        };
    })
    .sort((a, b) => a.time - b.time);

export const invoices = Array(30)
    .fill(0)
    .map(() => {
        return {
            time: sample(time),
            [invoiceTypes[0]]: sample(counts),
            [invoiceTypes[1]]: sample(counts),
            [invoiceTypes[2]]: sample(counts),
            company: sample(companies),
            product: sample(products)
        };
    })
    .sort((a, b) => a.time - b.time);

export const produtsSold = Array(30)
    .fill(0)
    .map(() => {
        return {
            time: sample(time),
            [products[0]]: sample(counts),
            [products[1]]: sample(counts),
            [products[2]]: sample(counts),
            company: sample(companies),
            product: sample(products)
        };
    })
    .sort((a, b) => a.time - b.time);

export const dateFilterOptions = [
    {
        label: 'Today',
        value: moment()
            .startOf('day')
            .unix()
    },
    {
        label: 'Yesterday',
        value: moment()
            .subtract(1, 'day')
            .startOf('day')
            .unix()
    },
    {
        label: 'Last week',
        value: moment()
            .subtract(1, 'week')
            .startOf('day')
            .unix()
    },
    {
        label: 'Last Month',
        value: moment()
            .subtract(1, 'month')
            .startOf('day')
            .unix()
    }
];

export const companiesFilterOptions = [
    {
        label: 'A',
        value: 'a'
    },
    {
        label: 'B',
        value: 'b'
    },
    {
        label: 'C',
        value: 'c'
    },
    {
        label: 'D',
        value: 'd'
    },
    {
        label: 'E',
        value: 'e'
    }
];

export const productFilterOptions = [
    {
        label: 'P1',
        value: 'p1'
    },
    {
        label: 'P2',
        value: 'p2'
    },
    {
        label: 'P3',
        value: 'p3'
    }
];
