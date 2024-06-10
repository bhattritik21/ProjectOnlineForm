import React, { useState } from "react";
import {
  Container,
  Grid,
} from "@mui/material";
import StudentCard from "./components/StudentCard";
import InputForm from "./components/Form";

const App = () => {
    const result = {
        id: 1,
        name: "John Doe",
        age: 20,
        gender: "Male",
        address: [
          {
            street: "123 Main Street",
            city: "Cityville",
            zip: "12345",
            country: "USA",
          },
          {
            street: "Chase Street",
            city: "Cityville",
            zip: "88264",
            country: "INDIA",
          },
        ],
        email: "john.doe@example.com",
        phone: "555-123-4567",
        courses: ["Mathematics", "Physics"],
        gpa: 3.8,
        image: "https://fakeimg.pl/500x500/cc6600",
      };
    
      const [studentdata, setStudentData] = useState([result]);
    
      const handleSubmit = (student) => {
        setStudentData([...studentdata, student]);
      };
    
      return (
        <Container>
          <InputForm onFormSubmit={handleSubmit}/>
          <Grid container spacing={3} style={{marginTop:"20px"}}>
            {studentdata?.map((student) => (
              <StudentCard  student={student}/>
            ))}
          </Grid>
        </Container>
      );
}

export default App