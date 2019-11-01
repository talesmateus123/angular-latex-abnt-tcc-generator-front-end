import { Person } from 'src/app/models/person'
import { Partition } from 'src/app/models/partition'
import { User } from './user'
export interface Document {
  id: number,
  title: string,
  subTitle: string,
  titleInEnglish: string,
  year: number,
  schooling: string,
  documentType: string,
  cityName: string,
  courseName: string,
  institutionName: string,
  institutionInitials: string,
  academicTitle: string,
  preamble: string,
  catalogCard: string,
  dedication: string,
  epigraph: string,
  abstractX: string,
  abstractInEnglish: string,
  thanks: string,
  partitions: Partition[],
  people: Person[],
  user:User
}
