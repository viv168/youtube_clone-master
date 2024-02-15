import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


import Header from "./components/Header";
import Feed from "./components/Feed";
import LeftNav from "./components/LeftNav";
import LeftNavItem from "./components/LeftNavItem"
import SearchResult from "./components/SearchResult"
import SearchResultVC from "./components/SearchResultVC"
import SuggestionVs from "./components/SuggestionVC"
import VideoCard from "./components/VideoCard"
import VideoDetails from "./components/VideoDetails"
import { AppContext } from './context/contextApi';

const App = () => {                                                                 //exact takes us to the main route page: onload route
  return (
    <AppContext>
        <BrowserRouter>
          <div className="flex flex-col h-full">
            <Header/>
              <Routes>
                <Route path='/' exact element={<Feed />}/>                                   
                <Route path='/searchResult/:searchQuery' element={<SearchResult />}/>
                <Route path='/video/:id' element={<VideoDetails />}/>
              
              </Routes>
          </div>
      </BrowserRouter>
    </AppContext>
  );   
};

export default App;
