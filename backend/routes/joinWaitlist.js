// // routes/joinWaitlist.js
// import express from "express";
// import SibApiV3Sdk from "sib-api-v3-sdk";
// import dotenv from "dotenv";

// dotenv.config();

// const router = express.Router();

// const defaultClient = SibApiV3Sdk.ApiClient.instance;
// defaultClient.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;
// const apiInstance = new SibApiV3Sdk.ContactsApi();

// router.post("/join-waitlist", async (req, res) => {
//   const { email } = req.body;
//   const listId = parseInt(process.env.BREVO_LIST_ID);

//   if (!email) return res.status(400).json({ message: "Email is required" });

//   const createContact = {
//     email,
//     listIds: [listId],
//     updateEnabled: true,
//   };

//   try {
//     await apiInstance.createContact(createContact);
//     res.status(200).json({ message: "Email added to Brevo list successfully" });
//   } catch (err) {
//     const error = err?.response?.body || err.message;
//     res.status(500).json({ message: "Failed to add email", error });
//   }
// });

// export default router;


import express from "express";
import SibApiV3Sdk from "sib-api-v3-sdk";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const defaultClient = SibApiV3Sdk.ApiClient.instance;
defaultClient.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;
const apiInstance = new SibApiV3Sdk.ContactsApi();

router.post("/join-waitlist", async (req, res) => {
  const { email, firstName } = req.body;
  const listId = parseInt(process.env.BREVO_LIST_ID);

  if (!email || !firstName) {
    return res.status(400).json({ message: "Email and first name are required" });
  }

  const createContact = {
    email,
    attributes: {
      FIRSTNAME: firstName,
    },
    listIds: [listId],
    updateEnabled: true,
  };

  try {
    await apiInstance.createContact(createContact);
    res.status(200).json({ message: "Contact added to Brevo list successfully" });
  } catch (err) {
    const error = err?.response?.body || err.message;
    res.status(500).json({ message: "Failed to add contact", error });
  }
});

export default router;
