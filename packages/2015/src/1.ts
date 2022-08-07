export function findFloor(input: string): [number, number] {
  let position = 0;
  let basement = -1;
  for (let i = 0; i < input.length; i++) {
    position += input[i] === "(" ? 1 : -1;
                        
    if (basement < 0 && position === -1) {
      basement =  i;
    }
  }

  return [position, basement];
}

export function findFloor2(input: string): number {
  return Array.from(input)
    .reduce<number>((prev, current) => {
      //console.log(`${prev} ${current} ${currentIndex} ${array}`);
      return current === "(" ? prev + 1 : prev - 1;
    }, 0);
}