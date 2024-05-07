interface Rating {
  Source: string;
  Value: string;
}
export interface Movie {
  Title: string;
  Year: string;
  Genre: string;
  Released:string;
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
  Director:string;
  Writer:string;
  Country:string;
  Awards:string;
  Ratings:Rating[];
  Metascore: string;
  imdbID: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Response?:string;
  totalSeasons?:string;
}


export const Dmovies: Movie[] = [
  {
    "Title": "Sita Ramam",
    "Year": "2022",
    "Rated": "N/A",
    "Released": "05 Aug 2022",
    "Runtime": "163 min",
    "Genre": "Action, Drama, Mystery",
    "Director": "Hanu Raghavapudi",
    "Writer": "Hanu Raghavapudi, Jay Krishna, Raj Kumar Kandamudi",
    "Actors": "Dulquer Salmaan, Mrunal Thakur, Rashmika Mandanna",
    "Plot": "An orphan soldier, Lieutenant Ram's life changes, after he gets a letter from a girl named Sita. He meets her and love blossoms between them. When he comes back to his camp in Kashmir,After he gets caught in jail, he sends a lette...",
    "Language": "Telugu",
    "Country": "India",
    "Awards": "6 wins & 12 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2RjZDJhYzUtOTQ5Yy00OWM3LWE5OTctM2Y0YWVmNzAzODllXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "86%"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.6",
    "imdbVotes": "66,973",
    "imdbID": "tt20850406",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True",
  "Trailer":"https://www.imdb.com/video/vi3090072089/?ref_=tt_vi_i_1"
}, 
        {
            "Title": "Hanu Man",
            "Year": "2024",
            "Rated": "N/A",
            "Released": "12 Jan 2024",
            "Runtime": "158 min",
            "Genre": "Action, Adventure, Fantasy",
            "Director": "Prasanth Varma",
            "Writer": "Prasanth Varma",
            "Actors": "Teja Sajja, Amritha Aiyer, Varalaxmi Sarathkumar",
            "Plot": "An imaginary place called Anjanadri where the protagonist gets the powers of Hanuman and fights for Anjanadri.",
            "Language": "Hindi, Malayalam, Kannada, Tamil, English, Japanese, Chinese, Spanish, Korean, Telugu",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYWUwMGFmODMtYmFhNy00YTJlLWFiZDMtZDMwM2Q3NGZkNTgxXkEyXkFqcGdeQXVyMTU4Mzg1OTU2._V1_SX300.jpg",
            "Ratings": [
              {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
              }
            ],
            "Metascore": "N/A",
            "imdbRating": "8.4",
            "imdbVotes": "17,941",
            "imdbID": "tt15433956",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True",
            "Trailer":"https://www.imdb.com/video/vi202229529/?ref_=tt_vi_i_1"
          },
          {
            "Title": "Fighter",
            "Year": "2024",
            "Rated": "N/A",
            "Released": "25 Jan 2024",
            "Runtime": "166 min",
            "Genre": "Action, Adventure, Thriller",
            "Director": "Siddharth Anand",
            "Writer": "Siddharth Anand, Ramon Chibb, Abbas Dalal",
            "Actors": "Hrithik Roshan, Deepika Padukone, Anil Kapoor",
            "Plot": "Top IAF aviators come together in the face of imminent danger, to form Air Dragons. FIGHTER unfolds their camaraderie, brotherhood and battles, internal and external.",
            "Language": "Hindi, English",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZjkwN2Q5Y2QtMmE2MC00NzlkLTg2NzQtYjVjYjVmNjE2ZTNiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
            "Ratings": [
              {
                "Source": "Internet Movie Database",
                "Value": "7.0/10"
              }
            ],
            "Metascore": "N/A",
            "imdbRating": "7.0",
            "imdbVotes": "36,608",
            "imdbID": "tt13818368",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "$1,000,000",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True",
            "Trailer":"https://www.imdb.com/video/vi1886045977/?ref_=tt_vi_i_1"
          },
          {
            "Title": "The Gentlemen",
            "Year": "2019",
            "Rated": "R",
            "Released": "24 Jan 2020",
            "Runtime": "113 min",
            "Genre": "Action, Crime",
            "Director": "Guy Ritchie",
            "Writer": "Guy Ritchie, Ivan Atkinson, Marn Davies",
            "Actors": "Matthew McConaughey, Charlie Hunnam, Michelle Dockery",
            "Plot": "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
            "Language": "English, Russian, Spanish, Chinese",
            "Country": "United States, United Kingdom",
            "Awards": "1 win & 4 nominations",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg",
            "Ratings": [
              {
                "Source": "Internet Movie Database",
                "Value": "7.8/10"
              },
              {
                "Source": "Rotten Tomatoes",
                "Value": "75%"
              },
              {
                "Source": "Metacritic",
                "Value": "51/100"
              }
            ],
            "Metascore": "51",
            "imdbRating": "7.8",
            "imdbVotes": "386,738",
            "imdbID": "tt8367814",
            "Type": "movie",
            "DVD": "24 Mar 2020",
            "BoxOffice": "$36,471,795",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True",
            "Trailer":"https://www.imdb.com/video/vi4290364953/?ref_=tt_vi_i_2"
        },
        {
            "Title": "Hridayam",
            "Year": "2022",
            "Rated": "N/A",
            "Released": "21 Jan 2022",
            "Runtime": "172 min",
            "Genre": "Drama, Musical, Romance",
            "Director": "Vineeth Sreenivasan",
            "Writer": "Vineeth Sreenivasan",
            "Actors": "Pranav Mohanlal, Kalyani Priyadarshan, Darshana Rajendran",
            "Plot": "The emotional journey of Arun, his carefree bachelor days in engineering college, and how he matures through various phases of life.",
            "Language": "Malayalam",
            "Country": "India",
            "Awards": "2 wins",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZTgxY2MxZGItY2Q4Ny00NTRlLTg2MWEtYTY3Y2ZiMzAxMGU4XkEyXkFqcGdeQXVyNTA2MzMwMjA@._V1_SX300.jpg",
            "Ratings": [
              {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
              }
            ],
            "Metascore": "N/A",
            "imdbRating": "8.1",
            "imdbVotes": "15,075",
            "imdbID": "tt11375428",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True",
            "Trailer":"https://www.imdb.com/video/vi2788147993/?ref_=tt_vi_i_1"

        },
        {
          "Title": "O Kadhal Kanmani",
          "Year": "2015",
          "Rated": "Unrated",
          "Released": "17 Apr 2015",
          "Runtime": "139 min",
          "Genre": "Drama, Musical, Romance",
          "Director": "Mani Ratnam",
          "Writer": "Mani Ratnam",
          "Actors": "Dulquer Salmaan, Nithya Menen, Prakash Raj",
          "Plot": "Two young lovers are compatible in every way - they even agree that marriage is futile. However, their emotions are not so easily managed, especially when they witness the unconditional love of the older couple with whom they live.",
          "Language": "Tamil, Telugu, Malayalam",
          "Country": "India",
          "Awards": "3 wins & 13 nominations",
          "Poster": "https://m.media-amazon.com/images/M/MV5BYWY4NGM5N2MtODk2OC00Y2VjLWI0YWItMTc4MmIyMWY2OTJiXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_SX300.jpg",
          "Ratings": [
            {
              "Source": "Internet Movie Database",
              "Value": "7.4/10"
            }
          ],
          "Metascore": "N/A",
          "imdbRating": "7.4",
          "imdbVotes": "6,673",
          "imdbID": "tt4271820",
          "Type": "movie",
          "DVD": "30 Jan 2017",
          "BoxOffice": "N/A",
          "Production": "N/A",
          "Website": "N/A",
          "Response": "True",
          "Trailer":"https://www.imdb.com/video/vi814069785/?ref_=tt_vi_i_1"
        },
    
        {
          "Title": "Yuva",
          "Year": "2024",
          "Rated": "N/A",
          "Released": "29 Mar 2024",
          "Runtime": "N/A",
          "Genre": "Action, Romance",
          "Director": "Santhosh Ananddram",
          "Writer": "Santhosh Ananddram",
          "Actors": "Sapthami Gowda, Achyuth Kumar, Yuva Rajkumar",
          "Plot": "",
          "Language": "Kannada",
          "Country": "India",
          "Awards": "N/A",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNDdmMzhhOTUtZWNkYS00NmY3LWI3MTItN2FlMTYzMzFkZDE3XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_SX300.jpg",
          "Ratings": [],
          "Metascore": "N/A",
          "imdbRating": "6.9",
          "imdbVotes": "211",
          "imdbID": "tt24225188",
          "Type": "movie",
          "DVD": "N/A",
          "BoxOffice": "N/A",
          "Production": "N/A",
          "Website": "N/A",
          "Response": "True",
         "Trailer":"https://www.imdb.com/video/vi478201369/?ref_=tt_vi_i_1"  
        }, 
        {
          "Title": "Kaithi",
          "Year": "2019",
          "Rated": "Not Rated",
          "Released": "24 Oct 2019",
          "Runtime": "145 min",
          "Genre": "Action, Crime, Thriller",
          "Director": "Lokesh Kanagaraj",
          "Writer": "Lokesh Kanagaraj, Pon Parthiban, Sanjeev Tiwari",
          "Actors": "Karthi, Narain, Arjun Das",
          "Plot": "Dilli, an ex-convict, endeavours to meet his daughter for the first time after leaving prison. However, his attempts are interrupted due to a drug raid planned by Inspector Bejoy.",
          "Language": "Tamil",
          "Country": "India",
          "Awards": "15 wins & 8 nominations",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZTVlNGY2YTEtNTlmYy00NzY0LWE1NWUtOGJiNTgxZGM4ZmMzXkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_SX300.jpg",
          "Ratings": [
            {
              "Source": "Internet Movie Database",
              "Value": "8.4/10"
            },
            {
              "Source": "Rotten Tomatoes",
              "Value": "100%"
            }
          ],
          "Metascore": "N/A",
          "imdbRating": "8.4",
          "imdbVotes": "41,998",
          "imdbID": "tt9900782",
          "Type": "movie",
          "DVD": "10 Mar 2020",
          "BoxOffice": "N/A",
          "Production": "N/A",
          "Website": "N/A",
          "Response": "True",
          "Trailer": "https://www.imdb.com/video/vi1895350041/?ref_=tt_vi_i_1"
        },
    {
      "Title": "Shaitaan",
      "Year": "2024",
      "Rated": "N/A",
      "Released": "08 Mar 2024",
      "Runtime": "132 min",
      "Genre": "Horror, Thriller",
      "Director": "Vikas Bahl",
      "Writer": "Aamil Keeyan Khan, Krishnadev Yagnik",
      "Actors": "Janki Bodiwala, Ajay Devgn, Jyotika",
      "Plot": "A timeless tale of battle between good and evil with a family embodying the forces of righteousness while a man symbolizes malevolence.",
      "Language": "Hindi",
      "Country": "India",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYjczYjQ3ZTMtMDAwZi00Y2I2LWE2MTMtOGUyM2YyMThmYTFiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.5/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "7.5",
      "imdbVotes": "24,095",
      "imdbID": "tt27744786",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True",
        "Trailer":"https://www.imdb.com/video/vi2864367129/?ref_=tt_vi_i_1"
    },
    {
      "Title": "The Jengaburu Curse",
      "Year": "2023–",
      "Rated": "N/A",
      "Released": "09 Aug 2023",
      "Runtime": "N/A",
      "Genre": "Crime, Mystery, Thriller",
      "Director": "N/A",
      "Writer": "N/A",
      "Actors": "Sukumar Tudu, Nassar, Vikram Pratap",
      "Plot": "A London-based analyst returns to Odisha in search of her missing father. Her quest leads to a conspiracy involving bauxite mining, secretly backed by an international nexus, leading to unexplained deaths and a displaced community.",
      "Language": "Hindi",
      "Country": "India",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDU0Y2NlMDQtZjkyYS00NjM2LTlhYzYtZGEwOTJhNDgyMWUyXkEyXkFqcGdeQXVyOTIxMzQ0NzU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.4/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "8.4",
      "imdbVotes": "17,005",
      "imdbID": "tt27327718",
      "Type": "series",
      "totalSeasons": "",
      "Response": "True",
      "Trailer":"https://www.imdb.com/video/vi3984639769/?ref_=tt_vi_i_1"
    },
    {
      "Title": "Jai Bhim",
      "Year": "2021",
      "Rated": "TV-MA",
      "Released": "02 Nov 2021",
      "Runtime": "164 min",
      "Genre": "Crime, Drama, Mystery",
      "Director": "T.J. Gnanavel",
      "Writer": "T.J. Gnanavel, Rajendra Sapre",
      "Actors": "Suriya, Lijo Mol Jose, Manikandan K.",
      "Plot": "When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice.",
      "Language": "Tamil",
      "Country": "India, United States",
      "Awards": "10 wins & 20 nominations",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzFkM2FhMzQtYjUwZi00N2Y3LWFkZWItMmZmMjQxNGQwZmNhXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.7/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "100%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "8.7",
      "imdbVotes": "215,114",
      "imdbID": "tt15097216",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True",
      "Trailer":"https://www.imdb.com/video/vi713802521/?ref_=tt_vi_i_1"
    },
    {
      "Title": "Yodha",
      "Year": "2024",
      "Rated": "N/A",
      "Released": "15 Mar 2024",
      "Runtime": "130 min",
      "Genre": "Action, Drama, Thriller",
      "Director": "Sagar Ambre, Pushkar Ojha",
      "Writer": "Sagar Ambre",
      "Actors": "Sidharth Malhotra, Raashi Khanna, Disha Patani",
      "Plot": "After terrorists hijack a passenger plane, an off-duty soldier aboard devises a strategy to defeat the hijackers and ensure the passengers' survival when the engine fails.",
      "Language": "Hindi",
      "Country": "India",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDdlODdmODItZDAxNi00MjExLWFjOGItMGY3MzFjYzU4NDM3XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.6/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "6.6",
      "imdbVotes": "3,005",
      "imdbID": "tt16139258",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True",
        "Trailer":"https://www.imdb.com/video/vi128173593/?ref_=tt_vi_i_1"
    }

    ]
    
    
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
    
    export const Cinemas:Cine[] = [
      {
        "Title": "The Gentlemen",
        "Year": "2019",
        "Rated": "R",
        "Released": "24 Jan 2020",
        "Runtime": "113 min",
        "Genre": "Action, Crime",
        "Director": "Guy Ritchie",
        "Writer": "Guy Ritchie, Ivan Atkinson, Marn Davies",
        "Actors": "Matthew McConaughey, Charlie Hunnam, Michelle Dockery",
        "Plot": "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
        "Language": "English, Russian, Spanish, Chinese",
        "Country": "United States, United Kingdom",
        "Awards": "1 win & 4 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg",
        "Ratings": [
          {
            "Source": "Internet Movie Database",
            "Value": "7.8/10"
          },
          {
            "Source": "Rotten Tomatoes",
            "Value": "75%"
          },
          {
            "Source": "Metacritic",
            "Value": "51/100"
          }
        ],
        "Metascore": "51",
        "imdbRating": "7.8",
        "imdbVotes": "386k",
        "imdbID": "tt8367814",
        "Type": "movie",
        "DVD": "24 Mar 2020",
        "BoxOffice": "$36,471,795",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True",
        "Trailer":"https://www.imdb.com/video/vi4290364953/?ref_=tt_vi_i_2"
    },{
      "Title": "Oppenheimer",
      "Year": "2023",
      "Rated": "R",
      "Released": "21 Jul 2023",
      "Runtime": "180 min",
      "Genre": "Biography, Drama, History",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan, Kai Bird, Martin Sherwin",
      "Actors": "Cillian Murphy, Emily Blunt, Matt Damon",
      "Plot": "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
      "Language": "English, German, Italian",
      "Country": "United States, United Kingdom",
      "Awards": "Nominated for 13 Oscars. 326 wins & 362 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.4/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "93%"
        },
        {
          "Source": "Metacritic",
          "Value": "88/100"
        }
      ],
      "Metascore": "88",
      "imdbRating": "8.4",
      "imdbVotes": "665k",
      "imdbID": "tt15398776",
      "Type": "movie",
      "DVD": "21 Nov 2023",
      "BoxOffice": "$329,153,395",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True",
      "Trailer":"https://www.imdb.com/video/vi2053751833/?ref_=tt_vi_i_1"
  }, {
    "Title": "Anatomy of a Fall",
    "Year": "2023",
    "Rated": "R",
    "Released": "22 Mar 2024",
    "Runtime": "151 min",
    "Genre": "Crime, Drama, Thriller",
    "Director": "Justine Triet",
    "Writer": "Justine Triet, Arthur Harari",
    "Actors": "Sandra Hüller, Swann Arlaud, Milo Machado-Graner",
    "Plot": "A woman is suspected of murder after her husband's death; their half-blind son faces a moral dilemma as the main witness.",
    "Language": "French, English, German",
    "Country": "France",
    "Awards": "Nominated for 5 Oscars. 90 wins & 189 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDBiYmRkNjUtYzc4My00NGFiLWE2NWUtMGU1ZDA1NTQ3ZjQwXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "96%"
      },
      {
        "Source": "Metacritic",
        "Value": "89/100"
      }
    ],
    "Metascore": "89",
    "imdbRating": "7.8",
    "imdbVotes": "79k",
    "imdbID": "tt17009710",
    "Type": "movie",
    "DVD": "22 Dec 2023",
    "BoxOffice": "$4,882,769",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True",
    "Trailer":"https://www.imdb.com/video/vi3689989913/?ref_=tt_vi_i_1"
},{
          "Title": "Road House",
          "Year": "2024",
          "Rated": "R",
          "Released": "21 Mar 2024",
          "Runtime": "114 min",
          "Genre": "Action, Thriller",
          "Director": "Doug Liman",
          "Writer": "Anthony Bagarozzi, Chuck Mondry, R. Lance Hill",
          "Actors": "Jake Gyllenhaal, Conor McGregor, Daniela Melchior",
          "Plot": "Ex-UFC fighter Dalton (Jake Gyllenhaal) takes a job as a bouncer at a Florida Keys roadhouse, only to discover that this paradise is not all it seems.",
          "Language": "English",
          "Country": "United States",
          "Awards": "N/A",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNTFiNTMxNTQtM2EzOS00NWNhLWFmNzctNjU5ODIzNDIzMzYzXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
          "Ratings": [],
          "Metascore": "N/A",
          "imdbRating": "6.2",
          "imdbVotes": "69.5k",
          "imdbID": "tt3359350",
          "Type": "movie",
          "DVD": "N/A",
          "BoxOffice": "N/A",
          "Production": "N/A",
          "Website": "N/A",
          "Response": "True",
          "Trailer":"https://www.imdb.com/video/vi1146603289/?ref_=tt_vi_i_1"
      },
      {
          "Title": "Bramayugam",
          "Year": "2024",
          "Rated": "N/A",
          "Released": "15 Feb 2024",
          "Runtime": "139 min",
          "Genre": "Horror, Thriller",
          "Director": "Rahul Sadasivan",
          "Writer": "T. d Ramakrishnan, Rahul Sadasivan",
          "Actors": "Mammootty, Arjun Ashokan, Sidharth Bharathan",
          "Plot": "Thevan, a folk singer of the Paanan caste, has a fateful encounter when escaping slavery, leading to discover an ancient tradition altering his destiny.",
          "Language": "Malayalam, Kannada, Hindi, Tamil, Telugu",
          "Country": "India",
          "Awards": "N/A",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNWExZDRhZTktMGUxOS00ODQyLTk0ZTMtY2VkYWJkZjZlZDUyXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_SX300.jpg",
          "Ratings": [
            {
              "Source": "Internet Movie Database",
              "Value": "8.6/10"
            }
          ],
          "Metascore": "N/A",
          "imdbRating": "8.6",
          "imdbVotes": "1k",
          "imdbID": "tt27431598",
          "Type": "movie",
          "DVD": "N/A",
          "BoxOffice": "N/A",
          "Production": "N/A",
          "Website": "N/A",
          "Response": "True",
          "Trailer":"https://www.imdb.com/video/vi692897561/?ref_=tt_vi_i_1"
      },
     
      {
          "Title": "Romancham",
          "Year": "2023",
          "Rated": "N/A",
          "Released": "03 Feb 2023",
          "Runtime": "130 min",
          "Genre": "Comedy, Horror",
          "Director": "Jithu Madhavan",
          "Writer": "Jithu Madhavan",
          "Actors": "Soubin Shahir, Arjun Ashokan, Chemban Vinod Jose",
          "Plot": "A game of Ouija board goes hilariously wrong when seven bachelors unexpectedly invite a spirit and try to make the best out of the situation.",
          "Language": "Malayalam",
          "Country": "India",
          "Awards": "N/A",
          "Poster": "https://m.media-amazon.com/images/M/MV5BOWRkNDBiMTAtMmJmZi00MzlmLWJjMzUtNDg2YmUzMzRlZmVlXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg",
          "Ratings": [
            {
              "Source": "Internet Movie Database",
              "Value": "7.5/10"
            }
          ],
          "Metascore": "N/A",
          "imdbRating": "7.5",
          "imdbVotes": "6.5k",
          "imdbID": "tt20249418",
          "Type": "movie",
          "DVD": "N/A",
          "BoxOffice": "N/A",
          "Production": "N/A",
          "Website": "N/A",
          "Response": "True",
          "Trailer":"https://www.imdb.com/video/vi1679082521/?ref_=tt_vi_i_1"
      },
     
      
  ]
  
  
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
  
  export const Series:Tvseries[] =
    [
      {
        "Title": "Alchemy of Souls",
        "Year": "2022–",
        "Rated": "TV-14",
        "Released": "18 Jun 2022",
        "Episodes": "30",
        "Genre": "Action, Drama, Fantasy",
        "Director": "N/A",
        "Writer": "N/A",
        "Actors": "Lee Jae-wook, Hwang Min-hyun, Yoo Joon-sang",
        "Plot": "Set in a fictional country called Daeho, it is about the love and growth of young mages as they overcome their twisted fates due to a forbidden magic spell known as the \"alchemy of souls\", which allows souls to switch bodies.",
        "Language": "Korean",
        "Country": "South Korea",
        "Awards": "N/A",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmJhZGFhMmItM2RmMC00NWIxLWE5ZjMtMmIwZmJkNTdjZTg4XkEyXkFqcGdeQXVyOTI5NDk4NDQ@._V1_SX300.jpg",
        "Trailer":"https://www.imdb.com/video/vi3889349145/?ref_=tt_vi_i_4",
        "Ratings": [
          {
            "Source": "Internet Movie Database",
            "Value": "8.8/10"
          }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.8",
        "imdbVotes": "17k",
        "imdbID": "tt20859920",
        "Type": "series",
        "totalSeasons": "2",
        "Response": "True"
      },
      {
        "Title": "Kota Factory",
        "Year": "2019–2021",
        "Rated": "TV-14",
        "Released": "28 Aug 2021",
        "Episodes": "11",
        "Genre": "Comedy, Drama",
        "Director": "N/A",
        "Writer": "Saurabh Khanna",
        "Actors": "Mayur More, Jitendra Kumar, Ranjan Raj",
        "Plot": "Dedicated to Shrimati SL Loney ji, Shri Irodov ji and Maanniya HC Verma ji, 'Kota Factory' is TVF's latest original. India's first 'Black and White' show highlights the problems present day IIT-JEE aspirants face in their day-to-d...",
        "Language": "Hindi",
        "Country": "India",
        "Awards": "9 wins & 15 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOGVmMGYwZTEtOGFlYS00ODRhLTg3M2MtMzc1OGNhNzU3N2IzXkEyXkFqcGdeQXVyNDY4NjAxNTc@._V1_SX300.jpg",
        "Trailer":"https://www.imdb.com/video/vi2336866329/?ref_=tt_vi_i_4",
        "Ratings": [
          {
            "Source": "Internet Movie Database",
            "Value": "9.0/10"
          }
        ],
        "Metascore": "N/A",
        "imdbRating": "9.0",
        "imdbVotes": "80k",
        "imdbID": "tt9432978",
        "Type": "series",
        "totalSeasons": "2",
        "Response": "True"
      },{
            "Title": "Mirzapur",
            "Year": "2018–",
            "Rated": "TV-MA",
            "Released": "15 Nov 2018",
            "Episodes": "20",
            "Genre": "Action, Crime, Drama",
            "Director": "N/A",
            "Writer": "Puneet Krishna, Karan Anshuman",
            "Actors": "Pankaj Tripathi, Ali Fazal, Divyendu Sharma",
            "Plot": "A shocking incident at a wedding procession ignites a series of events entangling the lives of two families in the lawless city of Mirzapur.",
            "Language": "Hindi",
            "Country": "India",
            "Awards": "9 wins & 41 nominations",
            "Poster": "https://m.media-amazon.com/images/M/MV5BN2NlNGYwYTUtMTczMi00NGVjLTgwMzUtNjBkZjIyNDc2NjcxXkEyXkFqcGdeQXVyODQ5NDUwMDk@._V1_SX300.jpg",
            "Trailer":"https://www.imdb.com/video/vi1825094681/?ref_=tt_vi_i_6",
            "Ratings": [
              {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
              }
            ],
            "Metascore": "N/A",
            "imdbRating": "8.5",
            "imdbVotes": "81k",
            "imdbID": "tt6473300",
            "Type": "series",
            "totalSeasons": "3",
            "Response": "True"
          },
          {
            "Title": "Tale of the Nine Tailed",
            "Year": "2020–",
            "Rated": "TV Series",
            "Released": "05 May 2023",
            "Episodes": "28",
            "Genre": "Fantasy, History, Horror",
            "Director": "N/A",
            "Writer": "N/A",
            "Actors": "Lee Dong-wook, Kim Bum, Kim Yong-ji",
            "Plot": "An urban dark fantasy drama about a gumiho who settles into the city and a producer who is after it.",
            "Language": "Korean, Hindi",
            "Country": "South Korea",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BODNmY2ZmNTMtYWZiNS00NTc3LWI0NzMtMGRkMGMwMDM3NDRkXkEyXkFqcGdeQXVyNDU4MDQ0MjM@._V1_SX300.jpg",
            "Trailer":"https://www.imdb.com/video/vi3253846297/?ref_=tt_vi_i_1",
            "Ratings": [
              {
                "Source": "Internet Movie Database",
                "Value": "7.9/10"
              }
            ],
            "Metascore": "N/A",
            "imdbRating": "7.9",
            "imdbVotes": "9k",
            "imdbID": "tt12879418",
            "Type": "series",
            "totalSeasons": "2",
            "Response": "True"
          },
          {
            "Title": "Sacred Games",
            "Year": "2018–2019",
            "Rated": "TV-MA",
            "Released": "06 Jul 2018",
            "Episodes": "16",
            "Genre": "Action, Crime, Drama",
            "Director": "N/A",
            "Writer": "Varun Grover",
            "Actors": "Saif Ali Khan, Nawazuddin Siddiqui, Neeraj Kabi",
            "Plot": "A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm.",
            "Language": "Hindi",
            "Country": "India, United States",
            "Awards": "15 wins & 17 nominations",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjJlMjJlMzYtNmU5Yy00N2MwLWJmMjEtNWUwZWIyMGViZDgyXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg",
            "Trailer":"https://youtu.be/AkUgf2jIPyI?si=njIgrrzzDJbW3GQe",
            "Ratings": [
              {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
              }
            ],
            "Metascore": "N/A",
            "imdbRating": "8.5",
            "imdbVotes": "92k",
            "imdbID": "tt6077448",
            "Type": "series",
            "totalSeasons": "2",
            "Response": "True"
          },
          
          {
            "Title": "Mysterious Lotus Casebook",
            "Year": "2023",
            "Rated": "TV Series",
            "Released": "23 Jul 2023",
            "Episodes": "40",
            "Genre": "Action, Drama, Mystery",
            "Director": "N/A",
            "Writer": "N/A",
            "Actors": "Yi Cheng, Joseph Zeng, Aero Xiao",
            "Plot": "A decade after a fierce battle, Li Xiang Yi wishes to live life as Li Lian Hua, an unassuming doctor. However, his plan is upended when he encounters Fang Duo Bing, a passionate detective, and an old enemy seeking to settle a score.",
            "Language": "Mandarin",
            "Country": "China",
            "Awards": "16 wins & 2 nominations",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDM1N2Y1YjktMDUzMS00ZGM1LWI5ODQtZGQ4OTk1ZjY0NTI4XkEyXkFqcGdeQXVyMjI2ODE1NTA@._V1_SX300.jpg",
            "Trailer":"https://youtu.be/o-vzAyXDmdE?si=dN15RqvID2PfW0nu",
            "Ratings": [
              {
                "Source": "Internet Movie Database",
                "Value": "8.0/10"
              }
            ],
            "Metascore": "N/A",
            "imdbRating": "8.0",
            "imdbVotes": "1k",
            "imdbID": "tt28132016",
            "Type": "series",
            "totalSeasons": "N/A",
            "Response": "True"
          }
    ]
