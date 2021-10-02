import React, { useEffect, useState } from 'react'

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from 'reactstrap'

function Header() {
	
	const axios = require('axios');

	const [alugados,setAlugados] = useState([]);

	getUser();
	async function getUser() {
		try {
			const response = await axios.get('https://api.orbt.com.br/barbosa/index.php/getAllAluguel');
			setAlugados(response.data.data);
		} catch (error) {
			console.error(error);
		}
	}
	return (
		<>
			<div className="header bg-gradient-dark pb-7 pb-md-8 pt-5 pt-md-5">
				<Container fluid>
					<div className="header-body">
						{/* Card stats */}
						<Row>
							<Col lg="6" xl="4">
								<Card className="card-stats mb-4 mb-xl-0">
									<CardBody>
										<Row>
											<div className="col">
												<CardTitle
													tag="h5"
													className="text-uppercase text-muted mb-0"
												>
													Alugados
												</CardTitle>
												<span className="h2 font-weight-bold mb-0">
													{alugados.length}
												</span>
											</div>
											<Col className="col-auto">
												<div className="icon icon-shape bg-warning text-white rounded-circle shadow">
													<i className="fas fa-chart-bar" />
												</div>
											</Col>
										</Row>
									</CardBody>
								</Card>
							</Col>
							<Col lg="6" xl="4">
								<Card className="card-stats mb-4 mb-xl-0">
									<CardBody>
										<Row>
											<div className="col">
												<CardTitle
													tag="h5"
													className="text-uppercase text-muted mb-0"
												>
													Disponíveis
												</CardTitle>
												<span className="h2 font-weight-bold mb-0">
													2,356
												</span>
											</div>
											<Col className="col-auto">
												<div className="icon icon-shape bg-success text-white rounded-circle shadow">
													<i className="fas fa-chart-pie" />
												</div>
											</Col>
										</Row>
									</CardBody>
								</Card>
							</Col>
							<Col lg="6" xl="4">
								<Card className="card-stats mb-4 mb-xl-0">
									<CardBody>
										<Row>
											<div className="col">
												<CardTitle
													tag="h5"
													className="text-uppercase text-muted mb-0"
												>
													Vencidos
												</CardTitle>
												<span className="h2 font-weight-bold mb-0">
													924
												</span>
											</div>
											<Col className="col-auto">
												<div className="icon icon-shape bg-danger text-white rounded-circle shadow">
													<i className="ni ni-money-coins" />
												</div>
											</Col>
										</Row>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</div>
				</Container>
			</div>
		</>
	)
}

export default Header