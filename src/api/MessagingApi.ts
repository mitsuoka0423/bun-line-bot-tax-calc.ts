import { Message } from "@line/bot-sdk";

interface ReplyMessageProps {
	replyToken: string;
	messages: Message[];
}

const channelAccessToken = process.env.CHANNEL_ACCESS_TOKEN;
if (!channelAccessToken) {
	throw new Error("CHANNEL_ACCESS_TOKEN is required.");
}

export const postReplyMessage = async ({
	replyToken,
	messages,
}: ReplyMessageProps) => {
	console.log("[START] replyMessage");
	console.log({ replyToken, messages });

	await fetch("https://api.line.me/v2/bot/message/reply", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${channelAccessToken}`,
		},
		body: JSON.stringify({
			replyToken,
			messages,
		}),
	}).catch((e) => {
		console.log(e);
	});

	console.log("[END  ] replyMessage");
};
