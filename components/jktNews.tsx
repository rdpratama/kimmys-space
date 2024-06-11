async function getData() {
  const res = await fetch("https://api.crstlnz.my.id/api/news");

  if (!res.ok) {
    throw new Error("Failed fetching data");
  }

  return res.json();
}

export default function jktNews() {
  const data = getData();
  return (
    <div>
      <div>hello</div>
    </div>
  );
}
