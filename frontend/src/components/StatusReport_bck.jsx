import React from 'react'

import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

import Topo from "./Topo";
import Filter from "./Filter";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

export default class StatusReport extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <Topo />  
        <br />
        <Filter />
        <br />
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName",
                  sort: true,
                  filter: textFilter()
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName,
                  sort: true,
                  filter: textFilter()
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age",
                  sort: true,
                  filter: textFilter()
                },
                {
                  Header: "Status",
                  accessor: "status",
                  sort: true,
                  filter: textFilter()
                }
              ]
            },
            {
              Header: 'Stats',
              columns: [
                {
                  Header: "Visits",
                  accessor: "visits"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

