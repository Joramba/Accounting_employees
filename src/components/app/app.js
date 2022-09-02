import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-fliter/app-filter';
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "John C.", salary: 800, increase: false, rise: true, id: uuidv4() },
                { name: "Kevin P.", salary: 3000, increase: true, rise: false, id: uuidv4() },
                { name: "Anton C.", salary: 500, increase: true, rise: false, id: uuidv4() },
                { name: "Georgiu B.", salary: 300, increase: false, rise: false, id: uuidv4() },
                { name: "Qui Lo", salary: 50000, increase: true, rise: false, id: uuidv4() },
            ],
            term: '',
            filter: 'all'
        };
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    onSalaryChange = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, salary: [prop] }
                }
                return item;
            })  
        }))
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: uuidv4()
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    };

    filterData = (data, filter) => {
        switch (filter) {
            case 'promotion':
                return data.filter(item => item.increase)
            case 'salary':
                return data.filter(item => item.salary > 1000)
            default:
                return data
        }
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    onFilter = (filter) => {
        this.setState({ filter });
    }

    render() {
        const { data, term, filter } = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searchEmp(data, term);
        const filteredData = this.filterData(visibleData, filter);

        return (
            <div className="app" >
                <AppInfo employees={employees} increased={increased} />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter onFilter={this.onFilter} />
                </div>
                <EmployeesList
                    data={filteredData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    salaryChange={this.onSalaryChange}
                />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;