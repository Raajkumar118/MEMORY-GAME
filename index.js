.memory-game {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 100px);
  gap: 10px;
}

.card {
  width: 100px;
  height: 100px;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
}

.card.flipped {
  background-color: #fff;
}
