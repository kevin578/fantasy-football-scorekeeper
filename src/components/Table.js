import React from 'react';
import ReactTable from 'react-table';

const Table = (props) => {
    const screenSize = document.documentElement.clientWidth;
    const columns = [
        {
            Header: 'Rank',
            width: 100,
            show: screenSize > 500,
            Cell: row => (
                <span>{row.viewIndex + 1}</span>
            )
        },
        {
            Header: 'Team',
            accessor: 'name',
            width: screenSize > 500 ? 150 : 100,
            Cell: row => (
                <span>{row.value}</span>
            )
        },
        {
            Header: 'Wild Card',
            accessor: 'stats[0].points ',
            show: screenSize > 500,
            Cell: row => (
                <div>
                    <p>{row.original.stats[0].qb.name}: {row.original.stats[0].qb.points}</p>
                    <p>{row.original.stats[0].rb.name}: {row.original.stats[0].rb.points}</p>
                    <p>{row.original.stats[0].wr.name}: {row.original.stats[0].wr.points}</p>
                    <p>Week: {row.original.stats[0].points}</p>
                </div>
            )
        },
        {
            Header: 'Divisional',
            accessor: 'row.orginal.stats[1].points ',

            Cell: row => (
  
                <div>
                    { row.original.stats[1].qb.name &&
                        <div>
                            <p>{row.original.stats[1].qb.name}: {row.original.stats[1].qb.points}</p>
                            <p>{row.original.stats[1].rb.name}: {row.original.stats[1].rb.points}</p>
                            <p>{row.original.stats[1].wr.name}: {row.original.stats[1].wr.points}</p>
                        </div>
                    }    
                    <p>Week: {row.original.stats[1].qb.points + row.original.stats[1].rb.points + row.original.stats[1].wr.points}</p>
                        </div>
                
                
            )
        },
        {
            Header: 'Postseason',
            accessor: 'points',
            id: 'points',
            width: screenSize > 500 ? 250 : 100,
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
                className = "app__table"
                sorted={[{ // the sorting model for the table
                    id: 'points',
                    desc: true
                }]
                }
                />
                
            }
        </div>
    );
};

export default Table 

