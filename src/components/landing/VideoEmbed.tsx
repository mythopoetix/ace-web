interface VideoEmbedProps {
  url: string;
  title?: string;
  className?: string;
}

export function VideoEmbed({
  url,
  title = "Video",
  className = "",
}: VideoEmbedProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl glass ${className}`}
      style={{ paddingBottom: "56.25%" }}
    >
      <iframe
        src={url}
        title={title}
        className="absolute inset-0 w-full h-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
