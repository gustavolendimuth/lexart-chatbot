import messagesOptions from '../mocks/messagesOptionsMock.json';

export function loggedOutMessagesService(message: string) {
  const terms = ['Hello', 'Goodbye', 'Good', 'I want'];

  if (terms.some((term) => message.toLowerCase().includes(term.toLowerCase()))) {
    return { message: 'Please, login to start a conversation', actions: { login: true } };
  }

  return { message: `Please, use the following terms ${terms.join(', ')} to initiate a conversation` };
}

export function loggedInMessagesService(messageRequest: string) {
  let response;

  messagesOptions.forEach((option) => {
    if (messageRequest.toLowerCase().includes(option.term.toLowerCase())) {
      response = option.options;
      return;
    }
    response = {
      message: `Please, select a valid option: ${messagesOptions.map((opt) => opt.term).join(', ')}.`,
    };
  });

  return response;
}
