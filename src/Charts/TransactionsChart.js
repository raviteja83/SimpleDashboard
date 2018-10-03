import React, { Component } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import {
    LineChart,
    Line,
    Legend,
    Tooltip,
    YAxis,
    XAxis,
    CartesianGrid
} from 'recharts';

import { timeTickFormatter } from '../utils';

class TransactionsChart extends Component {
    render() {
        const { data, width } = this.props;

        return (
            <LineChart width={width} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" tickFormatter={timeTickFormatter} />
                <YAxis
                    yAxisId="count"
                    dataKey="count"
                    label={{
                        value: 'Transaction Count',
                        angle: -90,
                        position: 'insideLeft'
                    }}
                />
                <YAxis
                    yAxisId="value"
                    dataKey="value"
                    orientation="right"
                    label={{
                        value: 'Transaction Value',
                        angle: 90,
                        position: 'insideRight'
                    }}
                    tickFormatter={value => numeral(value).format('0,0a')}
                />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    yAxisId="value"
                    isAnimationActive={false}
                />
                <Line
                    type="monotone"
                    dataKey="count"
                    stroke="#82ca9d"
                    yAxisId="count"
                    isAnimationActive={false}
                />
            </LineChart>
        );
    }
}

TransactionsChart.propTypes = {
    data: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired
};

export default TransactionsChart;
