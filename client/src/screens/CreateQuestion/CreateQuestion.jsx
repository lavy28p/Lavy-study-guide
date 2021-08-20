import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import './CreateQuestion.css'
import Layout from '../../components/Layout/Layout'
import { createQuestion } from '../../services/questions'

function CreateQuestion({user}) {

  const [formData, setFormData] = useState({
    post: '',
    user_id: ''
  })

  const history = useHistory()

  const handleChange = (e) => {
    const {value} = e.target
    setFormData({
      post: value,
      // user_id: user.id
      user_id: 1
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newQuestion = await createQuestion(formData)
    console.log(newQuestion)
    history.push(`/questions/${newQuestion.id}`)
  }

  return (
    <div className="add-question-layout">
      <Layout>
        <h3 className="add-post-text">Add New Interview Question</h3>
        <form className="add-post-form-container" onSubmit={(e) => handleSubmit(e)}>
          <label className="add-label-post">Question:</label>
          <input
            className="add-input-post"
            name="post"
            required
            autoFocus
            onChange={(e) => handleChange(e)}
            value={formData.post}
          />
          <div className="add-button-container">
          <button type="submit" className="add-button">
            Submit
          </button>
          </div>
        </form>
      </Layout>     
    </div>
  )
}

export default CreateQuestion;