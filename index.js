const Box = (props) => {
  //  Write your code here.
  const { text, className } = props;
  return <p className={className}>{text}</p>;
};

const element = (
  //  Write your code here.

  <div className="content-container">
    <h1>Boxes</h1>
    <div className="box-container">
      <Box text="Small" className="small-box" />
      <Box text="Medium" className="medium-box" />
      <Box text="Large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
