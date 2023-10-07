type Proptype = {
  heading: string;
  count: number;
  title: string;
  children: string;
};
const Props = ({ heading, count, title, children }: Proptype) => {
  return (
    <div>
      <p className="text-blue-500 text-center pb-3">{title}</p>
      <h1>{heading}</h1>
      <p>{count}</p>
      {children}
    </div>
  );
};

export default Props;
