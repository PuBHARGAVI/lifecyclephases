import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    //method 1 constructor
    time = 0;
    constructor(props) {
    super(props);
    this.state = {favoritecolor: "red",
count:1,show:true};
  }
  //method 2 getDerivedStateFromProps
  // static getDerivedStateFromProps(props, state) {
  //   return {favoritecolor: props.favcol };
  // }
  //method 4 componentDidMount
  componentDidMount() {
    this.time=setInterval(() => {
      this.setState({count:this.state.count+1})
    }, 5000)
  }


  //method 3 render
  render() {
      if(this.state.show){
    return (
        <>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <h3>count:{this.state.count}</h3>
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      <div id="div1"></div>
     <div id="div2"></div>
      </>
    );
      }
  }
//life cycle phase 2
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite was " + prevState.count;
    }
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.count;
    }
//life cycle phase 3
delHeader = () => {
    this.setState({show: false});
  }
componentWillUnmount(){
    alert("unmounteed")
    clearInterval(this.time)
}
}
export default Header; 