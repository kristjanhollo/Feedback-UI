import { useState} from "react";
import Card from './shared/Card'
import Button from './shared/Button'


function FeedBackForm() {
    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value);

    }

    return <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" value={text} placeholder='Write a review'/>
                <Button type="submit" version='primary'>Send</Button>
            </div>
        </form>
    </Card>

}

export default FeedBackForm
