import {Debt, Mark, Misses} from '../models';

export const ErrorMessages = {
  LOAD_MISSES: 'Ошибка загрузки пропусков',
  LOAD_DEBTS: 'Ошибка загрузки долгов',
  LOAD_MARKS: 'Ошибка загрузки оценок',
};

export interface Column {
  key: string;
  header: string;
  cell(col): any;
}

export type ModelType =
  | Misses
  | Mark
  | Debt;

export const TableColumnTitles = {
  missesIncomplete: [
    { key: 'subject', header: 'Дисцилина', cell: row => `${ row.subject.name }`},
    { key: 'teacher', header: 'Преподаватель', cell: row => `${ row.teacher.name }`},
    { key: 'type', header: 'Тип', cell: row => `${ row.type }`},
    { key: 'date', header: 'Дата', cell: row => `${ row.date }`},
    { key: 'hours', header: 'Кол-во часов', cell: row => `${ row.hours }`},
    { key: 'hourPrice', header: 'Цена одного часа', cell: row => `${ row.hourPrice }`},
    { key: 'commonPrice', header: 'Общая цена', cell: row => `${ row.commonPrice }`},
    { key: 'isPaid', header: 'Оплачено', cell: row => row.isPaid ? 'Да' : 'Нет' },
  ],
  missesComplete: [
    { key: 'subject', header: 'Дисцилина', cell: row => `${ row.subject.name }`},
    { key: 'teacher', header: 'Преподаватель', cell: row => `${ row.teacher.name }`},
    { key: 'type', header: 'Тип', cell: row => `${ row.type }`},
    { key: 'date', header: 'Дата', cell: row => `${ row.date }`},
    { key: 'hours', header: 'Кол-во часов', cell: row => `${ row.hours }`},
    { key: 'hourPrice', header: 'Цена одного часа', cell: row => `${ row.hourPrice }`},
    { key: 'commonPrice', header: 'Общая цена', cell: row => `${ row.commonPrice }`},
    { key: 'isPaid', header: 'Оплачено', cell: row => row.isPaid ? 'Да' : 'Нет' },
    { key: 'isWorked', header: 'Отработано', cell: row => row.isWorked ? 'Да' : 'Нет' },
    { key: 'workedDate', header: 'Дата отработки', cell: row => `${ row.workedDate }`},
  ],
  debts: [
    { key: 'subject', header: 'Дисцилина', cell: row => `${ row.subject.name }`},
    { key: 'teacher', header: 'Преподаватель', cell: row => `${ row.teacher.name }`},
    { key: 'semester', header: 'Семестр', cell: row => `${ row.semester }`},
    { key: 'examType', header: 'Тип', cell: row => `${ row.examType }`},
    { key: 'mark', header: 'Оценка', cell: row => `${ row.mark }`},
    { key: 'date', header: 'Дата', cell: row => `${ row.date }`},
  ],
  marks: [
    { key: 'subject', header: 'Дисцилина', cell: row => `${ row.subject.name }`},
    { key: 'semesterNumber', header: 'Семестр', cell: row => `${ row.semesterNumber }`},
    { key: 'mark', header: 'Оценка', cell: row => `${ row.mark }`},
    { key: 'date', header: 'Дата', cell: row => `${ row.date }`},
  ]
};
