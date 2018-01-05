import React from 'react';
import ReactTable from 'react-table';

const Table = (props) => {
    const columns = [
        {
            Header: 'Rank',
            width: 100, 
            Cell: row => (
                <span>{row.viewIndex + 1}</span>
      )
        },
        {
            Header: 'Team Name',
            accessor: 'name',
        },
        {
            Header: 'Players',
            accessor: 'qb',
            Cell: row => (
                <div>
                    <p>{row.original.qb.name}: {row.original.qb.points}</p>
                    <p>{row.original.rb.name}: {row.original.rb.points}</p>
                    <p>{row.original.wr.name}: {row.original.wr.points}</p>
                </div>    
            )
        },
        {
            Header: 'Points',
            accessor: 'points',
            Cell: row => (
                <div>
                    <p>{row.original.qb.points + row.original.rb.points + row.original.wr.points}</p>
                </div>    
            )
        },
    ];

    return (
        <div>
            {props.teams.length > 0 &&
                
                <ReactTable
                    data={props.teams}
                    columns={columns}
                />
                
            }
        </div>
    );
};

export default Table 