import messagesOptions from '../mocks/messagesOptionsMock.json';

export function loggedOutMessagesService(content: string) {
  if (!content) {
    throw new Error('Content is required');
  }
  const terms = ['Hello', 'Goodbye', 'Good', 'I want'];

  if (terms.some((term) => content.toLowerCase().includes(term.toLowerCase()))) {
    return { content: 'Please, login to start a conversation', actions: { login: true } };
  }

  return { content: `Please, use the following terms ${terms.join(', ')} to initiate a conversation` };
}

export function loggedInMessagesService(messageRequest: string) {
  let response;

  messagesOptions.forEach((message) => {
    if (messageRequest.toLowerCase().includes(message.term.toLowerCase())) {
      response = message;
      return;
    }
    response = {
      content: `Please, select a valid option: \n${messagesOptions.map((msg) => msg.term).join(', ')}.`,
    };
  });

  return response;
}
