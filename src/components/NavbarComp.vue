<template>
    <nav>
        <h1>Learn</h1>
        <router-link to="/"><button>X</button></router-link>
    </nav>
</template>

<style scoped>
nav {
    width: 96%;
    height: 60px;
    box-shadow: 0 0 10px #9ec9ed44;
    display: flex;
    align-items: center;
    padding: 0 2%;
}
button {
    background-color: transparent;
    border: 2px solid #748dcd;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    letter-spacing: normal;
    line-height: 1.5;
    cursor: pointer;
    text-decoration: none;
    font-weight: 550;
    padding: 8px 15px;
    text-align: left;
    float: right;
}
h1 {
    color: white;
    font-size: 1rem;
    letter-spacing: normal;
    line-height: 1.5;
    cursor: pointer;
    text-decoration: none;
    font-weight: 550;
}
</style>