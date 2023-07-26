import { url } from "@/app/utils/requestConstants";

export async function submitData(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const email = event.currentTarget.elements.namedItem(
    "email",
  ) as HTMLInputElement;

  const response = await fetch(url + "newsletter", {
    method: "POST",
    body: JSON.stringify({
      email: email.value,
    }),
    headers: {
      Authorization: "Basic " + btoa("adchitects:jsrulezzz"),
      "Content-type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("HTTP error! status: " + response.status);
  }

  return await response.json();
}
