import './App.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedBackForm from "./components/FeedBackForm";
import AboutPage from './components/pages/AboutPage';
import { FeedBackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';



function App() {
    

    return (
        <FeedBackProvider>
        <Router>
            <Header/>
            <div className="container">
                <Routes>
                <Route exact path='/' element={
                    <>
                    <FeedBackForm />
                    <FeedbackStats />
                    <FeedbackList />
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
