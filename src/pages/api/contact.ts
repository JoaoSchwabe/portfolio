import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass,
    },
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { name, from, subject, content } = req.body;

        if (
            !from.trim() ||
            !name.trim() ||
            !subject.trim() ||
            !content.trim()
        ) {
            return res.status(403).send("");
        }

        const mail = {
            from: email,
            to: email,
            subject: `Nova mensagem de contato - ${subject}`,
            html: `<p><b>${name}</b><br/><b>Email:</b> ${from}<br /><b>Mensagem:</b> ${content}</p>`,
            replyTo: from,
        };

        await transporter.sendMail(mail);

        return res.send("");
    } catch (err: any) {
        return res.json({
            error: true,
            message: err.message,
        });
    }
};
