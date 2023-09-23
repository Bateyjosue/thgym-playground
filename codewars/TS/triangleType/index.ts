/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function radToDeg(rad :number) :number {
    return rad * (180 / Math.PI)
  }
  
  export function triangleType(a: number, b: number, c: number): number {
    type TriangleType = 0 | 1 | 2 | 3;
    let type: TriangleType = 0;
  
    let angleA: number = radToDeg(Math.acos((b * b + c * c - a * a) / (2 * b * c)));
    let angleB: number = radToDeg(Math.acos((a * a + c * c - b * b) / (2 * a * c)));
    let angleC: number = radToDeg(Math.acos((b * b + a * a - c * c) / (2 * b * a)));
  
    let angles: number[] = [angleA, angleB, angleC];
  
    if (angles.filter((el) => el === 90).length === 1 && angles.filter((el) => el === 0).length !== 2) {
      type = 2; // Right triangle
    } else if (angles.filter((el) => el >= 90).length === 1 && angles.filter((el) => el === 0).length !== 2) {
      type = 3; // Obtuse triangle
    } else if (angles.every(el => el >= 0 && el < 90)) {
      type = 1; // Acute triangle
    }
  
    return type;
  }
  