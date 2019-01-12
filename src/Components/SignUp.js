import React from 'react';


class SignUp extends React.Component {

    constructor(props)
    {
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    state={
        name:'',
        username:''
    }


    onChange(e)
    {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit(e)
    {
        e.preventDefault();
        this.props.addUser({...this.state});
    }

  render() {
    return (
      <div>  
     <form onSubmit={this.onSubmit}>
      <input name={"name"} id={"name"} value={this.state.name}  onChange={this.onChange}/><br/>
      <input name={"username"} id={"username"} value={this.state.username}  onChange={this.onChange}/><br/>
      <button>Sign Up</button>
    </form>
      </div>
    );
  }
}

export default SignUp;