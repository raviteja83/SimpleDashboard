import moment from 'moment';

export const getFilteredByDate = (data, filter) => {
    if(filter) {
        return data.filter(({time }) => time > filter.value);
    }
    return data;
}

export const getFilteredByCompany = (data, filter) => {
    if(filter) {
        return data.filter(({ company }) => company === filter.value);
    }
    return data;
}

export const getFilteredByProduct = (data, filter) => {
    if(filter) {
        return data.filter(({ product }) => product === filter.value);
    }
    return data;
}

export const timeTickFormatter = value => moment.unix(value).format("DD, MMM 'YY");