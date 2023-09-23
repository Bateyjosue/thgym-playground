export class SingletonCounter {
    counter: number
    private static instance: SingletonCounter | null = null;
    
    private constructor(){
      this.counter = 0;
    }
    
    inc(){
      ++this.counter
      return this.counter
    }
    static getInstance():SingletonCounter {
      if(!SingletonCounter.instance){
        SingletonCounter.instance = new SingletonCounter()
      }
      return SingletonCounter.instance
    }
  }