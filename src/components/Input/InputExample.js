import {useState} from "react";

function InputExample() {
    const [values,setValues] = useState({name:"",surname:""});

    const handleInput = (event) => {
        setValues({...values,[event.target.name] : event.target.value});
    }

    return (
      <div>
          <h1>Name</h1>
          <input name="name" onChange={handleInput} />
          <h1>Surname</h1>
          <input name="surname" onChange={handleInput} />
          <br/>
          {values.name} &nbsp;
          {values.surname}
      </div>
    );
}

export default InputExample;
