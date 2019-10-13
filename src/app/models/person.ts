import { Document } from 'src/app/models/document'
export interface Person {
  id:Number
	nome:String
	tipoPessoa:String
	login:String
  senha:String
  documents:Document[]
}
