// /home/anas/Desktop/portefolio/portfolio/client/src/components/ui/Badge.jsx
const Badge = ({ children, variant = 'default' }) => {
  const baseClasses = "px-2.5 py-0.5 rounded-full text-xs font-medium font-mono";
  
  const variants = {
    default: "bg-accent1/10 text-accent1 border border-accent1/20",
    outline: "bg-transparent text-gray-300 border border-gray-700",
    solid: "bg-accent2 text-white",
  };

  return (
    <span className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;
