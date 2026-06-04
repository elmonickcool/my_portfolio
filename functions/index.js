const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { Resend } = require("resend");

const resend = new Resend("re_KKGU6hji_9SDfS3FL1TwhoUhGoqfHjPS9");

exports.notifyNewContact = onDocumentCreated(
  "contact/{docId}",
  async (event) => {
    const data = event.data.data();

    await resend.emails.send({
      from: "noreply@yourdomain.com",
      to: "elmonickol@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Contact Number:</strong> ${data.contactnum}</p>
        <p><strong>Message:</strong></p>

        <p>${data.message}</p>
      `
    });
  }
);