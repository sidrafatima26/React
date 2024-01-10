import React,{useState} from 'react';

function App() {
  const[formData, setformData] = useState( { firstName:"", lastName: "", email:"", country:"", street:"", city: "", state: "" , zip: "", checkbox1:false, checkbox2:false, checkbox3:false, radio:"" } )
  console.log(formData);

  function handleForm(event){
    const {name, type, value, checked} = event.target
    setformData(prevformData => {
      return{
        ...prevformData,
        [name] : type === "checkbox" ? checked : value
      }
    })
  }
  function handleSubmit(event){
    event.preventDefault();
    console.log("Below is the Saved data");
    console.log(formData);
  }
  return (
    <div className='h-[100vh] w-[100vw]'>
    <div className="mx-auto m-10 w-[1080px] border-2 border-slate-100 shadow-xl font-mono p-12 ">
      <form onSubmit={handleSubmit} className='flex flex-col'>
      <label htmlFor='firstName'>Enter your First Name</label>
      <br/>
      <input type="text" placeholder="Sidra" id="firstName" onChange={handleForm} name="firstName" value={formData.firstName} className='p-2 border-2 border-blue-200 rounded-lg shadow-md '></input>
      <br/>  
      <label htmlFor='lastName'>Enter your Last Name</label>
      <br/>
      <input type="text" placeholder="Fatima" id="lastName" onChange={handleForm} name="lastName" value={formData.lastName} className='p-2 border-2 border-blue-200 rounded-lg shadow-md ' ></input>
      <br/>
      <label htmlFor='email'>Enter your Email ID</label>
      <br/>
      <input type="text" placeholder="sf@gmail.com" id="email" onChange={handleForm} name="email" value={formData.email} className='p-2 border-2 border-blue-200 rounded-lg shadow-md ' ></input>
      <br/>
      <label htmlFor='country'>Enter your Country</label>
      <br/>
      <select id='country' placeholder="India" onChange={handleForm} name="country" value={formData.country} className='p-2 border-2 border-blue-200 rounded-lg shadow-md ' >
        <option>India</option>
        <option>United Kingdom</option>
        <option>USA</option>
        <option>South Africa</option>
        <option>Singapore</option>
        <option>Vietnam</option>
        <option>South Korea</option>
      </select>      
      <br/>
      <label htmlFor='street'>Enter your Street Address</label>
      <br/>
      <input type="text" placeholder="Hinjawadi" id="street" onChange={handleForm} name="street" value={formData.street} className='p-2 border-2 border-blue-200 rounded-lg shadow-md ' ></input>
      <br/>
      <label htmlFor='city'>Enter your City</label>
      <br/>
      <input type="text" placeholder="Pune" id="city" onChange={handleForm} name="city" value={formData.city} className='p-2 border-2 border-blue-200 rounded-lg shadow-md'></input>
      <br/>
      <label htmlFor='state'>Enter your state</label>
      <br/>
      <input type="text" placeholder="Maharashtra" id="state" onChange={handleForm} name="state" value={formData.state} className='p-2 border-2 border-blue-200 rounded-lg shadow-md'></input>
      <br/>
      <label htmlFor='zip'>Enter your Zip Code</label>
      <br/>
      <input type="text" placeholder="411001" id="zip" onChange={handleForm} name="zip" value={formData.zip} className='p-2 border-2 border-blue-200 rounded-lg shadow-md'></input>
      <br/>
      <h4 className='font-bold'>By Email</h4>
      <input type="checkbox" id="checkbox1" onChange={handleForm} name="checkbox1" checked={formData.checkbox1}></input>
      <label htmlFor='checkbox1'> Comments </label>
      <h4 className='opacity-50'>    Get notified when someone comments on a post</h4>
      <br/>
      <input type="checkbox"  id="checkbox2" onChange={handleForm} name="checkbox2" checked={formData.checkbox2}></input>
      <label htmlFor='checkbox2'> Candidates </label>
      <h4 className='opacity-50'>    Get notified when someone applies for a job</h4>
      <br/>
      <input type="checkbox" id="checkbox3" onChange={handleForm} name="checkbox3" checked={formData.checkbox3}></input>
      <label htmlFor='checkbox3'> Offers </label>
      <h4 className='opacity-50'>   Get notified when someone accepts or rejects an offer</h4>
      <br/>
      <h4 className='font-bold'>Push Notifications</h4>
      <h4  className='opacity-50'>These are devivered to you via SMS by your mobile phone</h4>
      <input type="radio" id="radio" name="radio" value=" Everything " checked={formData.radio===" Everything "} onChange={handleForm} className='text-left' />
      <label htmlFor='radio'> Everything </label>
      <br/>
      <input type="radio" id="rad" name="radio" value=" Same as email " checked={formData.radio===" Same as email "} onChange={handleForm} />
      <label htmlFor='rad'> Same as email </label>
      <br/>
      <input type="radio" id="radi" name="radio" value=" No push Notifications " checked={formData.radio===" No push Notifications "} onChange={handleForm} className='text-left' />
      <label htmlFor='radi'> No push Notifications </label>
      <br/>
      <button className='font-bold bg-blue-400 text-white h-10 w-36 rounded-lg' >Save</button>
      </form>
     

    </div>
    </div>
  );
}

export default App;
