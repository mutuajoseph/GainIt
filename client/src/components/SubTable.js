import React from 'react';
import { useTable, usePagination } from 'react-table';
import styled from 'styled-components';
import { GrNext, GrPrevious, MdEdit } from 'react-icons/all';
import { history } from '../utils/history';

const SubTable = ({ data, text, route, headers }) => {
  const handleEdit = (row) => {
    console.log('edit response', row);
  };

  const handleDelete = (item) => {
    // console.log("manage response", id)
    history.push(`${route}/${item.id}`);
  };

  const columns = React.useMemo(
    () => [
      ...headers,
      {
        Header: 'Actions',
        Cell: (row) => (
          <div>
            <button
              className='action-btn'
              style={{ marginRight: '1rem' }}
              onClick={() => handleEdit(row.row.original)}
            >
              <MdEdit />
            </button>
            <button
              className='action-btn-2'
              onClick={() => handleDelete(row.row.original)}
            >
              {text}
            </button>
          </div>
        ),
      },
    ],
    [text]
  );
  const tableInstance = useTable({ columns, data }, usePagination);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    prepareRow,
  } = tableInstance;

  return (
    <>
      <div style={{ height: 'auto', margin: '20px 0' }}>
        <TableWrap {...getTableProps()}>
          <thead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <tr
                  key={headerGroup.Header}
                  {...headerGroup.getHeaderGroupProps()}
                >
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <th {...column.getHeaderProps()}>
                        {
                          // Render the header
                          column.render('Header')
                        }
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}

          {!data.length === 0 ? (
            <>
              <tbody {...getTableBodyProps()}>
                {
                  // Loop over the table rows
                  page.map((row) => {
                    // Prepare the row for display
                    prepareRow(row);
                    return (
                      // Apply the row props
                      <tr key={row.number} {...row.getRowProps()}>
                        {
                          // Loop over the rows cells
                          row.cells.map((cell) => {
                            // Apply the cell props
                            return (
                              <>
                                <td {...cell.getCellProps()}>
                                  {
                                    // Render the cell contents
                                    cell.render('Cell')
                                  }
                                </td>
                              </>
                            );
                          })
                        }
                      </tr>
                    );
                  })
                }
              </tbody>
            </>
          ) : (
            <Wrapper>
              <p>No data to display</p>
            </Wrapper>
          )}
        </TableWrap>
        <TableActions>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <GrPrevious />
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <GrNext />
          </button>
        </TableActions>
      </div>
    </>
  );
};

export default SubTable;

const TableWrap = styled.table`
  width: 600px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  /* height: 80vh; */
  /* border: 1px solid #111; */

  > thead {
    background-color: #95a5a6;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  > thead > tr > th {
    padding: 10px 30px;
  }

  > tbody > tr {
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #84848425;
  }

  > tbody > tr > td {
    padding: 0.5rem 1.8rem;
  }
`;

const TableActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  > button {
    outline: none;
    padding: 0 0.8rem;
    border: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 15rem;
  /* right: 10rem; */
  /* background-color: red; */

  > p {
    margin-top: 0.5rem;
  }
`;
