import {
	Card,
	CardActionArea,
	CardContent,
	createMuiTheme,
	Grid,
	makeStyles,
	Theme,
	ThemeProvider,
	Typography,
	useMediaQuery
} from '@material-ui/core';
import React from 'react';
import projects, {Project} from '../config/projects';

const useStyles = makeStyles((theme: Theme) => ({
	card: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText
	},
	description: {
		marginTop: 12
	}
}));

export function ProjectCard(props: {project: Project}): JSX.Element {
	const classes = useStyles();
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const theme = createMuiTheme({
		palette: {text: {secondary: prefersDarkMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)'}}
	});

	const content = (
		<ThemeProvider theme={theme}>
			<CardContent>
				<Typography variant='h5' component='h3'>
					{props.project.title}
				</Typography>
				{props.project.stack && <Typography color='textSecondary'>{props.project.stack.join(', ')}</Typography>}
				<Typography className={classes.description} variant='body2' component='p'>
					{props.project.description}
				</Typography>
			</CardContent>
		</ThemeProvider>
	);

	return (
		<Card className={classes.card}>
			{props.project.url ? (
				<CardActionArea href={props.project.url} rel='noopener noreferrer'>
					{content}
				</CardActionArea>
			) : (
				content
			)}
		</Card>
	);
}

export function Projects(): JSX.Element {
	return (
		<Grid container spacing={1} direction='row' justify='flex-start' alignItems='stretch'>
			{projects.map(project => (
				<Grid key={project.title} item xs={12} sm={6} md={4}>
					<ProjectCard project={project} />
				</Grid>
			))}
		</Grid>
	);
}
