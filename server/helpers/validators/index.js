const validateCNPJ = (cnpj) => {
  const verifierDigit = (numbers) => {
    let index = 2;
    const reverse = numbers.split('').reduce((buffer, number) => [parseInt(number, 10)].concat(buffer), []);

    const sum = reverse.reduce((buffer, number) => {
      buffer += number * index;
      index = (index === 9 ? 2 : index + 1);
      return buffer;
    }, 0);

    const mod = sum % 11;
    return (mod < 2 ? 0 : 11 - mod);
  };

  const stripped = cnpj.replace(/[^\d]+/g, '');

  if (stripped === '') return false;

  // CNPJ must be defined
  if (!stripped) { return false; }

  // CNPJ must have 14 chars
  if (stripped.length !== 14) { return false; }

  // CNPJ can't be blacklisted
  if ([
    '00000000000000',
    '11111111111111',
    '22222222222222',
    '33333333333333',
    '44444444444444',
    '55555555555555',
    '66666666666666',
    '77777777777777',
    '88888888888888',
    '99999999999999',
  ].indexOf(stripped) >= 0) { return false; }

  let numbers = stripped.substr(0, 12);
  numbers += verifierDigit(numbers);
  numbers += verifierDigit(numbers);

  return numbers.substr(-2) === stripped.substr(-2);
};

export default validateCNPJ;
