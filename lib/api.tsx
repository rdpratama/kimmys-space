export async function apiEvent() {
  const res = await fetch("https://api.crstlnz.my.id/api/event");

  if (!res.ok) {
    throw new Error("Failed fetching data");
  }

  return res.json();
}

export async function apiNews() {
  const res = await fetch("https://api.crstlnz.my.id/api/news");

  if (!res.ok) {
    throw new Error("Failed fetching data");
  }

  return res.json();
}
