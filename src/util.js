export function addIsFavoriteField(videos, threshold) {
  for (let video of videos) {
    if (!video["isFavorite"]) {
      video["isFavorite"] = video.viewCount >= threshold ? true : false
    }
  }
  return videos
}