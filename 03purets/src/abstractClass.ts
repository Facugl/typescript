abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public tilter: string
  ) { }
  
  abstract getSepia(): void
  getRealTime(): number{
    // some complex calculation
    return 8
  }
}


class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter)
  }

  getSepia(): void {
    console.log("Sepia");
  }
}
  
const fl = new Instagram("test", "test", 3)

fl.getRealTime()