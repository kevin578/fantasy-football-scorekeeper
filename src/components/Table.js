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
            id: 'points',
            Cell: row => (
                <div>
                    <p>{row.original.points}</p>
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
                sorted={[{ // the sorting model for the table
                    id: 'points',
                    desc: true
                }]}
                />
                
            }
        </div>
    );
};

export default Table 

