let Currenttime = () => {
  let time = new Date();
  return <p className="lead">The time is: {time.toLocaleTimeString()}</p>;
};

export default Currenttime;
