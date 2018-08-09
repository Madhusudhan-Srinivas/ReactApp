import React from 'react';


class App extends React.Component {

    constructor(){

     super();

     this.handleClick = this.handleClick.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.counter = this.counter.bind(this);
     this.handleChange = this.handleChange.bind(this);
     this.handleValidation = this.handleValidation.bind(this);

    this.state = {
          count: 0,
          hasError: false,
          fields: {},
          errors: {}
     }

    }

    handleClick() {
        //e.preventDefault()
        //console.log(e.target)
        console.log("hi")
      }

      handleClickTwo(e) {
        e.preventDefault()
        console.log(e.target)
      }

      handleValidation(){
           
        let fields = this.state.fields;
        let errors = {};
        let isFormValid = true;

        if(!fields["firstName"]){

          isFormValid = false;
          errors["firstName"] = "Cannot be empty";

        } 

        this.setState({errors: errors});
        return isFormValid;

      }
      
      handleSubmit(e){
       
        e.preventDefault();

        if(!this.handleValidation()){

          const data = new FormData(e.target);
          console.log(data.get("firstName"));

        } else {

          console.log("error");

        }

      }

      counter(){

        this.setState({

             count: this.state.count +1

        });

      }
      
      handleChange(e){

         console.log(e.target.value);

         console.log(e.target.name);
         

         let value = e.target.value;
         let name = e.target.name;

         this.setState({fields: { [name]: value }});
      }

      componentWillMount() {

          console.log("component will mount");
          this.setState({fields: { firstName: "Madhu" }});
      }

      componentDidMount() {

        console.log("component did mount");

        //this.setState({fields: { firstName: "Madhu" }});

    }

    componentWillReceiveProps(nextProps) {
      console.log(this.props.name + 
                  '=== ClickCounter will receive props. ' + 
                  'next props: ' + nextProps.name);
    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log("should Component Update "+nextProps.name+"   "+nextState.count);
      return true;
    }

    componentWillUpdate(nextProps, nextState){
      console.log("Component Will Update "+nextProps.name+"   "+nextState.count);

    }

    componentDidUpdate() {
      console.log("Component did Update");
    }

    componentWillUnmount() {
      console.log("Component will unmount");
    }

    componentDidCatch(){
 
      this.setState({hasError: true});
      console.log("Component did catch");
    }

   render() {

      if(this.state.hasError){
        return (
         <div>Something went wrong!</div>
        );
      } else {

      return (
         <div>
            
            <h1>{this.props.name}</h1>
            <h2>count: {this.state.count}</h2>

            <button onClick={this.counter}>Count!</button>

            <a href='#' onClick={this.handleClick}> Click me!</a>

            <a href='#' onClick={ e => this.handleClickTwo(e)}> Click me!</a>


            <h1>My Form</h1>

            <form onSubmit={this.handleSubmit}>
               
               <label htmlFor="firstName">First Name:</label>
               <input id="firstName" name="firstName" type="text" value={this.state.fields["firstName"]} onChange={this.handleChange}/>
               <span style={{color: "red"}}>{this.state.errors["firstName"]}</span>

               <label htmlFor="lastName">Last Nme:</label>
               <input id="lastName" name="lastName" type="text"/>

               <label htmlFor="dob">DOB:</label>
               <input id="dob" name="dob" type="text"/>
                
               <label htmlFor="age">Age:</label>
               <input id="age" name="age" type="text"/>

               <input type="submit"/>

            </form>


         </div>
      );

    }

   }
}
export default App;