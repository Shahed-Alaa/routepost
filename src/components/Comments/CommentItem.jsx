import { getAvatar } from "../../lib/HelperFunction/Function";

export default function CommentItem({ comment }) {
  return (
    <div key={comment._id} className="relative mb-4 flex items-start gap-2">
        <img src={getAvatar(comment.commentCreator?.photo)}  alt="" className='mt-0.5 h-8 w-8 rounded-full object-cover' />
        <div className="min-w-0 flex-1">
            <div className="relative inline-block max-w-full rounded-2xl bg-[#f0f2f5] px-3 py-2">
                <div className="flex items-start justify-between gap-2">
                    <div>
                        <p className="text-xs font-bold text-slate-900">{comment.commentCreator?.name} </p>
                        <p className="text-xs text-slate-500">@{comment.commentCreator?.name}  1m</p>
                    </div>
                </div>
                <p className="mt-1 whitespace-pre-wrap text-sm text-slate-800">{comment.content}</p>
            </div>
        </div>
    </div>
    );
}
