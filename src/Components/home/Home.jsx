import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchName, getMasterData, GetUserById,CreateUpdateUser } from "./actions/home.acton";
import autoBind from "react-autobind";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 212,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserName: "",
      gender: [],
      masterDepartment: [],
      masterRoles: [],
      masterServices: [],
      masterStatus: [],
      masterEmployeePosition: [],
      id :'',
dob:'',
email:'',
firstName:'',
lastName:'',
organizationID:'',
photoPath:"",
photoBase64:'',
doj:'',
roleName:'',
npiNumber:'',
taxId:'',
roleID:"",
status:"",
phoneNumber:'',
payRate:'',
userName:'',
password:'',
totalRecords:'',
dateJoined:'',
departmentID:'',
employeePositionID:'',
genderID:'',
image:'',
photoThumbnailPath:'',
staffServicesModels:'',
    };
    autoBind(this);
    // this.fetchName = this.fetchName.bind(this);
    // this.clickFnction = this.clickFnction.bind(this);
  }
  handleChange(event) {
    debugger;
    this.setState({
      [event.target.name]: event.target.value
    })
  };
  fetchName(e) {
    this.props.fetchName(e.target.value);
  }
  componentDidMount() {
    var data = 'MASTERGENDER,MASTEREMPLOYEEPOSITION,MASTERDEPARTMENT,MASTERROLES,MASTERSERVICE,MASTERSTATUS';
    this.props.getMasterData(data);
    this.props.GetUserById(23);
  }
  clickFnction() {
    this.props.history.push("/inbox");
  }
  componentWillReceiveProps(nextProps) {
    debugger;
    if(nextProps.message!=''){
      toast.success(nextProps.message)
    }
    if(nextProps.masterData != null){
    this.setState({
      UserName: nextProps.UserName,
      gender: nextProps.masterData.masterGender,
      masterDepartment: nextProps.masterData.masterDepartment,
      masterRoles: nextProps.masterData.masterRoles,
      masterServices: nextProps.masterData.masterServices,
      masterStatus: nextProps.masterData.masterStatus,
      masterEmployeePosition: nextProps.masterData.masterEmployeePosition,
      userdata: nextProps.masterData.userdata,


     
    });
  }
    if(nextProps.userdata != null){
        this.setState({
          id: nextProps.userdata.id,
          dob: moment(nextProps.userdata.dob.substring(0,10)).format('yyyy-MM-DD'),
          email: nextProps.userdata.email,
          firstName: nextProps.userdata.firstName,
          lastName: nextProps.userdata.lastName,
          organizationID: nextProps.userdata.organizationID,
          photoPath: nextProps.userdata.photoPath,
          photoBase64: nextProps.userdata.photoBase64,
          doj:moment(nextProps.userdata.doj.substring(0,10)).format('yyyy-MM-DD'),
          roleName: nextProps.userdata.roleName,
          npiNumber: nextProps.userdata.npiNumber,
          taxId: nextProps.userdata.taxId,
          roleID: nextProps.userdata.roleID,
          status: nextProps.userdata.status,
          phoneNumber: nextProps.userdata.phoneNumber,
          payRate: nextProps.userdata.payRate,
          userName: nextProps.userdata.userName,
          password: nextProps.userdata.password,
          totalRecords: nextProps.userdata.totalRecords,
          dateJoined: nextProps.userdata.dateJoined,
          departmentID: nextProps.userdata.departmentID,
          employeePositionID: nextProps.userdata.employeePositionID,
          genderID: nextProps.userdata.gender,
          image: nextProps.userdata.image,
          photoThumbnailPath: nextProps.userdata.photoThumbnailPath,
          staffServicesModels: nextProps.userdata.staffServicesModels
        })
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let obj ={
      id: this.state.id,
          dob:this.state.dob,
          email: this.state.email,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          organizationID: this.state.organizationID,
          photoPath: this.state.photoPath,
          photoBase64: this.state.photoBase64,
          doj:this.state.doj,
          roleName: this.state.roleName,
          npiNumber: this.state.npiNumber,
          taxId: this.state.taxId,
          roleID: this.state.roleID,
          status: this.state.status,
          phoneNumber: this.state.phoneNumber,
          payRate: this.state.payRate,
          userName: this.state.userName,
          password: this.state.password,
          totalRecords: this.state.totalRecords,
          dateJoined: this.state.dateJoined,
          departmentID: this.state.departmentID,
          employeePositionID: this.state.employeePositionID,
          genderID: this.state.gender,
          image: this.state.image,
          photoThumbnailPath: this.state.photoThumbnailPath,
          staffServicesModels: this.state.staffServicesModels
    }
    this.props.CreateUpdateUser(obj);
  }
  render() {
    const { classes } = this.props;

    const masterDepartment = this.state.masterDepartment.map((x) => {

      return <MenuItem value={x.id}>
        <em>{x.departmentName}</em>
      </MenuItem>

    })

    const masterStatus = this.state.masterStatus.map((x) => {

      return <MenuItem value={x.id}>
        <em>{x.statusName}</em>
      </MenuItem>

    })

    const masterServices = this.state.masterServices.map((x) => {

      return <MenuItem value={x.id}>
        <em>{x.serviceName}</em>
      </MenuItem>

    })

    const roleName = this.state.masterRoles.map((x) => {

      return <MenuItem value={x.id}>
        <em>{x.roleName}</em>
      </MenuItem>

    })
    const gender = this.state.gender.map((x) => {

      return <MenuItem value={x.id}>
        <em>{x.gender}</em>
      </MenuItem>

    })
    const employeePosition = this.state.masterEmployeePosition.map((x) => {

      return <MenuItem value={x.id}>
        <em>{x.employeePosition}</em>
      </MenuItem>

    })
    return (
      <div className="container">
        <form className={classes.root} noValidate autoComplete="off" onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">
            <div className="col-sm-4">
              <TextField
                error={false}
                name='firstName'
                id="outlined-error-helper-text"
                label="First Name"
                defaultValue=""
                helperText=""
                variant="outlined"
                required={true}
                value={this.state.firstName}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="col-sm-4">
              <TextField
                error={false}
                name='lastName'
                id="outlined-error-helper-text"
                label="Last Name"
                defaultValue=""
                helperText=""
                variant="outlined"
                required
                value={this.state.lastName}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="col-sm-4">
              <TextField
                error={false}
                id="outlined-error-helper-text"
                label="Email"
                name='email'
                defaultValue=""
                helperText=""
                variant="outlined"
                required
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-4">
              <TextField
                error={false}
                id="outlined-error-helper-text"
                label="Contact Number"
                defaultValue=""
                name='phoneNumber'
                helperText=""
                variant="outlined"
                required
                type='number'
                value={this.state.phoneNumber}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="col-sm-4">
              <TextField
                id="date"
                label="Date of birth"
                variant="outlined"
                type="date"
                name='dob'
                value={this.state.dob}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.handleChange.bind(this)}
              />

            </div>
            <div className="col-sm-4">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Gender </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={this.state.genderID}
                  onChange={this.handleChange.bind(this)}
                  label="Gender"
                  name='genderID'
                >
                  {gender}
                </Select>
              </FormControl>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-4">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Employee Position</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={this.state.employeePositionID}
                  onChange={this.handleChange.bind(this)}
                  label="Employee Position"
                  name='employeePositionID'
                >
                  {employeePosition}
                </Select>
              </FormControl>
            </div>


            <div className="col-sm-4">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={this.state.roleID}
                  onChange={this.handleChange.bind(this)}
                  label="Role"
                  name='roleID'
                >
                  {roleName}
                </Select>
              </FormControl>
            </div>
            <div className="col-sm-4">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Department</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={this.state.departmentID}
                  onChange={this.handleChange.bind(this)}
                  label="Department"
                  name='departmentID'
                >
                  {masterDepartment}
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

          </div>
          <br />
          <div className="row">
            <div className="col-sm-4">
              <TextField
                error={false}
                id="outlined-error-helper-text"
                label="Tax Id"
                value={this.state.taxId}
                helperText=""
                variant="outlined"
                required
                type='number'
                name='taxId'
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="col-sm-4">
              <TextField
                error={false}
                id="outlined-error-helper-text"
                label="Npi"
                value={this.state.npiNumber}
                helperText=""
                variant="outlined"
                required
                type='number'
                name='npiNumber'
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="col-sm-4">
              <TextField
                error={false}
                id="outlined-error-helper-text"
                label="Pay Rate"
                value={this.state.payRate}
                helperText=""
                variant="outlined"
                required
                type='number'
                name='payRate'
                onChange={this.handleChange.bind(this)}
              />
            </div>

          </div>
          <br />
          <div className="row">
            <div className="col-sm-4">
              <TextField
                id="date"
                label="Date of Hire"
                variant="outlined"
                type="date"
                value={this.state.doj}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                name='doj'
                onChange={this.handleChange.bind(this)}
              />

            </div>
            <div className="col-sm-4">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Skills</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={''}
                  onChange={this.handleChange.bind(this)}
                  label="Skills"
                  

                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

          </div>
          < br />
          <div className="row">
            <div className="col-sm-4">
              <TextField
                error={false}
                id="outlined-error-helper-text"
                label="Username"
                value={this.state.userName}
                helperText=""
                variant="outlined"
                required
                name='userName'
                onChange={this.handleChange.bind(this)}
               
              />
            </div>
            <div className="col-sm-4">
              <TextField
                error={false}
                id="outlined-error-helper-text"
                label="Password"
                value={this.state.password}
                helperText=""
                variant="outlined"
                required
                type='text'
                name='password'
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="col-sm-4">
              <TextField
                error={false}
                id="outlined-error-helper-text"
                label="Confirm Password"
                value={this.state.password}
                helperText=""
                variant="outlined"
                required
                type='password'
                name='cpassword'
                onChange={this.handleChange.bind(this)}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <Button variant="contained" color="primary" type="submit">
              Update User
            </Button>
            <Button variant="contained" >
              cancel
            </Button>

          </div>
        </form>
        {/* <div>
          <p>This is the Home component</p>
          <TextField
            id="outlined-dense"
            label="Enter You Name"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
            onBlur={this.fetchName.bind(this)}
          />
          <p>Hello {this.state.UserName}</p>
        </div>
        <div>
          <p onClick={this.clickFnction}>
            click hear to check history.push() works
          </p>
        </div> */}
        <ToastContainer />
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  debugger;
  return {
    UserName: state.HomeReducer.UserName,
    masterData: state.HomeReducer.masterData,
    userdata: state.HomeReducer.userdata,
    message:state.HomeReducer.message,
  };
}
export default connect(
  mapStateToProps,
  { fetchName, getMasterData, GetUserById,CreateUpdateUser }
)(withStyles(styles)(Home));
