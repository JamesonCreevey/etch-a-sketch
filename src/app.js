const container = document.getElementById("container");
const width = 16;

//*Main game function
const game = () => {
  //Create the 16 x 16 grid
  const createBoard = () => {
    for (let i = 0; i < width * width; i++) {
      square = document.createElement("div");
      square.classList.add("grid");
      container.appendChild(square);
    }
  };

  //hover effect to select random color to draw to the board
  const hoverEffect = () => {
    const squares = document.querySelectorAll("#container > div");
    squares.forEach((square) => {
      square.addEventListener("mouseover", function (e) {
        const softPalette = [
          "#f3a683",
          "#f7d794",
          "#77d794",
          "#e77f67",
          "#cf6a87",
          "#f19066",
          "#f5cd79",
          "#546de5",
          "#e15f41",
          "#c44569",
          "#786fa6",
          "#f8a5c2",
          "#63cdda",
          "#ea8685",
          "#596275",
          "#574b90",
          "#f78fb3",
          "#3dc1d3",
          "#e66767",
          "#303952",
        ];
        const randColor =
          softPalette[Math.floor(Math.random() * softPalette.length)];
        e.target.style.backgroundColor = randColor;
      });
    });
  };

  createBoard();
  hoverEffect();
};

game();
