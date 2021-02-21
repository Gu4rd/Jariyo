import React, { Component } from "react";
import { Container, Grid } from '@material-ui/core';
import './Body.css';
import { QuickMenu } from "./QuickMenu";
import { Button } from "../Button"

class Body extends Component {
    render() {
        return (
            <div>
                <Grid item xs={12}>
                    <div className="img_wrap">
                        <img src="/static/img/main.jpg" alt="No IMG"/>
                    </div>
                </Grid>

                <br/>
                <Container maxWidth="md">
                    <Grid container xs={12}>
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

                    <br/><br/><br/>
                    <div className="content_wrap">
                        <Grid container spacing={3}>
                            <Grid item xs={12}><h1>자리요 제작진</h1></Grid>

                            <Grid item xs={6}><div className="member">
                                ewhdtls0<br/><br/>
                                Contect : ewhdtls0@gmail.com
                                <a href="https://github.com/ewhdtls0"><i className="fab fa-github-square"></i></a>
                            </div></Grid>
                            <Grid item xs={6}><div className="member">
                                feel0321<br/><br/>
                                Contect : feel0321@naver.com
                                <a href="https://github.com/feel0321"><i className="fab fa-github-square"></i></a>
                            </div></Grid>
                            <Grid item xs={6}><div className="member">
                                Gu4rd<br/><br/>
                                Contect : rhrudgh12@naver.com
                                <a href="https://github.com/gu4rd"><i className="fab fa-github-square"></i></a>
                            </div></Grid>
                            <Grid item xs={6}><div className="member">
                                xhens1<br/><br/>
                                Contect : chungayun@naver.com
                                <a href="https://github.com/xhens1"><i className="fab fa-github-square"></i></a>

                            </div></Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        )
    }
}
export default Body;