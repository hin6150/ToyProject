import React from "react";
import axios from "axios";
import Traffic from "./Traffic";
 
 
class App extends React.Component{
 
  state = {
    isLoading:true,
    data:[],
    
  };
 
 
  getTraffic(){
   
    const url = `http://108.0.1.128:17330/opendata/services/getClturfstvl/stdlist`;
    console.log(url);
    axios.get(url).then((Response) =>{
      const data = Response.data.list;
      console.log(data);
 
      this.setState({
        isLoading:false,
        data:data
      });
    });
  }
  componentDidMount(){
    this.getTraffic();
  }
  render(){
    const {isLoading, data} = this.state;
 
    return(
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ):(
          <div className="trafficInfo">
            {data.map((d,cnt)=>{
            return(<Traffic
              sumDate={data[cnt].sumDate}
              exDivCode={data[cnt].exDivCode}
              tcsType={data[cnt].tcsType}
              carType={data[cnt].carType}
              trafficVolumn={data[cnt].trafficVolumn}/>)
            })}
          </div>
        )}
      </section>
    )
  }
}
export default App;