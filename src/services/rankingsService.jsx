export function getRanking() {
  const json = localStorage.getItem('ranking');
  return json ? JSON.parse(json) : [];
}
export function addRanking(nome, email, score) {
  const jogada = { nome, email, score };
  const ranking = getRanking();
  ranking.push(jogada);
  localStorage.setItem('ranking', JSON.stringify(ranking));
}
