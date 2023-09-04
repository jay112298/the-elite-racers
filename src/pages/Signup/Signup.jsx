import React, {useState, useEffect} from 'react'
// import './Signup.css'
import axios from 'axios'; // Import the axios library
import { Link } from 'react-router-dom'
import { SignupForm } from './Signup.st';
import google from "../../assets/google.svg"
import terSilver from "../../assets/ter-silver.png"
import SignupImage from "../../assets/signup.svg"

function Signup() {
    const [signupStatus, setSignupStatus] = useState("None");
    const [signUpMessage, setSignUpMessage] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [finalFormData, setFinalFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        branch: 'Not Updated',
        department: 'Not Allocated',
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

    };

    useEffect(() => {
        console.log(finalFormData);
      }, [finalFormData]);

      const handleSubmit = (event) => {
        event.preventDefault();
    
        const nameParts = formData.name.split(' ');
    
        const newFormData = {
            name: nameParts[0],
            lastname: nameParts[1],
            email: formData.email,
            password: formData.password
        };
    
        const apiUrl = 'https://aggressive-shorts-lion.cyclic.app/api/signup';
        const requestConfig = {
            method: 'POST',
            url: apiUrl,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https://aggressive-shorts-lion.cyclic.app/api/signup',
            },
            data: JSON.stringify(newFormData),
        };
    
        let responseData; // Declare responseData here
    
        const sendData = async () => {
            try {
                const response = await axios(requestConfig);
                responseData = response.data; // Assign responseData here
                // Handle success response if needed
    
                if (!responseData.error) {
                    console.log('Signup successful:', responseData);
                    setSignUpMessage(responseData);
                    // Show signup success message
                    setSignupStatus("success");
                } else {
                    console.log('Signup failed:', responseData.error);
                    setSignUpMessage(responseData.error);
                    setSignupStatus("failed");
                }
    
                // You can reset the form here if desired
                setFinalFormData({
                    name: '',
                    lastname: '',
                    email: '',
                    password: '',
                    branch: '',
                    department: '',
                });
    
            } catch (error) {
                // Handle error response if needed
                console.error('Signup error:', error);
                console.log('Message:', responseData.error);
            }
        };
    
        sendData(); // Call the inner async function
    };
    

    return (
        <SignupForm signupcover={SignupImage}>
            <div className="content-block">
                <div className="img">
                    <div className="logo">
                        <img src={terSilver} alt="Logo-Silver" />
                    </div>
                    <div className="slogan">The elite <span>racers</span></div>
                    <div className="car"></div>
                </div>
                <div className="form-section">
                    <div className='form-area'>
                    <div className="title">Create your account</div>
                    <div className="google-link">
                        <div className="google"><img src={google} alt="" /></div>
                        <div className="text">Signup with Google</div>
                    </div>
                    <div className="or-sec">
                        <div className='dash'></div>
                        <div>or</div>
                        <div className='dash'></div>
                    </div>
                    <div className="label">Name</div>
                    <input type="text" name='name' value={formData.name} onChange={handleInputChange}/>
                    <div className="label">Email</div>
                    <input type="email" name='email' value={formData.email} onChange={handleInputChange}/>
                    <div className="label">Password</div>
                    <input type="password" name='password' value={formData.password} onChange={handleInputChange}/>
                    <div className="checkbox">
                        <input type="checkbox" name="agree" id="agree" />
                        <label>I agree to all <span>Terms, Privacy Policy</span> and <span>Fees</span></label>
                    </div>
                    <button className={signupStatus} onClick={handleSubmit}>Sign Up</button>
                    <div className="signup-link">Have An Account? <Link>Log In</Link></div>
                    </div>
                </div>
            </div>
        </SignupForm>
    );    
};

export default Signup;