const randomColor = () => {
    const colors = [
      " #a93226",
      " #cb4335",
      " #884ea0",
      " #7d3c98",
      " #2471a3",
      " #2e86c1",
      " #17a589",
      " #138d75",
      " #229954",
      " #28b463",
      " #d4ac0d",
      " #d68910",
      " #ca6f1e",
      " #ba4a00",
    ];
    let num = Math.floor(Math.random() * (colors.length));
    return colors[num];
  };

  
export default randomColor;