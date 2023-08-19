import React, {useState} from 'react'
import './Signup.css'
import axios from 'axios'; // Import the axios library

function Signup() {
    const [signupSuccess, setSignupSuccess] = useState(false);
    const [signUpMessage, setSignUpMessage] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        branch: 'ME',
        department: 'Aero'
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const sendData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const responseData = await response.json();

                // Handle success response if needed

                if (!responseData.error) {
                    console.log('Signup successful:', responseData);
                    setSignUpMessage(responseData)
                    // Show signup success message
                    setSignupSuccess(true);
                } else {
                    console.log('Signup failed:', responseData.error);
                    setSignUpMessage(responseData.error)
                    setSignupSuccess(true);
                }


                // You can reset the form here if desired
                setFormData({
                    name: '',
                    lastname: '',
                    email: '',
                    password: '',
                    branch: 'ME',
                    department: 'Aero'
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
        <div>
            <h2>Sign Up</h2>
            {signupSuccess && <div className="success-ribbon">{signUpMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Lastname:</label>
                    <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Branch:</label>
                    <select name="branch" value={formData.branch} onChange={handleInputChange}>
                        <option value="ME">ME</option>
                        <option value="EE">EE</option>
                        <option value="CS">CS</option>
                        <option value="ETC">ETC</option>
                    </select>
                </div>
                <div>
                    <label>Department:</label>
                    <select name="department" value={formData.department} onChange={handleInputChange}>
                        <option value="Aero">Aero</option>
                        <option value="chassis">Chassis</option>
                        <option value="powertrain">Powertrain</option>
                        <option value="suspension">Suspension</option>
                        <option value="vehicle dynamics">Vehicle Dynamics</option>
                    </select>
                </div>
                <div>
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;