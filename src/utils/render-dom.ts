import { Block } from '../classes/block';

export const renderDOM = (query: string, block: Block) => {
  const root = document.querySelector(query);

  if (!root) {
    throw new Error(`Элемент ${query} не найден`);
  }

  if (!block.getContent()) {
    return root;
  }

  root.appendChild(block.getContent() as HTMLElement);

  block.dispatchComponentDidMount();

  return root;
};
