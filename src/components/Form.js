import React, { useState } from "react";
import { TextField, Button, Grid, Box, MenuItem, Avatar, Typography } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import FormControl from "@mui/material/FormControl";


const InputForm = ({ onFormSubmit }) => {

  const [currentId, setCurrentId] = useState(1);
  const initialStudent = {
    id: currentId,
    name: "",
    age: "",
    gender: "",
    address: [{ street: "", city: "", zip: "", country: "" }],
    email: "",
    phone: "",
    courses: [],
    gpa: "",
    image: "",
  };

  const [student, setStudent] = useState(initialStudent);
  const [coursesList] = useState([
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
  ]);

  const handleCourseChange = (event) => {
    const target = event.target.value;
    setStudent({ ...student, courses: target });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleAddressChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAddresses = student.address.map((addr, addrIndex) =>
      addrIndex === index ? { ...addr, [name]: value } : addr);
    setStudent({ ...student, address: updatedAddresses });
  };

  const handleAddAddress = () => {
    setStudent({
      ...student,
      address: [
        ...student.address,
        { street: "", city: "", zip: "", country: "" },
      ],
    });
  };

  const handleRemoveAddress = (index) => {
    const updatedAddresses = student.address.filter(
      (_, addrIndex) => addrIndex !== index
    );
    setStudent({ ...student, address: updatedAddresses });
  };

  const handleImageChange = (e) => {
    debugger;
    const file = e.target.files[0];
    // const reader = new FileReader();
    // reader.onloadend = () => {
    //   setStudent({ ...student, image: reader.result });
    // };
    if (file) {
      //reader.readAsDataURL(file);
      const imageUrl = URL.createObjectURL(file);
      setStudent({ ...student, image: imageUrl });
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("Student Data:", student);
    setStudent((prevStudent) => ({ ...prevStudent, id: currentId }));
    onFormSubmit(student);
    setCurrentId((prevId) => prevId + 1);
    setStudent({ ...initialStudent, id: currentId + 1 });
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Student Information Form
      </Typography>
      <form onSubmit={handleSubmitForm}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              required
              fullWidth
              label="Name"
              name="name"
              value={student.name}
              onChange={handleInputChange}
              size="small"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              fullWidth
              label="Age"
              name="age"
              value={student.age}
              onChange={handleInputChange}
              size="small"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              fullWidth
              label="Gender"
              name="gender"
              value={student.gender}
              onChange={handleInputChange}
              size="small"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              fullWidth
              label="Email"
              name="email"
              value={student.email}
              onChange={handleInputChange}
              size="small"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              fullWidth
              label="Phone"
              name="phone"
              value={student.phone}
              onChange={handleInputChange}
              size="small"
            />
          </Grid>
          {/* {[
            { label: "Name", name: "name" },
            { label: "Age", name: "age" },
            { label: "Gender", name: "gender" },
            { label: "Email", name: "email" },
            { label: "Phone", name: "phone" },
          ].map((field) => (
            <Grid item xs={12} sm={3} key={field.name}>
              <TextField
                required
                fullWidth
                label={field.label}
                name={field.name}
                value={student[field.name]}
                onChange={handleInputChange}
                size="small"
              />
            </Grid>
          ))} */}
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel id="course-label" style={{ top: "-6" }}>
                Courses
              </InputLabel>
              <Select
                labelId="course-label"
                multiple
                required
                value={student.courses}
                onChange={handleCourseChange}
                input={<OutlinedInput />}
                renderValue={(selected) => selected.join(", ")}
                size="small"
              >
                {coursesList.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={student.courses.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3}>
            <TextField
              fullWidth
              label="GPA"
              name="gpa"
              value={student.gpa}
              onChange={handleInputChange}
              size="small"
            />
          </Grid>

          {student.address.map((addr, index) => (
            <Grid item xs={12} key={index}>
              <Box display="flex" alignItems="center" gap={2}>
                <TextField
                  required
                  label="Street"
                  name="street"
                  value={addr.street}
                  onChange={(e) => handleAddressChange(index, e)}
                  size="small"
                  style={{ marginRight: "8px" }}
                />
                <TextField
                  required
                  label="City"
                  name="city"
                  value={addr.city}
                  onChange={(e) => handleAddressChange(index, e)}
                  size="small"
                  style={{ marginRight: "8px" }}
                />
                <TextField
                  required
                  label="Zip"
                  name="zip"
                  value={addr.zip}
                  onChange={(e) => handleAddressChange(index, e)}
                  size="small"
                  style={{ marginRight: "8px" }}
                />
                <TextField
                  required
                  label="Country"
                  name="country"
                  value={addr.country}
                  onChange={(e) => handleAddressChange(index, e)}
                  size="small"
                  style={{ marginRight: "8px" }}
                />
                {/* {["street", "city", "zip", "country"].map((field) => (
          <TextField
            key={field}
            required
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            name={field}
            value={addr[field]}
            onChange={(e) => handleAddressChange(index, e)}
            size="small"
            style={{ marginRight: "8px" }}
          /> */}
               {index>0?<Button
                  variant="outlined"
                  onClick={() => handleRemoveAddress(index)}
                  size="small"
                  color="error"
                >
                  Remove
                </Button>:<></>} 
              </Box>
            </Grid>
          ))}

          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleAddAddress}
              size="small"
            >
              Add Address
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" alignItems="center" gap={2}>
              <input
                required
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file"
                type="file"
                onChange={handleImageChange}
                size="small"
              />
              <label htmlFor="raised-button-file">
                <Button variant="outlined" component="span" size="small">
                  Upload Image
                </Button>
              </label>
              {student.image && (
                <Avatar src={student.image} alt="Student Image" />
              )}
            </Box>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent={"center"}>
            <Button
              type="submit"
              size="small"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default InputForm;
