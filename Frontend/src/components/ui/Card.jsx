
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  onClick,
  ...props 
}) => {
  const MotionDiv = motion.div;

  return (
    <MotionDiv
      whileHover={hover ? { y: -2, scale: 1.02 } : {}}
      className={cn(
        'bg-white rounded-xl shadow-md border border-gray-200 transition-shadow duration-200',
        hover && 'hover:shadow-lg cursor-pointer',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </MotionDiv>
  );
};

export default Card;
