function handleClock(){
    let second = 0;
    let minute = 0;
    let hour = 0; 
    let date = new Date();

    setInterval(
        function() {
            d = new Date()
            second = d.getSeconds();
            minute = d.getMinutes();
            hour = d.getHours();
        }
    );
}