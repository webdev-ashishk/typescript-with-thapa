type proptype = {
  heading: string;
  count: number;
};
const Props = ({ heading, count }: proptype) => {
  return (
    <div>
      <h1>{heading}</h1>
      <p>{count}</p>
    </div>
  );
};

export default Props;
