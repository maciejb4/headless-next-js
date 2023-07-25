
export async function getPages() {
    const headers = {
        headers: { Authorization: "Basic " + btoa("adchitects:jsrulezzz") },
    };
    const response = await fetch(
        "https://adchitects-cms.herokuapp.com/pages",
        headers,
    );
    return await response.json();
}

export async function getPageById(id: string) {
    const headers = {
        headers: { Authorization: "Basic " + btoa("adchitects:jsrulezzz") },
    };
    const response = await fetch(
        "https://adchitects-cms.herokuapp.com/page/" + id,
        headers,
    );
    return await response.json();
}