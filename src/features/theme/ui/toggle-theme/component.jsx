
export const ToggleThemeButton = ({ theme, className, onToggle }) => {

  return (
    <button
      className={className}
      onClick={onToggle}
    >
      {theme === `light` ? `dark` : `light`}
    </button>
  );
};
