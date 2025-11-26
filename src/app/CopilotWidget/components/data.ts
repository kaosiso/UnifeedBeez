export interface Plan {
  name: string;
  price: number;
  features: string[];
}

export interface ChatMessageData {
  id: number;
  type: 'text' | 'choice' | 'content';
  sender: 'copilot' | 'user';
  text?: string;
  choices?: string[];
  content?: {
    title: string;
    text: string;
    plan?: Plan;
  };
}

export const chatMessages: ChatMessageData[] = [
  {
    id: 1,
    type: 'content',
    sender: 'copilot',
    content: {
      title: "Hi Joshua, I'm Beezaro.",
      text: "Please confirm that you selected the business plan and would like to proceed.",
      plan: {
        name: 'Pro Plan',
        price: 219.2,
        features: ['Unlimited Chatbots', 'Multi-Channel Support'],
      },
    },
  },
  {
    id: 2,
    type: 'choice',
    sender: 'user',
    text: 'Yes, Proceed with my current plan.',
    choices: ['No, Go to plan selection.', 'View in a new tab'],
  },
];
