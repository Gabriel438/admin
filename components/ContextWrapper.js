import { useState } from 'react'
import HeaderContext from '../contexts/HeaderContext'

function ContextWrapper({children}) {
    const axios = require('axios');

	const [alugados,setAlugados] = useState(0);
	const [disponiveis,setDisponiveis] = useState(0);
	const [vencidos,setVencidos] = useState(0);

	getDados();
	async function getDados() {
		try {
			const response = await axios.get('https://api.orbt.com.br/barbosa/index.php/getAllAluguel');
            if(response.data.alugados){
                setAlugados(response.data.alugados.length);
            }
            if(response.data.disponiveis){
                setDisponiveis(response.data.disponiveis.length);
            }
            if(response.data.vencidos){
                setVencidos(response.data.vencidos.length);
            }
		} catch (error) {
			console.error(error);
		}
	}

    return (
        <HeaderContext.Provider value={{alugados,disponiveis,vencidos}}>
            {children}
        </HeaderContext.Provider>
    )
}

export default ContextWrapper