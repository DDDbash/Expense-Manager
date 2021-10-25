import React, { Component } from 'react';

class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    }
    usernameChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({ username }));
    }
    passwordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    }
    render() {
        return (
            <div className="container">
                <div className="d-flex align-items-center flex-column">
                    <h2 className="p-2">Login</h2>
                    <div className="card p-2">
                        <div className="py-4 text-center">
                            <h1 className="text-secondary my-3">Expense Manager</h1>
                        </div>
                        <div className="mx-sm-auto p-3">
                            <h4 className="text-left text-secondary border-bottom border-secondary pb-2 text-uppercase">
                                Log in to get started
                            </h4>
                            <div className="text-left purple-text font-weight-bold">
                                <form onSubmit={this.submit}>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="info"
                                            placeholder="Username"
                                            onChange={this.usernameChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Password"
                                            onChange={this.passwordChange}
                                        />
                                    </div>

                                    <button
                                        className="btn purple-background text-white mb-3"
                                        name="btnsubmit"
                                    >
                                        Login
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;