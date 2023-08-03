import lexartIcon from '@/img/lexart-icon.svg';
import { MessageProps } from '@/types/messageTypes';
import Image from 'next/image';
import Link from 'next/link';

export default function Message({ sender, content, options }: MessageProps) {
  return (
    <div
      className={ `relative max-w-xs mx-auto p-3 rounded-lg mt-5 
      ${sender === 'user' ? 'bg-cyan-400' : 'bg-green-200'}
      ${options && options?.length > 1 ? 'pb-2.5' : ''}` }
    >
      <p className={ `${options && options?.length > 1 ? 'pb-2.5 font-bold' : ''}` }>
        {content}
      </p>
      {
        options && options.map((option, index) => {
          return (
            <p
              className={ `border-t-2 border-white ${index !== (options?.length - 1) ? 'py-2.5' : 'pt-2.5'}` }
              key={ index }
            >
              <Link href={ option.link }>{option.content}</Link>
            </p>
          );
        })
      }
      <div
        className={ `absolute w-3 h-3 top-2.5 transform 
          ${sender === 'user' ? 'bg-cyan-400 right-0 -mr-1 rotate-45' : 'bg-green-200 left-0 -ml-1 -rotate-45'}` }
      />
      <Image
        width="38"
        height="38"
        src={ lexartIcon }
        alt="User Avatar"
        className={ `absolute rounded-full top-4 transform -translate-y-1/2 ${sender === 'user' ? 'right-0 -mr-14' : 'left-0 -ml-14'}` }
      />
    </div>
  );
}
