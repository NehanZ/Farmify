import React from 'react';
import './cropdetalis.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { useParams } from 'react-router-dom';
import cropData from '../../assets/data/crops.js';
import '../../global.css'

const CropDetails = () => {
  const { id } = useParams();


  const crop = cropData.find(crop => crop.id === id);


  const {
    name,
    introduction,
    photo,
    climate_soil_requirements,
    planting,
    cultivation_practices,
    pest_disease_management,
    harvesting,
    yield_economics,
    processing_value_addition,
    sustainability_practices,
    research_development,
    case_studies,
    resources_support,
    faqs,
    multimedia_resources,
  } = crop;

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="crop_content">
                <div className="crop_top">
                  <img src={photo} alt={`${name}`} />
                  <h2>{name}</h2>
                  <p>{introduction}</p>
                </div>
                <div className="crop_info">

                  <h4>Climate and Soil Requirements</h4>
                  <ListGroup>
                    <ListGroupItem><i class="bi bi-thermometer-half"></i>Temperature: {climate_soil_requirements.temperature}</ListGroupItem>
                    <ListGroupItem><i class="bi bi-cloud-drizzle"></i>Rainfall: {climate_soil_requirements.rainfall}</ListGroupItem>
                    <ListGroupItem><i class="bi bi-moisture"></i>Soil Type: {climate_soil_requirements.soil_type}</ListGroupItem>
                  </ListGroup>

                  <h4>Planting</h4>
                  <ListGroup>
                    <ListGroupItem><i class="bi bi-tree"></i>Method: {planting.method}</ListGroupItem>
                    <ListGroupItem><i class="bi bi-tree"></i>Season: {planting.season}</ListGroupItem>
                  </ListGroup>

                  <h4>Cultivation Practices</h4>
                  <ListGroup>
                    <ListGroupItem><i class="bi bi-chevron-right"></i>Irrigation: {cultivation_practices.irrigation}</ListGroupItem>
                    <ListGroupItem><i class="bi bi-chevron-right"></i>Fertilization: {cultivation_practices.fertilization}</ListGroupItem>
                  </ListGroup>

                  <h4>Pest and Disease Management</h4>
                  <ListGroup>
                    <ListGroupItem><i class="bi bi-record-fill"></i>Pests: {pest_disease_management.pests.join(', ')}</ListGroupItem>
                    <ListGroupItem><i class="bi bi-record-fill"></i>Diseases: {pest_disease_management.diseases.join(', ')}</ListGroupItem>
                    <ListGroupItem><i class="bi bi-record-fill"></i>Control Methods: {pest_disease_management.control_methods.join(', ')}</ListGroupItem>
                  </ListGroup>

                  <h4>Harvesting</h4>
                  <ListGroup>
                    <ListGroupItem><i class="bi bi-clock-history"></i>Method: {harvesting.method}</ListGroupItem>
                    <ListGroupItem><i class="bi bi-clock-history"></i>Time: {harvesting.time}</ListGroupItem>
                  </ListGroup>

                  <h4>Yield and Economics</h4>
                  <ListGroup>
                    <ListGroupItem><i class="bi bi-currency-dollar"></i>Average Yield: {yield_economics.average_yield}</ListGroupItem>
                    <ListGroupItem><i class="bi bi-currency-dollar"></i>Market Price: {yield_economics.market_price}</ListGroupItem>
                  </ListGroup>

                  <h4>Processing and Value Addition</h4>
                  <ListGroup>
                    <ListGroupItem><i class="bi bi-bag-check"></i>Products: {processing_value_addition.products.join(', ')}</ListGroupItem>
                  </ListGroup>

                  <h4>Sustainability Practices</h4>
                  <ListGroup>
                    {sustainability_practices.map((practice, index) => (
                      <ListGroupItem key={index}>{practice}</ListGroupItem>
                    ))}
                  </ListGroup>

                  <h4>Research and Development</h4>
                  <ListGroup>
                    <ListGroupItem>Focus Areas: {research_development.focus_areas.join(', ')}</ListGroupItem>
                  </ListGroup>

                  <h4>Case Studies</h4>
                  {case_studies.map((caseStudy, index) => (
                    <div key={index}>
                      <h5>{caseStudy.title}</h5>
                      <p>{caseStudy.summary}</p>
                    </div>
                  ))}

                  <h4>Resources and Support</h4>
                  <ListGroup>
                    <ListGroupItem>Government Agencies: {resources_support.government_agencies.join(', ')}</ListGroupItem>
                    <ListGroupItem>Farmer Organizations: {resources_support.farmer_organizations.join(', ')}</ListGroupItem>
                  </ListGroup>

                  <h4>Frequently Asked Questions</h4>
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <p>Q: {faq.question}</p>
                      <p>A: {faq.answer}</p>
                    </div>
                  ))}

                  <h4>Multimedia Resources</h4>
                  {/* <ListGroup>
                    <ListGroupItem>
                      <a href={multimedia_resources.planting_guide_video}>Planting Guide Video</a>
                    </ListGroupItem>
                    <ListGroupItem>
                      <a href={multimedia_resources.pest_identification_app}>Pest Identification App</a>
                    </ListGroupItem>
                    <ListGroupItem>
                      <a href={multimedia_resources.yield_calculator}>Yield Calculator</a>
                    </ListGroupItem>
                  </ListGroup> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CropDetails;
