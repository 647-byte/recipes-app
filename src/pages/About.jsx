import { useEffect, useState } from "react";

export default function About() {
  const [total, setTotal] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=1")
      .then((res) => {
        if (!res.ok) throw new Error("שגיאה בטעינת מספר המתכונים");
        return res.json();
      })
      .then((data) => setTotal(data.total))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1>אודות</h1>
      <p>אפליקציית המתכונים נבנתה בכיתה, בעבודה בזוגות.</p>
      <p>המידע מגיע מהאתר dummyjson.</p>
      {error && <p>{error}</p>}
      {total !== null && <p>מספר המתכונים באתר: {total}</p>}
    </div>
  );
}