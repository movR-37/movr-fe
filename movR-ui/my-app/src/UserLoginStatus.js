let isUserLoggedIn = false;

const userStatus = {
    getStatus: getUserStatus,
    setStatus: setUserStatus
}

function getUserStatus() {
    return isUserLoggedIn;
}

function setUserStatus(status) {
    isUserLoggedIn = status;
}

export default userStatus;