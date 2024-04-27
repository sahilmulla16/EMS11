import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { AuthContext } from "../../context/Auth";
import Topbar from "../../component/Dashboard/Topbar";
import Sidebar from "../../component/Dashboard/Sidebar";
import Header from "../../component/Header";
import { useForm, ValidationError } from "@formspree/react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";

const Workspace = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.uid;
  const [postEmail, setPostEmail] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [isPostAdded, setIsPostAdded] = useState(false);
  const [registerUser, setRegisterUser] = useState("");
  const [isadmin, setIsadmin] = useState(false);
  const [postData, setPostData] = useState("");

  useEffect(() => {
    setIsPostAdded(false);
    getPostData();
    getRegisteredUserDetail();
  }, [isPostAdded]);

  const getRegisteredUserDetail = () => {
    Axios
    .get(`https://employee-management-system-121-default-rtdb.firebaseio.com/user.json?orderBy="userEmail"&equalTo="${currentUser.email}"&print="pretty"`)
    .then((response) => {
      setRegisterUser(response.data)
      if(Object.keys(response.data).length) {
        setIsadmin(true)
      };
    })
    .catch((error) => console.log(error));
};

  //  to Add and Edit cardData in DB
  const handleAddPostData = (e) => {
    // if user wants to edit then put request is used
    Axios.post(
      `https://employee-management-system-121-default-rtdb.firebaseio.com/workspace.json`,
      {
        email: postEmail,
        message: postDescription,
        user: currentUser.email,
        Timestamp: new Date().toUTCString(),
      }
    )
      .then((response) => {
        alert("post added succesfully");
        window.location.reload();
        setIsPostAdded(true);
      })
      .catch((error) => console.log("Error" + error));

  };

  const getPostData = (email) => {
    Axios
    .get(`https://employee-management-system-121-default-rtdb.firebaseio.com/workspace.json`)
    .then((response) => {
      setPostData(response.data);
    })
    .catch((error) => console.log(error));
  };
  
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
        <div>
          <Box m="20px">
            <Header title="Workspace" subtitle="WorkSpace of Members" />
            <div className="row justify-content-start">
              <div className="col-lg-4">
                <div className="border shadow p-4">
                  <div className="card-body p-4 p-sm-5 ">
                    {/* <form
                      action="https://formspree.io/f/xknakgab"
                      method="post"
                      onSubmit={handleSubmit}
                    > */}
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <TextField
                        fullWidth
                        id="outlined-basic email margin-normal"
                        label="Email Address"
                        variant="outlined"
                        type="email"
                        name="email"
                        margin="normal"
                        value={postEmail}
                        onChange={(event) => setPostEmail(event.target.value)}
                      />
                      {/* <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        /> */}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <TextField
                        fullWidth
                        id="outlined-multiline-static message margin-normal"
                        label="Message"
                        variant="outlined"
                        name="message"
                        margin="normal"
                        multiline
                        rows={7}
                        col
                        value={postDescription}
                        onChange={(event) =>
                          setPostDescription(event.target.value)
                        }
                      />
                      {/* <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                        /> */}
                    </Box>
                    <Button
                      variant="contained"
                      type="submit"
                      // disabled={state.submitting}
                      onClick={handleAddPostData}
                    >
                      Submit
                    </Button>
                    {/* </form> */}
                  </div>
                </div>
              </div>
              {isadmin ? 
              <div className="col-lg-8">
                <div className="border p-4 shadow">
                  <h4 className="">Keylogger</h4>
                 
                    <>
                      <table class="table table-striped table-hover table-bordered border-primary">
                        <thead>
                          <tr>
                            <th scope="col">
                              <h6>#</h6>
                            </th>
                            <th scope="col">
                              <h6>user</h6>
                            </th>
                           <th scope="col">
                              <h6>Email</h6>
                            </th>
                            <th scope="col">
                              <h6>Message</h6>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                  {postData ? 
                  Object.entries(postData).map((item, index) => (
                    <tr key={item[1]}>
                      <th scope="row">{index + 1} trail</th>
                      <td>{item[1].user}</td>
                      <td>{item[1].email}</td>
                      <td>{item[1].message}</td>
                    </tr>
                    )) : 
                    <span className="noTaskAdded p-5">
                      You are not allowed to access
                    </span>
                  } 
                  </tbody>
                  </table>
                </>
                </div>
              </div>
              : "" }
            </div>
          </Box>
        </div>
      </main>
    </div>
  );
};

export default Workspace;
