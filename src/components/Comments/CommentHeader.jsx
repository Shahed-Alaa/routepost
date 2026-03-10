export default function CommentHeader({ commentsCount }) {
  return (
    <div className="mb-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-4">
      <div className="flex items-center gap-2">
        <p className="text-sm font-extrabold tracking-wide text-slate-700">
          Comments
        </p>

        <span className="rounded-full bg-[#e7f3ff] px-2 py-0.5 text-[11px] font-bold text-[#1877f2]">
          {commentsCount}
        </span>
      </div>

      <select className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-sm font-bold text-slate-700 outline-none">
        <option value="relevant">Most relevant</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
}