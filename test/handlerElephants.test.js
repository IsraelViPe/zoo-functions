const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa se HandlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('se o parâmetro for undefined o retorno da função deve ser undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('se o parâmetro for diferente de string retorne : "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(3)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Passada uma string que não contempla uma funcionalidade deve retornar null', () => {
    expect(handlerElephants('semFuncao')).toBeNull();
  });
  it('se o parâmetro passado for "count" deve retornar 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('se o parâmetro passado for "names" deve retornar um array de names com o nome "Jefferson"', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('se o parâmetro passado for "averageAge" deve retornar um número próximo à 10.5',
    () => {
      expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
    });
  it('se o parâmetro passado for "location", retorne "NW"', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('se o parâmetro passado for "popularity", retorne um número >= 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('se o parâmetro passado for "availability", retorne um array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
});
