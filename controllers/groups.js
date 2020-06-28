const database = [
  {
    groupName: "欅坂46",
    memberNumber: 28,
    yearStart: 2015,
    management: "Seed & Flower",
    chekiPrice: null,
    handshakePrice: 1600,
  },
  {
    groupName: "乃木坂46",
    memberNumber: 46,
    yearStart: 2011,
    management: "Seed & Flower",
    chekiPrice: null,
    handshakePrice: 1600,
  },
  {
    groupName: "日向坂46",
    memberNumber: 22,
    yearStart: 2015,
    management: "Seed & Flower",
    chekiPrice: null,
    handshakePrice: 1600,
  },
];

const handleGetGroups = (req, res) => {
  res.send(database);
};

module.exports = {
  handleGetGroups,
};
