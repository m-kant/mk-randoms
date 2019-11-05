declare module 'mk-randoms'{

  export function num(min: number, max: number): number;
  export function int(min: number, max: number): number;

  export function ok(okProbability?: number): boolean;
  export function str(length: number, strSource?: string): string;
  export function element<T>(arr: T[], length?: number): T|T[];

  export function shift(val: number, percentage?: number): number;
  export function intShift(intVal: number, percentage?: number): number;

}
