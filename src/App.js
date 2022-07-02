import './App.css';
import {useState} from "react";
import Header from "./components/Header";
import User from "./components/User";
import InputExample from "./components/Input";
import Counter from "./components/Counter";




function App() {

    const [isCounterShow,setCounterShow] = useState(true);


    return (
        <div className="App">
            <Header/>
            <User
                name={"Erhan"}
                surname={"Aşık"}
                age={20}
                friends={["9", "6", "BOIZ"]}
            />
            <InputExample />
            <br />
            {isCounterShow ? <Counter/>:''}
            <br />
            <button onClick={() => {setCounterShow(!isCounterShow)}}>Toggle Counter</button>
        </div>
    );
}

export default App;
