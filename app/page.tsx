import Props from "@/components/Props";

export default function Home() {
  return (
    <div className="border-2 w-[80vh] text-5xl font-bold m-10 p-10 rounded-lg border-purple-600">
      <Props
        heading="This is simple Heading"
        count={231208}
        title="props.tsx"
      />
    </div>
  );
}
