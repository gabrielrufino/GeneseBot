const start = (msg) => {
  return {
    profile: './public/imgs/profile.jpg',
    message: `Hello, ${msg.from.first_name}! My name is GeneseBot and i'm a chatbot ready to the hard work... any work :D Nice to meet you!`
  }
}

module.exports = start
