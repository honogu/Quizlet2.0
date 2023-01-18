<template>
    <nav>
        <div class="nav-container">
            <img alt="learn" :src="require('@/assets/Learn.svg')" />
            <h1>Learn</h1>
        </div>
        <router-link to="/"><button>X</button></router-link>
    </nav>
</template>

<style scoped>
nav {
    width: 96%;
    height: 60px;
    box-shadow: 0 0 10px #9ec9ed44;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
}
.nav-container {
    display: flex;
}
.nav-container img {
    width: 25px;
    margin-right: 10px;
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
button:hover {
    background-color: #748dcd4b;
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