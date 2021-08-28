import Layout from '../../components/Layout/Layout';
import { Link } from "react-router-dom";
import './Home.css'

function Home() {

  return (
    <div className="home-layout">
      <Layout>
        <h3 className="home-text">What do you want to learn today??</h3>
        <div className="img-container">
          {/* <img src="https://i.imgur.com/RrcYWG6.jpg"/>
          <img src="https://i.imgur.com/bIdiLUk.png"/> */}
          <img className="img-layout" src="https://i.imgur.com/DjsC543.jpg" alt="question-img"/>
        </div>
        
        <button className="home-button-container">
            <Link className="button-link" to={`/questions`}>
              Questions
            </Link>
        </button>
      </Layout>     
    </div>
  )
}

export default Home;