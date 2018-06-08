import React, {Component, Fragment} from 'react';
import { Header, Footer, Grid } from './layouts';
import Exercises from './exercises';
import { muscles, exercises} from '../store.js';


class App extends Component {

  constructor() {
    super();
    this.state = { exercises, exercise: {} };
  }

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] =  exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    )
  }

  handleCategorySelected(category) {
    this.setState({
      category
    });
  }

  handleExerciseSelected(id) {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  }

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state;

    return <Fragment>
      <Header />

      <Exercises
        exercise={exercise}
        category={category}
        exercises={exercises}
        onSelect={this.handleExerciseSelected.bind(this)}
      />

      <Footer
        category={category}
        muscles={muscles}
        onSelect={this.handleCategorySelected.bind(this)}
      />
    </Fragment>
  }
}

export default App;
