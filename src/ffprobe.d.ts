export interface FFProbeStream {
  index: number;
  codec_name: string;
  codec_long_name: string;
  profile: string;
  codec_type: 'video' | 'audio' | 'subtitle' | 'data';
  codec_tag_string: string;
  codec_tag: string;
  channels: number;
  width: number;
  height: number;
  coded_width: number;
  coded_height: number;
  closed_captions: number;
  film_grain: number;
  has_b_frames: number;
  sample_aspect_ratio: string;
  sample_rate: string;
  display_aspect_ratio: string;
  pix_fmt: string;
  level: number;
  chroma_location: string;
  field_order: string;
  refs: number;
  is_avc: string;
  nal_length_size: string;
  id: string;
  r_frame_rate: string;
  avg_frame_rate: string;
  time_base: string;
  start_pts: number;
  start_time: string;
  duration_ts: number;
  duration: string;
  bit_rate: string;
  bits_per_raw_sample: string;
  nb_frames: string;
  extradata_size: number;
  side_data_list?: {
    displaymatrix: string;
    rotation: number;
    side_data_type: "Display Matrix";
  }[];
  disposition: {
    default: number;
    dub: number;
    original: number;
    comment: number;
    lyrics: number;
    karaoke: number;
    forced: number;
    hearing_impaired: number;
    visual_impaired: number;
    clean_effects: number;
    attached_pic: number;
    timed_thumbnails: number;
    captions: number;
    descriptions: number;
    metadata: number;
    dependent: number;
    still_image: number;
  };
  tags: {
    language: string;
    handler_name: string;
    vendor_id: string;
    timecode?: string;
  };
}

export interface FFProbeFormat {
  filename: string;
  nb_streams: number;
  nb_programs: number;
  format_name: string;
  format_long_name: string;
  start_time: string;
  duration: string;
  size: string;
  bit_rate: string;
  probe_score: number;
  tags: {
    major_brand: string;
    minor_version: string;
    compatible_brands: string;
    encoder: string;
    timecode?: string;
  };
}

export interface FFProbe {
  streams: FFProbeStream[];
  format: FFProbeFormat;
}
