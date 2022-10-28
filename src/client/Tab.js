import Calendar from "../views/calendar/Calendar";

const Tab = (props) => {
    const tab = props.tab;

    if(tab === "calendar")
    {
        return <Calendar/>
    }

}
export default Tab;