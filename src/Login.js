import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [alldata,setAlldata] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = () => {
      let data = JSON.parse(localStorage.getItem('user'));
      let ans = data.filter((val)=>{
        if(val.email == email){
          return val;
        }
      })

      if(ans.length != 0){
        if(ans[0].password == password){
          localStorage.setItem('login',JSON.stringify(ans[0]));
          alert("User Successfully Login....");
          navigate('/notes');
        }else{
          alert("Email & Password is not valid...!");
        }
      }else{
        alert("Email & Password is not valid...!");
      }
    }

    return(
     <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login Page</title>
  <link href="styles.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
  <div id="container">
    <div className="top">
      <h1>Login Page</h1>
    </div>
    <form>
      <input type="email" placeholder="Email" name="name" onChange={(e)=>setEmail(e.target.value)} value={email} className="input mt-4" />
      <input type="password" placeholder="Password" name="password" onChange={(e)=>setPassword(e.target.value)} value={password} className="input mb-4" />
      <div className="login_option mb-3">
        <a href="#" className="account"><i className="fa-brands fa-google" style={{color: '#000000'}} /></a>
        <a href="#" className="account"><i className="fa-brands fa-github" style={{color: '#000000'}} /></a>
        <a href="#" className="account"><i className="fa-brands fa-twitter" style={{color: '#000000'}} /></a>
      </div>
      <button name="login" type="button" onClick={()=>handleSubmit()}>Sign In</button>
      <Link to={`/register`} className="signup pb-4 pt-2 fs-6">
        Do not have an account yet ?
      </Link>
    </form>
  </div>
  
</div>

    )
}

export default Login;