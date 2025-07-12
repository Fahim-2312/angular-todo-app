 function calculate() {
      const input = document.getElementById('input').value;
      const sum = input.split('+')
                       .map(n => parseFloat(n) || 0)
                       .reduce((a,b) => a + b, 0);
      document.getElementById('result').textContent = 'Result: ' + sum;
    }
    function clearInput() {
      document.getElementById('input').value = '';
      document.getElementById('result').textContent = '';
    }