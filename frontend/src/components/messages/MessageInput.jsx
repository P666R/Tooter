import { useEffect, useState } from 'react';
import { BsSend } from 'react-icons/bs';
import useSendMessage from '../../hooks/useSendMessage';
import { BsEmojiSmileFill } from 'react-icons/bs';
import EmojiPicker from 'emoji-picker-react';
import useConversation from '../../zustand/useConversation';

function MessageInput() {
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { loading, sendMessage } = useSendMessage();
  const { selectedConversation } = useConversation();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    if (selectedConversation) {
      setUserList([
        {
          username: selectedConversation.username,
          _id: selectedConversation._id,
        },
      ]);
    }
  }, [selectedConversation]);

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

  function handleMention(user) {
    setMessage(`@${user.username}`);
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
      {message && message.endsWith('@') && (
        <div className="absolute z-10 bg-white rounded-lg shadow-md mt-1 py-1 px-2 -top-12">
          {userList.map((user, idx) => (
            <div
              key={idx}
              onClick={() => handleMention(user)}
              className="cursor-pointer hover:bg-gray-200 py-1 px-2 rounded"
            >
              {user.username}
            </div>
          ))}
        </div>
      )}
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
