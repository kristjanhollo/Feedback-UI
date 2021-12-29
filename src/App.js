import './App.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import {useState} from "react";
import FeedbackStats from "./components/FeedbackStats";
import FeedBackForm from "./components/FeedBackForm";
import AboutPage from './components/pages/AboutPage';
import { FeedBackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';
import { v4 as uuidv4 } from 'uuid'


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
        <FeedBackProvider>
        <Router>
            <Header/>
            <div className="container">
                <Routes>
                <Route exact path='/' element={
                    <>
                    <FeedBackForm handleAdd={addFeedback}/>
                    <FeedbackStats />
                    <FeedbackList handleDelete={deleteFeedBack}/>
                    </>
                }>
                
                </Route>
                <Route path='/about' element={<AboutPage />}/>
                </Routes>
                <AboutIconLink />
            </div>
        </Router>
        </FeedBackProvider>
    )
}

export default App;
