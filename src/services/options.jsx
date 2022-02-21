export const GET_JSON = (URL) => {
  return { 
   method: 'get',
   url: URL,
   headers: {
    'Content-Type': 'application/json',
   },
  }
 }

export const GET_STARSHIPS = (page) => {
  return { 
   method: 'get',
   url: `https://swapi.dev/api/starships/?page=${page}`,
   headers: {
    'Content-Type': 'application/json',
   },
  }
 }

export const GET_PLANETS = (page) => {
 return { 
  method: 'get',
  url: `https://swapi.dev/api/planets/?page=${page}`,
  headers: {
   'Content-Type': 'application/json',
   },
  }
 }