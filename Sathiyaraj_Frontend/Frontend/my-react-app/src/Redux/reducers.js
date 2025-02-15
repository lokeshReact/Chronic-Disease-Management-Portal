const initialState = {name: '', age: '', address:'', disease:''};

export const reducer = (state, action) => {
    switch(action.type){
        case 'GET_PATIENT_DATA':
         return {...state}         
        case 'GET_PATIENT_SUCCESS':
            return {...state}
        case 'GET_PATIENT_SUCCESS':
            return {...state}
        default:
            return state;
    }

}