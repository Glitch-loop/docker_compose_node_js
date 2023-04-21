const express = require('express');
const axios = require('axios');
const router = express.Router()

const { isLoggedIn } = require('../lib/auth') 

//Characters
router.get('/', isLoggedIn, async (req, res) => {
    const END_POINT = "https://rickandmortyapi.com/api/character";

    axios.get(END_POINT)
    .then((response) => {
        res.render('home', {
            data: response.data.results
        });
    })
    .catch((error) =>{
        console.log(error)
        res.render('home', {
            error,
            data: []
        });
    })
})

//Episodes
router.get('/episodes', isLoggedIn, async (req, res) => {
    const END_POINT = "https://rickandmortyapi.com/api/episode";
    
    responseEpisodes = await axios.get(END_POINT)
    .then(async (response) => { 
        let episode = response.data.results;
        res.render('episodes', {
            episodes: episode,
            helpers: {
                getIdStringWithDial(id) {return `#${id}`},
                getIdString(id) {return `${id}`},
            }
        })
        
    })
    .catch((error) =>{ 
        res.render('episodes', {
            error,
            episodes: []
        })
     })
})

//Locations
router.get('/locations', isLoggedIn, async (req, res) => {
    const END_POINT = "https://rickandmortyapi.com/api/location";
    
     
    await axios.get(END_POINT)
    .then(async (response) => {
        let locations = response.data.results;
        res.render('locations', {
            locations: locations,
            helpers: {
                getIdSlide(id) {return 'Slide' + id.toString()},
                intToString(id) {
                    id = id - 1;
                    return id.toString()},
                isTheFirst(id) {return id==1 ? true : false}
            }
        })
    })
    .catch((error) =>{
        res.render('locations', {
            error,
            locations: []
        })
    })
})

module.exports = router
