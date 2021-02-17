import React, { Component } from "react";
import { Grid } from '@material-ui/core';
import './Body.css';
import { QuickMenu } from "./QuickMenu";

class Body extends Component {
    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className="img_wrap">
                        <img src="/static/img/main.jpg" alt="No IMG"/>
                    </div>
                </Grid>
                <Grid container item xs={12}>
                <ul className="quick_menu">
                    {QuickMenu.map((item, index) => {
                        return (
                            <li>
                                <a href={item.url}><h1><i className={item.cName}></i><br/>{item.title}</h1></a>
                            </li>
                        )
                    })}
                </ul>
                </Grid>
            </Grid>
        )
    }
}
export default Body;