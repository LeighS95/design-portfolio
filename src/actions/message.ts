import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const messenger = {
    sendMessage: defineAction({
        accept: 'form',
        input: z.object({
            message: z.string(),
        }),
        handler: async ({ message }) => {
            console.log("message " + message);
            const res = await fetch("https://api.line.me/v2/bot/message/push", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer ",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message }),
            });
            return res;
        },
    }),
}