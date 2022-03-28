import dayjs from 'dayjs';

export const dateFormat = (datetime, format = 'DD-MM-YYYY') => {
    return dayjs.unix(datetime).format(format);
};

export const tempFormat = (temp = 0) => {
    return parseFloat(temp).toFixed(0) + '°';
};