export function formatClock(date){
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

export function formatTime(seconds) {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60

    const formatMin = mins.toString().padStart(2, '0')
    const formatSecs = secs.toString().padStart(2, '0')

    return `${formatMin}:${formatSecs}`
}
