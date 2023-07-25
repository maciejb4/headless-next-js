export async function submitData(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const email = event.currentTarget.elements.namedItem(
    "email",
  ) as HTMLInputElement;

  const data = {
    email: email.value,
  };

  const response = await fetch(
    "https://adchitects-cms.herokuapp.com/newsletter",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Authorization: "Basic " + btoa("adchitects:jsrulezzz"),
        "Content-type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("HTTP error! status: " + response.status);
  }

  return await response.json();
}
