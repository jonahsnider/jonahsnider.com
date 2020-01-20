import {Card, CardActionArea, CardContent, Grid, makeStyles, Theme, Typography} from '@material-ui/core';
import React from 'react';
import projects, {Project} from '../config/projects';

const useStyles = makeStyles((theme: Theme) => ({
	card: {
		minWidth: 275,
		maxWidth: 345,
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText
	},
	description: {
		marginTop: 12
	},
	stack: {
		color: theme.palette.type === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'
	}
}));

export function ProjectCard(props: {project: Project}): JSX.Element {
	const classes = useStyles();

	const content = (
		<CardContent>
			<Typography variant='h5' component='h3'>
				{props.project.title}
			</Typography>
			{props.project.stack && <Typography className={classes.stack}>{props.project.stack.join(', ')}</Typography>}
			<Typography className={classes.description} variant='body2' component='p'>
				{props.project.description}
			</Typography>
		</CardContent>
	);

	return (
		<Card className={classes.card}>
			{props.project.url ? <CardActionArea href={props.project.url}>{content}</CardActionArea> : content}
		</Card>
	);
}

export function Projects(): JSX.Element {
	return (
		<Grid container spacing={1}>
			{projects.map(project => (
				<Grid key={project.title} item>
					<ProjectCard project={project} />
				</Grid>
			))}
		</Grid>
	);
}
