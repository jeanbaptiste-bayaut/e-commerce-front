import './Pdp.scss';
import { useParams } from 'react-router-dom';
import BreadcrumbExample from '../Breadcrumb/Breadcrumb';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import VerticalExample from '../Plp/SizeSelector/SizeSelector';



function Pdp(...props: any[]) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

const product = [
    {
        "id": 1,
        "title": "T-shirt en coton",
        "short_description": "T-shirt 100% coton, coupe classique, disponible en plusieurs couleurs.",
        "price": 19.99,
        "sizes" : ["S", "M", "L", "XL"],
        "composition": [{"matiere" : "100% coton"}, {"lavage" : "Lavage en machine à 30°C"}, {"repassage" : "Ne pas repasser"}, {"sechage" : "Ne pas sécher en machine"}],
    }];

const productSizes = product[0].sizes;

const { id } = useParams();

  return (
    <div className='container'>
    <BreadcrumbExample />
    <section className="pdp-container" id={id}>
        <div className="pdp-left">
            <img src="/plp/t-shirt-plp.jpg" alt="T-shirt blanc" />
            <img src="/plp/t-shirt-plp.jpg" alt="T-shirt blanc" />
            <img src="/plp/t-shirt-plp.jpg" alt="T-shirt blanc" />
            <img src="/plp/t-shirt-plp.jpg" alt="T-shirt blanc" />
            </div>
        <div className="pdp-right">
            <h1>{product[0].title}</h1>
            <p>{product[0].short_description}</p>
            <VerticalExample sizes={productSizes} />
            <p>{product[0].price} €</p>
            <div className="button-section">
            <Button variant="secondary" onClick={handleShow} className="me-2">
                    Show details
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Details</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {product[0].composition.map((item) => (
                        <>
                            <p>{item.matiere}</p>
                            <p>{item.lavage}</p>
                            <p>{item.repassage}</p>
                            <p>{item.sechage}</p>
                        </>
                    ))}
                </Offcanvas.Body>
            </Offcanvas>
            <Button variant="dark">Add to cart</Button>
            </div>
            </div>
    </section>
    </div>
  );
}

export default Pdp;