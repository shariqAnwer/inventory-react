import React, { useState } from "react";

export const Inventory = () => {
  // const [books, setBooks] = React.useState(10)
  // const [notebooks, setBooks] = React.useState(10)
  // const [books, setBooks] = React.useState(10)

  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 20
  });
  // Create add and remove functions here that changes the
  // state.
  const incBooks = (value) => {
    setInv({ ...inv, books: inv.books + value });
  };
  const incNoteBooks = (value) => {
    setInv({ ...inv, notebooks: inv.notebooks + value });
  };
  const incPens = (value) => {
    setInv({ ...inv, pens: inv.pens + value });
  };
  const incInkPens = (value) => {
    setInv({ ...inv, inkpens: inv.inkpens + value });
  };

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px"
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={() => incBooks(1)}>
          +
        </button>
        <button className="circlularButton" onClick={() => incBooks(-1)}>
          -
        </button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={() => incNoteBooks(1)}>
          +
        </button>
        <button className="circlularButton" onClick={() => incNoteBooks(-1)}>
          -
        </button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={() => incPens(1)}>
          +
        </button>
        <button className="circlularButton" onClick={() => incPens(-1)}>
          -
        </button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={() => incInkPens(1)}>
          +
        </button>
        <button className="circlularButton" onClick={() => incInkPens(-1)}>
          -
        </button>
        <span>{inv.inkpens}</span>
      </div>
      <hr />
      <h3 className="items">
        {/*calculate total and show it*/}
        total: ---------------------{" "}
        {inv.books + inv.notebooks + inv.pens + inv.inkpens}
      </h3>
    </div>
  );
};
