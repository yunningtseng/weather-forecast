interface Props {
  percentage: number;
  date: string;
}

function PieChart({ percentage, date }: Props) {
  return (
    <div className="mb-4 md:mb-0 mx-2">
      <p className="mt-2 text-center text-third text-sm font-bold">{`${percentage} %`}</p>
      <div
        className="mt-2 w-24 h-24 rounded-full"
        style={{
          background: `conic-gradient(#1AA6B7 0% ${percentage}%, #dce5e6 ${
            100 - percentage
          }%)`,
        }}
      />
      <p className="mt-2 text-center text-third text-sm font-bold">{date}</p>
    </div>
  );
}

export default PieChart;
