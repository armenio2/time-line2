import React from 'react';
import RowTable from './rowTable/rowTable';


const buildTable = (data) => {
    const result = data.map(element => {
        return <RowTable key={element.id} name={element.name} email={element.email} id={element.id} />
    });
    return result
}

/**
 * EX: data: {avatar , name, email}{avatar2 , name2, email2}{avatar3 , name3, email3}   
 */
const Table = (props) => {
    const data = props.data
    const render = buildTable(data)
    return (
        <div>
            {render}
        </div>
    );
}

export default Table;
