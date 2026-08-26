import EmployeeListItem from "../employees-list-item/employees-list-item"

import "./employees-list.css"

const EmployeesList = ({ data, onDelete0 }) => {
    // console.log("data", data)
    const elements = data.map((i, index) => {
        const { id, ...iProps } = i
        // console.log("i", i)
        // return <EmployeeListItem name={i.name} salary={i.salary} />
        return (
            <EmployeeListItem
                key={id}
                {...iProps}
                onDelete={() => onDelete0(id)}
            />
        )
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
