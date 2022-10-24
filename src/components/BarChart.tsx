interface Props {
  title: string;
  list: number[];
  date: string[];
}

function BarChart({ title, list, date }: Props) {
  const max = Math.max(...list) + 10;
  const min = Math.min(...list) - 10;

  return (
    <div className="mt-10">
      <p className="text-center text-xl font-bold text-primary">{title}</p>
      <div className="flex mt-1">
        {list.map((item, index) => (
          <div key={index} className="table">
            <div className="table-cell align-bottom h-36">
              <div className="text-center text-third text-sm font-bold">
                {item}
              </div>

              <div
                className="mx-1 bg-secondary w-12 rounded-t-lg hover:bg-third animate-barChart"
                style={{
                  height: `${(100 * (item - min)) / (max - min)}%`,
                }}
              />
              <p className="text-center text-third text-sm font-bold">{date[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BarChart;
