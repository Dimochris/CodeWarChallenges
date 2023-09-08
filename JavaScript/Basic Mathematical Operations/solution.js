function basicOp(operation, value1, value2)
{
  switch (operation)
  {
     case '+':
        return value1 + value2;
     case '-':
        return  value1 - value2;
     case '*':
        return value1 * value2;
     case '/':
        return  value1 / value2;
     default:
        break;
  }
}

function basicOp(operation, value1, value2) {
  const operations = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2,
  };

  return operations[operation]; // Default to 0 for invalid operations
}