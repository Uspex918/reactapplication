import "./employees-list-item.css"

const EmployeeListItem = (props) => {
    // { propsName, propsSalary, propsObj }

    // console.log("propsObj", propsObj)
    // console.log("propsName", propsName)
    // console.log("propsSalary", propsSalary)
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         increase: props.increase,
    //         rise: false,
    //     }
    // }
    // onIncreace = () => {
    //     this.setState(({ increase }) => ({
    //         increase: !increase,
    //     }))
    //     // console.log(this.state.increase)
    // }
    // onRice = () => {
    //     this.setState(({ rise }) => ({
    //         rise: !rise,
    //     }))
    //     // console.log(this.state.rise)
    // }

    const { name, salary, onDelete1, onTogglePropF, increase, rise } = props

    let classNames = "list-group-item d-flex justify-content-between"
    if (increase) {
        classNames += " increase"
    }
    if (rise) {
        classNames += " like"
    }

    return (
        <li className={classNames}>
            <span
                className="list-group-item-label"
                onClick={onTogglePropF}
                data-toggle="rise"
            >
                {name}
            </span>
            <input
                type="text"
                className="list-group-item-input"
                defaultValue={salary + "$"}
            />
            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn-cookie btn-sm "
                    data-toggle="increase"
                    onClick={onTogglePropF}
                >
                    <i className="fas fa-cookie"></i>
                </button>

                <button
                    type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete1}
                >
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeeListItem
