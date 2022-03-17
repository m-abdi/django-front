import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confirm this is a valid request
  const resp = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/users/signUp/",
    {
      method: "post",
      body: req.body
    }
  );
  const jresp = await resp.json();
  if (!(resp.ok)) {
    return res.status(400).json({error: "check parameters again"})
  }
  return res.status(200).json(jresp);
}
