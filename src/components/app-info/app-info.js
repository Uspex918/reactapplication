import "./app-info.css"

const AppInfo = ({ employees0, increased0 }) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников компании Uspex 1.2 000 000 $</h1>
            <h2>Общее число сотрудников: {employees0}</h2>
            <h2>Премию получат: {increased0}</h2>
        </div>
    )
}

export default AppInfo
