import {Teacher} from './teacher.model';
import {Subject} from './subject.model';

export interface Misses {
  teacher: Teacher;
  subject: Subject;
  type: string;
  date: Date;
  hours: number;
  hourPrice: number;
  commonPrice: number;
  isPaid: boolean;
  isWorked?: boolean;
  workedDate?: Date;
}
