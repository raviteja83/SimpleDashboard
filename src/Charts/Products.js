import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    AreaChart,
    Area,
    Legend,
    Tooltip,
    YAxis,
    XAxis,
    CartesianGrid
} from 'recharts';
import { timeTickFormatter } from '../utils';

class Products extends Component {
    render() {
        const { width, data } = this.props;
        return (
            <AreaChart width={width} height={400} data={data}>
                <Area
                    dataKey="p1"
                    fill="#8884d8"
                    stackId={1}
                    isAnimationActive={false}
                />
                <Area
                    dataKey="p2"
                    fill="#82ca9d"
                    stackId={1}
                    isAnimationActive={false}
                />
                <Area
                    dataKey="p3"
                    fill="#ffc658"
                    stackId={1}
                    isAnimationActive={false}
                />
                <CartesianGrid strokeDasharray="3 3" />
                <Legend />
                <Tooltip />
                <XAxis dataKey="time" tickFormatter={timeTickFormatter} />
                <YAxis
                    label={{
                        value: 'Count',
                        angle: -90,
                        position: 'insideLeft'
                    }}
                />
            </AreaChart>
        );
    }
}

Products.propTypes = {
    width: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired
};

export default Products;
