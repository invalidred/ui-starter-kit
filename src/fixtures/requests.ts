import { IRequest, RequestStatus } from '../models'

export const requests: IRequest[] = [
  {
    id: 123,
    name: 'Request',
    type: 'Workflow Type1',
    requestor: 'Thomas Battersea',
    status: RequestStatus.APPROVED,
    requestedImageUrl: '/src/image',
    assignee: 'Dexter Morgan',
    assigneeImageUrl: '/src/image',
    requestedDate: new Date().toTimeString(),
    dueDate: new Date().toTimeString(),
    program: 'ADV Team',
    feeGroup: 'Kathy Robert Household',
    account: '123RRSP',
    feeSchedule: 'Trade Fee - Flat Monthly BPS',
    description: 'Please approve this quickly!',
    attachment: 'Request_Details.pdf',
  },
  {
    id: 132,
    name: 'Request Name',
    type: 'Workflow Type1',
    status: RequestStatus.COMPLETED,
    requestor: 'Thomas Battersea',
    requestedImageUrl: '/src/image',
    assignee: 'Dexter Morgan',
    assigneeImageUrl: '/src/image',
    requestedDate: new Date().toTimeString(),
    dueDate: new Date().toTimeString(),
    program: 'ADV Team',
    feeGroup: 'Kathy Robert Household',
    account: '123RRSP',
    feeSchedule: 'Trade Fee - Flat Monthly BPS',
    description: 'Please approve this quickly!',
    attachment: 'Request_Details.pdf',
  },
  {
    id: 152,
    name: 'Suspendisse lobortis magn',
    type: 'Workflow Type1',
    status: RequestStatus.REJECTED,
    requestor: 'Thomas Battersea',
    requestedImageUrl: '/src/image',
    assignee: 'Dexter Morgan',
    assigneeImageUrl: '/src/image',
    requestedDate: new Date().toTimeString(),
    dueDate: new Date().toTimeString(),
    program: 'ADV Team',
    feeGroup: 'Kathy Robert Household',
    account: '123RRSP',
    feeSchedule: 'Trade Fee - Flat Monthly BPS',
    description: 'Please approve this quickly!',
    attachment: 'Request_Details.pdf',
  },
]
