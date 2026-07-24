import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline font-logo font-bold", className)}>
      <span aria-hidden="true" className="inline-flex items-baseline leading-none">
        <span>Kl</span>
        <span className="relative inline-block leading-none">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute left-1/2 bottom-[0.75em] h-[0.28em] w-[0.28em] -translate-x-1/2"
          >
            <path d="M12 2c-3.2 4.1-6 7.3-6 10.8a6 6 0 0 0 12 0C18 9.3 15.2 6.1 12 2z" />
          </svg>
          <span>ı</span>
        </span>
        <span>n</span>
      </span>
      <span className="sr-only">Klín</span>
    </span>
  );
}
