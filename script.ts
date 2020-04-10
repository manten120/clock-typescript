const addZero = (num: number): string|number => {
  let ret: string|number;
  if( num < 10 ) { ret = "0" + num; }
  else { ret = num; }
  return ret;
}

const showClock = (): void => {
  const Time: Date = new Date();
  const month = Time.getMonth() + 1 ;
  const day = Time.getDate() ;
  const Hour: string|number = addZero( Time.getHours() );
  const Min: string|number = addZero( Time.getMinutes() );
  const Sec: string|number = addZero( Time.getSeconds() );
  const dayOfWeekNum: number = Time.getDay();
  const dayName: string[] = [ "日", "月", "火", "水", "木", "金", "土" ];
  const dayOfWeek: string = dayName[dayOfWeekNum];
  
  const dayText: string = `${month}/${day}(${dayOfWeek}) `;
  const clockText: string = `${Hour}時 ${Min}分 ${Sec}秒`;

  const dayArea: HTMLElement | null = document.getElementById('dayArea');
  const clockArea: HTMLElement | null = document.getElementById('clockArea');
  if (dayArea != null) {
    dayArea.textContent = dayText
  }
  if (clockArea != null) {
    clockArea.textContent = clockText
  }
}

setInterval('showClock()',1000);