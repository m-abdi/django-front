import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const params = JSON.parse(req.body);
  // google recaptcha
  const googleResp = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_RECAPTCHA_SECRET}&response=${params.recaptchaResponse}`,
    {
      method: "POST",
    }
  );

  const googleRespJSON = await googleResp.json();
  console.log(googleRespJSON);
  
  if ("success" in googleResp && googleRespJSON.success) {
    return res.status(400).send("Recaptcha error");
  }
  // Check for secret to confirm this is a valid request
  const data = JSON.parse(req.body);
  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users/signUp/", {
    method: "post",

    body: JSON.stringify({
      username: data.username,
      password: data.password,
      first_name: data.firstName,
      last_name: data.lastName,
      type: data.type,
    }),
  });
  const jresp = await resp.json();
  if (!resp.ok) {
    return res.status(resp.status).json(jresp);
  }
  return res.status(200).json(jresp);
}
