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
                { name: "John S.", salary: 800, increase: false, id: 1 },
                { name: "Alex H.", salary: 3000, increase: true, id: 2 },
                { name: "Carl J.", salary: 18000, increase: false, id: 3 },
            ],
        }
        this.maxId = 4
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
            id: this.maxId++,
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem]
            return {
                data: newArr,
            }
        })
    }

    render() {
        console.log("look", this.state.data)
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList
                    data={this.state.data}
                    onDelete0={this.deleteItem}
                />
                <EmployeesAddFrom onAdd={this.addItem} />
            </div>
        )
    }
}

export default App
