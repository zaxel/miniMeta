import { useSelector } from 'react-redux';
import './App.css';
import Likes from './Likes';
import Title from './Title';
import Comments from './Comments';
import Spin from './Spin';
import image from './sea.jpg'

function App() {
  const error = useSelector(state => state.appReducer.error);
  return (
    <div className="App">
      <div className="wrap">
      <Spin />
        <div className="card">
          {error && (
            <div className='error-message'>
              {error}
            </div>
          )}
          <div className="card-image">
            <img src={image} alt="ukrainian"/>
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
