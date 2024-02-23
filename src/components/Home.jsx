import React from 'react';

class Home extends React.Component {
  handleGoHome = () => {
    // Ana sayfaya yönlendirme işlemi burada gerçekleştirilebilir
    console.log('Ana sayfaya yönlendiriliyor...');
    // Örnek olarak, "/" yoluna yönlendirme yapılabilir
    window.location.href = "/";
  };

  render() {
    return (
      <div onClick={this.handleGoHome}>
        ENKA ShopZon
      </div>
    );
  }
}

export default Home;
