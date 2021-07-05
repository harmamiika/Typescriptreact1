interface ChildProps {
  color: string;
  onClick: () => void;
}

// tier 1
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// tier 2
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
// voi receivaa childreneitä
// tunnistaa reactin omat jutut, proptypes yms
