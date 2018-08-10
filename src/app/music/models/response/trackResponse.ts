export interface TrackResponse {
  recenttracks: {
    track: [{
      artist: {
        '#text': string;
      },
      name: string;
      image: [{
        '#text': string;
      }, {
        '#text': string;
      }, {
        '#text': string;
      }]
    }];
  };
}
