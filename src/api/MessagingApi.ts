import { Message } from "@line/bot-sdk";

interface ReplyMessageProps {
  replyToken: string;
  messages: Message[];
  channelAccessToken: string;
}

export const postReplyMessage = async ({
  replyToken,
  channelAccessToken,
  messages,
}: ReplyMessageProps): Promise<Response> => {
  console.log("[START] replyMessage");
  console.log({ replyToken, channelAccessToken, messages });

  const response = await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${channelAccessToken}`,
    },
    body: JSON.stringify({
      replyToken,
      messages,
    }),
  });

  console.log({ response });
  console.log("[END  ] replyMessage");

  return response;
};
