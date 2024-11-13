// // import React, { useState } from "react";
// // // import "../auth.css";
// // // import { ToastContainer, toast } from "react-toastify";
// // // import "react-toastify/dist/ReactToastify.css";
// // // import config from "../../config";
// // // import "./Login.css"
// // import "./Authorisation.css"
// // import { useRef } from "react";
// // const Login = () => {
// //     const [email, setEmail] = useState("");
// //     const [password, setPassword] = useState("");
// //     const [name, setName] = useState("");
// //     const handleLogin = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await fetch(backendapi+"/admin/login", {
// //                 method: "POST",
// //                 headers: {
// //                     "Content-Type": "application/json",
// //                 },
// //                 body: JSON.stringify({ email, password }),
// //                 credentials: "include"
// //             });
// //             const data = await response.json();
// //             if (data.ok) {
// //                 // toast.success("Admin Login Successful");
// //                 window.location.href = "/pages/addworkout";
// //             } else {
// //                 // toast.error("Admin Login Failed");
// //             }
// //         } catch (error) {
// //             // toast.error("An error occurred during login");
// //             console.error("An error occurred during login", error);
// //         }
// //     }
// //     const handleSignup = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await fetch(backendapi+"/admin/register", {
// //                 method: "POST",
// //                 headers: {
// //                     "Content-Type": "application/json",
// //                 },
// //                 body: JSON.stringify({ name, email, password }),
// //                 credentials: "include"
// //             });
// //             const data = await response.json();
// //             if (data.ok) {
// //                 // toast.success("Admin Registration Successful");
// //                 // window.location.href = "/admin/login";
// //                 handleLoginClick();
// //             } else {
// //                 // toast.error("Admin Registration Failed");
// //             }
// //         } catch (error) {
// //             // toast.error("An error occurred during registration");
// //             console.error("An error occurred during registration", error);
// //         }
// //     }
// //     // const wrapper = document.querySelector(".wrapper"),
// //     //       signupHeader = document.querySelector(".signup header"),
// //     //       loginHeader = document.querySelector(".login header");
// //     //     loginHeader.addEventListener("click", () => {
// //     //       wrapper.classList.add("active");
// //     //     });
// //     //     signupHeader.addEventListener("click", () => {
// //     //       wrapper.classList.remove("active");
// //     //     });
// //     // const SignupLogin = () => {
// //         const wrapperRef = useRef(null);
      
// //         const handleLoginClick = () => {
// //           if (wrapperRef.current) {
// //             wrapperRef.current.classList.add("active");
// //           }
// //         };
      
// //         const handleSignupClick = () => {
// //           if (wrapperRef.current) {
// //             wrapperRef.current.classList.remove("active");
// //           }
// //         };
// //     return (
// //         <div className="mainbox">
// //     <section className="wrapper" ref={wrapperRef}>
// //       <div className="form signup">
// //         <header onClick={handleSignupClick}>Signup</header>
// //         <form action="#">
// //           <input type="text" placeholder="Full name" 
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           required />
// //           <input type="text" placeholder="Email address" 
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required />
// //           <input type="password" placeholder="Password" 
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required />
// //           <div className="checkbox">
// //             <input type="checkbox" id="signupCheck" />
// //             <label htmlFor="signupCheck">I accept all terms & conditions</label>
// //           </div>
// //           <input type="submit" value="Signup" onClick={handleSignup}/>
// //         </form>
// //       </div>
      
// //       <div className="form login">
// //         <header onClick={handleLoginClick}>Login</header>
// //         <form action="#" onSubmit={handleLogin}>
// //           <input 
// //             type="text" 
// //             placeholder="Email address" 
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required />
// //           <input type="password" placeholder="Password" 
// //             value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //             required />
// //           <a href="#">Forgot password?</a>
// //           <input type="submit" value="Login" />
// //         </form>
// //       </div>
// //     </section>
// //     </div>
// //     );
// // }

// // export default Login;

// import React, { useState, useRef } from "react";
// import {useEffect} from "react"
// import "./Authorisation.css";

// const Login = ({setisloggedin,setShowpopup}) => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [name, setName] = useState("");
//     const [users, setUsers] = useState([]);
//     const wrapperRef = useRef(null);

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         // try {
//         //     const response = await fetch(backendapi+"/admin/login", {
//         //         method: "POST",
//         //         headers: { "Content-Type": "application/json" },
//         //         body: JSON.stringify({ email, password }),
//         //         credentials: "include"
//         //     });
//         //     const data = await response.json();
//         //     if (data.ok) {
//         //         window.location.href = "/home";
//         //     } else {
//         //         alert("Login Failed: " + data.message);
//         //     }
//         // } catch (error) {
//         //     console.error("An error occurred during login", error);
//         // }
//         // console.log(e.target.value)
//         // if(email==="ananya@gmail.com"&&password==="ananya"){
//         //   setisloggedin(true);
//         //   setShowpopup(false);
//         // }
//         const userExists = users.some(user => 
//           user.email === email && user.password === password && user.name === name
//       );

//       if (userExists) {
//           setisloggedin(true);
//           setShowpopup(false);
//       } else {
//           alert("Login Failed: Invalid credentials");
//       }

//     };

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         // try {
//         //     const response = await fetch(backendapi+"/admin/register", {
//         //         method: "POST",
//         //         headers: { "Content-Type": "application/json" },
//         //         body: JSON.stringify({ name, email, password }),
//         //         credentials: "include"
//         //     });
//         //     const data = await response.json();
//         //     if (data.ok) {
//         //         handleLoginClick();
//         //     } else {
//         //         alert("Registration Failed: " + data.message);
//         //     }
//         // } catch (error) {
//         //     console.error("An error occurred during registration", error);
//         // }
        
//         setUsers([...users, { name, email, password }]);
//         // if(email==="ananya@gmail.com"&&password==="ananya"&&name==="ananya"){
//         //   handleLoginClick();
//         // }else{
//         //   alert("wrong password")
//         // }
//     };

//     const handleLoginClick = () => {
//         if (wrapperRef.current) {
//             wrapperRef.current.classList.add("active");
//             setEmail("");
//             setName("");
//             setPassword("");
//         }
//     };

//     const handleSignupClick = () => {
//         if (wrapperRef.current) {
//             wrapperRef.current.classList.remove("active");
//         }
//     };
//     useEffect(() => {
//       console.log("Updated users list:", users);
//   }, [users]); 

//     return (
//         <div className="mainbox">
//             <section className="wrapper" ref={wrapperRef}>
//                 <div className="form signup">
//                     <header onClick={handleSignupClick}>Signup</header>
//                     <form onSubmit={handleSignup}>
//                         <input 
//                             type="text" 
//                             placeholder="Full name" 
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required 
//                         />
//                         <input 
//                             type="text" 
//                             placeholder="Email address" 
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required 
//                         />
//                         <input 
//                             type="password" 
//                             placeholder="Password" 
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required 
//                         />
//                         <div className="checkbox">
//                             <input type="checkbox" id="signupCheck" />
//                             <label htmlFor="signupCheck">I accept all terms & conditions</label>
//                         </div>
//                         <input type="submit" value="Signup" />
//                     </form>
//                 </div>

//                 <div className="form login">
//                     <header onClick={handleLoginClick}>Login</header>
//                     <form onSubmit={handleLogin}>
//                         <input 
//                             type="text" 
//                             placeholder="Email address" 
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required 
//                         />
//                         <input 
//                             type="password" 
//                             placeholder="Password" 
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required 
//                         />
//                         <a href="#">Forgot password?</a>
//                         <input type="submit" value="Login" />
//                     </form>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Login;


import React, { useState, useRef, useEffect } from "react";
import "./Authorisation.css";

const Login = ({ setisloggedin, setShowpopup }) => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [signupName, setSignupName] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [users, setUsers] = useState([]);
    const wrapperRef = useRef(null);
    const backendapi = import.meta.env.VITE_BACKEND_API;
    // Load users from localStorage on component mount
    useEffect(() => {
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();

        // Check if loginEmail and loginPassword match an entry in users array
        const userExists = users.some(user => 
            user.email === loginEmail && user.password === loginPassword
        );

        if (userExists) {
            setisloggedin(true);
            setShowpopup(false);
        } else {
            alert("Login Failed: Invalid credentials");
        }
    };

    const handleSignup = (e) => {
        e.preventDefault();

        // Add new user to the users array and save it to localStorage
        const newUsers = [...users, { name: signupName, email: signupEmail, password: signupPassword }];
        setUsers(newUsers);
        localStorage.setItem("users", JSON.stringify(newUsers));

        // Clear signup fields after signup
        setSignupName("");
        setSignupEmail("");
        setSignupPassword("");
    };

    const handleLoginClick = () => {
        if (wrapperRef.current) {
            wrapperRef.current.classList.add("active");
            setLoginEmail("");
            setLoginPassword("");
        }
    };

    const handleSignupClick = () => {
        if (wrapperRef.current) {
            wrapperRef.current.classList.remove("active");
        }
    };

    useEffect(() => {
        console.log("Updated users list:", users);
    }, [users]);

    return (
        <div className="mainbox">
            <section className="wrapper" ref={wrapperRef}>
                <div className="form signup">
                    <header onClick={handleSignupClick}>Signup</header>
                    <form onSubmit={handleSignup}>
                        <input
                            type="text"
                            placeholder="Full name"
                            value={signupName}
                            onChange={(e) => setSignupName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Email address"
                            value={signupEmail}
                            onChange={(e) => setSignupEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={signupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
                            required
                        />
                        <div className="checkbox">
                            <input type="checkbox" id="signupCheck" />
                            <label htmlFor="signupCheck">I accept all terms & conditions</label>
                        </div>
                        <input type="submit" value="Signup" />
                    </form>
                </div>

                <div className="form login">
                    <header onClick={handleLoginClick}>Login</header>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Email address"
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required
                        />
                        <a href="#">Forgot password?</a>
                        <input type="submit" value="Login" />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Login;
