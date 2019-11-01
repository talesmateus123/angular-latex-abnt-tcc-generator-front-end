import { Document } from 'src/app/models/document'
export interface User {
  id: number,
  name: string,
  login: string,
  password: string,
  documents: Document[]
}
