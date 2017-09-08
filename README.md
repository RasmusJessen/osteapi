#OstAPI Dokumentation

## Resurser

**GET /cheeses**

Resursen repræsenterer alle oste i kartpteket.
Resursen er formateret på følgende måde: 

```JSON
[{
   "navn": string,
   "pris": number,
   "type":string,    
   "farve": string,
   "antal": number, 
   "smag": string,
   "billede" string, 
   "land": string,
   "producent": string,
   "varenr": number
},

{
   
   "navn": string,
   "pris": number,
   "type":string,    
   "farve": string,
   "antal": number, 
   "smag": string,
   "billede" string, 
   "land": string,
   "producent": string,
   "varenr": number
},



**GET /cheeses/\<varenummer>**

{
   "navn": string,
   "pris": number,
   "type":string,    
   "farve": string,
   "antal": number, 
   "smag": string,
   "billede" string, 
   "land": string,
   "producent": string,
   "varenr": number
}]
```

**POST /login**

Resursen varetager log-ind information og returnerer et AccesToken.
Resursens request body er formateret på følgende måde: 

```JSON
{
    "username": string
    "password": string
}
```

Resursens response er formateret på følgende måde: 

```JSON
{
    "AccesToken": string
}
```

AccesToken er en 512 bit HEX streng, genereret med randomBytes.