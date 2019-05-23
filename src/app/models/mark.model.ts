import {Subject} from './subject.model';

export interface Mark {
  semesterNumber: number;
  subject: Subject;
  mark: number;
  date: Date;
}
