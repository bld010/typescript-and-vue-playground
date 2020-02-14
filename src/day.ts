class Day {
  note: string;
  timeStamp: number;
  rating: string;
  constructor(timeStamp: number, note: string, rating: string) {
    (this.timeStamp = timeStamp), (this.note = note), (this.rating = rating);
  }
}

export default Day;
