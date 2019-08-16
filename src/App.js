import React from 'react';
import Avatar from './components/support/avatar/avatar';


function App() {
  return (
    <div className="App" style={styles}>
      <p>aloha</p>
      <Avatar src='https://res.cloudinary.com/teepublic/image/private/s--q26MoZeM--/t_Preview/b_rgb:484849,t_Watermark/c_limit,f_jpg,h_630,q_90,w_630/v1519739789/production/designs/2400993_0.jpg'></Avatar>
    </div>
  );
}

const styles = {
  background: 'blue'
}

export default App;
