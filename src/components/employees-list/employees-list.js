import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.scss';

const EmployeesList = ({ data, onDelete, onToggleProp, onSalaryChange }) => {
    const elements = data.map(item => {
        const { id, salary, ...itemProps } = item;
        return (
            <EmployeesListItem
                key={id}
                {...itemProps}  //name={item.name} salary={item.salary} increase = {item.increase} ...;
                salary={item.salary}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                // onSalaryChange={() => onSalaryChange(id, salary)}
            />
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;