import React, { Component } from 'react'

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Create: 'Kittichai',
            Email: 'Kittichai.p@outlook.com',
            Call: '084-7423194'
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <hr />
                <div className="text-center my-4 title text-uppercase">
                    <small>
                        <span className="text-danger"> Create By {this.state.Create} </span> | 
                        <span className="text-muted"> Contact By Email : {this.state.Email} </span>  ::
                        <span className="text-muted"> Contact By Call : {this.state.Call} </span>
                    </small>
                </div>
            </div>
        )
    }

}
