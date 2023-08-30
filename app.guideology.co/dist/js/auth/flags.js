let users = [
    {id:+1},
    {id:+44},
    // {id: 93},
    // {id: 355},
    // {id: 213},
    // {id: 1},
    // {id: 373},
    // {id: 1},
    // {id: 54},
    // {id: 374},
    // {id: 297},
    // {id: 247},
    // {id: 61},
  ];
  
  const input = document.getElementById('phone_number').value;
  const user = users.find(u => u.id === +input);
  
  if (user) {
    console.log('User found');
  }
  else if(input.length > 11){
    alert('User found');
  }
  else {
    alert('User not founds');
  }