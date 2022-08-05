import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 20vw;
`;
const InputN = styled.input`
  width: 20vw;
  color: red;
`;

export default class App extends React.Component {
  state = {
    n1: "",
    n2: "",
    resultado: 0
  };
  handleChange1 = (event) => {
    this.setState({ n1: Number(event.target.value) });
  };
  handleChange2 = (event) => {
    this.setState({ n2: Number(event.target.value) });
  };

  mult = () => {
    this.setState({
      resultado: this.state.n1 * this.state.n2
    });
  };
  soma = () => {
    this.setState({
      resultado: this.state.n1 + this.state.n2
    });
  };

  divisao = () => {
    this.setState({
      resultado: this.state.n1 / this.state.n2
    });
  };
  subtracao = () => {
    this.setState({
      resultado: this.state.n1 - this.state.n2
    });
  };
  pagar = () => {
    this.setState({
      n1: "",
      n2: "",
      resultado: 0
    });
  };

  render() {
    return (
      <div>
        <h1>Calculador</h1>
        <Input onChange={this.handleChange1} value={this.state.n1} />
        <InputN onChange={this.handleChange2} value={this.state.n2} />
        <button onClick={this.mult}>*</button>
        <button onClick={this.soma}>+</button>
        <button onClick={this.divisao}>/</button>
        <button onClick={this.subtracao}>-</button>
        <button onClick={this.pagar}>Clear</button>
        <h2>{this.state.resultado}</h2>
      </div>
    );
  }
}
