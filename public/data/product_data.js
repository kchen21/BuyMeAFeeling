var path = require('path');
var appDir = path.dirname(require.main.filename);

productData = {

  positive: {
    affectionate: {
      name: 'affectionate',
      price: 5,
      image: appDir + '/public/img/emojis/affectionate.png'
    },
    angelic: {
      name: 'angelic',
      price: 2,
      image: appDir + '/public/img/emojis/angelic.png'
    },
    confident: {
      name: 'confident',
      price: 3,
      image: appDir + '/public/img/emojis/confident.png'
    },
    cool: {
      name: 'cool',
      price: 6,
      image: appDir + '/public/img/emojis/cool.png'
    },
    devilish: {
      name: 'devilish',
      price: 8,
      image: appDir + '/public/img/emojis/devilish.png'
    },
    engaged: {
      name: 'engaged',
      price: 1,
      image: appDir + '/public/img/emojis/engaged.png'
    },
    excited: {
      name: 'excited',
      price: 2,
      image: appDir + '/public/img/emojis/excited.png'
    },
    flirtatious: {
      name: 'fliratatious',
      price: 5,
      image: appDir + '/public/img/emojis/fliratatious.png'
    },
    happy: {
      name: 'happy',
      price: 7,
      image: appDir + '/public/img/emojis/happy.png'
    },
    nerdy: {
      name: 'nerdy',
      price: 9,
      image: appDir + '/public/img/emojis/nerdy.png'
    },
    relieved: {
      name: 'relieved',
      price: 2,
      image: appDir + '/public/img/emojis/relieved.png'
    },
    satiated: {
      name: 'satiated',
      price: 1,
      image: appDir + '/public/img/emojis/satiated.png'
    },
    silly: {
      name: 'silly',
      price: 8,
      image: appDir + '/public/img/emojis/silly.png'
    },
    smug: {
      name: 'smug',
      price: 5,
      image: appDir + '/public/img/emojis/smug.png'
    },
    warm: {
      name: 'warm',
      price: 3,
      image: appDir + '/public/img/emojis/warm.png'
    },
    worried: {
      name: 'worried',
      price: 1,
      image: appDir + '/public/img/emojis/worried.png'
    }
  },

  negative: {
    angry: {
      name: 'angry',
      price: 2,
      image: appDir + '/public/img/emojis/angry.png'
    },
    bored: {
      name: 'bored',
      price: 6,
      image: appDir + '/public/img/emojis/bored.png'
    },
    confused: {
      name: 'confused',
      price: 3,
      image: appDir + '/public/img/emojis/confused.png'
    },
    despairing: {
      name: 'despairing',
      price: 5,
      image: appDir + '/public/img/emojis/despairing.png'
    },
    disappointed: {
      name: 'disappointed',
      price: 7,
      image: appDir + '/public/img/emojis/disappointed.png'
    },
    dizzy: {
      name: 'dizzy',
      price: 4,
      image: appDir + '/public/img/emojis/dizzy.png'
    },
    exasperated: {
      name: 'exasperated',
      price: 2,
      image: appDir + '/public/img/emojis/exasperated.png'
    },
    horrified: {
      name: 'horrified',
      price: 1,
      image: appDir + '/public/img/emojis/horrified.png'
    },
    hushed: {
      name: 'hushed',
      price: 5,
      image: appDir + '/public/img/emojis/hushed.png'
    },
    nervous: {
      name: 'nervous',
      price: 8,
      image: appDir + '/public/img/emojis/nervous.png'
    },
    remorseful: {
      name: 'remorseful',
      price: 9,
      image: appDir + '/public/img/emojis/remorseful.png'
    },
    sad: {
      name: 'sad',
      price: 7,
      image: appDir + '/public/img/emojis/sad.png'
    },
    sick: {
      name: 'sick',
      price: 4,
      image: appDir + '/public/img/emojis/sick.png'
    },
    unamused: {
      name: 'unamused',
      price: 3,
      image: appDir + '/public/img/emojis/unamused.png'
    }
  },

  miscellaneous: {
    neutral: {
      name: 'neutral',
      price: 5,
      image: appDir + '/public/img/emojis/neutral.png'
    },
    speechless: {
      name: 'speechless',
      price: 8,
      image: appDir + '/public/img/emojis/speechless.png'
    },
    starstruck: {
      name: 'starstruck',
      price: 1,
      image: appDir + '/public/img/emojis/starstruck.png'
    },
    surprised: {
      name: 'surprised',
      price: 9,
      image: appDir + '/public/img/emojis/surprised.png'
    }
  }

};

module.exports = productData;