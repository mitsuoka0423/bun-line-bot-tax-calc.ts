import { MessageEvent, TextEventMessage, Message } from "@line/bot-sdk";

import { payAmountCalculatorService } from "../services";

const defaultMessage: Message[] = [
	{
		type: "text",
		text: "金額をnumber型で入力してください",
	},
];

export const handleMessageEvent = async (
	event: MessageEvent,
): Promise<Message[]> => {
	console.log("[START] handleMessageEvent");
	console.log({ event });

	let messages = defaultMessage;
	if (event.message.type === "text") {
		const textEventMessage = event.message as TextEventMessage;

		// メッセージの内容によって、サービスを振り分ける
		if (Number.isSafeInteger(textEventMessage.text)) {
			messages = await payAmountCalculatorService({
				price: Number(textEventMessage.text),
			});
		}
	}

	console.log({ message: messages });
	console.log("[END  ] handleMessageEvent");

	return messages;
};
