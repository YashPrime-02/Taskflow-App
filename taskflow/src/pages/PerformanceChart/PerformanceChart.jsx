import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import './PerformanceChart.css';

function PerformanceChart({ tasks }) {
    const safeTasks = Array.isArray(tasks) ? tasks : [];

    const map = safeTasks.reduce((acc, task) => {
        const user = task && task.assignedTo ? task.assignedTo : 'Unassigned';
        acc.set(user, (acc.get(user) || 0) + 1);
        return acc;
    }, new Map());

    const performanceData = Array.from(map.entries())
        .map(([name, tasks]) => ({ name, tasks }))
        .sort((a, b) => b.tasks - a.tasks);

    return (
        <div className="performance-chart-container">
            <h2>Task Performance per User</h2>

            {performanceData.length === 0 ? (
                <p className="no-data">No task data to show performance.</p>
            ) : (
                <div className="chart-wrapper">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            data={performanceData}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis allowDecimals={false} />
                            <Tooltip />
                            <Bar dataKey="tasks" fill="#0099ff" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
}

export default PerformanceChart;
