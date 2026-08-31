export default function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-4">
      <div className="w-12 h-12 rounded-full border-4 border-yellow/20 border-t-yellow animate-spin" />
    </div>
  );
}