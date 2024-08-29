import React, { useState } from 'react';
import CommonSection from '../../shared/CommonSection';
import './crops.css';
import { Container, Row, Col, Button } from 'reactstrap';
import cropData from '../../assets/data/crops.js';
import CropCard from '../../shared/CropCard';
import '../../global.css'

const Crops = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cropsPerPage = 9;
  const totalPages = Math.ceil(cropData.length / cropsPerPage);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const renderCrops = () => {
    const start = (currentPage - 1) * cropsPerPage;
    const end = start + cropsPerPage;
    return cropData.slice(start, end).map((crop) => (
      <Col lg='4' key={crop.id}>
        <CropCard crop={crop} />
      </Col>
    ));
  };

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
      <p
        key={page}
        onClick={() => handlePageClick(page)}
        className={page === currentPage ? 'active' : ''}
      >
        {page}
      </p>
    ));
  };

  return (
    <>
      <CommonSection title={'All Crops'} />
      <section>
        <Container>
          <Row>
            {renderCrops()}
          </Row>
          <div className="pagination">
            <i onClick={handlePrevClick} disabled={currentPage === 1} class="bi bi-arrow-left-circle"></i>
            {renderPageNumbers()}
            <i onClick={handleNextClick} disabled={currentPage === totalPages} class="bi bi-arrow-right-circle"></i>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Crops;
