import React, { Component } from 'react';
import Select from 'react-select';
import Sidebar from 'react-sidebar';

import TransactionsChart from './Charts/TransactionsChart';

import {
    transactions,
    dateFilterOptions,
    companiesFilterOptions,
    invoices,
    produtsSold,
    productFilterOptions
} from './data';

import 'react-select/dist/react-select.css';
import './App.css';
import InvoiceChart from './Charts/InvoiceChart';
import { getFilteredByDate, getFilteredByCompany, getFilteredByProduct } from './utils';
import Products from './Charts/Products';

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
      return <div>
          <h2 className="sidebar-header">Header</h2>
          <div className="sidebar-item">Overview</div>
          <div className="sidebar-item">Section 1</div>
          <div className="sidebar-item">Section 2</div>
          <div className="sidebar-item">Section 3</div>
          <div className="sidebar-item">Section 4</div>
      </div>
    }

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

        return (
            <div className="App">
                <div className="filters">
                    <Sidebar
                        sidebar={this.renderSidebar()}
                        open={sidebar}
                        onSetOpen={this.toggleSidebar}
                        styles={{ sidebar: { background: 'white', width: 240 } }}
                    >
                        <i className="material-icons sidebar-icon" onClick={this.toggleSidebar}>
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
                      <Products width={600} data={products}/>
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
