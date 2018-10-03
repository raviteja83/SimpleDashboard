import moment from 'moment';
import { invoiceTypes, products, transactions, invoices } from './data';

export const getFilteredByDate = (data, filter) => {
    if (filter) {
        return data.filter(({ time }) => time > filter.value);
    }
    return data;
};

export const getFilteredByCompany = (data, filter) => {
    if (filter) {
        return data.filter(({ company }) => company === filter.value);
    }
    return data;
};

export const getFilteredByProduct = (data, filter) => {
    if (filter) {
        return data.filter(({ product }) => product === filter.value);
    }
    return data;
};

export const timeTickFormatter = value =>
    moment.unix(value).format("DD, MMM 'YY");

export const transactionsCount = data =>
    data.reduce((acc, { count }) => acc + count, 0);

export const invoiceCount = data =>
    data.reduce(
        (acc, value) =>
            acc +
            invoiceTypes.reduce((invoice, key) => invoice + value[key], 0),
        0
    );

export const productCount = data =>
    data.reduce(
        (acc, value) =>
            acc + products.reduce((invoice, key) => invoice + value[key], 0),
        0
    );

export const getTotalCounts = () => {
    return {
        tTotal: transactionsCount(transactions) || 1,
        iTotal: invoiceCount(invoices) || 1,
        pTotal: productCount(products) || 1
    };
};
