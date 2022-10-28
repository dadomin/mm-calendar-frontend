const CalendarHeader = () => {

    return (
        <section className="cal-header">
            <div className="cal-date">
                <button>&lt;</button>
                <div>
                    <p>2002년</p>
                    <h1>12월</h1>
                </div>
                <button>&gt;</button>
            </div>
            <button className="blue-btn-rev">Add tasks</button>
        </section>
    )
}
export default CalendarHeader;