import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../shared/data";
import { TextField, Button, Rating, Typography, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useForm } from "react-hook-form";

export default function Login() {
  // const [username, setUsername] = useState(''); //remove these states
  // const [password, setPassword] = useState('');

  const { register, handleSubmit, formState:{errors} } = useForm(); //react-hooks-form item
  //register the appropriate "variables" needed in the field compoonents as below

  const [value, setValue] = useState(0);        //rating component value
  const [value2, setValue2] = useState(0);        //rating component value
  const [passwordType, setPasswordType] = useState("password");

  const { setUsernameGlobal } = useContext(UserDataContext);

  const navigate = useNavigate();

  function loginClick(formObject) {
    if (formObject.username == "Sagar" && formObject.password == "123") {
      setUsernameGlobal("Sagar");
      navigate("/home");
    } else {
      setUsernameGlobal("");
    }
  }

  function clearUsername() {
    if (passwordType == "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  }

  function apply() {
    setValue2(value);
  }

  //icons - https://mui.com/material-ui/material-icons/
  return (
    <div>
      <div className="login-form">
        {/* from react-hook-form */}
        <form onSubmit={handleSubmit(loginClick)}>
          <TextField label={"Rating Value"} value={value} onChange={e => setValue(e.target.value)}></TextField>
          <Button onClick={apply}>Apply</Button>
          <Rating value={value2} />
          <Tooltip title="This is a tooltip"><Typography>Please Login</Typography></Tooltip>

          <TextField error={errors.username} helperText={errors.username?.message} {...register('username',{ required: "Username is Required" })} label={"Username"}  type={"text"} ></TextField>

          <div style={{ position: "relative" }}>

            <TextField error={errors.password}  helperText={errors.password?.message} {...register('password',{ required: "Password is Required" })} label={"Password"} type={passwordType} ></TextField>
            <VisibilityIcon style={{ position: "absolute", right: "0", top: "10px" }} onClick={clearUsername} />

          </div>

          <Button variant="contained" type="submit">Login </Button>
        </form>
      </div>
    </div>
  );
}

//the number of input boxes generally you need that many states, managing validation is tough
// variable vs useState - force re-render -> variable does not force re-render -> useState will rerender on every CHANGE of the state
// page will rerender every time you enter a keystroke
//


//errors.username?.message  ? helps in case there are null fields in the object.

// let u={
//     username:'sagar',
//     address: {
//         city:'city'
//     }
// }

//api - reused code, web servers, and various other things.
//react app is a client/front end application
//application that provides data is called an back end app/server app/api application

//https://apipheny.io/free-api/
//https://catfact.ninja/fact
//https://official-joke-api.appspot.com/random_joke
//https://randomuser.me/api/