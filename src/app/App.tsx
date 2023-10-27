import "reflect-metadata";
import React, {Component} from 'react';
import { container } from "tsyringe";
import {Bar} from "./Bar";

const myBar = container.resolve(Bar);
class App extends Component {
    render() {
        return (
            <div>
                Hello!
                {myBar.info()}
                {myBar.myFoo.info()}
            </div>
        );
    }
}

export default App;
