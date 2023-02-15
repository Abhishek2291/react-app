import React from "react";
import { Col, Row } from "react-bootstrap";
import data from './data.json'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter , numberFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useLocation, useNavigate } from "react-router-dom";

const About = () => {


  

  const navigate = useNavigate()

  console.info("data+ ",data)

  const columns = [
    {
      dataField : 'id',
      text : 'Id',
      sort : true,
      filter : numberFilter()
    },
    {
      dataField : 'name',
      text : 'Name',
      sort : true,
      filter: textFilter()
    },
    {
      dataField : 'email',
      text : 'Email',
      filter: textFilter()
    }
  ]


  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing { from } to { to } of { size } Results
    </span>
  );

  const options = {
    paginationSize: 4,
    pageStartIndex: 0,
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    disablePageTitle: true,
    paginationTotalRenderer: customTotal,
  };

  


  return (
    <div>
      <section id="about" className="about">
        <div className="container">
          <Row>
            <Col className="icon-boxes d-flex flex-column align-items-stretch justify-content-center mx-auto px-lg-5 abouttop">
              <h3> Doctors </h3>
            <BootstrapTable pagination={paginationFactory(options)} keyField="id" columns={columns} data={data} filter={ filterFactory() } />
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default About;
