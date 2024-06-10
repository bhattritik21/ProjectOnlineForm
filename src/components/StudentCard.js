import React from "react";
import { Grid, Typography, Avatar, Card, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";

const StudentCard = ({ student }) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={student.email}>
      <Card style={{ textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {student.image && (
            <Avatar
              src={student.image}
              alt="Student Image"
              style={{ width: 100, height: 100 }}
            />
          )}
        </div>
        <Typography gutterBottom variant="h5" component="div">
          {student.name}
        </Typography>
        <CardContent style={{textAlign:"start"}}>
          <Typography variant="body2" color="textSecondary">
            Age: {student.age}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Gender: {student.gender}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Email: {student.email}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Number: {student.phone}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Courses: {student.courses.join(", ")}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            GPA: {student.gpa}
          </Typography>
          {student.address.map((addr, index) => (
            <Typography key={index} variant="body2" color="textSecondary">
              Address {index+1}: {addr.street}, {addr.city}, {addr.zip}, {addr.country}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default StudentCard;
