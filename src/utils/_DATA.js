import faker from 'faker'
import {hashIt, compareIt} from './helpers'

let authedUser = null

let users = {
  mostafa_fouad: {
    id: 'mostafa_fouad',
    password : '$2a$10$pc053foJ1rHSjrs/dlp7quM5yPdXmrl1yg1fiWO7fIAANCcgd7PyW',
    name: 'Mostafa Fouad',
    avatarURL: faker.image.avatar(),
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionOne',
    },
    questions: ['8xf0y6ziyjabvozdd253nd']
  },
  sarahedo: {
    id: 'sarahedo',
    password : '$2a$10$pc053foJ1rHSjrs/dlp7quM5yPdXmrl1yg1fiWO7fIAANCcgd7PyW',
    name: 'Sarah Edo',
    avatarURL: faker.image.avatar(),
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    password : '$2a$10$pc053foJ1rHSjrs/dlp7quM5yPdXmrl1yg1fiWO7fIAANCcgd7PyW',
    name: 'Tyler McGinnis',
    avatarURL: faker.image.avatar(),
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  johndoe: {
    id: 'johndoe',
    password : '$2a$10$pc053foJ1rHSjrs/dlp7quM5yPdXmrl1yg1fiWO7fIAANCcgd7PyW',
    name: 'John Doe',
    avatarURL: faker.image.avatar(),
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'mostafa_fouad',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo','mostafa_fouad'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'become a supervillain'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be telepathic'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis', 'mostafa_fouad'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have your best friend find $500'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'write Swift'
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }
      const user = user[authedUser]
      const question = questions[qid]

      res(user, question)
    }, 500)
  })
}

export function _saveNewUser (user) {
  return new Promise(async (res, rej) => {
    const {id, name, password} = user;
    const hashedPassword = await hashIt(password)
    if (!users[id]) {
      setTimeout(() => {
        users = {
          ...users,
          [id] :{
            id: id,
            password : hashedPassword,
            name: name,
            avatarURL: faker.image.avatar(),
            answers: {},
            questions: [],
          }
        }

        authedUser = {
          id: users[id].id,
          name : users[id].name,
          avatarURL : users[id].avatarURL
        }
        res(users[id])
      }, 1000)
    }
    else {
      const error = 'Sorry this id is already used'
      rej(error)
    }


  })
}

export function _login (user) {
  return new Promise(async (res, rej) => {
    const {userId, userPassword} = user;
    if (users[userId]) {
      const {id, password} = users[userId]
      const isPasswordValid = await compareIt(userPassword, password)
      if (id === userId && isPasswordValid === true) {
        setTimeout(() => {
          authedUser = {
            id : userId,
            name : users[userId].name,
            avatarURL : users[userId].avatarURL
          }

          res(authedUser)
        }, 1000)
      }
      else {
        const error = 'Sorry the id or password is incorrect'
        rej(error)
      }

    }
    else {
      const error = 'Sorry the id is not found'
      rej(error)
    }


  })
}

export function _logout () {
  return new Promise((res, rej) => {
    setTimeout(() => {
      authedUser = null
      res(true)
    }, 1000)

  })
}
