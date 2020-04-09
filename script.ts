const addZero = (num: number): string|number => {
  let ret: string|number;
  if( num < 10 ) { ret = "0" + num; }
  else { ret = num; }
  return ret;
}

const showClock = (): void => {
  const Time: Date = new Date();
  const Hour: string|number = addZero( Time.getHours() );
  const Min: string|number = addZero( Time.getMinutes() );
  const Sec: string|number = addZero( Time.getSeconds() );
  const msg: string = ` ${Hour}時 ${Min}分 ${Sec}秒`;

  const clockArea: HTMLElement | null = document.getElementById('clockArea');
  if (clockArea != null) {
    clockArea.textContent = msg
  }
}

setInterval('showClock()',1000);