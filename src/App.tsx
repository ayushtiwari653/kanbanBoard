import React from 'react';
import './App.css';
import { ColumnDirective, ColumnsDirective, KanbanComponent } from '@syncfusion/ej2-react-kanban';
import {  DataManager, ODataAdaptor} from '@syncfusion/ej2-data';
import Button from './button';
import Welcome from './components/Welcome';


class App extends React.Component {
  public kanbanRemoteDatasource : DataManager = new DataManager(
    {
      url: 'https://localhost:7079/get-all-task',
      adaptor: new ODataAdaptor,
      crossDomain: true
      }  
  );


  public cardTooltipTemplate (data: any): JSX.Element {
    return(
      <div>
         

        
        <table>
          <tbody>
            <tr>
              <td>Assign To</td>
              <td>{data.assignTo}</td>
            </tr>
            <tr></tr>
            <td>Task ID</td>
              <td>{data.tId}</td>
            <tr></tr>
            <td>Project Id</td>
              <td>{data.PId}</td>
            <tr></tr>
            <td>Task Details</td>
              <td>{data.taskDetails}</td>
          </tbody>
        </table>
        
      </div>
    );
  }
  render() {
    return (<KanbanComponent dataSource={this.kanbanRemoteDatasource} keyField="taskStatusId"
      
      cardSettings={{ contentField : "taskDetails", headerField:"tId",selectionType:"Multiple"}}

        width="1000px" height="100%" swimlaneSettings={ { keyField:"assignTo"}}

          enableTooltip={true} tooltipTemplate={this.cardTooltipTemplate}
           allowDragAndDrop={true} >
             
             <Button/>
             
      <ColumnsDirective>=
        <ColumnDirective headerText='To Do' keyField={1}></ColumnDirective>
        <ColumnDirective headerText='In Progess' keyField={2}
        minCount={2} maxCount={8} allowDrag={true}></ColumnDirective>
        <ColumnDirective headerText='Review' keyField={3}
        minCount={1} maxCount={8}></ColumnDirective>
        <ColumnDirective headerText='Testing' keyField={4}
        minCount={1} maxCount={8}></ColumnDirective>
        <ColumnDirective headerText='Completed' keyField={5}></ColumnDirective>
      </ColumnsDirective>

    </KanbanComponent>);

  }
}
export default App;