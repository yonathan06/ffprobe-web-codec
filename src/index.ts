import { FFProbe, FFProbeStream } from "./ffprobe";

export function getCodecString(ffprobe: FFProbe): string {
  const videoStream = ffprobe.streams.find((s) => s.codec_type === "video");
  if (!videoStream) {
    throw new Error("No video stream found");
  }

  const codec = videoStream.codec_tag_string;

  if (!codec) {
    throw new Error("No codec_tag_string found");
  }

  return codec;
}
