import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, } from 'recharts';





const Statistics = () => {

    const [totalPrice, setTotalPrice] = useState();



    const donatedCategory = JSON.parse(localStorage.getItem('donations'));
    useEffect(() => {
        if (donatedCategory) {

            setTotalPrice(donatedCategory);
            const total = donatedCategory.reduce((perValue, currentValue) => perValue + currentValue.price, 0);
            setTotalPrice(total);
        }
    }, []);

    let x = donatedCategory.length;
    x = x / 12;
    x = x * 100;

    let y = 100 - x;

    const data = [
        { name: 'You Donation', value: x },
        { name: 'Total Donation', value: y }
    ];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        );
    };
    const COLORS = ['#00C49F', '#FF444A', '#FFBB28', '#FF8042'];

    return (
        <div className='flex flex-col justify-center items-center'>
            <p>total: {totalPrice}</p>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {donatedCategory.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <div className='flex items-center gap-4'>
                <p>Your Donation: </p>
                <div className='w-[50px] h-[10px] bg-[#00C49F]'>
                    
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <p>total Donation: </p>
                <div className='w-[50px] h-[10px] bg-[#FF444A]'>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Statistics;