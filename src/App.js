import React from 'react';
import {Main} from "./Main";
import "./styles.css"
import {FirebaseState} from "./context/firebase/firebaseState";

function App() {
    return (
        <FirebaseState>
            <div className="App">
                <Main/>
            </div>
        </FirebaseState>
    );
}

export default App;
