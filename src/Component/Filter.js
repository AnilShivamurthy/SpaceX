import React, {Component} from 'react';
import './Filter.css';
import axios from 'axios';
import { render } from '@testing-library/react';


class Filter extends Component{


    
        filterByYear=(year)=>{
            axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${year}`)
            .then(res => {
            const spaceX = res.data;
            console.log(spaceX)
            this.props.setState({ spaceX });
        })      
        }


        filterSuccessfulLaunch=(val)=>{
            axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${val}`).then(res => {
                const spaceX = res.data;
               console.log(spaceX)
               this.props.setState({ spaceX });
        })
        }

        filterSuccessfulLanding=(val)=>{
            axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${val}&land_success=${val}`).then(res => {
                const spaceX = res.data;
                console.log(spaceX)
                this.props.setState({ spaceX });
        })
        }
   

    render(){
        return(
            <div>
                <div className="home-text">Filters</div>
                    <div className="normal-text">Launch Year</div>
                    <div className="button-section">
                        <button onClick={this.filterByYear.bind(this, 2006)} className="button">2006</button>
                        <button onClick={this.filterByYear.bind(this, 2007)} className="button">2007</button>
                        <button onClick={this.filterByYear.bind(this, 2008)} className="button">2008</button>
                        <button onClick={this.filterByYear.bind(this, 2009)} className="button">2009</button>
                        <button onClick={this.filterByYear.bind(this, 2010)} className="button">2010</button>
                        <button onClick={this.filterByYear.bind(this, 2011)} className="button">2011</button>
                        <button onClick={this.filterByYear.bind(this, 2012)} className="button">2012</button>
                        <button onClick={this.filterByYear.bind(this, 2013)} className="button">2013</button>
                        <button onClick={this.filterByYear.bind(this, 2014)} className="button">2014</button>
                        <button onClick={this.filterByYear.bind(this, 2015)} className="button">2015</button>
                        <button onClick={this.filterByYear.bind(this, 2016)} className="button">2016</button>
                        <button onClick={this.filterByYear.bind(this, 2017)} className="button">2017</button>
                        <button onClick={this.filterByYear.bind(this, 2018)} className="button">2018</button>
                        <button onClick={this.filterByYear.bind(this, 2019)} className="button">2019</button>                       
                    </div>
                    <div className="normal-text">Successful Launch</div>
                    <div className="button-section">
                        <button onClick={this.filterSuccessfulLaunch.bind(this, true)} className="button">True</button>
                        <button onClick={this.filterSuccessfulLaunch.bind(this, false)} className="button">False</button>
                     </div>   
                    <div className="normal-text">Successful Landing</div>
                    <div className="button-section">
                         <button onClick={this.filterSuccessfulLanding.bind(this, true)} className="button">True</button>
                        <button onClick={this.filterSuccessfulLanding.bind(this, false)} className="button">False</button>
                    </div>
            </div>
        )

    }
}

export default Filter;