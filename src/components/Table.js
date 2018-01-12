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
            Header: 'Wild Card',
            accessor: 'stats[0].points ',
            Cell: row => (
                <div>
                    <p>{row.original.stats[0].qb.name}: {row.original.stats[0].qb.points}</p>
                    <p>{row.original.stats[0].rb.name}: {row.original.stats[0].rb.points}</p>
                    <p>{row.original.stats[0].wr.name}: {row.original.stats[0].wr.points}</p>
                    <p>Total: {row.original.stats[0].points}</p>
                </div>
            )
        },
        // {
        //     Header: 'Divisional',
        //     accessor: 'row.orginal.stats[0].points ',
        //     Cell: row => (
        //         <div>
        //             <p>{row.original.stats[1].qb.name}: {row.original.stats[1].qb.points}</p>
        //             <p>{row.original.stats[1].rb.name}: {row.original.stats[1].rb.points}</p>
        //             <p>{row.original.stats[1].wr.name}: {row.original.stats[1].wr.points}</p>
        //             <p>Total: {row.original.stats[1].qb.points + row.original.stats[1].rb.points + row.original.stats[1].wr.points}</p>
        //         </div>
        //     )
        // },
        {
            Header: 'Total',
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
                
                <ReactTable
                data={props.team.teams}
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

