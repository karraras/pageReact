import React from "react";
function App() {
  const [move, setMove] = React.useState(0);
  let nu = -50;
  const number = [
    { num: 1 },
    { num: 2 },
    { num: 3 },
    { num: 4 },
    { num: 5 },
    { num: 6 },
    { num: 7 },
    { num: 8 },
    { num: 9 },
  ];

  const handleLeft = (e) => {
    if (e < 0) {
      return e + 50;
    } else {
      return -250;
    }
  };
  const handleRight = (e) => {
    if (e > -250) {
      return e - 50;
    } else {
      return 0;
    }
  };

  return (
    <section className="sm:container justify-center flex h-[100vh] items-center">
      <div className="border-2 rounded-md border-purple-950 w-[300px] flex  flex-row">
        <button
          className="w-1/6 items-center justify-center flex h-[35px]"
          onClick={() => setMove((e) => handleLeft(parseInt(e)))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <ul className="flex-row flex overflow-hidden w-4/6 relative">
          {number.map((nums, index) => {
            nu += 50;
            return (
              <li
                className={`border-l-2 border-purple-950
                 items-center justify-center flex h-[35px] w-[25%] absolute `}
                key={index}
                style={{
                  marginLeft: `${nu}px`,
                  transform: `translateX(${move}px)`,
                }}
              >
                {nums.num}
              </li>
            );
          })}
        </ul>
        <button
          className=" border-l-2 border-purple-950 items-center justify-center flex w-1/6 h-[35px]"
          onClick={() => setMove((e) => handleRight(parseInt(e)))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default App;
