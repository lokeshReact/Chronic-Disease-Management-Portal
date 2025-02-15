import React, {useState, useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";

const HealthcareProvider = () => {
    const [healthcareProviderDetails, setHealthcareProviderDetails] = useState();
    const gethealthcareProvider = async() => {
        try{
            const res = await axios.get("http://localhost:5000/getHealthcareProviderDetails");
        const healthcareProviderData = JSON.parse(res.data);
        console.log(healthcareProviderData, 'patientProfileData');
        setHealthcareProviderDetails(healthcareProviderData);
        }catch(err){
            console.log(err)
        }
        
    }
    useEffect(()=>{
        gethealthcareProvider();
    }, []);
    return (
        <>
        <div>
            <h1 className="view-sec">HealthcareProvider Information</h1>
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>            
                <TableCell>Name</TableCell>
                <TableCell>Address&nbsp;(g)</TableCell>                
              </TableRow>
            </TableHead>
            <TableBody>
              {healthcareProviderDetails && healthcareProviderDetails.map((healthcareProviderDetail) => (
                <TableRow key={healthcareProviderDetail.id.toString()}>
                  <TableCell >{healthcareProviderDetail.name}</TableCell>
                  <TableCell >{healthcareProviderDetail.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </>
      );    
}

export default HealthcareProvider;