import { Tab, Tabs } from 'react-bootstrap';
import img1 from '../assets/img/features-1.jpg'
import img2 from '../assets/img/features-2.jpg'

function Features() {
  return (
    <section id="features" className="features section-bg">
      <div className="container" data-aos="fade-up">
        <Tabs defaultActiveKey="modisit" className="nav-tabs  g-2 d-">
          <Tab eventKey="modisit" title="Modisit">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
                <h3>Voluptatem dignissimos provident</h3>
                <p className="fst-italic">Lorem ips</p>
                <ul className='list-unstyled'>
                  <li><i className="bi bi-check2-all"></i> Ullaonsequat.</li>
                  <li><i className="bi bi-check2-all"></i> Duiluptate velit.</li>
                  <li><i className="bi bi-check2-all"></i> Ullamco laborieprehene eu fugiat nulla pariatur.</li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                <img src={img1} alt="" className="img-fluid" />
              </div>
            </div>
          </Tab>
          <Tab eventKey="praesenti" title="Praesenti">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Neque exercitationem debitis</h3>
                <p className="fst-italic">Lorem ipsum dolor</p>
                <ul className='list-unstyled'>
                  <li><i className="bi bi-check2-all"></i> Ullamcouat.</li>
                  <li><i className="bi bi-check2-all"></i> Duielit.</li>
                  <li><i className="bi bi-check2-all"></i> Pred.</li>
                  <li><i className="bi bi-check2-all"></i> Ulliatur.</li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src={img2} alt="" className="img-fluid" />
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
}

export default Features;