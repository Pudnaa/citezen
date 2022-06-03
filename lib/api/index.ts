import getAllPages from './operations/get-all-pages'
import getPage from './operations/get-page'

const operations = {
  getAllPages,
  getPage,
}

export const provider = {  operations }

export type Provider = typeof provider