import React from "react";
import { Container, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import SingleResult from "./SingleResult";

function Results({
  results,
  addNomination,
  keyword,
  nominations,
  handlePageClick,
  totalResults,
}) {
  return (
    <Container
      style={{ backgroundColor: "lightgray", padding: "3em", marginTop: "2em" }}
    >
      <h1>Results for "{keyword}"</h1>
      <Row>
        {results &&
          results.map((result, idx) => (
            <SingleResult
              key={idx}
              result={result}
              addNomination={addNomination}
              nominations={nominations}
            />
          ))}
      </Row>
      <Row className="mt-5">
        <ReactPaginate
          className="waves-effect"
          previousLabel="prev"
          nextLabel="next"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={Math.ceil(totalResults / 10)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </Row>
    </Container>
  );
}

export default Results;
