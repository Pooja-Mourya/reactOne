import React, { useState } from "react";

import { TextField, Box, Button, Typography, styled } from "@mui/material";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled("img")({
  width: 100,
  display: "flex",
  margin: "auto",
  padding: "50px 0 0"
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Login = () => {

  const SignupInitailValue = {
    name:'',
    userName:'',
    password:'',
  }
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

  const [toggel, setToggel] = useState("login");
  const [signUpState, setSignUpState] = useState(SignupInitailValue)

  const toggelButtonFunction = () =>{
     if(toggel === 'login'){
          setToggel('signUp')
     }else{
          setToggel('login')
     }
  }

  const onChangeFunction = (e) =>{
    setSignUpState({
      ...signUpState,
      [e.target.name] : e.target.value
    })
  }
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="blog" />
        {toggel === "login" ? (
          <Wrapper>
            <TextField variant="standard" label="Enter Username" />
            <TextField variant="standard" label="Enter Password" />
            <LoginButton variant="contained">Login</LoginButton>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <SignupButton onClick={()=>toggelButtonFunction()} style={{ marginBottom: 50 }}>
              Create an account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField variant="standard" label="Enter name"  onChange={(e)=>onChangeFunction(e)}/>
            <TextField variant="standard" label="Enter Username" onChange={(e)=>onChangeFunction(e)}/>
            <TextField variant="standard" label="Enter Password" onChange={(e)=>onChangeFunction(e)}/>
            <SignupButton>SignUp</SignupButton>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <LoginButton onClick={()=>toggelButtonFunction()}  variant="contained" style={{ marginBottom: 50 }}>
              already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
