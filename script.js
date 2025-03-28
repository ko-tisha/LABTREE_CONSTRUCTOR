let pot1status = false;
let pot2status = false;
let pot3status = false;
let pot4status = false;
let pot5status = false;
let pot6status = false;


//1 экран. плашка

const buttonPlateY = document.getElementById('buttonPlateY');

buttonPlateY.addEventListener('click', toggleFullscreen);

function toggleFullscreen() {
if (!document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement) {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    }
}
}

//1 экран. крона дерева

function del() {
	let popup = document.getElementById("Plate");
    popup.remove();
}

const element = document.getElementById('crown');

element.addEventListener('mousedown', () => {
  element.style.transform = 'scale(0.8)';
});

element.addEventListener('mouseup', () => {
  element.style.transform = 'scale(1)';
});

//1 экран. мигание слов

const text1 = document.getElementById('TextBlink1');
const text2 = document.getElementById('TextBlink2');

function blinkTexts() {
  if (text1.style.display === 'none') {
    text1.style.display = 'block';
    text2.style.display = 'none';
  } else {
    text1.style.display = 'none';
    text2.style.display = 'block';
  }
}

setInterval(blinkTexts, 1000);


//1 экран. появление элементов и исчезновение текста

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('crown');
    const TextB1 = document.getElementById('TextBlink1');
    const TextB2 = document.getElementById('TextBlink2');
    const imageContainer = document.getElementById('elements');

    const letterElement1 = document.getElementById('letter1');
    const letterElement2 = document.getElementById('letter2');
    const letterElement3 = document.getElementById('letter3');
    const letterElement4 = document.getElementById('letter4');
    const letterElement5 = document.getElementById('letter5');
    const letterElement6 = document.getElementById('letter6');
    const letterElement7 = document.getElementById('letter7');
    const letterElement8 = document.getElementById('letter8');
    const letterElement9 = document.getElementById('letter9');
    const letterElement10 = document.getElementById('letter10');
    const letterElement11 = document.getElementById('letter11');
    const letterElement12 = document.getElementById('letter12');
    const letterElement13 = document.getElementById('letter13');
    const letterElement14 = document.getElementById('letter14');
    const letterElement15 = document.getElementById('letter15');
    const letterElement16 = document.getElementById('letter16');
  
    let clickCount = 0;
  
    button.addEventListener('click', () => {
      clickCount++;
      console.log(`Кликов: ${clickCount}`);
  
      if (clickCount === 3) {
        imageContainer.style.display = 'block';
        console.log("Показываем изображение")
        TextB1.style.opacity = "0";
        TextB2.style.opacity = "0";
        console.log("Скрываем текст")
        letterElement1.style.animationPlayState = 'running';
        letterElement2.style.animationPlayState = 'running';
        letterElement3.style.animationPlayState = 'running';
        letterElement4.style.animationPlayState = 'running';
        letterElement5.style.animationPlayState = 'running';
        letterElement6.style.animationPlayState = 'running';
        letterElement7.style.animationPlayState = 'running';
        letterElement8.style.animationPlayState = 'running';
        letterElement9.style.animationPlayState = 'running';
        letterElement10.style.animationPlayState = 'running';
        letterElement11.style.animationPlayState = 'running';
        letterElement12.style.animationPlayState = 'running';
        letterElement13.style.animationPlayState = 'running';
        letterElement14.style.animationPlayState = 'running';
        letterElement15.style.animationPlayState = 'running';
        letterElement16.style.animationPlayState = 'running';
        console.log("Анимация завершена!")
      }
    });
  });


//2 экран. горшки

const potImage = document.getElementById('pot1');

potImage.addEventListener('click', () => {
    console.log("1")
  if (!pot1status) {
    console.log("2")
    potImage.src = './img/pot1_2.png';
    potImage.alt = 'Горшок 1_2';
    pot1status = true;
  } else {
    console.log("3")
    potImage.src = './img/pot1.png';
    potImage.alt = 'Горшок 1';
    pot1status = false;
  }
});


const potImage2 = document.getElementById('pot2');

potImage2.addEventListener('click', () => {
    console.log("1")
  if (!pot2status) {
    console.log("2")
    potImage2.src = './img/pot2_2.png';
    potImage2.alt = 'Горшок 2_2';
    pot2status = true;
  } else {
    console.log("3")
    potImage2.src = './img/pot2.png';
    potImage2.alt = 'Горшок 2';
    pot2status = false;
  }
});


const potImage3 = document.getElementById('pot3');

potImage3.addEventListener('click', () => {
    console.log("1")
  if (!pot3status) {
    console.log("2")
    potImage3.src = './img/pot3_2.png';
    potImage3.alt = 'Горшок 3_2';
    pot3status = true;
  } else {
    console.log("3")
    potImage3.src = './img/pot3.png';
    potImage3.alt = 'Горшок 3';
    pot3status = false;
  }
});


const potImage4 = document.getElementById('pot4');

potImage4.addEventListener('click', () => {
    console.log("1")
  if (!pot4status) {
    console.log("2")
    potImage4.src = './img/pot4_2.png';
    potImage4.alt = 'Горшок 4_2';
    pot4status = true;
  } else {
    console.log("3")
    potImage4.src = './img/pot4.png';
    potImage4.alt = 'Горшок 4';
    pot4status = false;
  }
});


const potImage5 = document.getElementById('pot5');

potImage5.addEventListener('click', () => {
    console.log("1")
  if (!pot5status) {
    console.log("2")
    potImage5.src = './img/pot5_2.png';
    potImage5.alt = 'Горшок 5_2';
    pot5status = true;
  } else {
    console.log("3")
    potImage5.src = './img/pot5.png';
    potImage5.alt = 'Горшок 5';
    pot5status = false;
  }
});


const potImage6 = document.getElementById('pot6');

potImage6.addEventListener('click', () => {
    console.log("1")
  if (!pot6status) {
    console.log("2")
    potImage6.src = './img/pot6_2.png';
    potImage6.alt = 'Горшок 6_2';
    pot6status = true;
  } else {
    console.log("3")
    potImage6.src = './img/pot6.png';
    potImage6.alt = 'Горшок 6';
    pot6status = false;
  }
});

//текст при нажатии на цветы

document.addEventListener('DOMContentLoaded', () => {
  const flower1 = document.getElementById('flower1');
  const screenTwoText1 = document.getElementById('screenTwoText1');

  flower1.addEventListener('click', () => {
    // Показываем текст
    screenTwoText1.classList.remove('hidden1');
    screenTwoText1.classList.add('visible1');

    // Скрываем текст через 5 секунд
    setTimeout(() => {
      screenTwoText1.classList.remove('visible1');
      screenTwoText1.classList.add('hidden1');
    }, 3000); // 5000 мс = 5 секунд
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const flower2 = document.getElementById('flower2');
  const screenTwoText2 = document.getElementById('screenTwoText2');

  flower2.addEventListener('click', () => {
    // Показываем текст
    screenTwoText2.classList.remove('hidden2');
    screenTwoText2.classList.add('visible2');

    // Скрываем текст через 5 секунд
    setTimeout(() => {
      screenTwoText2.classList.remove('visible2');
      screenTwoText2.classList.add('hidden2');
    }, 3000); // 5000 мс = 5 секунд
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const flower3 = document.getElementById('flower3');
  const screenTwoText3 = document.getElementById('screenTwoText3');

  flower3.addEventListener('click', () => {
    // Показываем текст
    screenTwoText3.classList.remove('hidden3');
    screenTwoText3.classList.add('visible3');

    // Скрываем текст через 5 секунд
    setTimeout(() => {
      screenTwoText3.classList.remove('visible3');
      screenTwoText3.classList.add('hidden3');
    }, 3000); // 5000 мс = 5 секунд
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const flower4 = document.getElementById('flower4');
  const screenTwoText4 = document.getElementById('screenTwoText4');

  flower4.addEventListener('click', () => {
    // Показываем текст
    screenTwoText4.classList.remove('hidden4');
    screenTwoText4.classList.add('visible4');

    // Скрываем текст через 5 секунд
    setTimeout(() => {
      screenTwoText4.classList.remove('visible4');
      screenTwoText4.classList.add('hidden4');
    }, 3000); // 5000 мс = 5 секунд
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const flower5 = document.getElementById('flower5');
  const screenTwoText5 = document.getElementById('screenTwoText5');

  flower5.addEventListener('click', () => {
    // Показываем текст
    screenTwoText5.classList.remove('hidden5');
    screenTwoText5.classList.add('visible5');

    // Скрываем текст через 5 секунд
    setTimeout(() => {
      screenTwoText5.classList.remove('visible5');
      screenTwoText5.classList.add('hidden5');
    }, 3000); // 5000 мс = 5 секунд
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const flower6 = document.getElementById('flower6');
  const screenTwoText6 = document.getElementById('screenTwoText6');

  flower6.addEventListener('click', () => {
    // Показываем текст
    screenTwoText6.classList.remove('hidden6');
    screenTwoText6.classList.add('visible6');

    // Скрываем текст через 5 секунд
    setTimeout(() => {
      screenTwoText6.classList.remove('visible6');
      screenTwoText6.classList.add('hidden6');
    }, 3000); // 5000 мс = 5 секунд
  });
});

// const flower1 = document.getElementById('flower1');
// const screenTwoText1 = document.getElementById('screenTwoText1');

// flower1.addEventListener('click', function() {
//     if (screenTwoText1.style.visibility === 'hidden') {
//         screenTwoText1.style.visibility = 'visible';
//     } else {
//         screenTwoText1.style.visibility = 'hidden';
//     }
// });

// const flower2 = document.getElementById('flower2');
// const screenTwoText2 = document.getElementById('screenTwoText2');

// flower2.addEventListener('click', function() {
//     if (screenTwoText2.style.visibility === 'hidden') {
//         screenTwoText2.style.visibility = 'visible';
//     } else {
//         screenTwoText2.style.visibility = 'hidden';
//     }
// });

// const flower3 = document.getElementById('flower3');
// const screenTwoText3 = document.getElementById('screenTwoText3');

// flower3.addEventListener('click', function() {
//     if (screenTwoText3.style.visibility === 'hidden') {
//         screenTwoText3.style.visibility = 'visible';
//     } else {
//         screenTwoText3.style.visibility = 'hidden';
//     }
// });

// const flower4 = document.getElementById('flower4');
// const screenTwoText4 = document.getElementById('screenTwoText4');

// flower4.addEventListener('click', function() {
//     if (screenTwoText4.style.visibility === 'hidden') {
//         screenTwoText4.style.visibility = 'visible';
//     } else {
//         screenTwoText4.style.visibility = 'hidden';
//     }
// });

// const flower5 = document.getElementById('flower5');
// const screenTwoText5 = document.getElementById('screenTwoText5');

// flower5.addEventListener('click', function() {
//     if (screenTwoText5.style.visibility === 'hidden') {
//         screenTwoText5.style.visibility = 'visible';
//     } else {
//         screenTwoText5.style.visibility = 'hidden';
//     }
// });

// const flower6 = document.getElementById('flower6');
// const screenTwoText6 = document.getElementById('screenTwoText6');

// flower6.addEventListener('click', function() {
//     if (screenTwoText6.style.visibility === 'hidden') {
//         screenTwoText6.style.visibility = 'visible';
//     } else {
//         screenTwoText6.style.visibility = 'hidden';
//     }
// });



document.addEventListener('DOMContentLoaded', () => {
  const tableButton1 = document.getElementById('tableButton1');
  const tsCrown1 = document.getElementById('tsCrown1');

  tableButton1.addEventListener('click', () => {
    // Проверяем текущее состояние tsCrown1
    if (tsCrown1.style.display === 'none' || tsCrown1.style.display === '') {
      tsCrown1.style.display = 'block'; // Показываем tsCrown1
      console.log("Показываем крону 1");
    } else {
      tsCrown1.style.display = 'none'; // Скрываем tsCrown1
      console.log("Скрываем крону 1");
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const tableButton1 = document.getElementById('tableButton1');
  const tsCrown1_2 = document.getElementById('tsCrown1_2');

  tableButton1.addEventListener('click', () => {
    // Проверяем текущее состояние tsCrown1
    if (tsCrown1_2.style.display === 'none' || tsCrown1_2.style.display === '') {
      tsCrown1_2.style.display = 'block'; // Показываем tsCrown1
      console.log("Показываем крону 1");
    } else {
      tsCrown1_2.style.display = 'none'; // Скрываем tsCrown1
      console.log("Скрываем крону 1");
    }
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const tableButton2 = document.getElementById('tableButton2');
  const tsTrunk1 = document.getElementById('tsTrunk1');

  tableButton2.addEventListener('click', () => {
    if (tsTrunk1.style.display === 'none' || tsTrunk1.style.display === '') {
      tsTrunk1.style.display = 'block';
      console.log("Показываем ствол 1");
    } else {
      tsTrunk1.style.display = 'none';
      console.log("Скрываем ствол 1");
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const tableButton2 = document.getElementById('tableButton2');
  const tsTrunk1_2 = document.getElementById('tsTrunk1_2');

  tableButton2.addEventListener('click', () => {
    if (tsTrunk1_2.style.display === 'none' || tsTrunk1_2.style.display === '') {
      tsTrunk1_2.style.display = 'block';
      console.log("Показываем ствол 1");
    } else {
      tsTrunk1_2.style.display = 'none';
      console.log("Скрываем ствол 1");
    }
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const tableButton3 = document.getElementById('tableButton3');
  const tsMore1 = document.getElementById('tsMore1');

  tableButton3.addEventListener('click', () => {
    if (tsMore1.style.display === 'none' || tsMore1.style.display === '') {
      tsMore1.style.display = 'block';
      console.log("Показываем еще 1");
    } else {
      tsMore1.style.display = 'none';
      console.log("Скрываем еще 1");
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const tableButton3 = document.getElementById('tableButton3');
  const tsMore1_2 = document.getElementById('tsMore1_2');

  tableButton3.addEventListener('click', () => {
    if (tsMore1_2.style.display === 'none' || tsMore1_2.style.display === '') {
      tsMore1_2.style.display = 'block';
      console.log("Показываем еще 1");
    } else {
      tsMore1_2.style.display = 'none';
      console.log("Скрываем еще 1");
    }
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const tableButton4 = document.getElementById('tableButton4');
  const tsCrown2 = document.getElementById('tsCrown2');

  tableButton4.addEventListener('click', () => {
    // Проверяем текущее состояние tsCrown1
    if (tsCrown2.style.display === 'none' || tsCrown2.style.display === '') {
      tsCrown2.style.display = 'block'; // Показываем tsCrown1
      console.log("Показываем крону 2");
    } else {
      tsCrown2.style.display = 'none'; // Скрываем tsCrown1
      console.log("Скрываем крону 2");
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const tableButton4 = document.getElementById('tableButton4');
  const tsCrown2_2 = document.getElementById('tsCrown2_2');

  tableButton4.addEventListener('click', () => {
    // Проверяем текущее состояние tsCrown1
    if (tsCrown2_2.style.display === 'none' || tsCrown2_2.style.display === '') {
      tsCrown2_2.style.display = 'block'; // Показываем tsCrown1
      console.log("Показываем крону 2");
    } else {
      tsCrown2_2.style.display = 'none'; // Скрываем tsCrown1
      console.log("Скрываем крону 2");
    }
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const tableButton5 = document.getElementById('tableButton5');
  const tsTrunk2 = document.getElementById('tsTrunk2');

  tableButton5.addEventListener('click', () => {
    if (tsTrunk2.style.display === 'none' || tsTrunk2.style.display === '') {
      tsTrunk2.style.display = 'block';
      console.log("Показываем ствол 2");
    } else {
      tsTrunk2.style.display = 'none';
      console.log("Скрываем ствол 2");
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const tableButton5 = document.getElementById('tableButton5');
  const tsTrunk2_2 = document.getElementById('tsTrunk2_2');

  tableButton5.addEventListener('click', () => {
    if (tsTrunk2_2.style.display === 'none' || tsTrunk2_2.style.display === '') {
      tsTrunk2_2.style.display = 'block';
      console.log("Показываем ствол 2");
    } else {
      tsTrunk2_2.style.display = 'none';
      console.log("Скрываем ствол 2");
    }
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const tableButton6 = document.getElementById('tableButton6');
  const tsMore2 = document.getElementById('tsMore2');

  tableButton6.addEventListener('click', () => {
    if (tsMore2.style.display === 'none' || tsMore2.style.display === '') {
      tsMore2.style.display = 'block';
      console.log("Показываем еще 2");
    } else {
      tsMore2.style.display = 'none';
      console.log("Скрываем еще 2");
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const tableButton6 = document.getElementById('tableButton6');
  const tsMore2_2 = document.getElementById('tsMore2_2');

  tableButton6.addEventListener('click', () => {
    if (tsMore2_2.style.display === 'none' || tsMore2_2.style.display === '') {
      tsMore2_2.style.display = 'block';
      console.log("Показываем еще 2");
    } else {
      tsMore2_2.style.display = 'none';
      console.log("Скрываем еще 2");
    }
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const tableButton7 = document.getElementById('tableButton7');
  const tsCrown3 = document.getElementById('tsCrown3');

  tableButton7.addEventListener('click', () => {
    if (tsCrown3.style.display === 'none' || tsCrown3.style.display === '') {
      tsCrown3.style.display = 'block';
      console.log("Показываем крону 3");
    } else {
      tsCrown3.style.display = 'none';
      console.log("Скрываем крону 3");
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const tableButton7 = document.getElementById('tableButton7');
  const tsCrown3_2 = document.getElementById('tsCrown3_2');

  tableButton7.addEventListener('click', () => {

    if (tsCrown3_2.style.display === 'none' || tsCrown3_2.style.display === '') {
      tsCrown3_2.style.display = 'block';
      console.log("Показываем крону 3");
    } else {
      tsCrown3_2.style.display = 'none';
      console.log("Скрываем крону 3");
    }
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const tableButton8 = document.getElementById('tableButton8');
  const tsTrunk3 = document.getElementById('tsTrunk3');

  tableButton8.addEventListener('click', () => {
    if (tsTrunk3.style.display === 'none' || tsTrunk3.style.display === '') {
      tsTrunk3.style.display = 'block';
      console.log("Показываем ствол 3");
    } else {
      tsTrunk3.style.display = 'none';
      console.log("Скрываем ствол 3");
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const tableButton8 = document.getElementById('tableButton8');
  const tsTrunk3_2 = document.getElementById('tsTrunk3_2');

  tableButton8.addEventListener('click', () => {
    if (tsTrunk3_2.style.display === 'none' || tsTrunk3_2.style.display === '') {
      tsTrunk3_2.style.display = 'block';
      console.log("Показываем ствол 3");
    } else {
      tsTrunk3_2.style.display = 'none';
      console.log("Скрываем ствол 3");
    }
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const tableButton9 = document.getElementById('tableButton9');
  const tsMore3 = document.getElementById('tsMore3');

  tableButton9.addEventListener('click', () => {
    if (tsMore3.style.display === 'none' || tsMore3.style.display === '') {
      tsMore3.style.display = 'block';
      console.log("Показываем еще 3");
    } else {
      tsMore3.style.display = 'none';
      console.log("Скрываем еще 3");
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const tableButton9 = document.getElementById('tableButton9');
  const tsMore3_2 = document.getElementById('tsMore3_2');

  tableButton9.addEventListener('click', () => {
    if (tsMore3_2.style.display === 'none' || tsMore3_2.style.display === '') {
      tsMore3_2.style.display = 'block';
      console.log("Показываем еще 3");
    } else {
      tsMore3_2.style.display = 'none';
      console.log("Скрываем еще 3");
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const screen3 = document.getElementById('screenThtee');
  const screen4 = document.getElementById('screenFour');
  const ready = document.getElementById('ready');
  const again = document.getElementById('again');

  ready.addEventListener('click', () => {
    screen3.style.display = 'none';
    screen4.style.display = 'block';
  });

  again.addEventListener('click', () => {
    screen4.style.display = 'none';
    screen3.style.display = 'block';
  });
});