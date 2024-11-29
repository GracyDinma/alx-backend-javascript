function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  console.log(`Rounded values: A = ${roundedA}, B = ${roundedB}`);

  if (type === 'SUM') {
    return roundedA + roundedB;
  } else if (type === 'SUBTRACT') {
    return roundedA - roundedB;
  } else if (type === 'DIVIDE') {
    if (roundedB === 0) {
      return 'Error';
    }
    return parseFloat((roundedA / roundedB).toFixed(1));
  } 
  
  throw new Error('Invalid operation type');
}

module.exports = calculateNumber;
