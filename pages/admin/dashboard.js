import React, { useEffect, useState } from 'react'
// node.js library that concatenates classes (strings)
import classnames from 'classnames'
// javascipt plugin for creating charts
import Chart from 'chart.js'
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2'
// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	NavItem,
	NavLink,
	Nav,
	Progress,
	Table,
	Container,
	Row,
	Col,
	Pagination,
	PaginationItem,
	PaginationLink,
	Badge,
} from 'reactstrap'
// layout for this page
import Admin from 'layouts/Admin.js'
// core components
import {
	chartOptions,
	parseOptions,
	chartExample1,
	chartExample2,
} from 'variables/charts.js'

import Header from 'components/Headers/Header.js'
import useSWR from 'swr'
const Dashboard = props => {

	const axios = require('axios');

	const [activeNav, setActiveNav] = React.useState(1)
	const [chartExample1Data, setChartExample1Data] = React.useState('data1')

	if (window.Chart) {
		parseOptions(Chart, chartOptions())
	}

	const [alugados,setAlugados] = useState([]);
	const [vencidos,setVencidos] = useState([]);

	const toggleNavs = (e, index) => {
		e.preventDefault()
		setActiveNav(index)
		setChartExample1Data('data' + index)
	}
	getAlugueis();
	async function getAlugueis() {
		try {
			const response = await axios.get('https://api.orbt.com.br/barbosa/index.php/getAllAluguel');
			if(response.data.alugados){
                setAlugados(response.data.alugados);
            }
            if(response.data.vencidos){
                setVencidos(response.data.vencidos);
            }
		} catch (error) {
			console.error(error);
		}
	}
	return (
		<>
			<Header />
			{/* Page content */}
			<Container className="mt--8" fluid>
				<Row className="mt-5">
					<Col className="mb-5 mb-xl-0" xl="12">
						<Card className="shadow">
							<CardHeader className="border-0">
								<Row className="align-items-center">
									<div className="col">
										<h3 className="mb-0">Container</h3>
									</div>
								</Row>
							</CardHeader>
							<Table
								className="align-items-center table-flush"
								responsive
							>
								<thead className="thead-light">
									<tr>
										<th scope="col">Cliente</th>
										<th scope="col">Endereço</th>
										<th scope="col">Data de Vencimento</th>
										<th scope="col">Status</th>
										<th scope="col"></th>
									</tr>
								</thead>
								<tbody>
								{alugados &&
									alugados.map(inc => (
									<tr>
										<th scope="row">{inc.cliente}</th>
										<td>
											{inc.endereco},{inc.numero} {inc.bairro} - {inc.cidade}
										</td>
										<td>{inc.data_aluguel}</td>
										<td>
											<Badge
												color=""
												className="badge-dot mr-4"
											>
												<i className="bg-danger" />
												Em aberto
											</Badge>
										</td>
									</tr>
									))}
								{vencidos &&
									vencidos.map(inc => (
									<tr>
										<th scope="row">{inc.cliente}</th>
										<td>
											{inc.endereco},{inc.numero} {inc.bairro} - {inc.cidade}
										</td>
										<td>{inc.data_aluguel}</td>
										<td>
											<Badge
												color=""
												className="badge-dot mr-4"
											>
												<i className="bg-success" />
												Pago
											</Badge>
										</td>
									</tr>
									))}
								</tbody>
							</Table>
							<CardFooter className="py-4">
								<nav aria-label="...">
									<Pagination
										className="pagination justify-content-end mb-0"
										listClassName="justify-content-end mb-0"
									>
										<PaginationItem className="disabled">
											<PaginationLink
												href="#pablo"
												onClick={e =>
													e.preventDefault()
												}
												tabIndex="-1"
											>
												<i className="fas fa-angle-left" />
												<span className="sr-only">
													Previous
												</span>
											</PaginationLink>
										</PaginationItem>
										<PaginationItem className="active">
											<PaginationLink
												href="#pablo"
												onClick={e =>
													e.preventDefault()
												}
											>
												1
											</PaginationLink>
										</PaginationItem>
										<PaginationItem>
											<PaginationLink
												href="#pablo"
												onClick={e =>
													e.preventDefault()
												}
											>
												<i className="fas fa-angle-right" />
												<span className="sr-only">
													Next
												</span>
											</PaginationLink>
										</PaginationItem>
									</Pagination>
								</nav>
							</CardFooter>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	)
}

Dashboard.layout = Admin

export default Dashboard
