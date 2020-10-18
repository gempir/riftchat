import { PrivmsgMessage } from "dank-twitch-irc";
import React from "react";
import styled from "styled-components";
import { useChat } from "../chat/useChat";
import { useThirdPartyEmotes } from "../hooks/useThirdPartyEmotes";
import { Message } from "./Message";

const ChatWindowContainer = styled.div`
	flex-grow: 1;
    display: flex;
    flex-direction: column;
	height: 100%;
`;

const MessageScroll = styled.ul`
    list-style-type: none;
    flex-grow: 1;
	overflow-y: scroll;
	overflow-x: hidden;
	display: flex;
	flex-direction: column-reverse;

	&::-webkit-scrollbar {
		width: 0px;
	}
	
	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background-color: transparent;
	}
`;

export function ChatWindow(props: { channel?: string }): JSX.Element {
	if (!props.channel) {
		return <EmptyChatWindow />;
	}

	return <ChannelChatWindow channel={props.channel} />;
}

function ChannelChatWindow(props: { channel: string }): JSX.Element {
	const messages = useChat(props.channel);
	const channelId = messages.length > 0 ? messages[0].channelID : "";
	const thirdPartyEmotes = useThirdPartyEmotes(channelId);
	
	return <ChatWindowContainer>
		<MessageScroll>
			{messages.map((message: PrivmsgMessage) => <li key={message.messageID}><Message message={message} thirdPartyEmotes={thirdPartyEmotes} /></li>)}
		</MessageScroll>
	</ChatWindowContainer>;
}

function EmptyChatWindow(): JSX.Element {

	return <ChatWindowContainer>
		no chat
	</ChatWindowContainer>;
}