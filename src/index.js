import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StarRating from "./components/StarRating";
// import App from './components/App';
// import App from './components/App-v1';
import App from './components/App-v2';
import reportWebVitals from './reportWebVitals';

function Test(){
    const [movieRating,setMovieRating]=useState(0);

    return(
        <div>
            <StarRating color='blue' maxRating={10} onSetRating={setMovieRating}/>
            <p>This movie was rated {movieRating} stars</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

       <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={2} />
      <Test />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
