import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import { timeTickFormatter } from '../utils';

class InvoiceChart extends Component {
    render() {
        const { data, width } = this.props;
        return (
            <BarChart width={width} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <Bar fill="#8884d8" dataKey="pending" />
                <Bar fill="#868438" dataKey="delivered" />
                <Bar fill="#82ca9d" dataKey="clearDue" />
                <XAxis dataKey="time" tickFormatter={timeTickFormatter} />
                <YAxis
                    label={{
                        value: 'Count',
                        angle: -90,
                        position: 'insideLeft'
                    }}
                />
                <Tooltip />
                <Legend />
            </BarChart>
        );
    }
}

InvoiceChart.propTypes = {
    data: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired
};

export default InvoiceChart;
