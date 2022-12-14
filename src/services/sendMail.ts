import axios from "axios";

export const sendContactMail = async (
    name: string,
    from: string,
    subject: string,
    content: string
) => {
    const data = {
        name,
        from,
        subject,
        content,
    };

    try {
        return await axios.post("/api/contact", data);
    } catch (error) {
        return error;
    }
};
