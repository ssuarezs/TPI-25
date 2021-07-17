import { AsyncStorage } from 'react-native';
const makeType = mod => type => `${mod}/${type}`

const mac = (type, ...argNames) => (...args) => {
    const action = { type }
    argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index]
    })
    return action
}

const createReducer = (IS, handlers) =>
    (state = IS, action) => {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }

const l = makeType('LISTA')

const FETCH_START = l('fetch-start')
const FETCH_SUCCESS = l('fetch-success')
const FETCH_ERROR = l('fetch-error')
const SUBMIT = l('submit')
const DELETE_ELEMENT = l('element-delete')

const startFetch = mac(FETCH_START)
const successFetch = mac(FETCH_SUCCESS, 'payload')
const errorFetch = mac(FETCH_ERROR, 'error')
const submit = mac(SUBMIT, 'payload')
const deleteElement = mac(DELETE_ELEMENT, 'payload')

const initialState = {
    data: [
        {
            "coordinate": {
              "latitude": 4.2120368,
              "longitude": -74.6340045,
            },
            "name": "Tu Primera Ubicacion",
        },
    ],
    fetched: false,
    fetching: false,
}

const fetchStartReduce = (state) => ({ ...state, fetching: true })
const fetchSuccessReduce = (state, action) => ({
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload
    })
const fetchErrorReduce = (state, action) => ({ ...state, fetching: false, error: action.error })
const submitReduce = (state, action) => ({
    ...state,
    data: [action.payload].concat(state.data)
})
const deleteReduce = (state, action) => {
    const data = state.data
    data.forEach((item, index) =>{
        item.key === action.payload ? (state.data.splice(index, 1)) : null
    })
    return state
}

export default createReducer(initialState, {
    [FETCH_START]: fetchStartReduce,
    [FETCH_SUCCESS]: fetchSuccessReduce,
    [FETCH_ERROR]: fetchErrorReduce,
    [SUBMIT]: submitReduce,
    [DELETE_ELEMENT]: deleteReduce,
})

export const fetchLug = () =>
    async (dispatch, getState) => {
        dispatch(startFetch())
        try {
            const obtenidos = await AsyncStorage.getItem('Puntos')
            const data = JSON.parse(obtenidos)
            if(data){
                dispatch(successFetch(data))
            }else{
                const data = JSON.stringify(initialState.data);
                await AsyncStorage.setItem('Puntos', data)
            }
        } catch(e) {
            dispatch(errorFetch(e))
        }
    }

export const deleteLug = itemKey =>
    async (dispatch, getState) => {
        dispatch(deleteElement(itemKey))
        const state = getState()
        try {
            const data = JSON.stringify(state.listaL.data);
            await AsyncStorage.setItem('Puntos', data)
        } catch(e) {
            dispatch(errorFetch(e))
        }
    }

export const saveLug = lugar =>
    async (dispatch, getState) => {
        dispatch(submit(lugar))
        const state = getState()
        try {
            const data = JSON.stringify(state.listaL.data);
            await AsyncStorage.setItem('Puntos', data)
        } catch(e) {
            dispatch(errorFetch(e))
        }
    }

