import React, { Component } from 'react';

class Login extends Component {

    state={
        name:'',
        username:'',
    }
    constructor(props)
    {
        super();
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
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
        this.props.loginUser({...this.state});
    }

  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit}>
      <input name={"name"} id={"name"} value={this.state.name} onChange={this.onChange} /><br/>
      <input name={"username"} id={"username"} value={this.state.username} onChange={this.onChange} /><br/><br/>
      <button>Click</button>
      </form>
      </div>
    );
  }
}

export default Login;
