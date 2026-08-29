import { Component } from "react"

import AppFilter from "../app-filter/app-filter"
import AppInfo from "../app-info/app-info"
import EmployeesAddFrom from "../employees-add-form/employees-add-form"
import EmployeesList from "../employees-list/employees-list"
import SearchPanel from "../search-panel/search-panel"

import "./app.css"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    name: "John S.",
                    salary: 800,
                    increase: false,
                    rise: true,
                    id: 1,
                },
                {
                    name: "Alex H.",
                    salary: 3000,
                    increase: true,
                    rise: false,
                    id: 2,
                },
                {
                    name: "Carl J.",
                    salary: 18000,
                    increase: false,
                    rise: false,
                    id: 3,
                },
            ],
            term: "",
            filter: "all",
        }
        this.maxId = 4
    }

    onUpdateSerch = (term) => {
        this.setState({ term })
    }

    onToggleProp = (id, prop) => {
        // this.setState(({ data }) => {
        //     const index = data.findIndex((el) => el.id === id)
        //     const old = data[index]
        //     const newItem = { ...old, increase: !old.increase }
        //     const newArr = [
        //         ...data.slice(0, index),
        //         newItem,
        //         ...data.slice(index + 1),
        //     ]
        //     return {
        //         data: newArr,
        //     }
        // })

        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item
            }),
        }))
    }

    changeSalary = (id, newSalary) => {
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, salary: newSalary }
                }
                return item
            }),
        }))
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            // console.log(data)
            // const index = data.findIndex((elem) => elem.id === id)
            // console.log(`нашел элемент с id ${id} и его индекс ${index}`)

            // const before = data.slice(0, index)
            // const after = data.slice(index + 1)
            // const newArray = [...before, ...after]

            // console.log("before", before)
            // console.log("after", after)

            // console.log("newArray", newArray)

            return {
                data: data.filter((item) => item.id !== id),
            }
        })
    }
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++,
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem]
            return {
                data: newArr,
            }
        })
    }

    serchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.name.indexOf(term) > -1
        })
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case "rise":
                return items.filter((item) => item.rise)
            case "moreThen1000":
                return items.filter((item) => item.salary > 1000)
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter })
    }

    render() {
        const { data, term, filter } = this.state

        const employees = this.state.data.length
        const increased = this.state.data.filter((item) => item.increase).length
        const visibleData = this.filterPost(this.serchEmp(data, term), filter)

        console.log("look", this.state)

        return (
            <div className="app">
                <AppInfo employees0={employees} increased0={increased} />

                <div className="search-panel">
                    <SearchPanel onUpdateSerch0={this.onUpdateSerch} />
                    <AppFilter
                        filter={filter}
                        onFilterSelect0={this.onFilterSelect}
                    />
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete0={this.deleteItem}
                    onToggleProp0={this.onToggleProp}
                    changeSalary={this.changeSalary}
                />
                <EmployeesAddFrom onAdd={this.addItem} />
            </div>
        )
    }
}

export default App
