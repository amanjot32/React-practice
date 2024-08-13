// import React, { useEffect, useState } from 'react';
// import { getArticles, getFilteredArticles } from '../../core/services/newsServices';
// import { Article } from '../../core/models/article';
// import NewsTile from '../../core/components/news_tile';
// import { truncateText } from '../../core/utils/truncate';
// import PlaceholderImg from '../../assets/images/empty.jpg'

// const NewsList: React.FC = () => {
//   const [articles, setArticles] = useState<Article[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [category, setCategory] = useState<string>('');
//   const [page, setPage] = useState(1);
//   const [totalResults, setTotalResults] = useState(0);

//   const fetchTopHeadlines = async (page: number) => {
//     setLoading(true);
//     try {
//       const data = await getArticles(page);
//       setArticles(data.articles);
//       setTotalResults(data.totalResults);
//     } catch (error) {
//       console.error('Error fetching top headlines:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchArticles = async (category: string, page: number) => {
//     setLoading(true);
//     try {
//       const data = await getFilteredArticles(category, page);
//       setArticles(data.articles);
//       setTotalResults(data.totalResults);
//     } catch (error) {
//       console.error('Error fetching articles:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTopHeadlines(page);
//   }, [page]);

//   useEffect(() => {
//     if (category) {
//       fetchArticles(category, page);
//     } else {
//       fetchTopHeadlines(page);
//     }
//   }, [category, page]);

//   const handleNextPage = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   const handlePreviousPage = () => {
//     setPage((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   if (loading) {
//     return <div className="flex justify-center items-center h-screen text-purple font-bold">Loading...</div>;
//   }

//   return (
//     <>
//       <div className="flex justify-end mb-4">
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="p-2 border rounded border-purple dark:bg-purple dark:border-purple"
//         >
//           <option value="">All Categories</option>
//           <option value="business">Business</option>
//           <option value="technology">Technology</option>
//           <option value="sports">Sports</option>
//         </select>
//       </div>
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {articles.map((article, index) => (
//             <div key={index}>
//               <NewsTile
//                 title={article.title}
//                 desc={truncateText(article.description || '---', 17)}
//                 url={article.url}
//                 imgUrl={article.urlToImage || PlaceholderImg}
//                 authorName={article.author || '---'}
//                 date={article.publishedAt}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
      
//    <div className="flex justify-center mt-4 p-5">
//           <button
//             onClick={handlePreviousPage}
//             disabled={page === 1}
//             className="p-2 bg-purple text-white rounded disabled:opacity-50"
//           >
//             Previous
//           </button>
//           <div className='p-7'></div>
//           <button
//             onClick={handleNextPage}
//             disabled={page * 15 >= totalResults}
//             className="p-2 bg-purple text-white rounded disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//     </>
//   );
// };

// export default NewsList;


import React, { useEffect, useState } from 'react';
import { getArticles, getFilteredArticles } from '../../core/services/newsServices';
import { Article } from '../../core/models/article';
import NewsTile from '../../core/components/news_tile';
import { truncateText } from '../../core/utils/truncate';
import PlaceholderImg from '../../assets/images/empty.jpg';
import { Pagination, 
  PaginationContent, 
  PaginationEllipsis,
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious  } from "../../../@/components/ui/pagination";


const NewsList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<string>('');
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchTopHeadlines = async (page: number) => {
    setLoading(true);
    try {
      const data = await getArticles(page);
      setArticles(data.articles);
      setTotalResults(data.totalResults);
    } catch (error) {
      console.error('Error fetching top headlines:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchArticles = async (category: string, page: number) => {
    setLoading(true);
    try {
      const data = await getFilteredArticles(category, page);
      setArticles(data.articles);
      setTotalResults(data.totalResults);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (category) {
      fetchArticles(category, page);
    } else {
      fetchTopHeadlines(page);
    }
  }, [category, page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-purple font-bold">Loading...</div>;
  }

  const totalPages = Math.ceil(totalResults / 20);

  return (
    <>
      <div className="flex justify-end mb-4">
     <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded border-purple dark:bg-purple dark:border-purple"
        >
          <option value="">All Categories</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="sports">Sports</option>
        </select>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, index) => (
            <div key={index}>
              <NewsTile
                title={article.title}
                desc={truncateText(article.description || '---', 17)}
                url={article.url}
                imgUrl={article.urlToImage || PlaceholderImg}
                authorName={article.author || '---'}
                date={article.publishedAt}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={() => handlePageChange(Math.max(1, page - 1))}
                className={page === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink 
                  href="#" 
                  onClick={() => handlePageChange(index + 1)}
                  isActive={page === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext 
                href="#" 
                onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
                className={page === totalPages ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default NewsList;
