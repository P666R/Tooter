import { useState } from 'react';
import { BsSend } from 'react-icons/bs';
import useSendMessage from '../../hooks/useSendMessage';
import { BsEmojiSmileFill } from 'react-icons/bs';
import EmojiPicker from 'emoji-picker-react';

function MessageInput() {
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { loading, sendMessage } = useSendMessage();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!message) return;

    await sendMessage(message);
    setMessage('');
  }

  function handleEmojiClick(emoji) {
    setMessage((curr) => curr + emoji.emoji);
    setShowEmojiPicker(false);
  }

  return (
    <form className="px-4 my-3 relative" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
        placeholder="Send a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-10 flex items-center pe-4"
        onClick={() => setShowEmojiPicker((curr) => !curr)}
      >
        <BsEmojiSmileFill className="w-5 h-5 text-white cursor-pointer" />
      </button>
      <button
        type="submit"
        className="absolute inset-y-0 right-0 flex items-center pe-6"
      >
        {loading ? <div className="loading loading-spinner"></div> : <BsSend />}
      </button>
      <div className="absolute bottom-14 right-12 opacity-90">
        <EmojiPicker
          open={showEmojiPicker}
          theme="dark"
          lazyLoadEmojis
          height={380}
          onEmojiClick={handleEmojiClick}
        />
      </div>
    </form>
  );
}

export default MessageInput;
