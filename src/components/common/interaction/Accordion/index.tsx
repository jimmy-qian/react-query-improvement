import * as React from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';

import {
  AccordionRoot,
  AccordionHeader,
  AccordionItem,
  AccordionContent,
  AccordionChevron,
} from './styled';

const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.265 8.411a1.143 1.143 0 011.61-.146L12 13.369l6.125-5.104a1.143 1.143 0 011.464 1.756l-6.857 5.714a1.143 1.143 0 01-1.464 0l-6.857-5.714a1.143 1.143 0 01-.146-1.61z"
    />
  </svg>
);

export const Accordion = ({ animate, defaultValue, items, type = 'multiple' }: AccordionProps) => {
  return (
    <AccordionRoot
      {...{
        ...(type === 'multiple'
          ? {
              type,
              defaultValue: defaultValue as string[],
            }
          : {
              type,
              defaultValue: defaultValue as string,
            }),
      }}
    >
      {items.map((item) => {
        return (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionHeader>
              <RadixAccordion.Trigger>
                {item.title}
                <AccordionChevron aria-hidden animate={animate}>
                  <ChevronDownIcon />
                </AccordionChevron>
              </RadixAccordion.Trigger>
            </AccordionHeader>
            <AccordionContent animate={animate}>{item.text}</AccordionContent>
          </AccordionItem>
        );
      })}
    </AccordionRoot>
  );
};

export type AccordionProps = {
  animate?: boolean;
  defaultValue?: string | string[];
  items: {
    id: string;
    title: string;
    text: string;
  }[];
  type?: 'single' | 'multiple';
};
