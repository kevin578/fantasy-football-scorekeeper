import React from 'react';
import ReactTable from 'react-table';

const Table = (props) => {

    const calculateQBpoints = (stats) => {
        //passing yards - 5
        //passing tds -6
        //rushing tds - 15
        //rushing yards - 14
        //fumble - 31
        //interception - 46
        let qbScore = parseInt(stats.qb.stats[5], 10) || 0; 
        qbScore += parseInt(stats.qb.stats[6], 10) * 60 || 0
        qbScore += parseInt(stats.qb.stats[15], 10) * 60 || 0
        qbScore += parseInt(stats.qb.stats[14], 10) * 2 || 0
        qbScore += parseInt(stats.qb.stats[31], 10) * -45 || 0
        qbScore += parseInt(stats.qb.stats[46], 10) * -45 || 0
       
        return qbScore
    }


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
                    <p>{row.original.qb.name}: {calculateQBpoints(row.original)}</p>
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