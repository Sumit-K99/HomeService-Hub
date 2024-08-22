import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Modal, Button, Container, Navbar, Nav, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../Home/ServiceCard';
import '../Home/HomePage.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

const HomePage = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [servicesList, setServicesList] = useState([]);
    const [selectedServiceType, setSelectedServiceType] = useState('');
    
    const scrollContainerRef = useRef(null);

    const handleLoginClick = () => {
        navigate('/login'); // Navigate to the login page
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    const handleCartClick = () => navigate('/cart');

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    const services = [
        {
            image: '/images/plumbing.jpeg',
            title: 'Plumbing Services',
            description: 'Expert plumbing services for residential and commercial needs.',
            serviceType: 'PLUMBING'
        },
        {
            image: '/images/elctrical.jpg',
            title: 'Electrical Services',
            description: 'Professional electrical repairs and installations.',
            serviceType: 'ELECTRICAL'
        },
        {
            image: '/images/professional-cleaners-.jpg',
            title: 'Cleaning Services',
            description: 'Comprehensive cleaning services for homes and offices.',
            serviceType: 'CLEANING'
        },
        {
            image: '/images/painting.jpeg',
            title: 'Painting Services',
            description: 'High-quality painting services for interiors and exteriors.',
            serviceType: 'PAINTING'
        },
        {
            image: '/images/ac.jpeg',
            title: 'HVAC Services',
            description: 'Heating, ventilation, and air conditioning services.',
            serviceType: 'AC_REPAIRE'
        },
    ];

    const handleServiceClick = (serviceType) => {
        setSelectedServiceType(serviceType);
        fetchServicesByType(serviceType);
        setShowModal(true);
    };

    const fetchServicesByType = async (serviceType) => {
        try {
            const response = await axios.get(`http://localhost:8081/api/services/${serviceType}`);
            setServicesList(response.data);
        } catch (error) {
            console.error("Error fetching services by type:", error);
        }
    };

    const handleClose = () => setShowModal(false);

    return (
        <>
             <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">HomeService Hub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                        <Button variant="outline-light" onClick={handleLoginClick}>Login</Button>
                        <Button variant="secondary" onClick={handleRegisterClick} className="ms-2">Register</Button>
                        <FaShoppingCart size={24} className="ms-3 text-light" onClick={handleCartClick} style={{ cursor: 'pointer' }} />
                    </Navbar.Collapse>
                </Container>
            </Navbar>

                        <header className="hero-section text-center text-light bg-primary py-5">
                <Container>
                    <h1 className="display-4">Welcome to HomeService Hub</h1>
                    <p className="lead">Your one-stop solution for all home services.</p>
                    <Button variant="light" size="lg">Get Started</Button>
                </Container>
            </header>


            <Container className="mt-5">
    <button className="scroll-arrow left" onClick={scrollLeft}>&lt;</button>
    <div className="horizontal-scroll-container" ref={scrollContainerRef}>
        {services.map((service, index) => (
            <div key={index} className="service-card-col" onClick={() => handleServiceClick(service.serviceType)}>
                <ServiceCard
                    image={service.image}
                    title={service.title}
                    description={service.description}
                    className="service-card"
                />
            </div>
        ))}
    </div>
    <button className="scroll-arrow right" onClick={scrollRight}>&gt;</button>
</Container>


            <section className="py-5">
    <Container>
        <Row>
            <Col md={4}>
                <Card className="custom-card" style={{ backgroundColor: '#f9f5ff' }}> {/* Light purple */}
                    <Card.Body>
                        <Card.Title>On time Services</Card.Title>
                        <Card.Text>
                            "Experience the difference with our app, where punctuality meets excellence. With a commitment to delivering on-time service every time, we ensure that your needs are met promptly and professionally. Say goodbye to delays and hello to reliability, because your time matters to us."
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="custom-card" style={{ backgroundColor: '#f5fff7' }}> {/* Light green */}
                    <Card.Body>
                        <Card.Title>Trusted by Millions</Card.Title>
                        <Card.Text>
                            "Trusted by millions, our app delivers seamless and reliable services that you can count on. Join a global community that values quality and convenience, with every booking backed by our commitment to excellence. Your satisfaction is our priority, and with a million smiles and counting, we're just getting started."
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="custom-card" style={{ backgroundColor: '#fff7f0' }}> {/* Light orange */}
                    <Card.Body>
                        <Card.Title>Genuine services</Card.Title>
                        <Card.Text>
                            "Choose authenticity with our app, where genuine services are our promise to you. We connect you with trusted professionals who deliver quality you can rely on, every time. Experience the peace of mind that comes with knowing you're getting the real deal—because integrity is at the heart of what we do."
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
</section>

                    {/* About Us Section */}
                    <section className="about-us-section pt-5 pb-0"> {/* Remove bottom padding */}
    <Container>
        <Row className="align-items-center">
            <Col md={6}>
                <div className="image-container">
                    <img src="/images/about_us.png" alt="About Us" className="img-fluid rounded img-hover-effect" />
                </div>
            </Col>
            <Col md={6}>
                <div className="text-container">
                    <h2 className="section-title">About Us</h2>
                    <p className="section-text">HomeService Hub is dedicated to providing top-notch home services that meet your needs. From plumbing and electrical work to cleaning and HVAC services, our experienced professionals are here to help.</p>
                    <p className="section-text">Our mission is to deliver reliable and high-quality services that you can trust. We prioritize customer satisfaction and strive to exceed your expectations with every service.</p>
                </div>
            </Col>
        </Row>
    </Container>
</section>

<footer className="bg-dark text-white py-3 text-center m-0"> {/* Remove top margin */}
    <Container>
        <Row>
            <Col md={6}>
                <p>&copy; 2024 HomeService Hub. All rights reserved.</p>
            </Col>
            <Col md={6}>
                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="me-3 text-white">
                        <FaFacebook size={30} />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="me-3 text-white">
                        <FaTwitter size={30} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="me-3 text-white">
                        <FaInstagram size={30} />
                    </a>
                </div>
            </Col>
        </Row>
    </Container>
</footer>



            {/* Modal for displaying services */}
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedServiceType} Packages</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {servicesList.length > 0 ? (
                        <ul>
                            {servicesList.map((service, index) => (
                                <li key={index}>
                                    <strong>{service.title}</strong> - ${service.price}
                                    <p>{service.description}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No packages available.</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default HomePage;
