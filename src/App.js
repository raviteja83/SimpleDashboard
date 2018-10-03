import React, { Component } from 'react';
import Select from 'react-select';
import Sidebar from 'react-sidebar';
import CircularProgressbar from 'react-circular-progressbar';
import numeral from 'numeral';

import TransactionsChart from './Charts/TransactionsChart';
import InvoiceChart from './Charts/InvoiceChart';
import Products from './Charts/Products';

import {
    transactions,
    dateFilterOptions,
    companiesFilterOptions,
    invoices,
    produtsSold,
    productFilterOptions
} from './data';

import {
    getFilteredByDate,
    getFilteredByCompany,
    getFilteredByProduct,
    transactionsCount,
    invoiceCount,
    productCount,
    getTotalCounts
} from './utils';

import 'react-circular-progressbar/dist/styles.css';
import 'react-select/dist/react-select.css';
import './App.css';

class App extends Component {
    state = {
        dateFilter: null,
        companyFilter: null,
        transactions: transactions,
        invoices: invoices,
        products: produtsSold,
        sidebar: false
    };

    handleDateFilter = filter => {
        this.setState({
            dateFilter: filter,
            transactions: getFilteredByDate(transactions, filter),
            invoices: getFilteredByDate(invoices, filter),
            products: getFilteredByDate(produtsSold, filter)
        });
    };

    handleCompanyFilter = filter => {
        this.setState({
            companyFilter: filter,
            transactions: getFilteredByCompany(transactions, filter),
            invoices: getFilteredByCompany(invoices, filter),
            products: getFilteredByCompany(produtsSold, filter)
        });
    };

    handleProductFilter = filter => {
        this.setState({
            productFilter: filter,
            transactions: getFilteredByProduct(transactions, filter),
            invoices: getFilteredByProduct(invoices, filter),
            products: getFilteredByProduct(produtsSold, filter)
        });
    };

    toggleSidebar = () => {
        this.setState(({ sidebar }) => ({ sidebar: !sidebar }));
    };

    renderSidebar = () => {
        return (
            <div>
                <h2 className="sidebar-header">Header</h2>
                <div className="sidebar-item">Overview</div>
                <div className="sidebar-item">Section 1</div>
                <div className="sidebar-item">Section 2</div>
                <div className="sidebar-item">Section 3</div>
                <div className="sidebar-item">Section 4</div>
            </div>
        );
    };

    render() {
        const {
            dateFilter,
            companyFilter,
            transactions,
            invoices,
            sidebar,
            products,
            productFilter
        } = this.state;
        const { tTotal, iTotal, pTotal } = getTotalCounts();

        const transactionsPercent = transactionsCount(transactions);
        const invoicePercent = invoiceCount(invoices);
        const productsPercent = productCount(products);

        return (
            <div className="App">
                <div className="filters">
                    <Sidebar
                        sidebar={this.renderSidebar()}
                        open={sidebar}
                        onSetOpen={this.toggleSidebar}
                        styles={{
                            sidebar: { background: 'white', width: 240 }
                        }}
                    >
                        <i
                            className="material-icons sidebar-icon"
                            onClick={this.toggleSidebar}
                        >
                            menu
                        </i>
                    </Sidebar>
                    <Select
                        placeholder="Select Date Filter"
                        options={dateFilterOptions}
                        value={dateFilter}
                        onChange={this.handleDateFilter}
                        className="date-select"
                    />
                    <Select
                        placeholder="Select Company Filter"
                        options={companiesFilterOptions}
                        value={companyFilter}
                        onChange={this.handleCompanyFilter}
                    />
                    <Select
                        placeholder="Select Product Filter"
                        options={productFilterOptions}
                        value={productFilter}
                        onChange={this.handleProductFilter}
                    />
                </div>
                <div className="overview">
                    <div className="overview-piece">
                        <CircularProgressbar
                            percentage={(transactionsPercent / tTotal) * 100}
                            text={numeral(transactionsPercent).format('0,0a')}
                            styles={{
                                path: { stroke: '#8884d8' },
                                text: { fill: '#8884d8' }
                            }}
                        />
                        <div className="overview-title">Transactions</div>
                    </div>
                    <div className="overview-piece">
                        <CircularProgressbar
                            percentage={(invoicePercent / iTotal) * 100}
                            text={numeral(invoicePercent).format('0,0a')}
                            styles={{
                                path: { stroke: '#ffc658' },
                                text: { fill: '#ffc658' }
                            }}
                        />
                        <div className="overview-title">Invoices</div>
                    </div>
                    <div className="overview-piece">
                        <CircularProgressbar
                            percentage={(productsPercent / pTotal) * 100}
                            text={numeral(productsPercent).format('0,0a')}
                            styles={{
                                path: { stroke: '#82ca9d' },
                                text: { fill: '#82ca9d' }
                            }}
                        />
                        <div className="overview-title">Products</div>
                    </div>
                    <div className="overview-piece">
                        <div className="overview-empty" />
                        <div className="overview-title">Something else</div>
                    </div>
                </div>
                <div className="container">
                    <div className="card">
                        <TransactionsChart width={550} data={transactions} />
                        <h3>Transactions</h3>
                    </div>
                    <div className="card">
                        <InvoiceChart data={invoices} width={550} />
                        <h3>Invoices</h3>
                    </div>
                    <div className="card">
                        <Products width={600} data={products} />
                        <h3>Products Sold</h3>
                    </div>
                    <div className="card">
                        <div className="empty">
                            Similar graphs for other stats
                        </div>
                    </div>
                    <div className="card">
                        <div className="empty">
                            Similar graphs for other stats
                        </div>
                    </div>
                    <div className="card">
                        <div className="empty">
                            Similar graphs for other stats
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
