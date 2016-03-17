const conditions_fixture = [
  {title: 'headache', desc: 'severe pain like migranes'},
  {title: 'knee sprain', desc: 'severe pain in the knee'},
  {title: 'Sholder pain', desc: 'Shoulder pain'},
  {title: 'Low back pain', desc: 'Low back issues'},
  {title: 'Arthritis', desc: 'Pain in the joints'},
];


export const FETCH_CONDITIONS = 'FETCH_CONDITIONS';

export function fetchConditions(){
  //console.log("actions: fetchConditions");
  return {
    type: FETCH_CONDITIONS,
    payload: conditions_fixture
  }
}
