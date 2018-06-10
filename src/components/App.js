import React, {Component, Fragment} from 'react';
import { Header, Footer, Grid } from './layouts';
import Exercises from './exercises';
import { muscles, exercises} from '../store.js';


class App extends Component {

  state = {
    exercises,
    exercise: {}
  }
  /*constructor() {
    super();
    this.state = { exercises, exercise: {} };
  }*/

  getExercisesByMuscles() {
    const initExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {})

    console.log(muscles, initExercises)

    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        /* Old way
        exercises[muscles] =  exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        */
        exercises[muscles] = [...exercises[muscles], exercise]

        return exercises;
      }, initExercises)
    )
  }

  handleCategorySelect = category =>
    this.setState({
      category
    });

  handleExerciseSelect = id =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));

  handleExerciseCreate = exercise =>
    this.setState(({exercises}) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))

  handleExerciseDelete = id =>
    this.setState(({ exercises }) =>  ({
      exercises: exercises.filter(ex => ex.id !== id)
    }))


  handleExerciseSelectEdit = id =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }))

    handleExerciseEdit = exercise =>
      this.setState(({ exercises }) => ({
        exercises: [
          ...exercises.filter(ex => ex.id !== exercise.id),
          exercise
        ]
      }))

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise, editMode } = this.state;

    return <Fragment>
      <Header
        muscles={muscles}
        onExerciseCreate={this.handleExerciseCreate}
      />

      <Exercises
        editMode={editMode}
        exercise={exercise}
        category={category}
        exercises={exercises}
        muscles={muscles}
        onSelect={this.handleExerciseSelect}
        onDelete={this.handleExerciseDelete}
        onSelectEdit={this.handleExerciseSelectEdit}
        onEdit={this.handleExerciseEdit}
      />

      <Footer
        category={category}
        muscles={muscles}
        onSelect={this.handleCategorySelect}
      />
    </Fragment>
  }
}

export default App;
