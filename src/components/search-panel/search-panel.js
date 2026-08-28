import { Component } from "react"

import "./search-panel.css"

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: "",
        }
    }

    onUpdateSerchPanel = (e) => {
        const terminator = e.target.value
        this.setState({ term: terminator })
        this.props.onUpdateSerch0(terminator)
    }
    render() {
        return (
            <input
                type="text"
                className="search-input form-control"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSerchPanel}
            />
        )
    }
}

export default SearchPanel
