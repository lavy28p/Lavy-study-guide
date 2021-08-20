import { useState, useEffect } from "react";
import { getAllQuestions } from "../../services/questions";
import "./Questions.css";
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const allQuestions = await getAllQuestions()
      setQuestions(allQuestions);
    };
    fetchQuestions();
  }, []);


  return (
      <div className="questions-layout">
        <Layout>
          <h3 className="questions-text">Interview Questions</h3>
          <div className="post-layout">
            {questions.map(question => {
              return (
              <Link className="post" to={`/questions/${question.id}`}>{question.post}</Link>
              )
            })}
          </div>   
          <div className="post-button-layout">
            <button className="post-button" >
              <Link className="post-add-link" to={`/add-question`}>
                <span>Post A Question</span>
              </Link>
            </button>           
          </div>
          
        </Layout>
      </div> 
  );
};

export default Questions;