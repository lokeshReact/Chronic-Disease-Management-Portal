import {GET_PATIENT_DATA, GET_PATIENT_SUCCESS, GET_PATIENT_FAILED, 
        GET_HEALTHCARE_PROVIDER_DATA, GET_HEALTHCARE_PROVIDER_DATA_SUCCES, 
        GET_HEALTHCARE_PROVIDER_DATA_FAILED} from './constant'

export const getPatient = () => ({type: "GET_PATIENT_DATA", payload: patientDetils});

export const getPatientSucces = () => ({type: "GET_PATIENT_SUCCESS"});

export const getPatientFail = () => ({type: "GET_PATIENT_FAILED"});


export const getHealthcareProvider = () => ({type: "GET_PATIENT_DATA", payload: patientDetils});

export const setHealthcareProviderSucces = () => ({type: "GET_PATIENT_SUCCESS"});

export const setHealthcareProviderFail = () => ({type: "GET_PATIENT_FAILED"});
