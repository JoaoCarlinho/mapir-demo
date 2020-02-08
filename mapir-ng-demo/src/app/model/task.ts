export class Task {
  title: string;
  isDone: boolean;
  constructor(title: string) {
    this.title = title;
    this.isDone = false;
  }
}
