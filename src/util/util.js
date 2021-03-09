function setHP(hpArray, replyData) {
  const currentHPArray = hpArray.filter(x => !isNaN(parseInt(x)))
  const currentHP = parseInt(currentHPArray[0])
  const vetHP = (this.vet) ? this.maxhp + 5 : this.maxhp
  if (currentHP < 1)
    throw 'One of the units is already dead. RIP.'

  if (hpArray.some(x => x === 'v')) {
    if (this.vet) {
      this.vetNow = true
      this.maxhp = vetHP
      if (!currentHP || currentHP > this.maxhp)
        this.currenthp = this.maxhp
      else
        this.currenthp = currentHP
    } else {
      if (!currentHP || currentHP > this.maxhp)
        this.currenthp = this.maxhp
      else
        this.currenthp = currentHP

      replyData.content.push([`The ${this.name} can't become a veteran, so we'll proceed without it!`, {}])
      replyData.deleteContent = true
    }
  } else if (currentHP > this.maxhp) {
    if (!this.vet) {
      replyData.content.push([`The ${this.name} can't become a veteran, so we'll proceed without it!`, {}])
      replyData.deleteContent = true
    } else {
      this.vetNow = true
      this.maxhp = vetHP
      if (currentHP > vetHP) {
        this.currenthp = vetHP
        replyData.content.push([`You have inputed a current hp higher than the maximum hp for ${this.name}.\nIn the meantime, this result calculates with the highest hp possible, ${vetHP}.`, {}])
        replyData.deleteContent = true
      } else {
        this.currenthp = currentHP
        replyData.content.push([`I just made the ${this.name} into a veteran for you!\nNext time, you can just add a \`v\` in there to ensure it's a veteran!`, {}])
        replyData.deleteContent = true
      }
    }
  } else {
    this.currenthp = currentHP
  }
}

function addBonus(bonusArray, replyData) {
  let defenseBonus = bonusArray.filter(value => value.toLowerCase() === 'w' || value.toLowerCase() === 'd' || value.toLowerCase() === 'p')
  defenseBonus = [...new Set(defenseBonus)] // Deletes doubles

  if (defenseBonus.length >= 2) {
    replyData.content.push(['You\'ve provided more than one bonus\nBy default, I take `w` over `d` if both are present.', {}])
    replyData.deleteContent = true
    if (defenseBonus.some(x => x.toLowerCase() === 'w') && this.fort === true)
      this.bonus = 4
    else
      this.bonus = 1.5
  } else {
    if (defenseBonus[0].toLowerCase() === 'd' || defenseBonus[0].toLowerCase() === 'p')
      this.bonus = 1.5
    else if (defenseBonus[0].toLowerCase() === 'w' && this.fort === true)
      this.bonus = 4
    else
      this.bonus = 1
  }
}

function onTheWater(navalArray) {
  if (this.bonus === 4)
    throw 'Are you saying a naval unit can be in a city :thinking:...'

  if (navalArray[0].toLowerCase().startsWith('bo')) {
    this.description = this.description + ' Boat'
    this.att = 1
    this.def = 1
    this.range = true
  }
  if (navalArray[0].toLowerCase().startsWith('sh')) {
    this.description = this.description + ' Ship'
    this.att = 2
    this.def = 2
    this.range = true
  }
  if (navalArray[0].toLowerCase().startsWith('bs')) {
    this.description = this.description + ' Battleship'
    this.att = 4
    this.def = 3
    this.range = true
  }
}

function getOverride(unitArray) {
  const overrides = unitArray.filter(x => x === 'r' || x === 'nr')
  if (overrides.length > 1)
    throw `Put your beer down and learn to type.\nYou can't put both \`r\` **and** \`nr\` for the ${this.currenthp}hp ${this.name}${this.description}...`
  else if (overrides.length === 0)
    return
  else {
    if (overrides[0] === 'r')
      this.forceRetaliation = true
    if (overrides[0] === 'nr')
      this.forceRetaliation = false
  }
}