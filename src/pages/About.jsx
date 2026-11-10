import { useEffect, useState } from "react";

export default function About() {
  const [total, setTotal] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=1")
      .then((res) => res.json())
      .then((data) => setTotal(data.total));
  }, []);

  return (
    <div>
      <h1>אודות</h1>
      <p>אפליקציית המתכונים נבנתה בכיתה, בעבודה בזוגות.</p>
      <p>המידע מגיע מהאתר dummyjson.</p>
      {total !== null && <p>מספר המתכונים באתר: {total}</p>}
    </div>
  );
}