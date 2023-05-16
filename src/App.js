

function App  () {
  const handleClickFunction = (e) => {
    const body = document.querySelector("body");
    body.style.background = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
  };

  function getRandomColor(){
    let letters = "0123456789ABCDEFGH";
    let color = "#"
    for(let i = 0; i<6; i++){
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
  }
  return (
    <>
     <div className="container">
      <h1>Random BackGround color generator</h1>
      <button className="btn" onClick={handleClickFunction}>
          Click me
      </button>
      </div> 
    </>
  );
}

export default App
