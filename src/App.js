import './App.css';
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import {useState} from "react";
import FeedbackStats from "./components/FeedbackStats";
import FeedBackForm from "./components/FeedBackForm";
import { v4 as uuidv4 } from 'uuid'

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

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedBack = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }

    }

    return (
        <>
            <Header/>

            <div className="container">
                <FeedBackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedBack}/>
            </div>
        </>
    )
}

export default App;
