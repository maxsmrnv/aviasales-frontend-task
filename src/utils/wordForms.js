export default function stopForms(num) {
  const cases = [2, 0, 1, 1, 1, 2]
  const forms = ['ПЕРЕСАДКА', 'ПЕРЕСАДКИ', 'ПЕРЕСАДОК']
  const correct =
    num % 100 > 4 && num % 100 < 20 ? 2 : cases[num % 10 < 5 ? num % 10 : 5]
  return forms[correct]
}
