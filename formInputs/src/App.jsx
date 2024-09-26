import { useState } from "react"

function App() {
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    comments:"",
    isFriendly:true,
    employment:"",
    favColor:""
  })

console.log(formData.favColor);

  function handleChange(event){
    const{name,value,type,checked} = event.target
    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
        

    })
  }
  function handleSubmit(event) {
    event.preventDefault()
    // submitToApi(formData)
    // console.log(formData)
}

  return (
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      placeholder="First Name"
      name="firstName"
      onChange={handleChange}
      value={formData.firstName}
      />

      <input
      type="text"
      placeholder="First Name"
      name="lastName"
      onChange={handleChange}
      value={formData.lastName}
      />

      <input
      type="email"
      placeholder="Email"
      name="email"
      onChange={handleChange}
      value={formData.email}
      />

      <textarea
      placeholder="Write Your Comments..."
      onChange={handleChange}
      name="comments"
      value={formData.comments}
      />

      <input
      type="checkbox"
      id="isFriendly"
      name="isFriendly"
      onChange={handleChange}
      checked={formData.isFriendly}
      />

      <label htmlFor="isFriendly">Are You Friendly?</label>
      <br />
            <br />
            
            <fieldset>
                <legend>Current Eployment Status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
            <br />
            
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select
            id="favColor"
            value={formData.favColor}
            name="favColor"
            onChange={handleChange}
            >
                <option value="">--Choose--</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br /><br />
            <button>Submit</button>
    </form>
  )
}

export default App
