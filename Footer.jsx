function Footer() {
  return (
    <footer className="shrink-0 h-10 border-t border-slate-200 bg-white flex items-center justify-center gap-6 px-6">
      <span className="text-xs text-slate-500">GitHub</span>
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        Connected
      </span>
      <span className="text-slate-300">|</span>
      <span className="text-xs text-slate-500">GitLab</span>
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        Connected
      </span>
    </footer>
  );
}

export default Footer;
