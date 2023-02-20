const days = {
  1: 'lundi',
  2: 'mardi',
  3: 'mercredi',
  4: 'jeudi',
  5: 'vendredi',
  6: 'samedi',
  7: 'dimanche'
}

export const extractAverageSessions = ({ data: { sessions } }) => {
  const averageSessions = sessions.map(({ day, sessionLength }) => ({
    day: days[day],
    sessionLength
  }))

  return averageSessions
}
