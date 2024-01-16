type InfoBoxProps = {
  children: React.ReactNode;
  mode: 'hint' | 'warning';
  severity?: 'low' | 'medium' | 'high';
};

export default function InfoBox({ mode, children, severity }: InfoBoxProps) {
  if (mode === 'hint') {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
