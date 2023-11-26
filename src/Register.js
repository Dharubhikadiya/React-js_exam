import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [Phone, setPhone] = useState("")
    const [alldata,setAlldata] = useState([])

    let navigate = useNavigate()
    
    const handleSubmit = () => {
        let obj = {
            id: Math.floor(Math.random() * 1000),
            name: name,
            email: email,
            password : password,
            city: city,
            Phone: Phone
        }
        let data = [...alldata,obj]
        localStorage.setItem("user",JSON.stringify(data));
        setAlldata(data)
        setName("");
        setEmail("")
        setPassword("")
        setCity("")
        setPhone("")
        navigate('/')
    }

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("user"));
        if(data == null){
            setAlldata([])
        }else{
            setAlldata(data)
        }
    },[])

    return (
        <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Register Page</title>
            <link href="styles.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <div id="container">
                <div className="top">
                    <h1>Register Page</h1>
                </div>
                <form>
                    <input type="text" placeholder="Username" name="name" onChange={(e) => setName(e.target.value)} value={name} className="input mt-5" />
                    <input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} className="input" />
                    <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} className="input" />
                    <input type="text" placeholder="city" name="city" onChange={(e) => setCity(e.target.value)} value={city} className="input" />
                    <input type="number" placeholder="Phone" name="phone" onChange={(e) => setPhone(e.target.value)} value={Phone} className="input mb-3" />
                    <div className="login_option mb-3">
                        <a href="#" className="account"><i className="fa-brands fa-google" style={{ color: '#000000' }} /></a>
                        <a href="#" className="account"><i className="fa-brands fa-github" style={{ color: '#000000' }} /></a>
                        <a href="#" className="account"><i className="fa-brands fa-twitter" style={{ color: '#000000' }} /></a>
                    </div>
                    <button type="button" className="mb-4" onClick={() => handleSubmit()}>Sign In</button>

                </form>
            </div>

        </div>

    )
}

export default Register;