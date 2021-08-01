import { Button, CardMedia, Icon } from "@material-ui/core";
import React from "react";
import { Link, NavLink, Route, Router, Switch } from "react-router-dom";
import LearnJs from "./LearnJs/Js/LearnJs";
import s from './Tit.module.css';
import video from './../../asets/images/game.mp4';

const TestTitulRout = () => {


	return (
		<>
			<div >
				<div className={ s.block }>
					<div components={ s.link }>
						<NavLink className={ s.one } activeClassName="active" to='/JS'>
							<Button link='/JS' variant='contained' color='secondary'>Js one </Button>
						</NavLink>
						<NavLink className={ s.two } to='/ReactJs'>
							<Button link='/ReactJs' variant='contained' color='secondary'> React</Button>
						</NavLink>
						<NavLink className={ s.three } to='/base'>
							<Button link='/ReactJs' variant='contained' color='secondary'> React</Button>
						</NavLink>
						<NavLink className={ s.four } to='/base'>
							<Button link='/oneTwoJS' variant='contained' color='secondary'> oneTwo</Button>
						</NavLink>
					</div>
				</div>
				<div>

				</div>
			</div>
		</>
	)
}
export default TestTitulRout;

