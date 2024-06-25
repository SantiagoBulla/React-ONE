import { useReducer } from "react";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(); // crear el contexto

const initialState = {
    consulta: '',
    fotosDeGaleria: [],
    fotoSeleccionada: null,
    modalAbierto: false
}

const reducers = (state, action) => {
    switch (action.type) {
        case 'SET_CONSULTA':
            return { ...state, consulta: action.payload }
        case 'SET_FOTOS_DE_GALERIA':
            return { ...state, fotosDeGaleria: action.payload }
        case 'SET_FOTO_SELECCIONADA':
            return {
                ...state,
                fotoSeleccionada: action.payload,
                modalAbierto: action.payload != null ? true : false
            }
        case 'ALTERNAR_FAVORITO':
            const fotosDeGaleria = state.fotosDeGaleria.map(fotoDeGaleria => {
                return {
                    ...fotoDeGaleria,
                    favorita: fotoDeGaleria.id === action.payload.id ? !action.payload.favorita : fotoDeGaleria.favorita
                }
            });
            if (action.payload.id === state.fotoSeleccionada?.id) {
                return {
                    ...state,
                    fotosDeGaleria: fotosDeGaleria,
                    fotoSeleccionada: {
                        ...state.fotoSeleccionada, favorita: !state.fotoSeleccionada.favorita
                    }
                }
            } else {
                return {
                    ...state,
                    fotosDeGaleria: fotosDeGaleria,
                }
            }
        default:
            return state;
    }
};

const GlobalContextPrivider = ({ children }) => {

    // const [consulta, setConsulta] = useState('')
    // const [fotosDeGaleria, setFotosDeGaleria] = useState([])
    // const [fotoSeleccionada, setFotoSeleccionada] = useState(null)
    // const [state, setState] = useReducer(reducers, initialState)
    const [state, dispatch] = useReducer(reducers, initialState)

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:3000/fotos');
            const data = await response.json();
            //setFotosDeGaleria([...data]); // al usar el spread operator garantizamos que se actualice el estado
            dispatch({ type: 'SET_FOTOS_DE_GALERIA', payload: data })
        }
        setTimeout(() => getData(), 3000);
    }, [])

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextPrivider