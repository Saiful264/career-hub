import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
  } from "recharts";

const data = [
    {
        "id": "1",
        "name": "Assignment 1",
        "mark": 54
    },
    {
        "id": "2",
        "name": "Assignment 2",
        "mark": 59
    },
    {
        "id": "2",
        "name": "Assignment 3",
        "mark": 59
    },
    {
        "id": "3",
        "name": "Assignment 4",
        "mark": 60
    },
    {
        "id": "4",
        "name": "Assignment 5",
        "mark": 56
    },
    {
        "id": "5",
        "name": "Assignment 6",
        "mark": 56
    },
    {
        "id": "6",
        "name": "Assignment 7",
        "mark": 60
    },
    {
        "id": "7",
        "name": "Assignment 8",
        "mark": 58
    }
];

const Statistics = () => {
    return (
        <div className='px-28 pt-12 flex flex-col items-center'>
            <h1 className='text-3xl font-medium text-slate-800 pb-8'>This is my Assignment statistics until now.</h1>
            <div>
            <AreaChart
              width={800}
              height={400}
              data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
                <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
            </div>
        </div>
    );
};

export default Statistics;