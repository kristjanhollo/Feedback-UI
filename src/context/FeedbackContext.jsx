import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext();

export const FeedBackProvider = ({children}) => {

  const [feedback, setFeedback] = useState ([])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  // Edit feedback

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  // Delete feedback

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
        setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Add feedback

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  // Update feedback item

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => item.id === id ?
    {...item, ...updItem} : item));


  }


  return <FeedbackContext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback,
    editFeedback,
    feedbackEdit,
    updateFeedback,

  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext;
