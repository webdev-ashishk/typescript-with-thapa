type proptype = {
  heading: string;
  count: number;
  title: string;
};
const Props = ({ heading, count, title }: proptype) => {
  return (
    <div>
      <p className="text-blue-500 text-center pb-3">{title}</p>
      <h1>{heading}</h1>
      <p>{count}</p>
    </div>
  );
};

export default Props;
