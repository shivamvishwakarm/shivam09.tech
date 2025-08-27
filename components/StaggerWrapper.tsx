// 'use client';

// import { motion } from 'framer-motion';
// import React from 'react';

// type StaggerWrapperProps = {
//     children: React.ReactNode;
//     stagger?: number;
//     delayChildren?: number;
//     initial?: object;
//     animate?: object;
//     transition?: object;
// };

// const StaggerWrapper: React.FC<StaggerWrapperProps> = ({
//     children,
//     stagger = 0.1,
//     delayChildren = 0,
//     initial = { opacity: 0, y: 2, x: 5 },
//     animate = { opacity: 1, y: 0, x: 0 },
//     transition = { duration: 0.6, ease: 'easeOut' },
// }) => {
//     const containerVariants = {
//         hidden: { opacity: 1 },
//         show: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: stagger,
//                 delayChildren,
//             },
//         },
//     };

//     const childVariants = {
//         hidden: initial,
//         show: { ...animate, transition },
//     };

//     return (
//         <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="show"
//         >
//             {React.Children.map(children, (child, i) => {
//                 if (!React.isValidElement(child)) return null;

//                 return (
//                     <motion.div key={i} variants={childVariants}>
//                         {child}
//                     </motion.div>
//                 );
//             })}
//         </motion.div>
//     );
// };

// export default StaggerWrapper;
