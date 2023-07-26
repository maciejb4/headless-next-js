import { headers, url } from "@/app/utils/requestConstants";

export async function getPages() {
  const response = await fetch(url + "pages", headers);
  return await response.json();
}

export async function getPageById(id: string) {
  const response = await fetch(url + "page/" + id, headers);
  return await response.json();
}
