"use client";
export function BtnRegular({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button className="btn-regular" onClick={onClick}>
      {label}
    </button>
  );
}

export function BtnRegularHero() {
  return (
    <BtnRegular
      label="Escribe ahora"
      onClick={() => {
        alert("Button clicked!");
      }}
    />
  );
}
