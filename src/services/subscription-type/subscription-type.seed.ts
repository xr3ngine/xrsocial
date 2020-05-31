import config from '../../../src/config'

export const seed = {
  disabled: !config.db.forceRefresh,
  delete: config.db.forceRefresh,
  path: 'subscription-type',
  randomize: false,
  templates:
    [
      {
        plan: 'journey',
        name: 'Monthly Subscription | Journey',
        type: 'monthly',
        amount: 9.99,
        seats: 5
      },
      {
        plan: 'trek',
        name: 'Monthly Subscription | Trek',
        type: 'monthly',
        amount: 37.99,
        seats: 20
      },
      {
        plan: 'voyage',
        name: 'Monthly Subscription | Voyage',
        type: 'monthly',
        amount: 87.99,
        seats: 49
      },
      {
        plan: 'adventure',
        name: 'Monthly Subscription | Adventure',
        type: 'monthly',
        amount: 174.99,
        seats: 100
      },
      {
        plan: 'annual-subscription-|-journey',
        name: 'Annual Subscription | Journey',
        type: 'annual',
        amount: 94.99,
        seats: 5
      },
      {
        plan: 'annual-subscription-|-trek',
        name: 'Annual Subscription | Trek',
        type: 'annual',
        amount: 364.99,
        seats: 20
      },
      {
        plan: 'annual-subscription-|-voyage',
        name: 'Annual Subscription | Voyage',
        type: 'annual',
        amount: 844.99,
        seats: 49
      },
      {
        plan: 'annual-subscription-|-adventure',
        name: 'Annual Subscription | Adventure',
        type: 'annual',
        amount: 1679.99,
        seats: 100
      }
    ]
}

export default seed
