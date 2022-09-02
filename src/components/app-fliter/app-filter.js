import './app-filter.scss';

const AppFilter = (props) => {
    const onFilter = (e) => {
        const filter = e.target.name;
        document.querySelector('.btn-group').childNodes.forEach(item => {
            item.className = "btn btn-outline-light";
        })
        e.target.className = "btn btn-light";
        props.onFilter(filter);
    }

    return (
        <div className="btn-group">
            <button
                className="btn btn-light"
                type="button"
                name='all'
                onClick={onFilter}>
                All employees
            </button>
            <button
                className="btn btn-outline-light"
                type="button"
                name='promotion'
                onClick={onFilter}>
                For promotion
            </button>
            <button
                className="btn btn-outline-light"
                type="button"
                name='salary'
                onClick={onFilter}>
                Salary over $1000
            </button>
        </div>
    );
};

export default AppFilter;