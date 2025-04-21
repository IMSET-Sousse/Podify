export function Card({ children, className }) {
    return (
      <div className={`rounded-2xl shadow-md bg-white overflow-hidden ${className}`}>
        {children}
      </div>
    );
  }
  