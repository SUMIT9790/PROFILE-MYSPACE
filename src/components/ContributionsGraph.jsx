import React, { useMemo, useState, useEffect } from 'react';

export const ContributionsGraph = ({ username }) => {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const user = username || 'SUMIT9790';
        const res = await fetch(`https://github-contributions-api.deno.dev/${user}.json`);
        if (res.ok) {
          const json = await res.json();
          if (json) {
            setFetchedData(json);
          }
        }
      } catch (e) {
        // Fall back to generated matrix
      }
    };
    fetchContributions();
  }, [username]);

  const { weeks, totalContributions, monthLabels } = useMemo(() => {
    const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
    const numWeeks = 26;

    if (fetchedData && fetchedData.contributions) {
      const rawDays = fetchedData.contributions.flat();
      const recentDays = rawDays.slice(-182);
      const generatedWeeks = [];

      for (let w = 0; w < numWeeks; w++) {
        const days = [];
        for (let d = 0; d < 7; d++) {
          const dayData = recentDays[w * 7 + d];
          if (dayData) {
            let level = 0;
            const count = dayData.count || 0;
            if (count > 0 && count <= 2) level = 1;
            else if (count > 2 && count <= 5) level = 2;
            else if (count > 5 && count <= 8) level = 3;
            else if (count > 8) level = 4;
            days.push({ level, count, date: dayData.date });
          } else {
            days.push({ level: 0, count: 0 });
          }
        }
        generatedWeeks.push(days);
      }

      return {
        weeks: generatedWeeks,
        totalContributions: fetchedData.total?.[selectedYear] || 78,
        monthLabels: months
      };
    }

    const generatedWeeks = [];
    for (let w = 0; w < numWeeks; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        let level = 0;
        let count = 0;

        if (w >= 18) {
          const rand = Math.random();
          if (rand > 0.35) {
            level = Math.floor(Math.random() * 4) + 1;
            count = level * 3;
          }
        } else if (w === 4 && d === 6) {
          level = 3; count = 7;
        }

        days.push({ level, count });
      }
      generatedWeeks.push(days);
    }

    return {
      weeks: generatedWeeks,
      totalContributions: selectedYear === '2026' ? 78 : 142,
      monthLabels: months
    };
  }, [fetchedData, selectedYear]);

  const getGitHubGreenColor = (level) => {
    switch (level) {
      case 1:
        return 'bg-[#0e4429] border-[#0e4429]';
      case 2:
        return 'bg-[#006d32] border-[#006d32]';
      case 3:
        return 'bg-[#26a641] border-[#26a641]';
      case 4:
        return 'bg-[#39d353] border-[#39d353]';
      default:
        return 'bg-[var(--heatmap-empty)] border-[var(--heatmap-empty)]';
    }
  };

  return (
    <section className="py-8 border-b theme-border font-sans">
      <div className="flex items-center justify-between mb-3 font-sans">
        <h3 className="text-base font-semibold theme-text-title">
          {totalContributions} contributions in the last 6 months
        </h3>

        <div className="flex items-center gap-3">
          <span className="text-xs theme-text-muted font-sans hidden sm:inline">
            Contribution settings ▾
          </span>
          <div className="flex items-center gap-1 font-mono text-xs">
            <button
              onClick={() => setSelectedYear('2026')}
              className={`px-3 py-1 rounded-md font-semibold transition-colors ${
                selectedYear === '2026'
                  ? 'bg-blue-600 text-white'
                  : 'theme-text-muted hover:theme-text-title hover:bg-[var(--bg-card-hover)]'
              }`}
            >
              2026
            </button>
            <button
              onClick={() => setSelectedYear('2025')}
              className={`px-3 py-1 rounded-md font-semibold transition-colors ${
                selectedYear === '2025'
                  ? 'bg-blue-600 text-white'
                  : 'theme-text-muted hover:theme-text-title hover:bg-[var(--bg-card-hover)]'
              }`}
            >
              2025
            </button>
          </div>
        </div>
      </div>

      <div className="theme-bg-card border theme-border rounded-xl p-4 font-mono text-xs overflow-x-auto w-full shadow-sm">
        <div className="flex justify-between items-center theme-text-muted text-[11px] pb-2 min-w-[500px] font-sans font-medium">
          <div className="w-7"></div>
          <div className="flex-1 flex justify-between px-1">
            {monthLabels.map((m, idx) => (
              <span key={idx}>{m}</span>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-2 min-w-[500px]">
          <div className="flex flex-col justify-between h-[105px] theme-text-muted text-[11px] pr-2 py-0.5 font-sans font-medium">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
          </div>

          <div className="flex-1 flex justify-between gap-[4px]">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-[4px]">
                {week.map((day, dIdx) => (
                  <div
                    key={dIdx}
                    title={`${day.count} contributions ${day.date ? `on ${day.date}` : ''}`}
                    className={`w-[11px] h-[11px] sm:w-[12px] sm:h-[12px] rounded-[2px] ${getGitHubGreenColor(
                      day.level
                    )} transition-all hover:scale-150 hover:z-20 cursor-pointer`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 theme-text-muted text-[11px] font-sans border-t theme-border mt-3">
          <a
            href={`https://github.com/${username || 'SUMIT9790'}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors text-[11px]"
          >
            Learn how we count contributions
          </a>

          <div className="flex items-center gap-1.5 text-[11px]">
            <span>Less</span>
            <div className="w-2.5 h-2.5 rounded-[2px] bg-[var(--heatmap-empty)]" />
            <div className="w-2.5 h-2.5 rounded-[2px] bg-[#0e4429]" />
            <div className="w-2.5 h-2.5 rounded-[2px] bg-[#006d32]" />
            <div className="w-2.5 h-2.5 rounded-[2px] bg-[#26a641]" />
            <div className="w-2.5 h-2.5 rounded-[2px] bg-[#39d353]" />
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
};
