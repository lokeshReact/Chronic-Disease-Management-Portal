import React, {useState, useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { Link } from "react-router-dom";

const ProfileView = () => {
    const [patientProfileDetails, setPatientProfileDetails] = useState();
    const getPatientDetails = async() => {
        try{
            const res = await axios.get("http://localhost:5000/getPatientDetails");
            const patientProfileData = JSON.parse(res.data);
            console.log(patientProfileData, 'patientProfileData');
            setPatientProfileDetails(patientProfileData);   
        } catch(err){
            console.log(err)
        }
        
    }
    useEffect(()=>{
        getPatientDetails();
    }, []);
    return (
        <>
        <div>
            <h1 className="view-sec">Patient Information</h1>
            <Link to="/">Go Back</Link>            
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>            
                <TableCell >Name</TableCell>
                <TableCell >disease&nbsp;(g)</TableCell>
                <TableCell >Address&nbsp;(g)</TableCell>                
              </TableRow>
            </TableHead>
            <TableBody>
              {patientProfileDetails && patientProfileDetails.map((patientProfileDetail) => (
                <TableRow key={patientProfileDetail.id.toString()}>
                  <TableCell >{patientProfileDetail.name}</TableCell>
                  <TableCell >{patientProfileDetail.disease}</TableCell>
                  <TableCell >{patientProfileDetail.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </>
      );    
}

export default ProfileView;