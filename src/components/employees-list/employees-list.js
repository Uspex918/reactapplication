import EmployeeListItem from "../employees-list-item/employees-list-item"

import "./employees-list.css"

const EmployeesList = ({ data }) => {
    const elements = data.map((i, index) => {
        const { id, ...iProps } = i
        // console.log(id, iProps)
        // return <EmployeeListItem name={i.name} salary={i.salary} />
        return <EmployeeListItem key={id} {...iProps} />
    })

    // console.log(elements)

    return (
        <ul className="app-list list-group">
            {/* {data.map((employee) => (
                <EmployeeListItem
                    {...employee}

                    // propsName={employee.name}
                    // propsSalary={employee.salary}
                    // propsObj={employee}
                />
            ))} */}
            {elements}
        </ul>
    )
}

export default EmployeesList
