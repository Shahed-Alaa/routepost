import { Button, Textarea } from "@heroui/react";
import { FaRegSmile } from "react-icons/fa";
import { FaHourglassEnd } from "react-icons/fa6";
import { IoImageOutline } from "react-icons/io5";
import { LuSendHorizontal } from "react-icons/lu";

export default function CommentInput({
  profileData,
  name,
  commentBody,
  setCommentBody,
  handleAppComment,
  id,
  isLoadingComments
}) {
  return (
    <div className="mt-3">
      <div className="flex items-start gap-2">
        <img
          src={profileData?.photo}
          alt={profileData?.name}
          className="w-9 h-9 rounded-full object-cover"
        />

        <div className="w-full rounded-2xl border border-slate-200 bg-[#f0f2f5] px2.5 py-1.5">
          <Textarea
            value={commentBody}
            onChange={(e) => setCommentBody(e.target.value)}
            rows="1"
            placeholder={`Comment as ${name}`}
            className="w-full resize-none bg-transparent px-2 py-1.5 text-sm outline-none"
          />

          <div className="mt-1 mx-3 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <IoImageOutline />
              <FaRegSmile />
            </div>

            <Button
            isLoading={isLoadingComments}
              disabled={!(commentBody)}
              onPress={() => handleAppComment(id)}
              className="h-9 w-9 rounded-full bg-[#1877f2] text-white flex items-center justify-center"
            >
               <LuSendHorizontal />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}