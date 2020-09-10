import React, {Component} from 'react';
import './Home.css';
import axios from 'axios';
import Card from './Card';
import Filter from './Filter';


class Home extends Component{
 

  constructor(props) {
    super(props);
    this.state={
      spaceX:[],
      Author: "Anil Shivamurthy",
      currentFilter:[]
    }
    this.setState = this.setState.bind(this); 
}


  componentDidMount(){
    axios.get(`https://api.spaceXdata.com/v3/launches?limit=100`)
    .then(res => {
      const spaceX = res.data;
      this.setState({ spaceX });
    })
  }

  

    render(){   
        return(
              <div>
                <div className="header">SpaceX Launch Program</div>
                <div className="body-section">
                <div className="filter-section">
                  <Filter setState={this.setState} />
                 </div>
                <div className="card-section">{
                  this.state.spaceX.map((spaceX)=>(
                    <Card {...spaceX} key={spaceX.flight_number}/>
                  ))
                  } 
                </div>

                </div>   
                <h5>Developed by : {this.state.Author}</h5> 
               </div>
        )
    }
    }

export default Home;