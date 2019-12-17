import { IRequest } from '../models'
import { requests } from '../fixtures/requests'

// Note we are just simulating API call here
export const getRequests = (): Promise<IRequest[]> =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(requests)
    }, 2000)
  )
