export default [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'timelock_',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'uni_',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      }
    ],
    name: 'ProposalCanceled',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'proposer',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'targets',
        type: 'address[]'
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'values',
        type: 'uint256[]'
      },
      {
        indexed: false,
        internalType: 'string[]',
        name: 'signatures',
        type: 'string[]'
      },
      {
        indexed: false,
        internalType: 'bytes[]',
        name: 'calldatas',
        type: 'bytes[]'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'startBlock',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'endBlock',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'description',
        type: 'string'
      }
    ],
    name: 'ProposalCreated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      }
    ],
    name: 'ProposalExecuted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'eta',
        type: 'uint256'
      }
    ],
    name: 'ProposalQueued',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'voter',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'support',
        type: 'bool'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'votes',
        type: 'uint256'
      }
    ],
    name: 'VoteCast',
    type: 'event'
  },
  {
    constant: true,
    inputs: [],
    name: 'BALLOT_TYPEHASH',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'DOMAIN_TYPEHASH',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256'
      }
    ],
    name: 'cancel',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256'
      },
      {
        internalType: 'bool',
        name: 'support',
        type: 'bool'
      }
    ],
    name: 'castVote',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256'
      },
      {
        internalType: 'bool',
        name: 'support',
        type: 'bool'
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8'
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32'
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32'
      }
    ],
    name: 'castVoteBySig',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256'
      }
    ],
    name: 'execute',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256'
      }
    ],
    name: 'getActions',
    outputs: [
      {
        internalType: 'address[]',
        name: 'targets',
        type: 'address[]'
      },
      {
        internalType: 'uint256[]',
        name: 'values',
        type: 'uint256[]'
      },
      {
        internalType: 'string[]',
        name: 'signatures',
        type: 'string[]'
      },
      {
        internalType: 'bytes[]',
        name: 'calldatas',
        type: 'bytes[]'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'voter',
        type: 'address'
      }
    ],
    name: 'getReceipt',
    outputs: [
      {
        components: [
          {
            internalType: 'bool',
            name: 'hasVoted',
            type: 'bool'
          },
          {
            internalType: 'bool',
            name: 'support',
            type: 'bool'
          },
          {
            internalType: 'uint96',
            name: 'votes',
            type: 'uint96'
          }
        ],
        internalType: 'struct GovernorAlpha.Receipt',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'latestProposalIds',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'proposalCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'proposalMaxOperations',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'proposalThreshold',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'proposals',
    outputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'proposer',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'eta',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'startBlock',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'endBlock',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'forVotes',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'againstVotes',
        type: 'uint256'
      },
      {
        internalType: 'bool',
        name: 'canceled',
        type: 'bool'
      },
      {
        internalType: 'bool',
        name: 'executed',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address[]',
        name: 'targets',
        type: 'address[]'
      },
      {
        internalType: 'uint256[]',
        name: 'values',
        type: 'uint256[]'
      },
      {
        internalType: 'string[]',
        name: 'signatures',
        type: 'string[]'
      },
      {
        internalType: 'bytes[]',
        name: 'calldatas',
        type: 'bytes[]'
      },
      {
        internalType: 'string',
        name: 'description',
        type: 'string'
      }
    ],
    name: 'propose',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256'
      }
    ],
    name: 'queue',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'quorumVotes',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256'
      }
    ],
    name: 'state',
    outputs: [
      {
        internalType: 'enum GovernorAlpha.ProposalState',
        name: '',
        type: 'uint8'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'timelock',
    outputs: [
      {
        internalType: 'contract TimelockInterface',
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'uni',
    outputs: [
      {
        internalType: 'contract UniInterface',
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'votingDelay',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'votingPeriod',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
]
