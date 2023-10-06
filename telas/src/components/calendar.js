import Styles from "@/styles/Calendar.module.css"
import Calendar from 'react-calendar'
import styled from 'styled-components';


export default function CalendarC(){
    return (
        <div id={Styles.calendar}>
            <CalendarCont>
                <Calendar locale="pt-br"/>
            </CalendarCont>
        </div>
    )
}

const CalendarCont = styled.div`
  /* ~~~ container styles ~~~ */
    max-width: 600px;
    margin: auto;
    margin-top: 20px;
    padding: 10px;
    border-radius: 3px;
  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;
    gap: 5px;

    .react-calendar__navigation__label {
      font-weight: bold;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }
  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
  }

  /* ~~~ button styles ~~~ */
  abbr{
    color: white;
  }
  button {
    background-color: #00000000;
    border: 0;
    border-radius: 3px;
    color: white;
    padding: 5px 0;
    font-size: 11px;

    &:hover {
      background-color: #00000020;
    }

    &:active {
      background-color: #00000020;
    }
  }
`;