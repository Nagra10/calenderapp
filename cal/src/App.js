
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
class App extends React.Component {
    render() {
        return <ScheduleComponent>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
</ScheduleComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('schedule'));


export default App;