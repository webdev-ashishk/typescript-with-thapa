import Props from "@/components/Props";
import UseState from "@/components/UseState";

export default function Home() {
  return (
    <>
      <div className="border-2 w-[80vh] text-5xl font-bold m-10 p-10 rounded-lg border-purple-600">
        <Props
          heading="This is simple Heading"
          count={231208}
          title="props.tsx"
        >
          <h1>this is chidren of h1</h1>
        </Props>
      </div>
      <div className="border-4 w-[80vh] m-10 p-10 rounded-lg border-green-600 ">
        <UseState />
      </div>
    </>
  );
}
