interface Person{
    name: string;
    say(message: string): void;
}

interface Programmer{
    writeCode(requirement: string): string;
}

class KoreaProgrammer implements Person, Programmer {
     //->Korea라는 클래스는 Person이라는 것을 보장하는 것
    // 다중 인테페이스 상속
    constructor(public name:string){
        
    }
    say(message: string): void {
        console.log(message)
        // throw new Error("Method not implemented.");
    }
    writeCode(requirement: string): string {
        console.log(requirement);
        return requirement +'...';
    }

    //korea클래스만의 특징 구현 가능
    loveKimchi(){
        console.log('love');
    }

}

const ian = new KoreaProgrammer('ian');

//abstract 클래스 -> 이 클래스가 아직 완성되지 않았다.
//상속을 받은 클래스를 통해서 인스턴스를 생성할 수 있다.
//하위 타입에서 정의해라
abstract class Korean implements Person {
    public abstract jumin: number;
    constructor(public name: string){

    }
    say(msg: string){
        console.log(msg);
    }
    abstract loveKimchi() : void;
}



class KoreaProgrammerPerson extends Korean implements Programmer {
    //->Korea라는 클래스는 Person이라는 것을 보장하는 것
   // 다중 인테페이스 상속
   constructor(public name:string, public jumin: number){
       //부모클래스의 생성자를 호출해주어야 한다.
       super(name);
   }
   say(message: string): void {
       console.log(message)
       // throw new Error("Method not implemented.");
   }
   writeCode(requirement: string): string {
       console.log(requirement);
       return requirement +'...';
   }

   //korea클래스만의 특징 구현 가능
   loveKimchi(){
       console.log('love');
   }

}

const ian1 = new KoreaProgrammerPerson('ian', 22222);
// const ian2 = new Korean('ian', 22222); ->추상 클래스의 인스턴스를 만들 수 없습니다.ts(2511)