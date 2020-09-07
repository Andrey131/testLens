import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class BarBodyImage extends React.Component {

  render() {
    return (
      <article tabindex="-1" className={this.props.ClassName} onClick = {this.props.onClick}>
        <a className="barBodyImage" href={this.props.ImageHref} data-position="left center">
          <img src={this.props.ImageSrc} alt />
        </a>
      </article>
    );
  }

}


class BarHead extends React.Component {
  render() {
    return (
      <div className="barHead">
        <h1>Lens</h1>
        <p>
          Just another fine responsive site template by 
          <a href="https://html5up.net/">HTML5 UP</a>
        </p>
        <ul className="icons">
          <li>
            <a href="#" className="icon twitter">
              <span className="label">Twitter</span>
            </a>
          </li>


          <li>
            <a href="#" className="icon instagram">
              <span className="label">Instagram</span>
            </a>
          </li>


          <li>
            <a href="#" className="icon github">
              <span className="label">Github</span>
            </a>
          </li>


          <li>
            <a href="#" className="icon email">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}


class BarBody extends React.Component {

  render() {
    return (
      <section className="barBody">
        {this.props.images.map((item)=>{
          return (
            <BarBodyImage 
              ImageSrc={item.ImageSrc} 
              ClassName={item.ImageActive} 
              onClick={item.onClick}/>)
        })}
      </section>
    );
  }

}


class BarFoot extends React.Component {
  render() {
    return (
      <div className="barFoot">
        <ul>
          <li>© Untitled.</li>
          <li>Design: <a href="https://html5up.net">HTML5 UP</a>.</li>
          <li>Images: <a href="https://unsplash.com">Unsolash</a>.</li>
        </ul>
      </div>
    );
  }

}



class Bar extends React.Component {
  render() {
    return (
      <div className="bar">
        <BarHead />
        <BarBody images={this.props.images}/>
        <BarFoot />
      </div>
    );
  }

}


class View extends React.Component {
  render() {
    return (
      <div className="view">
        <div className="nav">
          <div className="nav-next" ></div>
          <div className="nav-previous"></div>
          <div className="toggle"></div>
        </div>

        <div className="activeImage">
          <div className="caption">
            <h2>Diam tempus accumsan</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bigImage">
          </div>
        </div>
      </div>
    );
  }

}


class Manager extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images: Array(12).fill(null),
    };

    for(let i=1; i<=12; i++){
 
      this.state.images[i-1]={
         ImageSrc: 'images/mini/'+i+'.jpg',
         ImageHref: 'images/fulls/'+i+'.jpg',
         ImageActive:  (i==1)?"active":undefined,
         onClick: () => this.imageChanger(i)
         }
     }
   }

   imageChanger(i){
    const images = this.state.images;
    alert("gwgrg");
   if(i=="next"){
     
      for(let j=0; j<images.length; j++){
        if(images[j].ImageActive=="active"){
          images[j+1].ImageActive="active";
          images[j].ImageActive=undefined;
        }
      }
      return;
    }
    if(i=="previous"){
      for(let j=0; j<images.length; j++){
        if(images[j].ImageActive=="active"){
          images[j-1].ImageActive="active";
          images[j].ImageActive=undefined;
        }
      }
      return;
    }

    if(images[i-1].ImageActive=='active'){
    }

    else{

     for(let j=0; j<images.length; j++){
       if(images[j].ImageActive=="active"){
        images[j].ImageActive=undefined;
       }
     }

     images[i-1].ImageActive='active';
     document.getElementsByClassName("bigImage")[0].style.backgroundImage = "url(./images/fulls/"+i+".jpg)";
     this.setState({
       images: images
     });
    }
  }


  render(){
    return(
      <div className="Manager">
        <Bar images={this.state.images}/>
        <View images={this.state.images}/> 
      </div>
    )
  }
}


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Manager />
      </div>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
