import React, { Component } from "react";
import { API_URL } from "../config";
import { Container, Box, GameArea } from "./Game.styled";
import StartBox from "./StartBox/StartBox";
import GameOver from "./GameOver/GameOver";
import GameBox from "./GameBox/GameBox";
import Buttons from "./Buttons/Buttons";
import Info from "./Info/Info";

const getRandomCoordinates = () => {
  let min = 2;
  let max = 96;
  let x = Math.floor((Math.random() * (max - min + 2) + min) / 4) * 4;
  let y = Math.floor((Math.random() * (max - min + 2) + min) / 4) * 4;
  return [x, y];
};

const getRandomColor = () => {
  let colors = ["red", "yellow", "green"];
  let currentColor = colors[Math.floor(Math.random() * colors.length)];
  return currentColor;
};

const initialState = {
  status: 0,
  speed: 500,
  direction: "RIGHT",
  snakeDots: [[0, 0]],
  feed: getRandomCoordinates(),
  colorFeed: getRandomColor(),
  score: 0,
  speedUpLimit: 50,
  board: [],
};
let name = "";
const setCurrentPlayer = (enteredName) => {
  name = enteredName;
  return name;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.checkIfEat();
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    this.checkCrossesBorder();
    this.checkCrossesBody();
    this.checkIfEat();
    this.setSpeed();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({ direction: "UP" });
        break;
      case 40:
        this.setState({ direction: "DOWN" });
        break;
      case 37:
        this.setState({ direction: "LEFT" });
        break;
      case 39:
        this.setState({ direction: "RIGHT" });
        break;
      case 13:
        this.checkPlay();
        break;
      // no default
    }
  };

  onClick = (e) => {
    switch (e.target.id) {
      case "Pause":
        this.checkPlay();
        break;
      case "Restart":
        this.restart();
        break;
      case "Newstart":
        this.restart();
        break;
      case "Exit":
        name = "";
        this.setState(initialState);
        break;
      // no default
    }
  };

  checkPlay() {
    if (this.state.status === 1) {
      clearInterval(this.timerID);
      this.setState({ status: 2 });
    } else if (this.state.status === 2) {
      this.initialInterval();
      this.setState({ status: 1 });
    }
  }

  restart() {
    clearInterval(this.timerID);
    this.setState(initialState);
    this.initialInterval();
    this.setState({
      name: name,
      feed: getRandomCoordinates(),
      colorFeed: getRandomColor(),
      status: 1,
      gameScore: 0,
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    setCurrentPlayer(value);
    this.setState({ name: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      return;
    } else {
      this.setState({ status: 1, snakeDots: [[0, 0]] });
      this.initialInterval();
    }
  };

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    switch (this.state.direction) {
      case "RIGHT":
        head = [head[0] + 4, head[1]];
        break;
      case "LEFT":
        head = [head[0] - 4, head[1]];
        break;
      case "DOWN":
        head = [head[0], head[1] + 4];
        break;
      case "UP":
        head = [head[0], head[1] - 4];
        break;
      // no default
    }
    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots,
    });
  };

  initialInterval() {
    this.timerID = setInterval(this.moveSnake, this.state.speed);
  }

  checkCrossesBorder() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.gameOver();
    }
  }

  checkCrossesBody() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach((dot) => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        this.gameOver();
      }
    });
  }

  checkIfEat() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let feed = this.state.feed;
    if (head[0] === feed[0] && head[1] === feed[1]) {
      this.setState({
        feed: getRandomCoordinates(),
        colorFeed: getRandomColor(),
      });
      this.setScorePoint();
      this.setLendthSnake();
    }
  }

  setLendthSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.setState({
      snakeDots: newSnake,
    });
  }

  setScorePoint() {
    let point;
    if (this.state.colorFeed === "red") {
      point = 1;
    }
    if (this.state.colorFeed === "yellow") {
      point = 5;
    }
    if (this.state.colorFeed === "green") {
      point = 10;
    }
    this.setState({ score: this.state.score + point });
  }

  setSpeed() {
    if (this.state.score > this.state.speedUpLimit) {
      this.setState({
        speed: this.state.speed - 50,
        speedUpLimit: this.state.speedUpLimit + 50,
      });
    }
  }

  gameOver() {
    clearInterval(this.timerID);
    this.gameScore = this.state.score;
    this.postInData().then(
      this.getFromData().then((res) => {
        this.setState({ board: res });
        console.log(this.state.board);
      })
    );
    this.setState(initialState);
    this.setState({
      feed: getRandomCoordinates(),
      colorFeed: getRandomColor(),
    });
    this.setState({
      status: 3,
      speed: 500,
      speedUpLimit: 50,
      snakeDots: [[0, 0]],
    });
    this.getFromData().then((res) => {
      this.setState({ board: res });
      console.log(this.state.board);
    });
  }

  async postInData() {
    const url = `${API_URL}/api/user`;
    const postToAdd = {
      name: this.state.name,
      score: this.gameScore,
    };
    const option = {
      method: "POST",
      body: JSON.stringify(postToAdd),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
    const response = await fetch(url, option);
    const res = response.json();
    return res;
    // fetch(`${API_URL}/api/user`, {
    //   method: "POST",
    //   body: JSON.stringify(postToAdd),
    //   headers: {
    //     "Content-Type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .catch((error) => console.log(error));
  }

  async getFromData() {
    const url = `${API_URL}/api/user`;
    const response = await fetch(url);
    const res = response.json();
    return res;
  }

  render() {
    if (this.state.status === 0) {
      return (
        <Container>
          <Box>
            <StartBox
              onClick={this.handleSubmit}
              onChange={this.handleChange}
            />
          </Box>
        </Container>
      );
    } else {
      return (
        <Container>
          {this.state.status === 3 ? (
            <Box>
              <GameOver
                onClick={this.onClick}
                score={this.gameScore}
                board={this.state.board}
              />
            </Box>
          ) : (
            <GameArea>
              <Buttons onClick={this.onClick} />
              <GameBox
                snakeDots={this.state.snakeDots}
                dot={this.state.feed}
                color={this.state.colorFeed}
              />
              <Info score={this.state.score} name={this.state.name} />
            </GameArea>
          )}
        </Container>
      );
    }
  }
}

export default App;
