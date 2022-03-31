import 'semantic-ui-css/semantic.min.css';
import './index.scss';
import React from 'react';
import { render } from "react-dom";
import { Button } from 'semantic-ui-react'

document.addEventListener('DOMContentLoaded', () => {
    render((
        <h1>
            Hello World
            <Button>Click Here</Button>
        </h1>
    ), document.getElementById("root"))
});