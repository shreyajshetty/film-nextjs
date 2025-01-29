interface Rating {
  Source: string;
  Value: string;
}
export interface Movie {
  Title: string;
  Year: string;
  Genre: string;
  Released: string;
  Poster: string;
  imdbRating: string;
  Trailer: string;
  Rated: string;
  Runtime: string;
  Actors: string;
  Language: string;
  Plot: string;
  imdbVotes: string;
  Type: string;
  Director: string;
  Writer: string;
  Country: string;
  Awards: string;
  Ratings: Rating[];
  Metascore: string;
  imdbID: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Response?: string;
  totalSeasons?: string;
}

export const Dmovies: Movie[] = [
  {
    Title: "Sita Ramam",
    Year: "2022",
    Rated: "N/A",
    Released: "05 Aug 2022",
    Runtime: "163 min",
    Genre: "Action, Drama, Mystery",
    Director: "Hanu Raghavapudi",
    Writer: "Hanu Raghavapudi, Jay Krishna, Raj Kumar Kandamudi",
    Actors: "Dulquer Salmaan, Mrunal Thakur, Rashmika Mandanna",
    Plot: "An orphan soldier, Lieutenant Ram's life changes, after he gets a letter from a girl named Sita. He meets her and love blossoms between them. When he comes back to his camp in Kashmir,After he gets caught in jail, he sends a lette...",
    Language: "Telugu",
    Country: "India",
    Awards: "6 wins & 12 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2RjZDJhYzUtOTQ5Yy00OWM3LWE5OTctM2Y0YWVmNzAzODllXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.6/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "86%",
      },
    ],
    Metascore: "N/A",
    imdbRating: "8.6",
    imdbVotes: "66,973",
    imdbID: "tt20850406",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    Trailer: "https://www.imdb.com/video/vi3090072089/?ref_=tt_vi_i_1",
  },
  {
    Title: "Hanu Man",
    Year: "2024",
    Rated: "N/A",
    Released: "12 Jan 2024",
    Runtime: "158 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "Prasanth Varma",
    Writer: "Prasanth Varma",
    Actors: "Teja Sajja, Amritha Aiyer, Varalaxmi Sarathkumar",
    Plot: "An imaginary place called Anjanadri where the protagonist gets the powers of Hanuman and fights for Anjanadri.",
    Language:
      "Hindi, Malayalam, Kannada, Tamil, English, Japanese, Chinese, Spanish, Korean, Telugu",
    Country: "India",
    Awards: "N/A",
    Poster:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhMWFhUXGBcXFxgYFxoWIBgdFxYXGBcYFxcaHSggGBolHhcXITEiJSkrLy4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0mHyUtLS0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAPsAyQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAIFAQYHAAj/xABAEAABAwIEAwYCCAQFBAMAAAABAgMRACEEEjFBBVFhBhMicYGRMqEUQlKxwdHh8AcVI5IzU2LS8UNyc6JUguL/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/8QALhEAAgIBAwQABQIHAQAAAAAAAAECEQMSITEEE0FRYXGBkfAioRQjMrHB4fEF/9oADAMBAAIRAxEAPwDsraq1vtRx44UphAUVXOY5R8QTA5qvMcgeVXePwKXUhCiQL6RulSfrAj60+YFVq+zrcyFL2GoteSRbUwL9BEb4sW3JZ34HMK7nQlcRmAMVMiq9jgaEkHOskEG+S8GdkjU6+VWRq4oAigqTTKhQ3BTIAuRUKw++EilhjxMERR1I7SxqppTVPwTjJfUUlKEnIFgJVm1UpOoGVQ8OoPO1KYHjxdcdSkwlJ8BmcyQpSCY2OZJ9FJO9K8i2KrDLfbg2UIrBRWtYPjSlrCSYJCzqb5FhMjmLmRtUuH9o1uuFlSAkDvfFN1926W/Ba8QCrcZ09SJrNFrYpLp8kOV+fiNjyUVtNarwjtApb5ayCJeGpH+E53YIJssm8x8O+s1bYLjgXi1YfKAAkwrNcrSlClpy7WcEHfIvlSPJFh7M148WXYqJNUae0ROJGHLRu+poLmUkJYLxPRXwjKY+KRvDS8a59KDMJyFsuzeYCgiI01MzyqbA4tc/McWKgqqjEcdKX1Nd3MPtM5ptDjQcJPIiYjlTWGxpW+81AAbS0oGde8CyZG0ZfnS6Rt0MKFQKaMqguGhQbIhsb0yyUi41pSvAE1Oa9hQd/iAQCogwOSSo3sLJBJ9BVPjOOo0PeE7Q05F+uWBrvFOuW6VVv4BpRJLTZJ1JQkzrqYvqfc1CMY2U0+iCeKJX4QF7/E2tIt1KYr3eVN5ju02CR/pED1gaVXS5yNFwi3sUi5UdQqIF6xPKpAmvQ0nmgnAKERRlUNQqqOBKoaxRiKGaNnUUKMWHGu9yqjxEJHiMJJFgNSY061Rt8TCnG0LacbLoUUZ8v1RJCgFEpMcxWyfywowpZSvxZVgLAiM0wYnaee1azw7s+6yts52gEJKVZGMinLQCtZWSTIn3rK5tcmqMYuy6ZTlmABOttT1pLHPhpC3FDwoSVEAbASYFP9yTVVj+BvOF1IfhDqQkpUjPkEEHuzmATPUG9c8wYwTe4Vp5PdB4jKnJ3h6ApzEe33UXs/j28S33iEFMKIIUACCQDNuYVr1omL4R3jH0cKKUwlExJypi3mQImn+FcB7lbiwsqDgTIIAukQD4QBpaI2qEszKaYKLbe4ph+JM5nRHiZJlMCTJAzJ5gzetlQ2mAQkc9OYv63qlxvZtLiXATC1KK0LSIKDHncWE8/OKumgYANyAL0uGUtf6hM2hpaH8/2/2LYx/IUw2pZUTGUCAYMqUowBa00hiOMMIaXiHf6YbJQoqAJBBnICmc0zYCaj2pxjDCEvYhxCEozQlQzZyRYJRIzK8vlXH+0XGl4taVnMhtM922YhJkkrygRJBA3jnVnKWrfgp03S97j6s27E8ccXjUOLypZbVm7rcJgJ71y0FYChofCLDcndOIYzuimGluKWY8AFoEytZICRyk1y/H41IUolBJWnIrxWAMAwImTHOtz7NqGMYaK1IUpjM2tK094FGAEKIkfVv6ms8MsmrZq6jpNCTapLn7fD4ltwziycQlZSlSSham1pVFlJiYKSQRcXBqpwfaZt3uIQsd+p1CZixamSq+hi0Ve4HhpbSpJUkgqJSEoCAgGPCANtfeqhXZFKHMOppaghpa1FJWfrgzl5SrXmCadZvaMujHb3+X2LdKazmIpkIjWk8S6RU5ZBIqxd0q5TQkKB1n9+dZU8oXETQ04mAc0T5Um5ZEMRiSARlEHU60h9L/ANNexuImkc1PGO25zdHUjWAuhzXiqvTR5oUGoqqANSmiceNDUiiV5SudK3RwMJ50pjG0zTC3RBy3ND7q19ayZckeC0U0LNNzTTbVCZYUKaQmKhY8mR7kUWpivFNP26JWRSqqjtR2hawLJddM7IQNVq+yn8TsPm7xPHow7anXDCRyEkk6JSBdSibACuL/AMSEYpbqH8WgoQ4n+i3ObuwDdKzp3hspUfaAvFqY21yXwYllmolJj+KvcQxPevm2gSPhQmbJSPQydTFZ4kkBQnQAfjNNYDCJSDlFlQfK2nzNJ8SV47mBF/SpuevJsfTQxrFh0oZ/mKVfEDBTOl+ttdjVx/DHjITjCjN4XBlPKdU/jfr1rRcdjJhKDbpvReEsLKklla0LEFSosmLiOZmLVXsqMW+DJlzPK+2ld7f8+p9JqmppPWte7KcdOIbKXCO9RGaLZhFlgbb1ed5WZu+DxsmOWOTjJboy5SOJb5U2V0u8q0io0wxdFNi/DpSTijVs5hpMmhrYSBVIvYqUy0mh5TVm4kbULuhVkK6N8isGvIbM61mK2qVnn0eBrE16sZqNnBUmovN5hFRCqKDSSpqgrbcghkCpZKnXoqPbiG2Qy1nLU8tSy0yxoDkDilOJ8RQwjO5OoCUgSpajolCdyalxbiKMOgKUCVKOVCE3U4o6JSOfXQXmKT4bwtZX9IxMKejwpF0sJP1Uc1c16naBXONbIK9sFgMEtxQxGKAzj/Da1SyD1+s4RqrbQcz7tRwVvGMKZctN0KGqFAWUPeCNwSKuFJoSzU29I8ZO7R8/cSGJYdODWA26AZWbgpGi2/tAgelxqKr+KcGWEZu9UsjZVvMyTXb+1nZtnHN5HPCtN23E/Eg9OYO4+43rjfHeEP4Z3uscVFv/AKa0/AsjSSLzGxvQi97ht7Vbs9nF1Mc0dOT+rhb0vz7mtsIgmdutbLwZXhM86rsVhkpEoAg7i/oTUcPilIECNd+VUy/zI7G7po9l0/2NkRjltKDjailSd+nI8xW+dmu1rWIhtyEPctl/9h59K5hiEuoALra0BQ1IMGdIOhquefjQ3Gh5eVZ44tqG6vHizRt8+z6EUQNTal1EbXrU+xPaFb7IS6ZWLBf2o59fvrZELqai7PDnieN0wr0DQ0ksk0wpRoRTVYwEbFygV7uutKYjHwfDp1FB/mn+g+/6VZIk5HSM4qCyKDBFYzVRSM9E1GoE1IKBrC1AXoSkFIglR3oqXKXCyqKZQRUe4M0GQqpTQc1Z72u7yXIukYBqu45xpGGSPCXHVnK00m6nFchyA1JNgJrWf4gdsTgmsrV3liUkplKQDdSuusCuAcV44+853rjzhWNFZiIkmySDIE1owN5N1wJJaeT6g4FwdaVHEYpQXiViLXSyn/LanbmrVRFXak1yL+EP8R3MQtOCxapXlPduqsVRcIVzOWb7xvXUsbjRom9HqM+PBC5c+vL/AD2KlKUjD7iRv85pNx0UutwmguE14veyZXdUbYYaCOPjnSeLQ08gtupStCtUqEg/rWe4J5e9BXkSpKFLSFq+FOYSfIamrRj7ZbSkaNx7sH3YKsISRc90ozrslR/GtEVhiCUmUqGxFweRrvP0SqTtJ2TbxKSpPhdA8KufRXMfdWmM2uTb0/VpVHJwQ7HY4P4RCVAKKJQsG9xpbyNKcb7C4d+S2O5XzT8J80flFV/8P8zGIxDDgKVZQpQ1hQVlkeYPyFbqcanrSxjT2I9RJ48r0s5/gsE5w8IDseFZVmGhE3j0roeSqbtWlD2GcRkU4opOQJ1zaJg7XN+k1csKASkSLAD5U0MTTb9iZ+oWSEX5VoyEAUjxLGBCSAfEdqcU8K1Z0lZJPnVlEwymKOroHeVN8ig5hzqlGdyOqrxwj8KAMeNxFKFs1kJrM5M0qKCv4zZM/dQA6amGxRENDlU3JlEkgrb1qMjEilVNzUg3UWpMNRGVPVW8Q4plhCPG6qyUA+6ln6qRrPlFyKR7Q8W7sdy0M76kkhI0QkauOH6qR7mqzsZhypa3itStUzEJJkmwNzHPeeVqHafkaMFVkeL9jQ8pDryi8sLSpxJsFDMMyQNkhMgJ3Pma17j/AANh0dw1hSi0qcCA3l11JvPhMyK3ztBxhOFQFGConwpmJ5x+9a5d2g7SvOkrBcznMgISlMRnXlC5E2hAn2vc3xrJVJ8BSS3a2ZpWFSrDOtvNElTbxEgboIy685P7iulYz+JbzycrDAaJBGZaisgzEpSkRvvz8451wpwWQsEeLMo9TvRcO5/WXFhCp2uSqCORi08jzrZlxxySuatryRhFRVrybEvjmKcUG/pLhBsQFxHiicw1tHz0oa+GvLdDKVOOHKdJME5cp5XzD2q67AcKbxa1OvK+GByKthM+SrjpXT8Ph22xCAEjpb3O9Qf6XSRp7qrg0zgvYYJGZ4yrYT/tq0w3Z8tvBScgSCDm8WY8xEW5a1d4jEiPB4jzkRQ0Y5R1AT8/lU+1ZN5GNk0jjMXYhPqaHj8RIgqtvA1NVrjo02q8cXlkXOhPBpTmW+DmU7F/9KR4R99OJdJoWCaDaQhAhImByBJMeQmB0Ap1tKQJirRxpIXLl1StCzz2USfSiYbEA62qtxLneKnbbpQ33Moyj9/rTUZ3kG+I8Q2SbdNz+AqsU+PKaWdc60Fa6Okm5WFdJNLTXs37FY77qfauoWzqjziU6n0pNeMv4U+/5U0rDik33UJN1D76zqKPQTBuPuHePK1RbUsaKPvWFY1smAsD0/Ws980m5WT7fcK6vgNYVKVE3UfekeJ8XcSsMYeFvkTe6Wk/5jnIchqTSHGu0hENYcf1FC61DwtjTMY1PJO9B4RjkMJISMxJzLWq6lqOqlH8NBtXdt+g6kX3B+H9wDBzLWczrirqcPXkBsnQVS9nuNoZbcStUQokAwM02gTvVg1x9P1h7VzPjoVmU0kEq7y0AmyTIMDmI96nKD1IeLTTGu2faJXen+oFq0hFwmCQAJGoknzPvS8QQ+hILrak57woZcwmekSQkfnFbf2c4GlCg86nM8Bb60GdTtmGg5e0XvEsEvEoyrbUoDQkaeXPyqqSjVICyePByPFpsIypUJkhWt9hsNLefKqxvElKlGfEZJ/L2rbuO8CaZKgSpKgSVJygeEpJQRI3yHf6p3tWq8Q4S8yQVAG2Y5TMf90xp7Vox1JEsra3N47A4gla0A/UF9ASkgz7Lj0rd0d4Z5c/+a452V48rCvtry+GTnGpUDZUdbz5iu1P8RT3aT9q4jf9DSSi0xVLa2L/AEiN8x2ApptRKfEYnaq5OIvKQAYuaz9I2madQJuYy+7P50NtM1BtYNOMNU9E3Imy1SuPxM+BOg1POmsW9kED4j8qqjYTSsnKRFasl6r1uG5mivOyf1pN1z9KCEbPHnUHJ5mvd6dr0HYkm/70ogPIT5RTHdo+0P7j+VIyZjUch71S/S8R/kuew/20Gjjd18ecPxLPlSWJ4gVbmqYOXn76kl69zatWiPgdTY6jGGd5o6HHTYTSjToF6fZxsUsvgUUh3DcFWsSpUVYM8CSNVH0qm+mqCgU5r7be9W2ExytSfSs81P2WjKPouMJgGki6Pe5pxLiE/CgeZAvVGvHqNEaUSfEY9Y/Wszxt8llJF42snQgdBb3qt4rxRLZhKkmNSo/cDUOJ49LCMosTdRv6JjeOXWuf8a4yROUAKJgSAtxROkDRA+dcoCubb2Ge0vFO/IaSZKoKiNAkGY5XIiPOtUxeLlSlg2m3kn86Nini2hQmXFn+orrySegtVN3to1n9+daIRJ5JeETYwiXD4TkMpsdDf6vW2n3V1fBupWw0pPwhtEf2ia5V9HeUBlbVJISDlIAm0D3v0muk4NvumkNC4QkJ84Fz7zTvkS9hku+leSmhIvTTKKNiMPh26sO8ypJO1Cw7dL494WE2+80tit0LrdKjJNzvSmIegUR9cA89/wAqr8Q6OdDkmYcdtSzjmpjaawVlUV5a52tRoBlDlp50Euac4pTEcTCLG8eW+ttqqnccc2dOu/8AxN64Jdl4zAJ/f3UOOnzFLLxyAmQfFy/C/wC7Vn6Wj7Z9qDYCaWyRU04ZRvf1p1sxYnymvF0SL+daNTGpEWGB9a/yp5mBZPsaVU3OlSRMgGg3Y6LAOTRmnR60k0hU6a0HGuPtJlAS4BsbqHqLke8e0SnsUiXTGKIP5WornHAw6AvLlWmUkpBKFpJMSdlJgjqk1qDXaGQFoUmwOdBElJna2nL50nw7CLxDpU6T3XxDW8n6vLQ/Oovd7I0RqCeose0HGioy2u6tNSo3iE9fIVHs92fUSXsRZRBypJuLamd/3prsWDaaQPAgJ2kC/qdaM4RuYp0qI6zmnHzmcVPO3TlVh2N4SFuBcjKmSrzF4I5Eb9KW46IcP70t+FW3ZVSEqKjKbZdedpPPXSmeyAbSuZgXr30ZR1EVNOPaQ3nTKoAkxcTH5/Kq17tQ2kElC5G2k8r6Rrf86GpA0tlsxhNyas8O0AKjhmgpIUbSAYJ0kTeKKtwJ1FokmR7Ab0bFYrxB+PCOUk/hVS45vRsZicxJApJ3TzoEmLYl8mlZJNNrZgyopggEDQ9d/wABQspza2gQIues01naStdxq0ryJVAgA+BKieYukxqNI869jcRkT1PyEaxzplWHhSilI2JjpN/mfeqleHzKMgkmcutuZtcxyoBqypdkmTuTePfSpoTGu3KthwHZh1USkJCjEqOv/wBdflVsx2KSky65pqAIHM+Lffag8kUUWOT8GpMISRbUXlQn3t8r0TuXuv8AaK3MYhnD+FkC0xbMfPMq4FtBS/8ANHOR9jUdXwHWKiqQQqDMGwMaEVgoAHUfv5VWYZ+282j0Iq0TjkqBTlv+4ra3RAL3pGog8/lRwrNca0pkk7x096Ow8EaJgc9x1pX7QR9nNGkelMKMid+etJqdVAOvlMGvNpUEykEibg0tB1FTxngQWsONqyLm9rKmx00OvnNW2HZIACRZIAHkK8HhqayVGCSYjYX+VGjnIM26A602q3eZ4UToUgED1E+1WKsNzPztVSvENOQDlVF4IkeZBH4VYMLAbJQkBKTBIAAGm3rSMazVe1fDihwLAlJ1MWE7HlVMXTASmSegk+QH71roXezbUVjvdkD2FcFSNa4ZhMQsZcpQg28XhsehvND4lgD9KSyTKJaTykeD4hsdB6CtrSSDJ1g9YncDTTnNVmL4atWJZUnS3eAbluDNuZyiOm9JIaMjb0rSkwpSRaYBExSr+LEz4SLRAuNZknXbStf4RwLFuOqU9lbSUqTmC/EVFQGllJtmrYXOChts/E6pKTAkAqyjwjMrnpSuSRyg3wIvuyREWvsJ6daU78zEHMCNPX8qtEIabxAHeXKBDZgiSTcK+1bnWcKQXXfhJSoAqCpI3AUk2ER57xel7nwG7PxKd9lSkkhOhgwJ9J3t7UNPD1m5MDbNYx5axFbG4oBtSlqUkQqRaEbSJEqNrHrVDjeM4bCpCrurWhOWd8o1M6azveuU5PgLxRXIzhuDqUkWJmDOaAD5+tOLaYYOiUxc3geQJ++tVxPGy9hc7gKG0kAJGYhStRB39TzE3FUGJxC3W/ii5CSSVSkc6Ohy5YU4x4N3d7StriAlUKJBJgTp4edLvYxS/EVWAMgcgLz5QedadgJgpQ6AtIkzbXYVY4THJ7pzOXA4olCO7SVaEmQQCb5deRjrXdr0drLgYhvTOJ1gKAttaRagfS2PtD51z/GZ21FKiJtYHMQI8IPkI15Ur9NPX5U/8NfkXvJeC9S5REYxQ3ilu8tr7VAuVuoy2WzHEjv709hz3lhE+eta2nEHz5TTTHECBfSpODW6AbRhnlC22x89ppzOU3FxvGvrWuYfiKouRB218hRGuJ5VzebSDodKi274Ci5W6FHw68v0oLmINhy161LuO8GZFj9/750NUiy0zHoaaM0+DqZLMTpPpR2G5+IwD7/pvQwCZy338vSo+c0W7CkWbeUD6xI3H3a68r1IIKR4RaIAsOWsE/I0ih2LCoDiQKiixOUKkGbEkWI6j5ip0xh8YgASSbQLAkkkwEgC5UTYDeac4H9KZU+p6UpcjK2SFkQlN5Fthp+Nx4Pi6W8MSlvvHEKJSMokE+HOIlShB1H2VDam+HcaeW3LjbaVToTlJt4SATIk8+dTldbFYJIoce4WS86lpZJcDgcWkHu7ycuZJuSTfqOVXmF7WNBtPeLhciQUkm5GmUZdDI+dH/mBWBLCk2uJQrXWSDpWt8T4Ph1ScvdknMSkx520FLV8lNZbOtsO4hOIQCVNi4B8MQoJsRAIzG45dKw/iUtklpCEZlZnAAPHaJJsc2+bpvodZwmKbQ4pY7w+HKnqJmYEannQeKceKDMW66n05U2h2DWX2K4oSCNtI50gw0hSkoKEqSg6ETlJSVfWGnQWrXm+MFwTaQRYSLb7zN/lVpw85Muczm75ZjeICfkPamUKFcrJ8XxGbDvpAEKQhaR/pQAbctFWrSi+ptJUg2kAjzm8emtbRxPiDbJVnNwCkJ1MKSTHus+1aQoykq9qvjWxObG2sWZCxrYa8v0rGJxcOLyncRy0Fum9JMJUT4QSelNnBxdYzEnQH71fgKekJbIMYlXwfbIB6jYeX51YfQmf89Ht/wDqlFNERmhCTyFyPvNS7lP/AMpP9q/yrmd8xjvYN/WiKcSRIEf8UiXJ/wCKKlyxEnSnYgwlGk2HPWpBAmCrpb76Wa877UY4dQItSv5nDKWykhSiImwm/tVpw15okSkzOknfzmqZGGO5tTGFWEmwIqc42uRkbUMcEkISkpSAZPW3yqKccDvMnlpVGFLV+FFDgTqaisKSHLxOFTJcbkqIEkchsPc/OjKaUtafsx4uZOwn51rieKZDKdedMO8dWQCkROvI9eldpmmdsXmMZyIOTKToAbSZgA1VtYtRSVrbDahaLGYiPTUUbh61uJJTMbzcfnQeLYZaEX1kT87z6UdSurOSLV3te0oDMyoEC2XKQNiADECDFUa+0ShKGkDKbJzSTGgFlelUri6EyqVDzB9jemUBmzaU94IymCBJUFQSTEqI1KZkDYBIqtxmOeIgupvawufO00m6vM4lZVKlWynWNjO330xisM2BOU+Zt8xejQtiLXeIVIVzBuRO1DcTm+M25TRRhzeBFp9qTWvr+NOAOgtp+EX/AFp1WIKkEtqKSfiE76Zh5iB6DlVYqFDXTpQSojQ35UGrCmCxeDkz3mYm51PzOtCWlwpBIPhkCwtztWMUFATJkcqzhsYQBNyDrynQ36029C7B2cQEgCJMX2/5p0u/0gbQSQSLEHkSfw50AsSnPBg7i8/rS6XEhMFP59L0ORlsRzZjdJIAge5vWJTyT7/rWEOqAkaGx9hrS/d9aahbGAMw1FN4bALVfb97UZWKbTYC9DTxPkIpm34FpBkYUAxBJ629udNKa2jTX8KGw8VAC0nePvoh8U5Bcajl5VPV7HSJttpi9ZL6Ei3ypVLc3UfTlQ0IE2M0QDH0pRPKpFtSqClP751bsYQwKDChRnAdTVxg8GlKYUOonas4dkJIzGJi/LramHWs0HvECbaK9JtU3uNVAHHi38NprCsf4YUkKnSfSaFiUJH10mBO+0W0119jQ1MJkw83/wCw9fh0o6EwWUmPbyqI21HlSzLsSd4geu/y+dPYloLUSXUDxBN80RlCs2kwCYNtekUuMEm/9Zoabqv8JJHh0GY/2q6S6AxVBlWpB5jbrRXGmxooq6k8ulTS2NA62nwlWbxazATMTmi/lUUYcSJfa1ImV+/waUwpX/SVT8REcjpUlYgHzr3EMLkIIUlYVfwzbzkC9J54rqOHmFZhy9aziLilsNiMp0pmaDQyFyoRHMXpIWNWoagXEgmxEb7Gk8ayU3ykeYPyopgaHcE8YlJiRf8AKIorjaVJJOXNeYER+lVmFxBbOlj609307bnTkfela3CnsCCPD6n7hUu8/cVlSCkkHY+fT8qnI5D2o2CibDCAPik9P3ep5kJ+rNVbeJy1lWJUo6U7R1otlYtRsLADUURjEBOhubzVfhmTMyasmUJAFK4oKMq8cTby0NHYwQ53PKwtRU4QkSmjYLAq3pL9Maiw4BwU4h1KBAJ0JBi14MU/i8CsPqw6RncCsgy6ExNun5UzwDFZH0EgWBv6EVc4TjWG+klYYPepX4nSQBOXX4p0PLesGbqJ48jVWqsvDGpRs1XH8MdbxBYgrcTFkgm5SFGBvE/Klzg3SpaC2sLSkqIgyABJt6zW34fHpTjcZi4kgBDQ5qU2iwnfQeppn+YA49p4WK2yFjkoDf0PyoLrKW/r96v+x0sDvY0JGDU4Fd0ha8o8RSJgRqY0FjSGKwjqcstqAXZBj4uWXnXTcI7hgrEP4cgd4haFo0hSZJ8P1d/Ox6nWcchbuG4YpPwoCJPKyCSegCdaZdbcqrb4/Jv/AAL2HRqeG4Q6t0slCkqIAuLpJIIJGuUxBPWmMd2bdYbzLEkpFtkk2N9zyA89q6LwXENrxLplJXYJJAOgAuQc0WnT3qy46CltanCggC2U30nXKI+dZJf+jkU1t62NkekhVN/U4pi+C4hLffKZWGyAc8eHxEASrTUgedLL4PiA135Zc7rXvMpy65ZnztXWOF8Sad4f9DXZLiXEAzMXJBBOpFiOoqHa7HoVwxWEYTZHcNJE7hTeUHzkX61rj11yUWt7r6XRjl07VtHKkcNxCWe/7pZY+3l8HxZddjmt501xLsw6jDNYsAqacFyB8BCiIX0tr91p60oNjCHh3/SGH7srt/iESJ6z4tKB2bxSGeGMJfgJJLSgrSVLUIPSbetCfXOrivPHtNbHLB7OUY3sy63hEYsrQW1EAATmkmII6EGqpGKEXron8QFsowf0dkQlLgIHKVExPK9cwWa1dLleWDk/br5E80FCVL0O/TrQLzragrcKknxGBoDQAiaIwSJTtrWmiVmGlgWUJB+XWiIWUHYjb/mhO600xiQEZFIJEyCDEW5ReuZwdziIUSSCDAkazAA1pf6b0qTC0X/pmfqkmw87XqXeHkn+0f7qHAeQbeEmmm8Jl1qaHABYVPxHaqBSQdlPSKfDYtNKMYVVutW7bFhSNDIJw/DGZB9Kue8F5EmkmEqSICT86m3h1m536K/KpuNhsjjUKCcyLkRAEzc3pPDFwBRXKVKMwNoAGukwKfSgxZXyV+VDfQkaknp4h96Df1qfbt20HW0qQkMa4qxUQlNyRZSja5I0A9zG24v5g+nR02uDYnfcgnejOtIAJKVC1/EeWnwRUGMMmL5j1BUn1gt9R7UezDil9jnlnd2U7XEFoWVpV4jM8jMzI9TU8LxR9CMiHVBF4FiBOsSLamnXOHtkmELuLHMYJ1t/Tk7bVFzBNpCrEEaSpXL/AMYm8VRwg+UhFKS4Yrw/iC2SpYWrOQQPW0k9ATHpT+P7QPONpClmDmJg6KBgCdRAA/uoLPDxHizTfTP56d3b3rJ4e2JkLJucoJB87t0ksONvU1uMs00qTK1rHuJKSSSEKzcp1BvG4JHrU2eNOJUolRKSory2uqbX1ABg+lOuYZvQhQTIFyq14j/D1kfPzpZPDkyQpKiNQQVi1rH+nrzMDURvR7cH4F7k15FXO0OIzE96oSZgaaAaHoBQ8Z2gecbLa3JQTmjKBec023m9MnBM2gK1ImVGDy/w+ory+GtaBKweZUvly7nypu1D0vsDuS9iOL4mXWcqleMEa/WA386rUQREXpn+XrkiRI6L0mxgJsKmzw5QPxCDb4Xef/jpoxUeASk5ciLaosaO4kAyDPlR3+GOiYQVdQD8qVUypsiUlJ6iiAO4AUiBJ6gj0oWU0203mGbNHz/GjIwQJur2saTUNQvg8MTaYO0b0x/LTyPyovcoSdD53v62p36WPtD/ANv91K5PwMkvJLhXDQsK8UEZYGUqmZ5X2iwOvKSLbCcHRnUFOpTlUUgqChmAmFAAGxjfmKRwiBa1WFXbAkNu4FATIebJ+yAufK6YpZxoAfECeQ5RzNDVUVmlGAlUUdggiZA85/Kk8TRUaCjQCTyxJlaR1v8AlVW4uTOdIje9/K1ExlLKSIo6RWwhdXIhwGeU26m3WilxaSkd4N7ibf8ArvXmEACwqKkg60rRwdKVkSXUqi415HTw/uawha7f1AByvIsTcR5j1FeyiBQU6+tJQWhmF3KVgkwDEzpqbaR91QezH4nU/P8A284rOFHxeX40u9oPKhuACHFEXdAJ2Mz5WTHOhFRmO8Tfe8HaPhrD+1LmnFGnnFJ/6qTJFgTbabp0pXEozfE6hWsfEfT4agull11HHkYUETnQOhzSPOEkUB9kJ0UlWuk2jnIFeVUF0UcGREDTrVmwEFsJMEiYF0631mD7VV4VMqAOlqae/D86D9BXsd4RgM6nBnS2EpKvHflAEEXM9fI6UxgsHmKiXkpypJFlGSmPCJA16TppVZw905yJtkI9tK2rvChCVpMKyJPqRe2lJJ0NFWVrzKEtBwODOVwWxIOUpBCrwYPl68183/d7mtxYwiHGwtaQVAIgxe6b/fS38ta+yf7lfnUu4vRTQz//2Q==",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.4/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "8.4",
    imdbVotes: "17,941",
    imdbID: "tt15433956",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    Trailer: "https://www.imdb.com/video/vi202229529/?ref_=tt_vi_i_1",
  },
  {
    Title: "Fighter",
    Year: "2024",
    Rated: "N/A",
    Released: "25 Jan 2024",
    Runtime: "166 min",
    Genre: "Action, Adventure, Thriller",
    Director: "Siddharth Anand",
    Writer: "Siddharth Anand, Ramon Chibb, Abbas Dalal",
    Actors: "Hrithik Roshan, Deepika Padukone, Anil Kapoor",
    Plot: "Top IAF aviators come together in the face of imminent danger, to form Air Dragons. FIGHTER unfolds their camaraderie, brotherhood and battles, internal and external.",
    Language: "Hindi, English",
    Country: "India",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjkwN2Q5Y2QtMmE2MC00NzlkLTg2NzQtYjVjYjVmNjE2ZTNiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.0/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "7.0",
    imdbVotes: "36,608",
    imdbID: "tt13818368",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "$1,000,000",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    Trailer: "https://www.imdb.com/video/vi1886045977/?ref_=tt_vi_i_1",
  },
  {
    Title: "The Gentlemen",
    Year: "2019",
    Rated: "R",
    Released: "24 Jan 2020",
    Runtime: "113 min",
    Genre: "Action, Crime",
    Director: "Guy Ritchie",
    Writer: "Guy Ritchie, Ivan Atkinson, Marn Davies",
    Actors: "Matthew McConaughey, Charlie Hunnam, Michelle Dockery",
    Plot: "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
    Language: "English, Russian, Spanish, Chinese",
    Country: "United States, United Kingdom",
    Awards: "1 win & 4 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.8/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "75%",
      },
      {
        Source: "Metacritic",
        Value: "51/100",
      },
    ],
    Metascore: "51",
    imdbRating: "7.8",
    imdbVotes: "386,738",
    imdbID: "tt8367814",
    Type: "movie",
    DVD: "24 Mar 2020",
    BoxOffice: "$36,471,795",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    Trailer: "https://www.imdb.com/video/vi4290364953/?ref_=tt_vi_i_2",
  },
  {
    Title: "Hridayam",
    Year: "2022",
    Rated: "N/A",
    Released: "21 Jan 2022",
    Runtime: "172 min",
    Genre: "Drama, Musical, Romance",
    Director: "Vineeth Sreenivasan",
    Writer: "Vineeth Sreenivasan",
    Actors: "Pranav Mohanlal, Kalyani Priyadarshan, Darshana Rajendran",
    Plot: "The emotional journey of Arun, his carefree bachelor days in engineering college, and how he matures through various phases of life.",
    Language: "Malayalam",
    Country: "India",
    Awards: "2 wins",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZTgxY2MxZGItY2Q4Ny00NTRlLTg2MWEtYTY3Y2ZiMzAxMGU4XkEyXkFqcGdeQXVyNTA2MzMwMjA@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.1/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "8.1",
    imdbVotes: "15,075",
    imdbID: "tt11375428",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    Trailer: "https://www.imdb.com/video/vi2788147993/?ref_=tt_vi_i_1",
  },
  {
    Title: "O Kadhal Kanmani",
    Year: "2015",
    Rated: "Unrated",
    Released: "17 Apr 2015",
    Runtime: "139 min",
    Genre: "Drama, Musical, Romance",
    Director: "Mani Ratnam",
    Writer: "Mani Ratnam",
    Actors: "Dulquer Salmaan, Nithya Menen, Prakash Raj",
    Plot: "Two young lovers are compatible in every way - they even agree that marriage is futile. However, their emotions are not so easily managed, especially when they witness the unconditional love of the older couple with whom they live.",
    Language: "Tamil, Telugu, Malayalam",
    Country: "India",
    Awards: "3 wins & 13 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWY4NGM5N2MtODk2OC00Y2VjLWI0YWItMTc4MmIyMWY2OTJiXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.4/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "7.4",
    imdbVotes: "6,673",
    imdbID: "tt4271820",
    Type: "movie",
    DVD: "30 Jan 2017",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    Trailer: "https://www.imdb.com/video/vi814069785/?ref_=tt_vi_i_1",
  },

  {
    Title: "Yuva",
    Year: "2024",
    Rated: "N/A",
    Released: "29 Mar 2024",
    Runtime: "N/A",
    Genre: "Action, Romance",
    Director: "Santhosh Ananddram",
    Writer: "Santhosh Ananddram",
    Actors: "Sapthami Gowda, Achyuth Kumar, Yuva Rajkumar",
    Plot: "",
    Language: "Kannada",
    Country: "India",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDdmMzhhOTUtZWNkYS00NmY3LWI3MTItN2FlMTYzMzFkZDE3XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_SX300.jpg",
    Ratings: [],
    Metascore: "N/A",
    imdbRating: "6.9",
    imdbVotes: "211",
    imdbID: "tt24225188",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    Trailer: "https://www.imdb.com/video/vi478201369/?ref_=tt_vi_i_1",
  },
  {
    Title: "Kaithi",
    Year: "2019",
    Rated: "Not Rated",
    Released: "24 Oct 2019",
    Runtime: "145 min",
    Genre: "Action, Crime, Thriller",
    Director: "Lokesh Kanagaraj",
    Writer: "Lokesh Kanagaraj, Pon Parthiban, Sanjeev Tiwari",
    Actors: "Karthi, Narain, Arjun Das",
    Plot: "Dilli, an ex-convict, endeavours to meet his daughter for the first time after leaving prison. However, his attempts are interrupted due to a drug raid planned by Inspector Bejoy.",
    Language: "Tamil",
    Country: "India",
    Awards: "15 wins & 8 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZTVlNGY2YTEtNTlmYy00NzY0LWE1NWUtOGJiNTgxZGM4ZmMzXkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.4/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "100%",
      },
    ],
    Metascore: "N/A",
    imdbRating: "8.4",
    imdbVotes: "41,998",
    imdbID: "tt9900782",
    Type: "movie",
    DVD: "10 Mar 2020",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    Trailer: "https://www.imdb.com/video/vi1895350041/?ref_=tt_vi_i_1",
  },
  {
    Title: "Shaitaan",
    Year: "2024",
    Rated: "N/A",
    Released: "08 Mar 2024",
    Runtime: "132 min",
    Genre: "Horror, Thriller",
    Director: "Vikas Bahl",
    Writer: "Aamil Keeyan Khan, Krishnadev Yagnik",
    Actors: "Janki Bodiwala, Ajay Devgn, Jyotika",
    Plot: "A timeless tale of battle between good and evil with a family embodying the forces of righteousness while a man symbolizes malevolence.",
    Language: "Hindi",
    Country: "India",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjczYjQ3ZTMtMDAwZi00Y2I2LWE2MTMtOGUyM2YyMThmYTFiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.5/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "7.5",
    imdbVotes: "24,095",
    imdbID: "tt27744786",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    Trailer: "https://www.imdb.com/video/vi2864367129/?ref_=tt_vi_i_1",
  },
  {
    Title: "The Jengaburu Curse",
    Year: "2023–",
    Rated: "N/A",
    Released: "09 Aug 2023",
    Runtime: "N/A",
    Genre: "Crime, Mystery, Thriller",
    Director: "N/A",
    Writer: "N/A",
    Actors: "Sukumar Tudu, Nassar, Vikram Pratap",
    Plot: "A London-based analyst returns to Odisha in search of her missing father. Her quest leads to a conspiracy involving bauxite mining, secretly backed by an international nexus, leading to unexplained deaths and a displaced community.",
    Language: "Hindi",
    Country: "India",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDU0Y2NlMDQtZjkyYS00NjM2LTlhYzYtZGEwOTJhNDgyMWUyXkEyXkFqcGdeQXVyOTIxMzQ0NzU@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.4/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "8.4",
    imdbVotes: "17,005",
    imdbID: "tt27327718",
    Type: "series",
    totalSeasons: "",
    Response: "True",
    Trailer: "https://www.imdb.com/video/vi3984639769/?ref_=tt_vi_i_1",
  },
  {
    Title: "Jai Bhim",
    Year: "2021",
    Rated: "TV-MA",
    Released: "02 Nov 2021",
    Runtime: "164 min",
    Genre: "Crime, Drama, Mystery",
    Director: "T.J. Gnanavel",
    Writer: "T.J. Gnanavel, Rajendra Sapre",
    Actors: "Suriya, Lijo Mol Jose, Manikandan K.",
    Plot: "When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice.",
    Language: "Tamil",
    Country: "India, United States",
    Awards: "10 wins & 20 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzFkM2FhMzQtYjUwZi00N2Y3LWFkZWItMmZmMjQxNGQwZmNhXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.7/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "100%",
      },
    ],
    Metascore: "N/A",
    imdbRating: "8.7",
    imdbVotes: "215,114",
    imdbID: "tt15097216",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    Trailer: "https://www.imdb.com/video/vi713802521/?ref_=tt_vi_i_1",
  },
  {
    Title: "Yodha",
    Year: "2024",
    Rated: "N/A",
    Released: "15 Mar 2024",
    Runtime: "130 min",
    Genre: "Action, Drama, Thriller",
    Director: "Sagar Ambre, Pushkar Ojha",
    Writer: "Sagar Ambre",
    Actors: "Sidharth Malhotra, Raashi Khanna, Disha Patani",
    Plot: "After terrorists hijack a passenger plane, an off-duty soldier aboard devises a strategy to defeat the hijackers and ensure the passengers' survival when the engine fails.",
    Language: "Hindi",
    Country: "India",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDdlODdmODItZDAxNi00MjExLWFjOGItMGY3MzFjYzU4NDM3XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "6.6/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "6.6",
    imdbVotes: "3,005",
    imdbID: "tt16139258",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    Trailer: "https://www.imdb.com/video/vi128173593/?ref_=tt_vi_i_1",
  },
];

export interface Cine {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
  Trailer: string;
}

export const Cinemas: Cine[] = [
  {
    Title: "The Gentlemen",
    Year: "2019",
    Rated: "R",
    Released: "24 Jan 2020",
    Runtime: "113 min",
    Genre: "Action, Crime",
    Director: "Guy Ritchie",
    Writer: "Guy Ritchie, Ivan Atkinson, Marn Davies",
    Actors: "Matthew McConaughey, Charlie Hunnam, Michelle Dockery",
    Plot: "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
    Language: "English, Russian, Spanish, Chinese",
    Country: "United States, United Kingdom",
    Awards: "1 win & 4 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.8/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "75%",
      },
      {
        Source: "Metacritic",
        Value: "51/100",
      },
    ],
    Metascore: "51",
    imdbRating: "7.8",
    imdbVotes: "386k",
    imdbID: "tt8367814",
    Type: "movie",
    DVD: "24 Mar 2020",
    BoxOffice: "$36,471,795",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    Trailer: "https://www.imdb.com/video/vi4290364953/?ref_=tt_vi_i_2",
  },
  {
    Title: "Oppenheimer",
    Year: "2023",
    Rated: "R",
    Released: "21 Jul 2023",
    Runtime: "180 min",
    Genre: "Biography, Drama, History",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan, Kai Bird, Martin Sherwin",
    Actors: "Cillian Murphy, Emily Blunt, Matt Damon",
    Plot: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    Language: "English, German, Italian",
    Country: "United States, United Kingdom",
    Awards: "Nominated for 13 Oscars. 326 wins & 362 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.4/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "93%",
      },
      {
        Source: "Metacritic",
        Value: "88/100",
      },
    ],
    Metascore: "88",
    imdbRating: "8.4",
    imdbVotes: "665k",
    imdbID: "tt15398776",
    Type: "movie",
    DVD: "21 Nov 2023",
    BoxOffice: "$329,153,395",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    Trailer: "https://www.imdb.com/video/vi2053751833/?ref_=tt_vi_i_1",
  },
  {
    Title: "Anatomy of a Fall",
    Year: "2023",
    Rated: "R",
    Released: "22 Mar 2024",
    Runtime: "151 min",
    Genre: "Crime, Drama, Thriller",
    Director: "Justine Triet",
    Writer: "Justine Triet, Arthur Harari",
    Actors: "Sandra Hüller, Swann Arlaud, Milo Machado-Graner",
    Plot: "A woman is suspected of murder after her husband's death; their half-blind son faces a moral dilemma as the main witness.",
    Language: "French, English, German",
    Country: "France",
    Awards: "Nominated for 5 Oscars. 90 wins & 189 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDBiYmRkNjUtYzc4My00NGFiLWE2NWUtMGU1ZDA1NTQ3ZjQwXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.8/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "96%",
      },
      {
        Source: "Metacritic",
        Value: "89/100",
      },
    ],
    Metascore: "89",
    imdbRating: "7.8",
    imdbVotes: "79k",
    imdbID: "tt17009710",
    Type: "movie",
    DVD: "22 Dec 2023",
    BoxOffice: "$4,882,769",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    Trailer: "https://www.imdb.com/video/vi3689989913/?ref_=tt_vi_i_1",
  },
  {
    Title: "Road House",
    Year: "2024",
    Rated: "R",
    Released: "21 Mar 2024",
    Runtime: "114 min",
    Genre: "Action, Thriller",
    Director: "Doug Liman",
    Writer: "Anthony Bagarozzi, Chuck Mondry, R. Lance Hill",
    Actors: "Jake Gyllenhaal, Conor McGregor, Daniela Melchior",
    Plot: "Ex-UFC fighter Dalton (Jake Gyllenhaal) takes a job as a bouncer at a Florida Keys roadhouse, only to discover that this paradise is not all it seems.",
    Language: "English",
    Country: "United States",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTFiNTMxNTQtM2EzOS00NWNhLWFmNzctNjU5ODIzNDIzMzYzXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
    Ratings: [],
    Metascore: "N/A",
    imdbRating: "6.2",
    imdbVotes: "69.5k",
    imdbID: "tt3359350",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    Trailer: "https://www.imdb.com/video/vi1146603289/?ref_=tt_vi_i_1",
  },
  {
    Title: "Bramayugam",
    Year: "2024",
    Rated: "N/A",
    Released: "15 Feb 2024",
    Runtime: "139 min",
    Genre: "Horror, Thriller",
    Director: "Rahul Sadasivan",
    Writer: "T. d Ramakrishnan, Rahul Sadasivan",
    Actors: "Mammootty, Arjun Ashokan, Sidharth Bharathan",
    Plot: "Thevan, a folk singer of the Paanan caste, has a fateful encounter when escaping slavery, leading to discover an ancient tradition altering his destiny.",
    Language: "Malayalam, Kannada, Hindi, Tamil, Telugu",
    Country: "India",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNWExZDRhZTktMGUxOS00ODQyLTk0ZTMtY2VkYWJkZjZlZDUyXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.6/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "8.6",
    imdbVotes: "1k",
    imdbID: "tt27431598",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    Trailer: "https://www.imdb.com/video/vi692897561/?ref_=tt_vi_i_1",
  },

  {
    Title: "Romancham",
    Year: "2023",
    Rated: "N/A",
    Released: "03 Feb 2023",
    Runtime: "130 min",
    Genre: "Comedy, Horror",
    Director: "Jithu Madhavan",
    Writer: "Jithu Madhavan",
    Actors: "Soubin Shahir, Arjun Ashokan, Chemban Vinod Jose",
    Plot: "A game of Ouija board goes hilariously wrong when seven bachelors unexpectedly invite a spirit and try to make the best out of the situation.",
    Language: "Malayalam",
    Country: "India",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOWRkNDBiMTAtMmJmZi00MzlmLWJjMzUtNDg2YmUzMzRlZmVlXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.5/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "7.5",
    imdbVotes: "6.5k",
    imdbID: "tt20249418",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    Trailer: "https://www.imdb.com/video/vi1679082521/?ref_=tt_vi_i_1",
  },
];

export interface Tvseries {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Episodes: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Trailer: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
}

export const Series: Tvseries[] = [
  {
    Title: "Alchemy of Souls",
    Year: "2022–",
    Rated: "TV-14",
    Released: "18 Jun 2022",
    Episodes: "30",
    Genre: "Action, Drama, Fantasy",
    Director: "N/A",
    Writer: "N/A",
    Actors: "Lee Jae-wook, Hwang Min-hyun, Yoo Joon-sang",
    Plot: 'Set in a fictional country called Daeho, it is about the love and growth of young mages as they overcome their twisted fates due to a forbidden magic spell known as the "alchemy of souls", which allows souls to switch bodies.',
    Language: "Korean",
    Country: "South Korea",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMmJhZGFhMmItM2RmMC00NWIxLWE5ZjMtMmIwZmJkNTdjZTg4XkEyXkFqcGdeQXVyOTI5NDk4NDQ@._V1_SX300.jpg",
    Trailer: "https://www.imdb.com/video/vi3889349145/?ref_=tt_vi_i_4",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.8/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "8.8",
    imdbVotes: "17k",
    imdbID: "tt20859920",
    Type: "series",
    totalSeasons: "2",
    Response: "True",
  },
  {
    Title: "Kota Factory",
    Year: "2019–2021",
    Rated: "TV-14",
    Released: "28 Aug 2021",
    Episodes: "11",
    Genre: "Comedy, Drama",
    Director: "N/A",
    Writer: "Saurabh Khanna",
    Actors: "Mayur More, Jitendra Kumar, Ranjan Raj",
    Plot: "Dedicated to Shrimati SL Loney ji, Shri Irodov ji and Maanniya HC Verma ji, 'Kota Factory' is TVF's latest original. India's first 'Black and White' show highlights the problems present day IIT-JEE aspirants face in their day-to-d...",
    Language: "Hindi",
    Country: "India",
    Awards: "9 wins & 15 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGVmMGYwZTEtOGFlYS00ODRhLTg3M2MtMzc1OGNhNzU3N2IzXkEyXkFqcGdeQXVyNDY4NjAxNTc@._V1_SX300.jpg",
    Trailer: "https://www.imdb.com/video/vi2336866329/?ref_=tt_vi_i_4",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "9.0/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "9.0",
    imdbVotes: "80k",
    imdbID: "tt9432978",
    Type: "series",
    totalSeasons: "2",
    Response: "True",
  },
  {
    Title: "Mirzapur",
    Year: "2018–",
    Rated: "TV-MA",
    Released: "15 Nov 2018",
    Episodes: "20",
    Genre: "Action, Crime, Drama",
    Director: "N/A",
    Writer: "Puneet Krishna, Karan Anshuman",
    Actors: "Pankaj Tripathi, Ali Fazal, Divyendu Sharma",
    Plot: "A shocking incident at a wedding procession ignites a series of events entangling the lives of two families in the lawless city of Mirzapur.",
    Language: "Hindi",
    Country: "India",
    Awards: "9 wins & 41 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2NlNGYwYTUtMTczMi00NGVjLTgwMzUtNjBkZjIyNDc2NjcxXkEyXkFqcGdeQXVyODQ5NDUwMDk@._V1_SX300.jpg",
    Trailer: "https://www.imdb.com/video/vi1825094681/?ref_=tt_vi_i_6",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.5/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "8.5",
    imdbVotes: "81k",
    imdbID: "tt6473300",
    Type: "series",
    totalSeasons: "3",
    Response: "True",
  },
  {
    Title: "Tale of the Nine Tailed",
    Year: "2020–",
    Rated: "TV Series",
    Released: "05 May 2023",
    Episodes: "28",
    Genre: "Fantasy, History, Horror",
    Director: "N/A",
    Writer: "N/A",
    Actors: "Lee Dong-wook, Kim Bum, Kim Yong-ji",
    Plot: "An urban dark fantasy drama about a gumiho who settles into the city and a producer who is after it.",
    Language: "Korean, Hindi",
    Country: "South Korea",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODNmY2ZmNTMtYWZiNS00NTc3LWI0NzMtMGRkMGMwMDM3NDRkXkEyXkFqcGdeQXVyNDU4MDQ0MjM@._V1_SX300.jpg",
    Trailer: "https://www.imdb.com/video/vi3253846297/?ref_=tt_vi_i_1",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.9/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "7.9",
    imdbVotes: "9k",
    imdbID: "tt12879418",
    Type: "series",
    totalSeasons: "2",
    Response: "True",
  },
  {
    Title: "Sacred Games",
    Year: "2018–2019",
    Rated: "TV-MA",
    Released: "06 Jul 2018",
    Episodes: "16",
    Genre: "Action, Crime, Drama",
    Director: "N/A",
    Writer: "Varun Grover",
    Actors: "Saif Ali Khan, Nawazuddin Siddiqui, Neeraj Kabi",
    Plot: "A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm.",
    Language: "Hindi",
    Country: "India, United States",
    Awards: "15 wins & 17 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjJlMjJlMzYtNmU5Yy00N2MwLWJmMjEtNWUwZWIyMGViZDgyXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg",
    Trailer: "https://youtu.be/AkUgf2jIPyI?si=njIgrrzzDJbW3GQe",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.5/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "8.5",
    imdbVotes: "92k",
    imdbID: "tt6077448",
    Type: "series",
    totalSeasons: "2",
    Response: "True",
  },

  {
    Title: "Mysterious Lotus Casebook",
    Year: "2023",
    Rated: "TV Series",
    Released: "23 Jul 2023",
    Episodes: "40",
    Genre: "Action, Drama, Mystery",
    Director: "N/A",
    Writer: "N/A",
    Actors: "Yi Cheng, Joseph Zeng, Aero Xiao",
    Plot: "A decade after a fierce battle, Li Xiang Yi wishes to live life as Li Lian Hua, an unassuming doctor. However, his plan is upended when he encounters Fang Duo Bing, a passionate detective, and an old enemy seeking to settle a score.",
    Language: "Mandarin",
    Country: "China",
    Awards: "16 wins & 2 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDM1N2Y1YjktMDUzMS00ZGM1LWI5ODQtZGQ4OTk1ZjY0NTI4XkEyXkFqcGdeQXVyMjI2ODE1NTA@._V1_SX300.jpg",
    Trailer: "https://youtu.be/o-vzAyXDmdE?si=dN15RqvID2PfW0nu",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.0/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "8.0",
    imdbVotes: "1k",
    imdbID: "tt28132016",
    Type: "series",
    totalSeasons: "N/A",
    Response: "True",
  },
];
