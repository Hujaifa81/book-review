import React, { useEffect, useState } from 'react';
import { getItems } from '../utils';
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const PagesRead = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const book = getItems('read');
        setBooks(book);
    }, []);

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className='max-w-5xl mx-auto bg-base-200 pt-16 rounded-lg'>
            <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <BarChart
                    data={books}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 120, 
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                        dataKey="book_name" 
                        tick={{ fontSize: 10 }} 
                        interval={0} 
                    />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="progress" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {books.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
        </div>
    );
};

export default PagesRead;
