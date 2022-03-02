function checkspeed(speed){
    const speedlimit = 70;
    const kmPerpoint = 5;

    if (speed < speedlimit)
        console.log('Ok');
    else{ 
        const points = Math.floor((spped - speedlimit) / kmPerpoint);
        if (points >= 12)
            console.log('License Suspended');
            else
            console.log('points', points);
    }
}