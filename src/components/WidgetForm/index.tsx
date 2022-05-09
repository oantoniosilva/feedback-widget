import { useState } from "react";
import { CloseButton } from "../CloseButton"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagens de um inseto',
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagens de uma lâmpada',
    }
  },
  OTHER: {
    title: 'Other',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagens de um balão de pensamento',
    }
  },
};

// Object.entries(feedbackTypes) =>
/**
 * [  Chave,  Conteúdo
 *    ['BUG', {...}],
 *    ['IDEA', {...}],
 *    ['THOUGHT', {...}]
 * ]
 */

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lgw-[calc(100vw-2rem)]  md:w-auto">    
    <header>
      <span className='text-xl leading-6'>Deixe seu feedback</span>

      <CloseButton />
    </header>
      
    {!feedbackType ? (
      <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
    ) : (
      <p>Hello World!</p>
    )}

    <footer className='text-xs text-neutral-400'>
      Feito com ♥ pela <a className='underline underline-offset-2' href='https://rocketseat.com.br'>Rocketseat</a>
    </footer>
    </div>
  )
}