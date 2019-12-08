export interface IHistory {
  activity: string
  date: Date
  imageUrl: string
}

export enum RequestStatus {
  COMPLETED = 'COMPLETED',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

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
