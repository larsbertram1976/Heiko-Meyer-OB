"use client";

export function BackButton() {
  return (
    <button
      onClick={() => history.back()}
      className="mt-8 text-sm text-[#6b6b7b] underline underline-offset-2 hover:text-[#1a3eaf]"
    >
      ← Zurück zur vorherigen Seite
    </button>
  );
}
