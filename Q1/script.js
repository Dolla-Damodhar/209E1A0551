document.getElementById('fetchNumbersBtn').addEventListener('click', function() {
    var jsonResponses = [
      {
        url: "http://104.211.219.98/numbers/fibonacci",
        name: "Fibonacci"
      },
      {
        url: "http://104.211.219.98/numbers/even",
        name: "Even"
      },
      {
        url: "http://104.211.219.98/numbers/odd",
        name: "Odd"
      }
    ];
  
    var numbersTableBody = document.getElementById('numbersTable').querySelector('tbody');
    numbersTableBody.innerHTML = '';
  
    for (var i = 0; i < jsonResponses.length; i++) {
      var response = jsonResponses[i];
      var url = response.url;
      var name = response.name;
  
      fetch(url)
        .then(function(response) {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Error retrieving numbers');
          }
        })
        .then(function(data) {
          var numbers = data.numbers;
          var row = document.createElement('tr');
          var urlCell = document.createElement('td');
          var numbersCell = document.createElement('td');
          urlCell.textContent = name;
          numbersCell.textContent = numbers.join(', ');
          row.appendChild(urlCell);
          row.appendChild(numbersCell);
          numbersTableBody.appendChild(row);
        })
        .catch(function(error) {
          console.error(error);
        });
    }
  });
  