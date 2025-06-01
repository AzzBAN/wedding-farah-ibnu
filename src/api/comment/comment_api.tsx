import { host } from "../conf";
async function fetchComments(limit?: string | number, offset?: string | number) {
  try {
    const body = {
      limit,
      offset,
    };

    const response = await fetch(`${host}/getcomment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return error;
  }
}

async function createComments(name: string, comment: string, confirmation: string) {
  try {
    const body = {
      name,
      comment,
      confirmation,
    };

    const response = await fetch(`${host}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return error;
  }
}

async function getConfirmationCount() {
  try {
    const response = await fetch(`${host}/getconfirmation`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return error;
  }
}

export { fetchComments, createComments, getConfirmationCount };
