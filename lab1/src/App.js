
import './App.css';
import FormClass from "./components/form/formClass";
import SliderClass from "./components/slider/sliderClass";

function App(){
    return (
      <div>
        <div id='form'>
            <FormClass/>
        </div>

        <hr></hr>

        <div id='slider'>
          <SliderClass/>
        </div>
      </div>
    )
}

export default App;
