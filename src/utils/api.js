const API_BASE = "http://localhost:4000/api";

export const apiRequest = async (endpoint, method = "GET", body = null, token = null) => {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : null,
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return await res.json();
};
