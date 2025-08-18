import React from 'react';

const Line = ({
    color = 'green',
    strokeWidth = 1,
    length = 100,
    height = 200,
    width = 100,
    className = ''
}) => {
    return (
        <svg
            className={`absolute ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${width} ${height}`}
            width={width}
            height={height}
        >
            {/* Vertical line */}
            <line
                x1="0"
                y1="0"
                x2="0"
                y2={length}
                stroke={color}
                strokeWidth={strokeWidth}
            />
        </svg>
    );
};

export default Line;
