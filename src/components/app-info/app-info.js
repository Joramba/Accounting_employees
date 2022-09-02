import './app-info.scss';

const AppInfo = (props) => {
    const { increased, employees } = props;
    return (
        <div className="app-info">
            <h1>Accounting employee in company N</h1>
            <h1>Total number of employees: {employees}</h1>
            <h2>The award will be given to: {increased} </h2>
        </div>
    )
};

export default AppInfo;