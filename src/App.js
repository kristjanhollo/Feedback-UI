import './App.css';
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";

// function App() {
//     return (
//         <>
//             {/*<Header bgColor='red' textColor='blue'/> < propsile input*/}
//             <Header />
//             <div className='container'>
//                 <h1>My App</h1>
//             </div>
//         </>
//     );
// }

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    return (
        <>
        <Header />
            <div className="container">
                <FeedbackList feedback={feedback}/>
            </div>
        </>
    )
}

export default App;
