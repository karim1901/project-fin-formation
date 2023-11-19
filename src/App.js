import {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
    }
  }

  getData = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/photos")
    this.setState({
      images: resp.data
    })
  }

  ShowComment = async (e)=>{
    console.log(e.target.id)
    const req = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${e.target.id}`)
    console.log(req.data)

    const comments =req.data


    document.querySelector(e.target.id).innerHtml = comments.


    
  }

  render() {
    return <div>


      <button onClick={this.getData}>Get Data</button>
      <div className='imgs'>
      {
        this.state.images.splice(0,50).map((item) => {
          console.log(item.id)
          return <div key={item.id}  id={item.id} onClick={this.ShowComment}>
            <img id={item.id} src={item.thumbnailUrl} alt={item.title} />
            <p>{item.title}</p>
            <div className={item.id}>

            </div>

          </div>
        })
      }
      </div>

    </div>
  }
}

export default App;