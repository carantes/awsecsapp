import React from 'react'
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap'
import css from './app.css'
import Axios from "axios"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'React is working',
      value: '',
      message: ''
    }
  }

  getValidationState() {
    // const length = this.state.value.length
    // if (length >= 5) {
    //   return 'success'
    // }
    // else if (length > 0) {
    //   return 'error'
    // }

    return null
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  handleButtonClick () {
    const request = Axios
      .post('http://localhost:8090/api/sample/', {
        data: this.state.value
      })
      .then((response) => {
        console.log(response.data.message);

        this.setState ({
          message: response.data.message
        })
      })
  }

  render() {
    return (
      <div className={css.body} >
        <form >
          <FormGroup
            controlId="form"
          >
            <ControlLabel>{this.state.title}</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Digite um texto e clique no botão para chamar a api de exemplo"
              onChange={this.handleChange.bind(this)}
            />
            <FormControl.Feedback />
            <HelpBlock>{this.state.message}</HelpBlock>
            <Button bsStyle="info" onClick={this.handleButtonClick.bind(this)} >GO</Button>
          </FormGroup>
        </form>
      </div>
    )
  }
}
