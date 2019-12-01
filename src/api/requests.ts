import { requests } from '../fixtures/requests'

export interface IHistory {
  activity: string
  date: Date
  imageUrl: string
}

export type RequestStatus = 'COMPLETED' | 'APPROVED' | 'REJECTED'

export interface IRequest {
  id: number
  name: string
  type: string
  status: RequestStatus
  requestor: string
  requestedImageUrl: string
  assignee: string
  assigneeImageUrl: string
  requestedDate: string
  dueDate: string
  program: string
  feeGroup: string
  account: string
  feeSchedule: string
  description: string
  attachment: string
  history?: IHistory[]
}

// Note we are just simulating API call here
export const getRequests = (): Promise<IRequest[]> =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(requests)
    }, 2000)
  )
