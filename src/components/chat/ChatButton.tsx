import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { ChatDialog } from './ChatDialog';

interface ChatButtonProps {
  friendId: string;
  friendName: string;
  friendAvatar: string;
  currentUserId: string;
}

export const ChatButton = ({
  friendId,
  friendName,
  friendAvatar,
  currentUserId,
}: ChatButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        size="sm"
        variant="outline"
        className="gap-2"
      >
        <MessageCircle className="w-4 h-4" />
        Nhắn tin
      </Button>
      <ChatDialog
        open={open}
        onOpenChange={setOpen}
        friendId={friendId}
        friendName={friendName}
        friendAvatar={friendAvatar}
        currentUserId={currentUserId}
      />
    </>
  );
};
