import {Subject} from './subject.model';
import {Teacher} from './teacher.model';

export interface Debt {
  subject: Subject;
  semester: string;
  examType: string;
  mark: number;
  date: Date;
  teacher: Teacher;
}
