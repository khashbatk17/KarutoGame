export const audio = [];

for (let i = 0; i < 101; i++) {
  const audioId = i;
  const audioPath = require("./Hyakunin_Isshu/Hyakunin_Isshu (" + i + ").MP3");
  const audioCopy = {
    id: audioId,
    path: audioPath,
  };
  audio.push(audioCopy);
}
