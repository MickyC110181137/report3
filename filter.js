function getShortMessages(messages) {
    const obj = messages.map(item=> item.message)
    return obj.filter(out=> out.length <50);
  }
  module.exports = getShortMessages