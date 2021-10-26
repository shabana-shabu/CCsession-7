import React from 'react'
import {useState} from 'react';
const Phonenumber = () => {

    const initialState = {
        phone: '',
        radiobtn: ''
    }  

    const [input, setInput] = useState(initialState);

    const handleChange = (event) => {
        const {id, value} = event.target
        const updateInput = {...input, [id]: value}
        setInput(updateInput)
        
    }

    const validating = (inputtxt) => {
        const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        console.log(inputtxt.match(regex))
        if(inputtxt.match(regex)) {
            return true;
        } else {
            return false;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
        const {phone} = input;
        const validPhone = validating(phone);
        if (!validPhone) {
            alert('Enter valid phone number')
        }
        else{
        alert(" Phone number is  :"+ input.phone +"    Has Data Pack :"+  input.radiobtn)
    }
    }
    return (
        <center>
        <div>
            <form onSubmit={handleSubmit}>
            <div>
              <label><b>Phone number is : </b>
                  <input style={{backgroundColor:'hotpink', color:"blue"}}   type="tel" id="phone" onChange={handleChange} maxLength={10}/>
                  </label>
            </div>
            <div>
            <label> <b>Has Data Pack:</b>
                <input type = "radio" id = "radiobtn" value = "Yes" onChange={handleChange} />Yes
            <input type = "radio" id = "radiobtn" value = "No" onChange={handleChange} />No
            </label>
            </div>
            <div>
            <button style={{backgroundColor:"skyblue",fontWeight:"bolder"}} type="submit">Submit</button>
            </div>
            </form>

            <div>
                <p>Phone number is:<b>{input.phone}</b></p>
                <p>Has Data Pack:<b>{input.radiobtn}</b></p>
            </div>
        </div>
        </center>
    )
}

export default Phonenumber;