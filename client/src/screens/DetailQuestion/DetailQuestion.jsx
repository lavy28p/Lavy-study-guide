import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getOneQuestion } from "../../services/questions";
import { deleteQuestion } from "../../services/questions";
import "./DetailQuestion.css";
import Layout from '../../components/Layout/Layout';

const DetailQuestion = () => {
  const [questionDetail, setQuestionDetail] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const fetchQuestion = async () => {
      const question = await getOneQuestion(id);
      setQuestionDetail(question);
      setLoaded(true);
    };
    fetchQuestion();
  }, [id]);

  if (!loaded) {
    return <h1>Loading...</h1>;
  }

  const handleDelete = async () => {
    //event.preventDefault();
    const questionDelete = await deleteQuestion(id);
    setDeleted(questionDelete);
  };

  if (deleted) {
    return <Redirect to={`/questions`} />;
  }

  return (
      <div className="question-detail-container">
        <Layout>
          <div className="detail-container">
          <div className="question-detail-post">{questionDetail.post}</div>
            <div className="button-container">
              <button className="edit-button">
                  Edit
              </button>
              <button className="delete-button" onClick={() => handleDelete(id)}>
                  Delete
              </button>
          </div>
          </div>      
        </Layout>       
      </div>
  );
};

export default DetailQuestion;