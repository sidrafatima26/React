import React from 'react';
import {useState} from 'react';

function App() {

  const [formData, setformData] = useState( { firstName: "" , lastName: "", email: "", age: "", comments: "", checkbox:true, mode:"", favCar:"" } );

  console.log(formData);

  function handleChange(event){
    const {name, value, checked, type} = event.target;
    console.log(event.target)
    setformData(prevformData => {
      return{
        ...prevformData,
        [name] : type === "checkbox" ? checked : value 
      }
    });
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log("Printing all the saved data");
    console.log(formData);
  }


  return(
    <div>
    <form onSubmit={handleSubmit}> 
      <input type="text" placeholder="FirstName" onChange={handleChange} name="firstName" value={formData.firstName}/>
      <br/>
      <input type="text" placeholder="LastName" onChange={handleChange} name="lastName" value={formData.lastName}/>
      <br/>
      <input type="text" placeholder="Email" onChange={handleChange} name="email" value={formData.email}/>
      <br/>
      <input type="text" placeholder="Age" onChange={handleChange} name="age" value={formData.age}/>
      <br/>
      <textarea placeholder="Enter your Comments here" onChange={handleChange} name="comments" value={formData.comments} />
      <br/>
      
      <fieldset>
        <legend>Gender</legend>
      <input type="checkbox" onChange={handleChange} name="checkbox" checked={formData.checkbox} id="checkbox" />
      <label htmlFor="checkbox">Check if you are interested</label>
      <br/>
      <input type="radio" onChange={handleChange} name="mode" value="Male" id="radio" checked={formData.mode==="Male"} />
      <label htmlFor="radio">Male</label>
      <br/>
      <input type="radio" onChange={handleChange} name="mode" value="Female" id="radio" checked={formData.mode==="Female"} />
      <label htmlFor="radio">Female</label>
      <br/>
      </fieldset>
      <br/>
      <label htmlFor="favCar">Tell me your favourite Car</label>
      <select onChange={handleChange} name="favCar" id="favCar" value={formData.favCar}>
        <option value="BMW">BMW</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Audi">Audi</option>
        <option value="Mini Cooper">Mini Cooper</option>
        <option value="Porche">Porche</option>
        <option value="Volvo">Volvo</option>
        <option value="Jaguar">Jaguar</option>
      </select>
      <button> SUBMIT </button>
    </form>
    </div>
  );
}

export default App;
















  // const[firstName, setFirstName] = useState("");
  // const[lastName, setLastName] = useState("");
  
  // console.log(firstName);
  // console.log(lastName);

  // function handleFChange(event){
  //   console.log("Inside handleFChange")
  //   console.log(event.target.value)
  //   setFirstName(event.target.value);
  // }
  // function handleLChange(event){
  //   console.log("Inside handleLChange")
  //   console.log(event.target.value)
  //   setLastName(event.target.value);
  // }