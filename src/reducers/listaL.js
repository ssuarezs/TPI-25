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

const startFetch = mac(FETCH_START)
const successFetch = mac(FETCH_SUCCESS, 'payload')
const errorFetch = mac(FETCH_ERROR, 'error')

const initialState = {
    data: [],
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

export default createReducer(initialState, {
    [FETCH_START]: fetchStartReduce,
    [FETCH_SUCCESS]: fetchSuccessReduce,
    [FETCH_ERROR]: fetchErrorReduce,
})

export const fetchLug = () =>
    async (dispatch) => {
        dispatch(startFetch())
        try {
            const response = await require('./listaLugares.json')
            const data = response.data
            dispatch(successFetch(data))
        } catch(e) {
            dispatch(errorFetch(e))
        }
    }

