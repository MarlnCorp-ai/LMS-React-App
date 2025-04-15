import { Fragment } from "react";

function generateFeatures({ topic, features }, key) {
  return (
    <section
      className="flex flex-col divide-y divide-black gap-2 self-start"
      key={key}
    >
      <header>
        <h2 className="font-semibold">{topic}</h2>
      </header>
      <main className="flex flex-col pt-4 gap-1">
        {features.map(({ content, about, restricted, restrictedText }, idx) => (
          <section key={idx} className="flex gap-2 items-center">
            {restricted ? (
              <span className="text-xl text-red-600 w-4 text-center">x</span>
            ) : (
              <span className="material-symbols-outlined text-xs font-bold w-4 h-4 rounded-full bg-green-400 text-center">
                check
              </span>
            )}

            <p>
              {content}
              <span className="text-sm text-pink-500">{restrictedText}</span>
            </p>
            {about && (
              <span class="w-4 h-4 border border-black rounded-full text-center text-xs font-semibold">
                i
              </span>
            )}
          </section>
        ))}
      </main>
    </section>
  );
}

function ComparePlans({
  planComparisonInfo,
  columnsNeeded = false,
  handlePlanUpdate,
  planOptions,
}) {
  const generateColumn = (startIdx, endIdx, key) => {
    return (
      <div className="flex flex-col gap-12" key={key}>
        {generateFeatures(planComparisonInfo[startIdx])}
        {generateFeatures(planComparisonInfo[endIdx])}
      </div>
    );
  };

  let body;

  if (columnsNeeded) {
    body = [
      generateFeatures(planComparisonInfo[0], 0),
      generateColumn(1, 2, 1),
      generateColumn(3, 4, 2),
      generateFeatures(planComparisonInfo[5], 3),
    ];
  } else {
    body = planComparisonInfo.map((section, idx) =>
      generateFeatures(section, idx)
    );
  }

  return (
    <Fragment>
      <div className="ml-4 flex flex-col gap-2">
        <p>Choose a plan</p>
        <select
          name="plan"
          onChange={handlePlanUpdate}
          className="rounded-xl p-2 text-center w-40"
        >
          {planOptions.map((plan, idx) => (
            <option value={plan} key={idx}>
              {plan}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap  justify-center items-start gap-16">
        {body}
      </div>
    </Fragment>
  );
}

export default ComparePlans;
