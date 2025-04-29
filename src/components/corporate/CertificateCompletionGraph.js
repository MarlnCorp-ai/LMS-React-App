import React, { useState, useMemo } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement,
  Title, 
  Tooltip, 
  Legend,
  Filler
} from 'chart.js';

// Register the components of ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const CertificateCompletionGraph = ({ certificateData }) => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [viewMode, setViewMode] = useState('line'); // 'line' or 'bar'
  const [showComparison, setShowComparison] = useState(false);

  // Process data for the selected year and comparison
  const { filteredData, comparisonData, monthlyData, monthlyComparison } = useMemo(() => {
    const filtered = certificateData.filter(item => new Date(item.date).getFullYear() === year);
    const comparison = showComparison ? 
      certificateData.filter(item => new Date(item.date).getFullYear() === year - 1) : 
      [];
    
    // Monthly data for current year
    const monthly = Array(12).fill(0).map((_, month) => 
      filtered.filter(item => new Date(item.date).getMonth() === month).length
    );
    
    // Monthly data for comparison year
    const monthlyComp = showComparison ? 
      Array(12).fill(0).map((_, month) => 
        comparison.filter(item => new Date(item.date).getMonth() === month).length
      ) : 
      Array(12).fill(0);
    
    return { 
      filteredData: filtered, 
      comparisonData: comparison,
      monthlyData: monthly,
      monthlyComparison: monthlyComp
    };
  }, [certificateData, year, showComparison]);

  // Chart data configuration
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: `${year} Completions`,
        data: monthlyData,
        borderColor: 'rgba(59, 130, 246, 1)',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        fill: true,
        borderWidth: 2,
        tension: 0.4,
      },
      ...(showComparison ? [{
        label: `${year - 1} Completions`,
        data: monthlyComparison,
        borderColor: 'rgba(156, 163, 175, 1)',
        backgroundColor: 'rgba(156, 163, 175, 0.2)',
        fill: true,
        borderWidth: 2,
        tension: 0.4,
        borderDash: [5, 5],
      }] : [])
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: `Certificate Completion Trends`,
        font: { size: 16 }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw} completion${context.raw !== 1 ? 's' : ''}`
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Completions'
        },
        ticks: {
          precision: 0
        }
      },
      x: {
        title: {
          display: true,
          text: 'Month'
        }
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    }
  };

  // Statistics calculations
  const totalCompleted = filteredData.length;
  const learners = [...new Set(filteredData.map(item => item.learner))].length;
  const completionRate = learners > 0 ? ((totalCompleted / learners) * 100).toFixed(1) : 0;
  
  // Comparison statistics
  const prevYearCompleted = comparisonData.length;
  const prevYearLearners = [...new Set(comparisonData.map(item => item.learner))].length;
  const completionChange = prevYearCompleted > 0 ? 
    (((totalCompleted - prevYearCompleted) / prevYearCompleted) * 100).toFixed(1) : 
    'N/A';

  // Find busiest month
  const busiestMonth = monthlyData.reduce((maxIndex, current, index, arr) => 
    current > arr[maxIndex] ? index : maxIndex, 0);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                     'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className="certificate-completion-graph p-6 bg-white rounded-lg shadow-md">
      <div className="header flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Certificate Analytics</h2>
          <p className="text-gray-600">Track completion trends and learner achievements</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <select 
            onChange={(e) => setYear(Number(e.target.value))} 
            value={year}
            className="p-2 border rounded-md bg-white"
          >
            {Array.from({ length: 10 }, (_, i) => currentYear - i).map((yr) => (
              <option key={yr} value={yr}>{yr}</option>
            ))}
          </select>
          
          <div className="flex gap-2">
            <button 
              onClick={() => setViewMode('line')}
              className={`px-3 py-1 rounded-md ${viewMode === 'line' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`}
            >
              Line
            </button>
            <button 
              onClick={() => setViewMode('bar')}
              className={`px-3 py-1 rounded-md ${viewMode === 'bar' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`}
            >
              Bar
            </button>
          </div>
          
          <label className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md">
            <input 
              type="checkbox" 
              checked={showComparison}
              onChange={() => setShowComparison(!showComparison)}
              className="h-4 w-4"
            />
            Compare to {year - 1}
          </label>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="stats grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="stat-item p-4 bg-blue-50 rounded-lg border border-blue-100">
          <h4 className="text-sm font-medium text-blue-800">Total Certificates</h4>
          <p className="text-2xl font-bold text-blue-600">{totalCompleted}</p>
          {showComparison && prevYearCompleted > 0 && (
            <p className="text-xs mt-1">
              <span className={completionChange > 0 ? 'text-green-600' : 'text-red-600'}>
                {completionChange}% {completionChange > 0 ? '↑' : '↓'}
              </span> from {year - 1}
            </p>
          )}
        </div>
        
        <div className="stat-item p-4 bg-purple-50 rounded-lg border border-purple-100">
          <h4 className="text-sm font-medium text-purple-800">Unique Learners</h4>
          <p className="text-2xl font-bold text-purple-600">{learners}</p>
          {showComparison && prevYearLearners > 0 && (
            <p className="text-xs mt-1">
              <span className={learners > prevYearLearners ? 'text-green-600' : 'text-red-600'}>
                {Math.abs(learners - prevYearLearners)} {learners > prevYearLearners ? 'more' : 'fewer'}
              </span> than {year - 1}
            </p>
          )}
        </div>
        
        <div className="stat-item p-4 bg-green-50 rounded-lg border border-green-100">
          <h4 className="text-sm font-medium text-green-800">Avg. Completions/Learner</h4>
          <p className="text-2xl font-bold text-green-600">{completionRate}</p>
        </div>
        
        <div className="stat-item p-4 bg-amber-50 rounded-lg border border-amber-100">
          <h4 className="text-sm font-medium text-amber-800">Busiest Month</h4>
          <p className="text-2xl font-bold text-amber-600">{monthNames[busiestMonth]}</p>
          <p className="text-xs mt-1">{monthlyData[busiestMonth]} completions</p>
        </div>
      </div>

      {/* Main Chart */}
      <div className="graph-container mb-6 bg-gray-50 p-4 rounded-lg" style={{ height: '350px' }}>
        {viewMode === 'line' ? (
          <Line data={chartData} options={options} />
        ) : (
          <Bar data={chartData} options={{ ...options, plugins: { ...options.plugins, title: { ...options.plugins.title, text: 'Monthly Certificate Completions' } } }} />
        )}
      </div>

      {/* Detailed Insights */}
      <div className="insights grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="p-4 bg-white border rounded-lg shadow-sm">
          <h4 className="font-semibold mb-3 text-gray-700">Monthly Breakdown</h4>
          <div className="space-y-2">
            {monthlyData.map((count, index) => (
              <div key={index} className="flex items-center">
                <span className="w-20 text-sm text-gray-500">{monthNames[index]}</span>
                <div className="flex-1 flex items-center">
                  <div 
                    className="h-4 bg-blue-200 mr-2" 
                    style={{ width: `${(count / Math.max(...monthlyData)) * 100}%` }}
                  ></div>
                  <span className="text-sm font-medium">{count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-4 bg-white border rounded-lg shadow-sm">
          <h4 className="font-semibold mb-3 text-gray-700">Top Learners</h4>
          {learners > 0 ? (
            <div className="space-y-3">
              {[...new Set(filteredData.map(item => item.learner))]
                .map(learner => ({
                  name: learner,
                  count: filteredData.filter(item => item.learner === learner).length
                }))
                .sort((a, b) => b.count - a.count)
                .slice(0, 5)
                .map((learner, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{index + 1}. {learner.name}</span>
                    <span className="text-sm font-medium bg-blue-100 px-2 py-1 rounded">
                      {learner.count} {learner.count === 1 ? 'cert' : 'certs'}
                    </span>
                  </div>
                ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">No learner data for {year}</p>
          )}
        </div>
        
        <div className="p-4 bg-white border rounded-lg shadow-sm">
          <h4 className="font-semibold mb-3 text-gray-700">Yearly Comparison</h4>
          {showComparison ? (
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>{year}</span>
                  <span className="font-medium">{totalCompleted}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(totalCompleted / Math.max(totalCompleted + prevYearCompleted, 1)) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>{year - 1}</span>
                  <span className="font-medium">{prevYearCompleted}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gray-500 h-2 rounded-full" 
                    style={{ width: `${(prevYearCompleted / Math.max(totalCompleted + prevYearCompleted, 1)) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="pt-2 border-t">
                <div className="flex justify-between">
                  <span className="text-sm">Change</span>
                  <span className={`text-sm font-medium ${completionChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {completionChange}% {completionChange > 0 ? 'increase' : 'decrease'}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <p className="text-sm text-gray-500">Enable comparison to see yearly trends</p>
              <button 
                onClick={() => setShowComparison(true)}
                className="mt-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-sm"
              >
                Compare to {year - 1}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Recent Completions Table */}
      <div className="table-section mt-6">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-semibold">Recent Certificate Completions</h4>
          <button className="text-sm text-blue-600 hover:underline">
            View All
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Learner</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certificate</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Completed</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-4 py-4 text-center text-sm text-gray-500">
                    No certificate completions recorded for {year}
                  </td>
                </tr>
              ) : (
                filteredData
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .slice(0, 5)
                  .map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.learner}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {item.certificateName || 'N/A'}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {new Date(item.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CertificateCompletionGraph;