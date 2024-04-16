import useConversation from '../zustand/useConversation';
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

function useSendLike() {
  const { messages, setMessages } = useConversation();
  const { authUser } = useAuthContext();

  async function sendLike(messageId) {
    try {
      if (
        authUser._id ===
        messages.find((message) => message._id === messageId).senderId
      ) {
        throw new Error('You cannot like your own message');
      }

      const message = messages.find((message) => message._id === messageId);
      if (!message) {
        throw new Error('Message not found');
      }

      const alreadyLiked = message.likedBy.includes(authUser._id);
      const action = alreadyLiked ? 'unlike' : 'like';

      const res = await fetch(`/api/messages/${action}/${messageId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages(
        messages.map((msg) => {
          if (msg._id === messageId) {
            return {
              ...msg,
              likes: data.likes,
              likedBy: data.likedBy,
            };
          }
          return msg;
        })
      );
    } catch (error) {
      toast.error(error.message);
    }
  }

  return { sendLike };
}

export default useSendLike;
