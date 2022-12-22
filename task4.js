function cardRoles (array) {
    let roles = [];
    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case 11: 
                roles.push("jack");
                break;
            case 12: 
                roles.push("queen");
                break;
            case 13: 
                roles.push("king");
                break;
            default: 
                roles.push(array[i]);
                break;
        };
    };

    return (console.log(roles));
}

cardRoles([5,11,12,13,10]);