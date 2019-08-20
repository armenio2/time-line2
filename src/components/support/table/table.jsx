import React from 'react';
import RowTable from './rowTable/rowTable';


const buildTable = (data) => {
    const result = data.map(element => {
        return <RowTable key={element.id} name={element.name} email={element.email} id={element.id} title={element.title} body={element.body} />
    });
    return result
}

/**
 * EX: data: {avatar , name, email}{avatar2 , name2, email2}{avatar3 , name3, email3} 
 * EX2: DATA:   {avatar , title, body} {avatar2 , title2, body2}{avatar3 , title3, body3}
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
