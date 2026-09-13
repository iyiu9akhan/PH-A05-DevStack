function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-3">
      <div className="w-8 h-8 border-4 border-[#E2E8F0] border-t-[#111827] rounded-full animate-spin" />
      <p className="font-primary text-[14px] text-[#94A3B8] capitalize">
        Loading technologies...
      </p>
    </div>
  );
}

export default Loader;