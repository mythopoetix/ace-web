const FLUENTCRM_URL = process.env.FLUENTCRM_URL;
const FLUENTCRM_USERNAME = process.env.FLUENTCRM_USERNAME;
const FLUENTCRM_PASSWORD = process.env.FLUENTCRM_PASSWORD;

function getAuthHeader() {
  if (!FLUENTCRM_USERNAME || !FLUENTCRM_PASSWORD) {
    throw new Error("FluentCRM credentials not configured");
  }
  return (
    "Basic " +
    Buffer.from(`${FLUENTCRM_USERNAME}:${FLUENTCRM_PASSWORD}`).toString(
      "base64"
    )
  );
}

export async function createContact(
  email: string,
  tags: string[] = [],
  lists: number[] = []
) {
  if (!FLUENTCRM_URL) throw new Error("FLUENTCRM_URL not configured");

  const res = await fetch(`${FLUENTCRM_URL}/wp-json/fluent-crm/v2/subscribers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getAuthHeader(),
    },
    body: JSON.stringify({
      email,
      tags,
      lists,
      status: "subscribed",
    }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.message || `FluentCRM error: ${res.status}`);
  }

  return res.json();
}

export async function findContactByEmail(email: string) {
  if (!FLUENTCRM_URL) throw new Error("FLUENTCRM_URL not configured");

  const res = await fetch(
    `${FLUENTCRM_URL}/wp-json/fluent-crm/v2/subscribers?search=${encodeURIComponent(email)}`,
    {
      headers: {
        Authorization: getAuthHeader(),
      },
    }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.subscribers?.find(
    (s: { email: string }) => s.email.toLowerCase() === email.toLowerCase()
  ) || null;
}
