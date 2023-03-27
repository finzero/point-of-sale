export const Navigation = () => {
  return (
    <div className="flex gap-2">
      <a href="/">
        <i className="text-yellow-200 fi fi-ss-shop mr-2" />
      </a>
      <a href="/sales">
        <i className="text-slate-300 fi fi-ss-chart-line-up mr-2"></i>
      </a>
      <i className="text-slate-300 fi fi-ss-chart-pie-alt mr-2"></i>
    </div>
  );
};
