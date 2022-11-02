interface Props {
  title: string;
  list: number[];
  date: string[];
}

function BarChart({ title, list, date }: Props) {
  const max = Math.max(...list);
  const min = Math.min(...list);

  return (
    <div className="mt-10">
      <p className="text-center text-xl font-bold text-primary mb-14">{title}</p>
      <div className="flex mt-1">
        {list.map((item, index) => (
          <div key={index} className="table">
            <div className="table-cell align-bottom h-28">
              <div className="text-center text-third text-sm font-bold">
                {item.toFixed(1)}
              </div>

              <div
                className="mx-1 bg-secondary w-12 rounded-t-lg hover:bg-third animate-barChart"
                style={{
                  height: `${(80 * (item - min)) / (max - min) + 20}%`,
                }}
              />
              <p className="text-center text-third text-sm font-bold">
                {date[index]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BarChart;
