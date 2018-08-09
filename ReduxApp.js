import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './_helpers';
import { alertActions } from './_actions';
import { PrivateRoute } from './_components';

class ReduxApp extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        const { dispatch } = this.props;
        
        //dispatch(alertActions.successRequest());
    }
   
    handleChange(){

        this.props.dispatch(alertActions.clear());
    }

    render(){
       const { alert } = this.props;
       return(

        <div>
           
           <h1>{alert.message}</h1>
           <button onClick={this.handleChange}>clear</button>
           <button onClick={this.props.handleClick}>Dispatch Action</button>
        </div>

       );

    }

}

// function mapStateToProps(state) {
//     const { alert } = state;
//     return {
//         alert
//     };
// }

const mapStateToProps = (state) => ({
     
    alert : state.alert
    
});

const mapDispatchToProps = (dispatch) => ({
    handleClick: () => dispatch(alertActions.successRequest()),
    dispatch,
});

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(ReduxApp);
export { connectedApp as ReduxApp }