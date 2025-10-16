export function formatTime(date){
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });
}

export function formatDate(date){
    return date.toLocaleTimeString('en-US', {
        weekday: 'long',
        month: 'long', 
        day: 'numeric',
    });
}

