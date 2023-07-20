import Image from 'next/image';
import { MessageProps } from '@/types/messageTypes';
import lexartIcon from '../../img/lexart-icon.svg';

export default function Message({ role, message }: MessageProps) {
  return (
    <div className={ `relative max-w-xs mx-auto p-3 rounded-lg mt-5 ${role === 'user' ? 'bg-cyan-400' : 'bg-green-200'}` }>
      {message}
      <div className={ `absolute w-3 h-3 top-2.5 transform ${role === 'user' ? 'bg-cyan-400 right-0 -mr-1 rotate-45' : 'bg-green-200 left-0 -ml-1 -rotate-45'}` } />
      <Image
        width="38"
        height="38"
        src={ lexartIcon }
        alt="User Avatar"
        className={ `absolute rounded-full top-4 transform -translate-y-1/2 ${role === 'user' ? 'right-0 -mr-14' : 'left-0 -ml-14'}` }
      />
    </div>
  );
}
